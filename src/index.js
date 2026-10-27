import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

import * as CodeMirror from 'codemirror';


import { Popover } from 'bootstrap';
import { saveAs } from 'file-saver';

import './style.css';





function insert(arr, index, el) {
  return [...arr.slice(0,index), el, ...arr.slice(index)];
}
function remove(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(1 + index)];
}

function parseContents(serialized) {
  const contents = JSON.parse(serialized);
  if (!Array.isArray(contents) || contents.length === 0 || contents[0] !== null) {
    throw new Error('Invalid notebook: expected an array beginning with null.');
  }
  return [null, ...contents.slice(1).map(cell => {
    if (!cell || typeof cell.code_content !== 'string' || typeof cell.output_content !== 'string' ||
        !['normal', 'error', 'clear', 'calc', 'queued', 'stop'].includes(cell.state) ||
        !(cell.tag === ' ' || (Number.isSafeInteger(cell.tag) && cell.tag >= 0))) {
      throw new Error('Invalid notebook cell.');
    }
    return {
      code_content: cell.code_content,
      output_content: cell.output_content,
      tag: cell.tag,
      state: ['calc', 'queued'].includes(cell.state) ? 'clear' : cell.state
    };
  })];
}

let activeNotebook;
let nextNotebookId = 0;



// worker and endpoints


const workerCode = `

const self_ = self;

var verbose = {
  innerHTMLInternal: "",
  innerHTMLListener: function(val) {
    self.postMessage({
      type: 'update',
      msg: {
        verbose_string: this.innerHTML
      }
    });
  },
  set innerHTML(val) {
    this.innerHTMLInternal = val;
    this.innerHTMLListener(val);
  },
  get innerHTML() {
    return this.innerHTMLInternal;
  }
};

function print() {
  let args = [...arguments];
  verbose.innerHTML += args.map(x => {
    if (typeof x === 'string') return x;
    try { return JSON.stringify(x) ?? String(x); }
    catch { return String(x); }
  }).join(' ') + '\\n';
}


self.onmessage = function (msg) {

  try {

    verbose.innerHTML = '';

    eval(msg.data.code);
    
    self_.postMessage({
      type: 'complete'
    });

  } catch (e) {
    self_.postMessage({
      type: 'error',
      msg: {
        error: e && e.stack ? e.stack : String(e)
      }
    });
  }
}
`




const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerBlobURL = URL.createObjectURL(blob);


class Computer {
  constructor() {
    this.worker = new Worker(workerBlobURL);
    this.timer = null;
  }

  start(data) {
    const w = this.worker;
    clearTimeout(this.timer);
    const finish = () => {
      clearTimeout(this.timer);
      this.timer = null;
      w.onmessage = null;
      w.onerror = null;
      w.onmessageerror = null;
    };
    w.onmessage = response => {
      if (this.worker !== w) return;
      const {type, msg} = response.data;
      if (type === 'complete' || type === 'error') finish();
      const handler = data['on' + type];
      if (typeof handler === 'function') handler(msg);
    };
    const fail = event => {
      if (this.worker !== w) return;
      if (event.preventDefault) event.preventDefault();
      finish();
      this.stop();
      if (data.onerror) data.onerror({error: event.message || 'Worker execution failed.'});
    };
    w.onerror = fail;
    w.onmessageerror = fail;
    if (data.timeout > 0) {
      this.timer = setTimeout(() => {
        finish();
        this.stop();
        const handler = data.ontimeout || data.onerror;
        if (handler) handler({error: 'Calculation timed out after ' + data.timeout + 'ms.'});
      }, data.timeout);
    }
    try { w.postMessage({code: data.code}); }
    catch (error) { fail(error); }
  }

  stop() {
    clearTimeout(this.timer);
    this.timer = null;
    this.worker.onmessage = null;
    this.worker.onerror = null;
    this.worker.onmessageerror = null;
    this.worker.terminate();
    this.worker = new Worker(workerBlobURL);
  }

}




class JSNotebook {
  constructor(container) {
    this.container = container;
    activeNotebook = this;
    const activate = () => { activeNotebook = this; };
    container.addEventListener('pointerdown', activate);
    container.addEventListener('focusin', activate);
    this.build_html();
    
    this.runBtn;
    this.stopBtn;
    this.open_modal;

    this.contents = [null];
    this.DOM_elements = [null];
    this.codeMirrors = [null];
    this.selected_cell;
    this.execution_num = 0;
    this.verbose;
    this.cell_list;
    
    this.calculation_queue = [];
    this.calculating = false;
    this.curr = null;
    this.computer = new Computer();
    this.execution_num = 0;

    this.insert_blank_cell(0);
    this.select_cell(1);
    
    const t = this;
    
    setInterval(function() {t.save()}, 10000);

    try {
      const saved = localStorage.getItem(window.location.href + '--contents');
      if (saved) {
        this.contents = parseContents(saved);
        this.build_from_contents();
      }
    } catch (error) { console.warn('Unable to restore notebook.', error); }

    this.file;



    this.cursor_line;

    container.addEventListener('click', function() {
      const isInEditor = document.activeElement.closest('.CodeMirror');

        if (isInEditor) {

          const cm = isInEditor.CodeMirror;
          const cursor = cm.getCursor();
          t.cursor_line = cursor.line;

        }
    });



    document.addEventListener('keydown', (function () {
      let lastKey = null;
      let lastTime = 0;
      const DOUBLE_PRESS_INTERVAL = 400;

      return function (e) {
        if (activeNotebook !== t || e.defaultPrevented) return;

        const focused = document.activeElement;
        const isInEditor = t.container.contains(focused) && focused.closest('.CodeMirror');
        if (!isInEditor && focused !== document.body &&
            (!t.container.contains(focused) || focused.matches('input, textarea, select, [contenteditable]'))) return;
        const key = e.code;
        const now = Date.now();

        // Shift+Enter always runs the selected cell
        if (key === "Enter" && e.shiftKey && t.selected_cell) {
          e.preventDefault();
          t.offer_selected();
          return false;
        }

        // Ctrl+S or Cmd+S
        if (key === "KeyS" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          t.save();
          return false;
        }
        if (e.metaKey || e.ctrlKey || e.altKey) return;

        // Enter → focus CodeMirror in selected cell
        if (key === "Enter" && !e.shiftKey && t.selected_cell && !isInEditor) {
          e.preventDefault();
          t.codeMirrors[t.selected_cell].focus();
          return false;
        }

        // Escape → deselect current cell and blur CodeMirror
        if (key === "Escape" && t.selected_cell) {
          e.preventDefault();
          // t.DOM_elements[t.selected_cell].cell.classList.remove("selected");
          t.codeMirrors[t.selected_cell].getInputField().blur(); // <- this removes cursor from CodeMirror
          // t.selected_cell = null;
          return false;
        }

        // Inside CodeMirror editor
        if (isInEditor) {
          const cm = document.activeElement.closest('.CodeMirror').CodeMirror;
          const cursor = cm.getCursor();
          const lineCount = cm.lineCount();

          // console.log("Cursor at:", cursor);


          // Move up to previous cell only if you're at the first line
          if (key === "ArrowUp" && cursor.line == 0 && t.selected_cell > 1 && t.cursor_line == 0) {
            e.preventDefault();
            t.DOM_elements[t.selected_cell - 1].cell.click();
            t.codeMirrors[t.selected_cell].focus();
            t.codeMirrors[t.selected_cell].setCursor(t.codeMirrors[t.selected_cell].lineCount(), 0);
            t.cursor_line = t.codeMirrors[t.selected_cell].lineCount() - 1;
            return false;
          }

          // Move down to next cell only if you're at the last line
          if (key === "ArrowDown" && cursor.line == lineCount - 1 && t.selected_cell < t.get_num_cells() && (t.cursor_line == lineCount - 1)) {
            e.preventDefault();
            t.DOM_elements[t.selected_cell + 1].cell.click();
            t.codeMirrors[t.selected_cell].focus();
            t.codeMirrors[t.selected_cell].setCursor(0, 0);
            t.cursor_line = 0;
            return false;
          }

          t.cursor_line = cursor.line;

          return; // let CodeMirror handle all other input
        }

        // Outside editor — handle double-press shortcuts for A, B, D
        const isDoublePress = key === lastKey && (now - lastTime < DOUBLE_PRESS_INTERVAL);
        lastKey = key;
        lastTime = now;

        if (key === "KeyA" && isDoublePress) {
          e.preventDefault();
          t.insert_blank_above_selected();
          lastKey = null;
          return false;
        }

        if (key === "KeyB" && isDoublePress) {
          e.preventDefault();
          t.insert_blank_below_selected();
          lastKey = null;
          return false;
        }

        if (key === "KeyD" && isDoublePress) {
          e.preventDefault();
          t.delete_selected();
          lastKey = null;
          return false;
        }
      };
    })());

        


  }

  offer(id) {
    id = Number(id);
    const cell = this.contents[id];
    if (!cell || !this.codeMirrors[id]) return false;
    if (this.codeMirrors[id].getValue().trim() == '') {
      return false;
    }
    if (this.curr === cell) this.stop();
    this.calculation_queue = this.calculation_queue.filter(entry => entry.cell !== cell);
    this.calculation_queue.push({
      cell,
      str:this.codeMirrors[id].getValue()
    });
    this.contents[id].state = 'queued';
    this.contents[id].output_content = '';
    this.write_cell_output(id);
    if (id == this.contents.length - 1) { // if last cell
     this.insert_blank_cell(id + 1);
    }
    this.DOM_elements[id + 1].cell.click();
    this.codeMirrors[id + 1].focus();
    this.cursor_line = 0;
    if (!this.calculating) {
      this.next();
    }
  }

  next() {
    if (this.calculation_queue.length == 0) {
      this.calc_state(false);
      this.curr = null;
      return false;
    }
    const execute_info = this.calculation_queue.shift();
    const cell = execute_info.cell;
    const id = this.contents.indexOf(cell);
    if (id < 1) return this.next();
    this.calc_state(true);
    this.curr = cell;
    if (this.contents[id]) {
      this.execution_num++;
      this.contents[id].tag = this.execution_num;
      this.contents[id].state = 'calc';
      this.contents[id].output_content = "";
      this.write_cell_output(id);
      const t = this;
      const currentId = () => t.curr === cell && t.calculating ? t.contents.indexOf(cell) : -1;
      this.computer.start({
        code: execute_info.str,
        oncomplete: function(msg) {
          const id = currentId();
          if (id < 1) return;
          t.contents[id].state = 'normal';
          t.write_cell_output(id);
          t.next();
          t.save();
        },
        onupdate: function(msg) {
          const id = currentId();
          if (id < 1) return;
          t.contents[id].state = 'calc';
          t.contents[id].output_content = msg.verbose_string;
          t.write_cell_output(id);
          t.save();
        },
        onerror: function (msg) {
          const id = currentId();
          if (id < 1) return;
          t.contents[id].state = 'error';
          t.contents[id].output_content += String(msg.error?.stack ?? msg.error);
          t.write_cell_output(id);
          t.error();
          t.save();
        }
      });
    }
  }
  
  stop() {
    if (this.calculating) {
      this.computer.stop();
      const id = this.contents.indexOf(this.curr);
      if (id > 0) {
        this.contents[id].state = 'stop';
        this.write_cell_output(id);
      }
    }
    this.calc_state(false);
    this.curr = null;
    this.empty();
  }
  
  error() {
    this.calc_state(false);
    this.curr = null;
    this.empty();
  }

  empty() {
    for (let execute_info of this.calculation_queue) {
      const id = this.contents.indexOf(execute_info.cell);
      if (id > 0) {
        this.contents[id].state = 'clear';
        this.write_cell_output(id);
      }
    }
    this.calculation_queue = [];
  }

  restart_computer() {
    const wasCalculating = this.calculating;
    this.stop();
    if (!wasCalculating) this.computer.stop();
    for (let id = 1; id <= this.get_num_cells(); id++) {
      this.contents[id].tag = " ";
      this.contents[id].output_content = "";
      this.contents[id].state = 'clear';
    }
    this.build_from_contents()
  }




  build_html() {
    const t = this;
    const modalId = 'jsnotebook-open-' + nextNotebookId++;
    this.container.className = 'container-fluid jsnotebook-container';

    const row = document.createElement('div');
    row.className = 'row';
    row.style.marginBottom = '5px';
    row.style.backgroundColor = 'lightgrey';
    row.style.padding = '10px';
    this.container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-sm-12';
    row.appendChild(col);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'tool-btn-group';
    col.appendChild(btnGroup);

    // // Insert above button
    // const insertAboveBtn = document.createElement('button');
    // insertAboveBtn.className = 'btn btn-default';
    // insertAboveBtn.title = 'A,A';
    // insertAboveBtn.onclick = function() {t.insert_blank_above_selected();};
    // insertAboveBtn.setAttribute('data-container', 'body');
    // insertAboveBtn.setAttribute('data-toggle', 'tooltip');
    // insertAboveBtn.setAttribute('data-placement', 'top');
    // insertAboveBtn.innerHTML = `
    //   <i class="bi bi-chevron-up" style="display:block; margin:-4px 0;"></i>
    //   <i class="bi bi-plus" style="display:block; margin:0;"></i>`;
    // btnGroup.appendChild(insertAboveBtn);

    // Insert below button
    const insertBelowBtn = document.createElement('button');
    insertBelowBtn.className = 'btn';
    insertBelowBtn.title = 'B,B';
    insertBelowBtn.onclick = function() {t.insert_blank_below_selected();};
    insertBelowBtn.setAttribute('data-container', 'body');
    insertBelowBtn.setAttribute('data-toggle', 'tooltip');
    insertBelowBtn.setAttribute('data-placement', 'top');
    insertBelowBtn.innerHTML = `
      <i class="bi bi-plus" style="display:block; margin:0;"></i>`;
    btnGroup.appendChild(insertBelowBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.className = 'btn';
    deleteBtn.title = 'D,D';
    deleteBtn.onclick = function() {t.delete_selected();};
    deleteBtn.setAttribute('data-toggle', 'tooltip');
    deleteBtn.setAttribute('data-placement', 'top');
    deleteBtn.innerHTML = `<i class="bi bi-dash"></i>`;
    btnGroup.appendChild(deleteBtn);

    this.runBtn = document.createElement('button');
    this.runBtn.id = 'run';
    this.runBtn.className = 'btn';
    this.runBtn.title = 'shift+return';
    this.runBtn.setAttribute('data-toggle', 'tooltip');
    this.runBtn.setAttribute('data-placement', 'top');
    this.runBtn.onclick = function() {t.offer_selected()};
    this.runBtn.innerHTML = `<i class="bi bi-play"></i>`;
    btnGroup.appendChild(this.runBtn);

    this.stopBtn = document.createElement('button');
    this.stopBtn.id = 'stop';
    this.stopBtn.className = 'btn';
    this.stopBtn.onclick = function () {t.stop();};
    this.stopBtn.innerHTML = `<i class="bi bi-stop"></i>`;
    btnGroup.appendChild(this.stopBtn);

    let restartBtn = document.createElement('button');
    restartBtn.className = 'btn';
    restartBtn.onclick = function () {t.restart_computer()};
    restartBtn.innerHTML = `<i class="bi bi-arrow-clockwise"></i>`;
    btnGroup.appendChild(restartBtn);

    const openBtn = document.createElement('button');
    openBtn.className = 'btn';
    openBtn.setAttribute('data-bs-toggle', 'modal');
    openBtn.setAttribute('data-bs-target', '#' + modalId);
    // openBtn.onclick = function() {
    //   new bootstrap.Modal(t.open_modal).show();
    // }
    openBtn.innerHTML = `<i class="bi bi-folder2-open"></i>`;
    btnGroup.appendChild(openBtn);

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn';
    downloadBtn.onclick = function() { t.download() };
    downloadBtn.innerHTML = `<i class="bi bi-cloud-download"></i>`;
    btnGroup.appendChild(downloadBtn);

    // const saveBtn = document.createElement('button');
    // saveBtn.className = 'btn';
    // saveBtn.title = 'ctrl + s';
    // saveBtn.onclick = function() {this.save()};
    // saveBtn.setAttribute('data-toggle', 'tooltip');
    // saveBtn.setAttribute('data-placement', 'top');
    // saveBtn.innerHTML = `<i class="bi bi-save"></i>`;
    // btnGroup.appendChild(saveBtn);


    const infoBtn = document.createElement('button');
    infoBtn.className = 'btn float-end';
    infoBtn.innerHTML = `<i class="bi bi-info-circle"></i>`;
    infoBtn.setAttribute('data-bs-toggle', 'popover');
    // infoBtn.setAttribute('data-bs-content', );

    btnGroup.appendChild(infoBtn);
    new Popover(infoBtn, {
      placement: 'left',
      html: true,
      // fallbackPlacements: [], // prevent flipping
      content: 'Variables declared (with <code>let</code>, <code>function</code>, etc.) will not be available between cells. To make notebook-wide variables, don\'t use declaration keywords.<br><br>Use <code>print()</code> to output to the notebook underneath each cell.'
    });




    let add_bar_main_row = document.createElement('row'); add_bar_main_row.classList.add('row');
    let add_bar = document.createElement('div'); add_bar.classList.add('container-fluid', 'add-btn-bar');
    let add_bar_row = document.createElement('div'); add_bar_row.classList.add('row');
    let add_bar_col = document.createElement('div'); add_bar_col.classList.add('col-xl-12');
    let add_btn_bar = document.createElement('button'); 
    this.container.appendChild(add_bar_main_row);
    add_bar_main_row.appendChild(add_bar);
    add_bar.appendChild(add_bar_row);
    add_bar_row.appendChild(add_bar_col);
    add_bar_col.appendChild(add_btn_bar);
    add_btn_bar.onclick = function() {
      t.insert_blank_cell(1);
    }

    // === Cell List Container ===
    this.cell_list = document.createElement('div');
    this.cell_list.className = 'row';
    this.cell_list.id = 'cell-list';
    this.container.appendChild(this.cell_list);


    // === open modal ===
    this.open_modal = document.createElement('div');
    this.open_modal.classList.add('modal', 'fade');
    this.open_modal.id = modalId;
    this.open_modal.tabIndex = -1;
    this.open_modal.setAttribute('aria-labelledby', modalId + '-label');
    this.open_modal.setAttribute('aria-hidden', 'true');

    // Create the modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    // Create the modal title
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = modalId + '-label';
    modalTitle.textContent = 'Choose a *.jsnb file to open';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // Append title and close button to the modal header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Create the file input element
    const uploadFileInput = document.createElement('input');
    uploadFileInput.id = 'upload-file';
    uploadFileInput.type = 'file';
    uploadFileInput.classList.add('input');
    uploadFileInput.setAttribute('accept', '.jsnb');
    uploadFileInput.onchange = function(event) {t.onChooseFile(event)};

    // Append the file input to the modal body
    modalBody.appendChild(uploadFileInput);

    // Create the modal footer
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Create the Load button
    const loadButton = document.createElement('button');
    loadButton.type = 'button';
    loadButton.classList.add('btn', 'btn-secondary');
    loadButton.setAttribute('data-bs-dismiss', 'modal');
    loadButton.onclick = function() {t.load()};
    loadButton.textContent = 'Load';

    // Append the Load button to the modal footer
    modalFooter.appendChild(loadButton);

    // Append the modal header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append the modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append the modal dialog to the modal
    this.open_modal.appendChild(modalDialog);

    this.container.appendChild(this.open_modal);
  }

  get_num_cells() {
    return this.contents.length - 1;
  }

  get_next_id_number(id) {
    if (id) {
      return id + 1;
    }
    return this.get_num_cells() + 1;
  }

  deselect() {
    this.container.querySelectorAll('.cell.selected').forEach(cell => cell.classList.remove('selected'));
    this.selected_cell = null;
  }
  
  select_cell(cell_id) {
    this.deselect();
    if (!this.DOM_elements[cell_id]) return;
    this.DOM_elements[cell_id].cell.classList.add('selected');
    this.selected_cell = cell_id;
  }

  generate_cell_DOM(cell_id) {
    const id = cell_id;

    let cell = document.createElement('div'); cell.classList.add('cell', 'container-fluid'); // cell.setAttribute('id', 'cell-' + id);
    let row1 = document.createElement('div'); row1.classList.add('row');
    let code_tag = document.createElement('div'); code_tag.classList.add('col-sm-1', 'side-tag', 'code-tag'); // code_tag.setAttribute('id', 'code-tag-' + id);
    let code_div = document.createElement('div'); code_div.classList.add('col-sm-11', 'code-div'); // code_div.setAttribute('id', 'code-div-' + id);
    let id_note = document.createElement('div'); id_note.classList.add('id-note'); // id_note.setAttribute('id', 'id-note-' + id);
    let row2 = document.createElement('div'); row2.classList.add('row');
    let output_tag = document.createElement('div'); output_tag.classList.add('col-sm-1', 'side-tag', 'output-tag', 'hidden'); // output_tag.setAttribute('id', 'output-tag-' + id);
    let output_div = document.createElement('div'); output_div.classList.add('col-sm-11', 'output-div'); // output_div.setAttribute('id', 'output-div-' + id);
    let verbose = document.createElement('div'); verbose.classList.add('verbose'); // verbose.setAttribute('id', 'verbose-' + id);

    let add_bar = document.createElement('div'); add_bar.classList.add('container-fluid', 'add-btn-bar');
    let add_bar_row = document.createElement('div'); add_bar_row.classList.add('row');
    let add_bar_col = document.createElement('div'); add_bar_col.classList.add('col-xl-12');
    let add_btn_bar = document.createElement('button');

    cell.appendChild(row1);
      row1.appendChild(code_tag);
        code_tag.innerHTML = "[ ]:";
      row1.appendChild(code_div);
        code_div.appendChild(id_note);
          id_note.innerHTML = id;
    cell.appendChild(row2);
      row2.appendChild(output_tag);
        output_tag.innerHTML = "[ ]:";
      row2.appendChild(output_div);
        output_div.appendChild(verbose);

    add_bar.appendChild(add_bar_row);
      add_bar_row.appendChild(add_bar_col);
        add_bar_col.appendChild(add_btn_bar);

    return {
      cell: cell,
      code_tag: code_tag,
      code_div: code_div,
      id_note: id_note,
      output_tag: output_tag,
      output_div: output_div,
      verbose: verbose,
      add_bar:add_bar,
      add_btn_bar:add_btn_bar
    };
  }

  set_handlers() {
    const t = this;
    for (let cell_id = 1; cell_id <= this.get_num_cells(); cell_id++) {
      const id = cell_id;
      let cell = this.DOM_elements[id].cell;
      const code_div = this.DOM_elements[id].code_div;
      let cm = this.codeMirrors[id];
      let add_btn_bar = this.DOM_elements[id].add_btn_bar;
      cell.onclick = function() {
        t.select_cell(id);
      };
      cell.ontouchstart = function() {
        t.select_cell(id);
      };
      cell.ontouchend = function() {
        t.select_cell(id);
      };
      cell.ontouchcancel = function() {
        t.deselect();
      };
      cm._handlers = {
        change: [
          function() {
            t.contents[id].code_content = t.codeMirrors[id].getValue();
          }
        ],
        focus: [
          function() {
            code_div.classList.add('focused');
          }
        ],
        blur: [
          function() {
            code_div.classList.remove('focused');
          }
        ]
      };
      add_btn_bar.onclick = function() {
        t.insert_blank_cell(id +1);
      }
    }
  }

  generate_codeMirror(cell_id) {
    const id = cell_id;

    let cell = this.DOM_elements[id].cell;
    let code_div = this.DOM_elements[id].code_div;

    let cm = CodeMirror.default(code_div, {
      value: "",
      mode: "javascript",
      lineNumbers: true,
      tabSize: 2,
      autofocus: false
    });

    return cm;
  }

  put_cell_on_page_at(dom_els, cell_id) {
    if (cell_id && cell_id != this.get_num_cells() && this.get_num_cells() > 0) {
      this.cell_list.insertBefore(dom_els.cell, this.DOM_elements[cell_id + 1].cell);
      this.cell_list.insertBefore(dom_els.add_bar, this.DOM_elements[cell_id + 1].cell);
    } else {
      this.cell_list.appendChild(dom_els.cell);
      this.cell_list.appendChild(dom_els.add_bar);
    }
  }

  renumber_id_notes() {
    for (let cell_id = 1; cell_id < this.get_num_cells() + 1; cell_id++) {
      this.DOM_elements[cell_id].id_note.innerHTML = cell_id;
    }
  }

  insert_blank_cell(cell_id) {
    cell_id = cell_id || this.get_next_id_number();
    let content = {
      code_content: "",
      tag: " ", // cell's execution number
      output_content: "",
      state: "clear"
    };
    this.insert_cell(cell_id, content);
  }

  insert_cell(cell_id, content) {
    const selected = this.contents[this.selected_cell];
    this.contents = insert(this.contents, cell_id, content);
    let cell_DOM = this.generate_cell_DOM(cell_id, content);
    this.DOM_elements = insert(this.DOM_elements, cell_id, cell_DOM);
    this.put_cell_on_page_at(this.DOM_elements[cell_id], cell_id);
    let cm = this.generate_codeMirror(cell_id);
    this.codeMirrors = insert(this.codeMirrors, cell_id, cm);
    this.renumber_id_notes();
    this.set_handlers();
    // load cell content
    this.write_cell_code(cell_id);
    this.write_cell_output(cell_id);
    if (selected) this.selected_cell = this.contents.indexOf(selected);
  }

  delete_cell(cell_id) {
    if (!this.contents[cell_id]) return;
    if (this.curr === this.contents[cell_id]) this.stop();
    this.contents = remove(this.contents, cell_id);
    this.DOM_elements[cell_id].cell.remove();
    this.DOM_elements[cell_id].add_bar.remove();
    this.DOM_elements = remove(this.DOM_elements, cell_id);
    this.codeMirrors = remove(this.codeMirrors, cell_id);
    this.renumber_id_notes();
    this.set_handlers();
  }

  insert_blank_above_selected() {
    const id = this.selected_cell || 1;
    this.insert_blank_cell(id);
    this.select_cell(id);
  }

  insert_blank_below_selected() {
    const id = this.selected_cell ? this.selected_cell + 1 : this.get_num_cells() + 1;
    this.insert_blank_cell(id);
    this.select_cell(id);
  }

  delete_selected() {
    if (this.selected_cell) {
      this.delete_cell(this.selected_cell);
      if (this.get_num_cells() > 0) {
        if (this.selected_cell - 1 == this.get_num_cells()) { // if deleted last cell, select one above
          this.select_cell(this.selected_cell - 1);
        } else {
          this.select_cell(this.selected_cell);
        }
      } else {
        this.deselect();
      }
    }
  }

  write_cell_code(cell_id) {
    this.codeMirrors[cell_id].setValue(this.contents[cell_id].code_content);
    // save();
  }
  
  write_cell_output(cell_id) {
    const t = this;
    this.DOM_elements[cell_id].verbose.style.color = this.contents[cell_id].state == 'error' ? 'red' : 'black';
    this.DOM_elements[cell_id].verbose.textContent = this.contents[cell_id].output_content;
    this.DOM_elements[cell_id].code_tag.textContent = '[' + (this.contents[cell_id].state == 'queued' ? '*' : this.contents[cell_id].state == 'clear' ? ' ' : this.contents[cell_id].tag) + ']:';

    this.DOM_elements[cell_id].output_tag.textContent = '[' + {
      'normal': t.contents[cell_id].tag,
      'error':'?',
      'calc':'*',
      'stop':'#',
      'queued':'',
      'clear':''
    }[t.contents[cell_id].state] + ']:';

    if (['queued', 'clear'].includes(this.contents[cell_id].state)) { //} || this.contents[cell_id].output_content == '') {
      this.DOM_elements[cell_id].output_tag.classList.add('hidden');
    } else {
      this.DOM_elements[cell_id].output_tag.classList.remove('hidden');
    }
    // this.save();
  }


  build_from_contents() {
    this.stop();
    let old_contents = this.contents;
    while (this.cell_list.hasChildNodes()) {
      this.cell_list.removeChild(this.cell_list.lastChild);
    }
    this.selected_cell = null;
    this.contents = [null];
    this.DOM_elements = [null];
    this.codeMirrors = [null];
    this.execution_num = 0;
    for (let cell_id = 1; cell_id < old_contents.length; cell_id++) {
      this.execution_num = Math.max(this.execution_num, Number(old_contents[cell_id].tag));
      this.insert_cell(cell_id, old_contents[cell_id]);
    }
    if (!this.get_num_cells()) this.insert_blank_cell(1);
    this.select_cell(1);
  }

  download() {
    let blob = new Blob([this.get_string_contents()], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'JSNotebook' + (new Date().toUTCString()) + '.jsnb')
  }

  onChooseFile(event) {
    if (event.target.files.length == 0) {
      return;
    }
    // document.getElementById('upload').checked = true;
    // document.getElementById('load').disabled = true;
    if (typeof window.FileReader !== 'function')
      throw ("The file API isn't supported on this browser.");
    let input = event.target;
    if (!input)
      throw ("The browser does not properly implement the event object");
    if (!input.files)
      throw ("This browser does not support the `files` property of the file input.");
    if (!input.files[0])
      return undefined;
    this.file = input.files[0];
    // document.getElementById('load').disabled = false;
  }

  load() {
    if (!this.file) return false;
    let fr = new FileReader();
    const t = this;
    fr.onload = function(e) {
      try {
        const contents = parseContents(e.target.result);
        t.stop();
        t.contents = contents;
        t.build_from_contents();
        t.save();
      } catch (error) { window.alert('Unable to open notebook: ' + error.message); }
    }
    fr.onerror = function() { window.alert('Unable to read notebook file.'); };
    fr.readAsText(this.file);
  }

  get_string_contents() {
    let temp = JSON.parse(JSON.stringify(this.contents));
    for (let i = 1; i < temp.length; i++) {
      temp[i].tag = ' ';
      temp[i].state = temp[i].state == 'error' ? 'error' : 'normal';
    }
    return JSON.stringify(temp);
  }

  save() {
    try {
      localStorage.setItem(window.location.href + '--contents', this.get_string_contents());
    } catch (error) { console.warn('Unable to save notebook.', error); }
  }

  offer_selected() {
    if (this.selected_cell) {
      this.offer(this.selected_cell);
    }
  }

  calc_state(bool) {
    this.calculating = bool;
  }





}


export default JSNotebook;
