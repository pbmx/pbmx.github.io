import './details.css.proxy.js';

const defaultExport = {
    data() {
        return {
            fingerprint: this.$parent.fingerprint
        };
    }
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }
const _hoisted_2 = { class: "fingerprint" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, "Fingerprint: " + _toDisplayString(_ctx.fingerprint), 1)
  ]))
}

defaultExport.render = render
export default defaultExport