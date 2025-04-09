function eval_code(info) {
  const self_ = self;
  let context = info.context || {};
  let verbose = {
    innerHTMLInternal: "",
    innerHTMLListener: function(val) {
      self_.postMessage({
        type: 'update',
        msg: {
          verbose_string: this.innerHTML,
          context: { ...context, ...self_ }
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
  return [eval(info.str), JSON.stringify({ ...context, ...self_ })];
}

self.onmessage = function (msg) {
  try {
    const data = msg.data;
    let ret = eval_code(data.info);
    self.postMessage({
      type: 'complete',
      res: ret[0],
      context: ret[1]
    });
  } catch (e) {
    self.postMessage({
      type: 'error',
      msg: e.message,
      error: e
    });
  }
}