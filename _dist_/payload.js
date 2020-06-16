import './payload.css.proxy.js';

const defaultExport = {
    props: ["payload"],
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", null, _toDisplayString(_ctx.payload.kind()), 1))
}

defaultExport.render = render
export default defaultExport