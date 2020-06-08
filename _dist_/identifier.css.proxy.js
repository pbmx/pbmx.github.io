
const code = "\n.identifier {\n}\n.identifier .label {\n    font-size: 80%;\n}\n.identifier .value {\n    font-family: monospace;\n    font-size: 120%;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
