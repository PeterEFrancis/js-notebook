# js-notebook

This is a javascript library to create an in-browser jupyter-notebook-style notebook for JavaScript.

See [here](https://peterefrancis.com/js-notebook) for an example.

Basic example:

```html
<div id="notebook-container"></div>

<script>
  function initNotebook() {
    let notebook = new JSNotebook(document.getElementById('notebook-container'));
  }
</script>
<script src="https://cdn.jsdelivr.net/gh/PeterEFrancis/js-notebook@main/dist/js-notebook.min.js" onload="initNotebook()"></script>
```

The bundle includes its styles and runs in a browser with Web Worker support.
For bundlers, use `import JSNotebook from 'js-notebook'`; the CommonJS entry
also requires a browser DOM.

With Node.js 20 or newer, run `npm ci`, `npm test`, and `npm run build` to develop. Serve this directory
over HTTP to try `index.html` with the local build. Commit rebuilt `dist` files
when changing the library, since the demo and CDN example use them directly.

Use `print()` for text output and Shift+Enter to run a cell. Assign shared
variables without `let`, `const`, or `var` to keep them between cells. Stop
interrupts execution; Restart clears the worker's shared variables and outputs.

Notebooks autosave in local storage for the current page URL. Download `.jsnb`
files to keep a separate copy. Only run code you trust: workers isolate execution
from the page DOM, but notebook code can still make network requests.
