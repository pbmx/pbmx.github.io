import './stack.css.proxy.js';

const defaultExport = {
    data() {
        return {
            tokens: [],
        };
    }
};

import { createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString } from "/web_modules/vue.js"

const _hoisted_1 = { class: "stack" }
const _hoisted_2 = /*#__PURE__*/_createVNode("div", { class: "blob" }, "235A7B34", -1)
const _hoisted_3 = /*#__PURE__*/_createVNode("div", { class: "blob text" }, "deck", -1)
const _hoisted_4 = { class: "token-list" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createVNode("div", _hoisted_4, [
      (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.tokens, (token) => {
        return (_openBlock(), _createBlock("div", {
          token: token,
          class: [{ visible: false, selected: false }, "token"]
        }, _toDisplayString(token.display()), 9, ["token"]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ]))
}

defaultExport.render = render
export default defaultExport