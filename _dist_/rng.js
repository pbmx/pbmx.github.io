import './rng.css.proxy.js';

import { getGame } from "./state.js";

const defaultExport = {
    components: { },
    props: ["rng"],
    computed: {
        spec() {
            return this.rng.spec();
        },
    },
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "rng" }
const _hoisted_2 = { class: "header" }
const _hoisted_3 = { class: "blob" }
const _hoisted_4 = { class: "blob text" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, [
      _createVNode("div", _hoisted_3, _toDisplayString(_ctx.key), 1),
      _createVNode("div", _hoisted_4, _toDisplayString(_ctx.spec), 1)
    ])
  ]))
}

defaultExport.render = render
export default defaultExport