
const code = "\n.stack {\n  padding: 50px;\n}\n.blob {\n  border-radius: 4px;\n  box-shadow: inset 1px 1px #666;\n  background: white;\n  padding-left: 5px;\n  font-family: monospace;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: auto;\n  margin-bottom: 2px;\n}\n.text,\n.token {\n  font-family: sans-serif;\n}\n.token-list {\n  transform: perspective(900px);\n  transform-style: preserve-3d;\n  perspective-origin: 50% 30%;\n}\n.token {\n  display: none;\n  transition: all @transition-time ease;\n  transform: rotateY(45deg);\n  border: 1px solid;\n  border-radius: 5px;\n  font-size: 100pt;\n  width: 180px;\n  height: 180px;\n  margin: 0 -60px 0 0;\n  position: relative;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.9);\n  opacity: 100%;\n  background: white;\n}\n.token + .token {\n  margin: 0 -60px 0 -60px;\n}\n.selected {\n  transform: rotateY(0deg);\n  margin: 0 auto;\n  transition: all @transition-time ease;\n}\n.token + .selected {\n  margin: 0 auto;\n}\n.selected ~ .token {\n  transform: rotateY(-45deg);\n}\n.selected ~ .selected {\n  transform: rotateY(0deg);\n}\n.visible {\n  display: inline-block;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);
