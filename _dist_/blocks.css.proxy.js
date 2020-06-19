
const code = "\ntextarea.block-input {\n    width: 600px;\n    height: 100px;\n    font-family: monospace;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
