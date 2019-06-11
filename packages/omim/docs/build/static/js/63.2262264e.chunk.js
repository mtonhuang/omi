webpackJsonp([63],{87:function(e,n){e.exports="## Theme \n\nSuper easy to change theme colors, fonts and rounded corners.\n\n## Usage\n\n```js\ndocument.body.style.setProperty('--mdc-theme-primary', 'red')\ndocument.body.style.setProperty('--mdc-theme-secondary', 'blue')\ndocument.body.style.setProperty('--mdc-theme-error', 'yellow')\n```\n\nAll the config:\n\n```css\n--mdc-theme-primary: #0072d9;\n--mdc-theme-secondary: #2170b8;\n--mdc-theme-error: #f5222d;\n--mdc-theme-surface: #ffffff;\n--mdc-theme-on-primary: #ffffff;\n--mdc-theme-on-secondary: #ffffff;\n--mdc-theme-on-error: #ffffff;\n--mdc-theme-on-surface: #000000;\n--mdc-theme-background: #ffffff;\n--mdc-shape-small-component-radius: 4px;\n--mdc-shape-medium-component-radius: 4px;\n--mdc-shape-large-component-radius: 0px;\n--mdc-typography--font-family: Roboto, sans-serif;\n```\n\n## Code of REPL\n\n```html\n<m-color-picker id='picker' save=\"0\" default=\"ecb89a\" preview=\"0\" button='0' clear='0' width=\"300px\">\n</m-color-picker>\n\n<script>\n  document.body.style.setProperty('--mdc-theme-primary', '#ecb89a')\n\n  var picker = document.querySelector('#picker')\n  picker.addEventListener('change', function (evt) {\n    document.body.style.setProperty('--mdc-theme-primary', evt.detail.color)\n  })\n<\/script>\n```\n"}});
//# sourceMappingURL=63.2262264e.chunk.js.map