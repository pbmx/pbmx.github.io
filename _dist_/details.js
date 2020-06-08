import './details.css.proxy.js';

const defaultExport = {
    data() {
        return {
            gameFingerprint: this.$parent.gameFingerprint,
            playerFingerprint: this.$parent.playerFingerprint
        };
    }
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }
const _hoisted_2 = { class: "fingerprint" }
const _hoisted_3 = { class: "fingerprint" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, "Game Fingerprint: " + _toDisplayString(_ctx.gameFingerprint), 1),
    _createVNode("div", _hoisted_3, "Your Fingerprint: " + _toDisplayString(_ctx.playerFingerprint), 1)
  ]))
}

defaultExport.render = render
export default defaultExport