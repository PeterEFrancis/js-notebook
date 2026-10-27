import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/index.js', import.meta.url), 'utf8')
  .replace(/^import .*;\n/gm, '')
  .replace('export default JSNotebook;', 'globalThis.runtime = {JSNotebook, Computer, parseContents, workerCode};');

function runtime() {
  const timers = new Map();
  let timerId = 0;
  class Worker {
    constructor() { this.messages = []; }
    postMessage(message) { this.messages.push(message); }
    terminate() { this.terminated = true; }
  }
  const context = vm.createContext({
    Worker, Blob, URL: {createObjectURL: () => 'blob:test'},
    setTimeout: callback => { timers.set(++timerId, callback); return timerId; },
    clearTimeout: id => timers.delete(id),
    console: {log() {}, warn() {}}
  });
  vm.runInContext(source, context);
  return {...context.runtime, timers};
}

function cell(code = '') {
  return {code_content: code, output_content: '', tag: ' ', state: 'clear'};
}

function element() {
  return {style: {}, classList: {add() {}, remove() {}}};
}

function notebook(JSNotebook, cells) {
  const instance = Object.create(JSNotebook.prototype);
  Object.assign(instance, {
    contents: [null, ...cells], calculation_queue: [], calculating: false,
    curr: null, execution_num: 0, saved: 0,
    DOM_elements: [null, ...cells.map(() => ({verbose: element(), code_tag: element(), output_tag: element()}))],
    computer: {runs: [], start(data) { this.runs.push(data); }, stop() { this.stopped = true; }},
    save() { this.saved++; }
  });
  return instance;
}

test('stopping replaces the worker and terminal responses clear timers', () => {
  const {Computer, timers} = runtime();
  const computer = new Computer();
  let completed = 0;
  computer.start({code: '1', timeout: 20, oncomplete() { completed++; }});
  const first = computer.worker;
  assert.equal(timers.size, 1);
  computer.stop();
  assert.equal(first.terminated, true);
  assert.notEqual(computer.worker, first);
  assert.equal(timers.size, 0);
  computer.start({code: '2', timeout: 20, oncomplete() { completed++; }});
  computer.worker.onmessage({data: {type: 'complete'}});
  assert.equal(completed, 1);
  assert.equal(timers.size, 0);
  computer.start({code: 'throw 3', timeout: 20, onerror() {}});
  computer.worker.onmessage({data: {type: 'error', msg: {error: '3'}}});
  assert.equal(timers.size, 0);
});

test('worker failures report an error and permit another run', () => {
  const {Computer, timers} = runtime();
  const computer = new Computer();
  let reported;
  computer.start({code: '1', timeout: 20, onerror(error) { reported = error; }});
  const failed = computer.worker;
  failed.onerror({message: 'Worker failed', preventDefault() {}});
  assert.equal(reported.error, 'Worker failed');
  assert.equal(failed.terminated, true);
  assert.equal(timers.size, 0);
  computer.start({code: '2'});
  assert.equal(computer.worker.messages[0].code, '2');
});

test('queued and running cells retain identity when cell positions change', () => {
  const {JSNotebook} = runtime();
  const first = cell('print(1)'), second = cell('print(2)'), inserted = cell();
  const instance = notebook(JSNotebook, [first, second]);
  instance.calculation_queue.push({cell: first, str: first.code_content}, {cell: second, str: second.code_content});
  instance.next();
  instance.contents.splice(1, 0, inserted);
  instance.DOM_elements.splice(1, 0, {verbose: element(), code_tag: element(), output_tag: element()});
  instance.computer.runs[0].onupdate({verbose_string: 'one'});
  assert.equal(first.output_content, 'one');
  assert.equal(inserted.output_content, '');
  instance.computer.runs[0].oncomplete();
  assert.equal(first.state, 'normal');
  assert.equal(instance.computer.runs[1].code, second.code_content);
  instance.computer.runs[1].oncomplete();
  assert.equal(second.state, 'normal');
  assert.equal(instance.calculating, false);
});

test('stop discards queued work and restart clears every cell', () => {
  const {JSNotebook} = runtime();
  const first = cell('1'), last = cell('2');
  const instance = notebook(JSNotebook, [first, last]);
  first.state = 'calc';
  last.state = 'queued';
  instance.curr = first;
  instance.calculating = true;
  instance.calculation_queue.push({cell: last, str: last.code_content});
  instance.stop();
  assert.equal(instance.calculation_queue.length, 0);
  assert.equal(first.state, 'stop');
  assert.equal(last.state, 'clear');
  assert.equal(instance.calculating, false);
  first.output_content = last.output_content = 'old result';
  first.tag = 1;
  last.tag = 2;
  instance.build_from_contents = () => {};
  instance.restart_computer();
  for (const item of [first, last]) {
    assert.equal(item.output_content, '');
    assert.equal(item.tag, ' ');
  }
});

test('output renders notebook text without interpreting markup', () => {
  const {JSNotebook} = runtime();
  const item = cell();
  item.state = 'normal';
  item.output_content = '<img/src=x/onerror=alert(1)>\n\t spaced';
  const instance = notebook(JSNotebook, [item]);
  Object.defineProperty(instance.DOM_elements[1].verbose, 'innerHTML', {
    set() { throw new Error('Output must not be rendered as HTML'); }
  });
  instance.write_cell_output(1);
  assert.equal(instance.DOM_elements[1].verbose.textContent, item.output_content);
});

test('notebook parsing rejects malformed content and unsafe tags', () => {
  const {parseContents} = runtime();
  for (const value of ['{', '{}', '[]', '[null,{}]', JSON.stringify([null, {...cell(), tag: '<img/src=x>'}])]) {
    assert.throws(() => parseContents(value));
  }
  const parsed = parseContents(JSON.stringify([null, {...cell('print(1)'), state: 'calc'}]));
  assert.equal(parsed[1].code_content, 'print(1)');
  assert.notEqual(parsed[1].state, 'calc');
});

test('worker handles primitive throws and printing circular objects and BigInts', () => {
  const {workerCode} = runtime();
  const messages = [];
  const self = {postMessage(message) { messages.push(message); }};
  vm.runInNewContext(workerCode, {self});
  self.onmessage({data: {code: 'throw null'}});
  assert.equal(messages.at(-1).type, 'error');
  assert.equal(messages.at(-1).msg.error, 'null');
  self.onmessage({data: {code: 'a = {}; a.self = a; print(a, 1n, undefined)'}});
  assert.equal(messages.at(-1).type, 'complete');
  assert.equal(messages.at(-2).msg.verbose_string, '[object Object] 1 undefined\n');
});
