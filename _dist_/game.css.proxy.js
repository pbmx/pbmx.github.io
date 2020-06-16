
const code = "\n.game {\n}\n.tab {\n    display: inline-block;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n    border: 1px solid #ccc;\n    padding: 10px;\n}\n.tab-button {\n    padding: 6px 10px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    border: 1px solid #ccc;\n    cursor: pointer;\n    background: #f0f0f0;\n    margin-bottom: -1px;\n    margin-right: -1px;\n}\n.tab-button:hover {\n    background: #e0e0e0;\n}\n.tab-button.active {\n    background: #e0e0e0;\n}\n.export-block {\n    display: inline-block;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n    padding: 10px;\n}\npre.block {\n    display: inline-block;\n    border-radius: 3px;\n    border: 1px solid #000;\n    padding: 10px;\n}\ntextarea.block {\n    width: 400px;\n    height: 120px;\n    font-family: monospace;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
