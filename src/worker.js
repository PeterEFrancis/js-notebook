const workerCode = `
self.onmessage = function (msg) {

  const self_ = self;

  let context = JSON.parse(msg.data.context);
  let code = msg.data.code;

  try {
    

    let verbose = {
      innerHTMLInternal: "",
      innerHTMLListener: function(val) {
        self_.postMessage({
          type: 'update',
          msg: {
            verbose_string: this.innerHTML,
            context: JSON.stringify({...context, ...self_})
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

    let result;
    
    with (context) {
      result = eval(code);
    
      self_.postMessage({
        type: 'complete',
        msg: {
          res: result,
          context: JSON.stringify({...context, ...self_})  // Return the updated context back
        }
      });

    }
  } catch (e) {
    self_.postMessage({
      type: 'error',
      msg: {
        error: e,
        context: JSON.stringify({...context, ...self_})
      }
    });
  }
}
`