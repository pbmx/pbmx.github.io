import './identifier.css.proxy.js';

const defaultExport = {
    props: ["label", "value"]
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "identifier" }
const _hoisted_2 = {
  key: 0,
  class: "label"
}
const _hoisted_3 = { class: "value" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_ctx.label)
      ? (_openBlock(), _createBlock("div", _hoisted_2, _toDisplayString(_ctx.label), 1))
      : _createCommentVNode("", true),
    _createVNode("div", _hoisted_3, _toDisplayString(_ctx.value), 1)
  ]))
}

defaultExport.render = render
export default defaultExport