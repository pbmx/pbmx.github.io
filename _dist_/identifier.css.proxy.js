
const code = "\n.identifier {\n    font-family: monospace;\n    font-size: 120%;\n}\n.identifier[inline] {\n    display: inline-block;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
