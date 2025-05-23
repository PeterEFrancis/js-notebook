import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
  verbose.innerHTML += args.map(x => typeof(x) == 'string' ? x : JSON.stringify(x)).join(' ') + '\\n';
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
        error: e
      }
    });
  }
}
`




const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerBlobURL = URL.createObjectURL(blob);
const worker = new Worker(workerBlobURL);


class Computer {
  constructor(context) {
    this.worker = new Worker(workerBlobURL);
  }

  start(data) {
    // data is JSON with code, timeout, an ontimeout function, onupdate, and an oncomplete function
    const timeout = data.timeout;
    // kill after timeout
    const w = this.worker;
    const ontimeout = data.ontimeout || function (x) {console.log('timeout')};
    const id = setTimeout(function() {
      if (timeout) {
        w.terminate();
        ontimeout({
          msg: ' calculation timed out after ' + timeout + 'ms.'
        });
      }
    }, data.timeout);

    // responses
    const t = this;
    this.worker.onmessage = function(response) {
      data['on' + response.data.type](response.data.msg);
      if (response.data.type == 'complete') {
        clearTimeout(id);
      }
    }
    // start computation
    this.worker.postMessage({
      code: data.code
    });
  }

  stop() {
    this.worker.terminate();
  }

}




class JSNotebook {
  constructor(container) {
    this.container = container;
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
    
    const t = this;
    
    setInterval(function() {t.save()}, 10000);

    let saved = localStorage.getItem(window.location.href + '--contents');
    if (saved) {
      this.contents = JSON.parse(saved)
      this.build_from_contents();
    }

    this.file;



    this.cursor_line;

    document.onclick = function(e) {
      const isInEditor = document.activeElement.closest('.CodeMirror');

        if (isInEditor) {

          const cm = isInEditor.CodeMirror;
          const cursor = cm.getCursor();
          t.cursor_line = cursor.line;

        }
    }



    document.onkeydown = (function () {
      let lastKey = null;
      let lastTime = 0;
      const DOUBLE_PRESS_INTERVAL = 400;

      return function (e) {

        const isInEditor = document.activeElement.closest('.CodeMirror');
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
    })();

        


  }

  offer(id) {
    id = Number(id);
    if (this.curr == id) {
      this.computer.stop();
      this.calc_state(false);
    }
    if (this.codeMirrors[id].getValue().trim() == '') {
      return false;
    }
    this.calculation_queue.push({
      id:id,
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
    this.calc_state(true);
    let execute_info = this.calculation_queue.shift();
    const id = Number(execute_info.id);
    this.curr = id;
    if (this.contents[id]) {
      this.execution_num++;
      this.contents[id].tag = this.execution_num;
      this.contents[id].state = 'calc';
      this.contents[id].output_content = "";
      this.write_cell_output(id);
      const t = this;
      this.computer.start({
        code: execute_info.str,
        oncomplete: function(msg) {
          t.contents[id].state = 'normal';
          t.write_cell_output(id);
          t.next();
          t.save();
        },
        onupdate: function(msg) {
          t.contents[id].state = 'calc';
          t.contents[id].output_content = msg.verbose_string;
          t.write_cell_output(id);
          t.save();
        },
        onerror: function (msg) {
          t.contents[id].state = 'error';
          t.contents[id].output_content += msg.error.stack;
          console.log(msg.error);
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
      this.contents[this.curr].state = 'stop';
      this.write_cell_output(this.curr);
      this.calc_state(false);
      this.empty();
      console.log('# calculation stopped');
    }
  }
  
  error() {
    this.calc_state(false);
    this.empty();
  }

  empty() {
    for (let execute_info of this.calculation_queue) {
      this.contents[execute_info.id].state = 'clear';
      this.write_cell_output(execute_info.id);
    }
    this.calculating_queue = [];
  }

  restart_computer() {
    this.stop();
    this.computer = new Computer();
    this.empty();
    for (let id = 1; id < this.get_num_cells(); id++) {
      this.contents[id].tag = " ";
      this.contents[id].output_content = "";
    }
    this.build_from_contents()
  }




  build_html() {
    const t = this;
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
    openBtn.setAttribute('data-bs-target', '#open-modal');
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
    this.open_modal.id = 'open-modal';
    this.open_modal.tabIndex = -1;
    this.open_modal.setAttribute('aria-labelledby', 'open-ModalLabel');
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
    modalTitle.id = 'open-ModalLabel';
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
    let selected_elements = document.getElementsByClassName("selected");
    while (selected_elements.length > 0) {
      selected_elements = document.getElementsByClassName("selected");
      selected_elements[0].classList.remove("selected");
    }
    this.selected_cell = null;
  }
  
  select_cell(cell_id) {
    this.deselect();
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
  }

  delete_cell(cell_id) {
    this.contents = remove(this.contents, cell_id);
    this.DOM_elements[this.selected_cell].cell.remove();
    this.DOM_elements[this.selected_cell].add_bar.remove();
    this.DOM_elements = remove(this.DOM_elements, cell_id);
    this.codeMirrors = remove(this.codeMirrors, cell_id);
    this.renumber_id_notes();
    this.set_handlers();
  }

  insert_blank_above_selected() {
    if (this.get_num_cells() == 0) {
      this.insert_blank_cell(1);
      this.select_cell(1);
    } else {
      this.insert_blank_cell(this.selected_cell);
      this.select_cell(this.selected_cell + 1)
    }
  }

  insert_blank_below_selected() {
    if (this.get_num_cells() == 0) {
      this.insert_blank_cell(1);
      this.select_cell(1);
    } else {
      this.insert_blank_cell(this.selected_cell + 1);
      this.select_cell(this.selected_cell)
    }
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
    this.DOM_elements[cell_id].verbose.innerHTML = this.contents[cell_id].output_content.replaceAll('\n','<br>').replace('\t','&emsp;').replaceAll(' ','&nbsp;');
    this.DOM_elements[cell_id].code_tag.innerHTML = '[' + (this.contents[cell_id].state == 'queued' ? '*' : this.contents[cell_id].state == 'clear' ? ' ' : this.contents[cell_id].tag) + ']:';

    this.DOM_elements[cell_id].output_tag.innerHTML = '[' + {
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
    let fr = new FileReader();
    const t = this;
    fr.onload = function(e) {
      t.deselect();
      t.contents = JSON.parse(e.target.result);
      t.build_from_contents();
    }
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
    localStorage.setItem(window.location.href + '--contents', this.get_string_contents());
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