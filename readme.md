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