import './block.css.proxy.js';

import identifier from "./identifier.js";
import payload from "./payload.js";
import { getGame } from "./state.js";
import { shortFingerprint } from "./display.js";

const defaultExport = {
    components: { identifier, payload },
    props: ["block"],
    computed: {
        id() {
            return shortFingerprint(this.block.id().export());
        },
        signer() {
            const signer = this.block.signer().export();
            return getGame().players().get(signer);
        },
    },
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent } from "/web_modules/vue.js"

const _hoisted_1 = { class: "block" }
const _hoisted_2 = { class: "header" }
const _hoisted_3 = { class: "blob" }
const _hoisted_4 = { class: "blob text" }

export function render(_ctx, _cache) {
  const _component_payload = _resolveComponent("payload")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, [
      _createVNode("div", _hoisted_3, _toDisplayString(_ctx.id), 1),
      _createVNode("div", _hoisted_4, _toDisplayString(_ctx.signer), 1)
    ]),
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.block.payloads(), (payload) => {
      return (_openBlock(), _createBlock(_component_payload, {
        key: payload.id().export(),
        payload: payload
      }, null, 8, ["payload"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

defaultExport.render = render
export default defaultExport