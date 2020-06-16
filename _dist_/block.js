import './block.css.proxy.js';

import identifier from "./identifier.js";
import payload from "./payload.js";

function short(str) {
    return str.substring(0, 20).toUpperCase();
}

const defaultExport = {
    components: { identifier, payload },
    props: ["block"],
    computed: {
        id() {
            return short(this.block.id().export());
        }
    },
};

import { createVNode as _createVNode, resolveComponent as _resolveComponent, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "Block: ", -1)

export function render(_ctx, _cache) {
  const _component_identifier = _resolveComponent("identifier")
  const _component_payload = _resolveComponent("payload")

  return (_openBlock(), _createBlock("div", null, [
    _hoisted_1,
    _createVNode(_component_identifier, {
      inline: "",
      value: _ctx.id
    }, null, 8, ["value"]),
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