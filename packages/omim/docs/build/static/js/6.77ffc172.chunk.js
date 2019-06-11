webpackJsonp([6],{144:function(e,n){e.exports="## Theme \n\n\u8d85\u7ea7\u5bb9\u6613\u66f4\u6362\u4e3b\u9898\u989c\u8272\u3001\u5b57\u4f53\u548c\u5706\u89d2\u3002\n\n## \u4f7f\u7528\n\n```js\ndocument.body.style.setProperty('--mdc-theme-primary', 'red')\ndocument.body.style.setProperty('--mdc-theme-secondary', 'blue')\ndocument.body.style.setProperty('--mdc-theme-error', 'yellow')\n```\n\n\u6240\u6709\u914d\u7f6e:\n\n```css\n--mdc-theme-primary: #0072d9;\n--mdc-theme-secondary: #2170b8;\n--mdc-theme-error: #f5222d;\n--mdc-theme-surface: #ffffff;\n--mdc-theme-on-primary: #ffffff;\n--mdc-theme-on-secondary: #ffffff;\n--mdc-theme-on-error: #ffffff;\n--mdc-theme-on-surface: #000000;\n--mdc-theme-background: #ffffff;\n--mdc-shape-small-component-radius: 4px;\n--mdc-shape-medium-component-radius: 4px;\n--mdc-shape-large-component-radius: 0px;\n--mdc-typography--font-family: Roboto, sans-serif;\n```\n\n## REPL \u7684\u5b9e\u73b0\u4ee3\u7801\n\n```html\n<m-color-picker id='picker' save=\"0\" default=\"ecb89a\" preview=\"0\" button='0' clear='0' width=\"300px\">\n</m-color-picker>\n\n<script>\n  document.body.style.setProperty('--mdc-theme-primary', '#ecb89a')\n\n  var picker = document.querySelector('#picker')\n  picker.addEventListener('change', function (evt) {\n    document.body.style.setProperty('--mdc-theme-primary', evt.detail.color)\n  })\n<\/script>\n```\n"}});
//# sourceMappingURL=6.77ffc172.chunk.js.map