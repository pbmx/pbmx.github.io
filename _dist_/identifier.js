import './identifier.css.proxy.js';

const defaultExport = {
    props: ["value"]
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "identifier" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, _toDisplayString(_ctx.value), 1))
}

defaultExport.render = render
export default defaultExport