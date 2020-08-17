import './rng.css.proxy.js';

import { getGame } from "./state.js";

const defaultExport = {
    components: { },
    props: ["rng"],
    computed: {
        id() {
            return this.rng.id().export();
        },
        signer() {
            const signer = this.rng.signer().export();
            return getGame().players().get(signer);
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
      _createVNode("div", _hoisted_3, _toDisplayString(_ctx.id), 1),
      _createVNode("div", _hoisted_4, _toDisplayString(_ctx.signer), 1)
    ])
  ]))
}

defaultExport.render = render
export default defaultExport