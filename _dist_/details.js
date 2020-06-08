import './details.css.proxy.js';

import identifier from "./identifier.js";

const defaultExport = {
    components: { identifier },
    data() {
        return {
            name: null,
            gameRef: this.$parent.gameRef
        };
    },
    computed: {
        gameFingerprint() {
            this.gameRef;
            return window.game.fingerprint().export();
        },
        playerFingerprint() {
            this.gameRef;
            return window.game.playerFingerprint().export();
        },
        players() {
            this.gameRef;
            return window.game.playerCount();
        },
        blocks() {
            this.gameRef;
            return window.game.blockCount();
        },
        joined() {
            this.gameRef;
            return window.game.joined();
        }
    },
    methods: {
        join() {
            console.log("joining as " + this.name);
            const block = window.game.join(this.name);
            console.log(block.export());
            this.gameRef = !this.gameRef;
        }
    }
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, toDisplayString as _toDisplayString, vModelText as _vModelText, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = /*#__PURE__*/_createTextVNode(" You have not joined this game. ")

export function render(_ctx, _cache) {
  const _component_identifier = _resolveComponent("identifier")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode(_component_identifier, {
      label: "Game Fingerprint",
      value: _ctx.gameFingerprint
    }, null, 8, ["value"]),
    _createVNode(_component_identifier, {
      label: "Your Fingerprint",
      value: _ctx.playerFingerprint
    }, null, 8, ["value"]),
    _createVNode("div", null, "Blocks: " + _toDisplayString(_ctx.blocks), 1),
    (!_ctx.joined)
      ? (_openBlock(), _createBlock("div", _hoisted_2, [
          _hoisted_3,
          _withDirectives(_createVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.name = $event)),
            placeholder: "your nickname"
          }, null, 512), [
            [_vModelText, _ctx.name]
          ]),
          _createVNode("button", {
            onClick: _cache[2] || (_cache[2] = $event => (_ctx.join($event)))
          }, "Join")
        ]))
      : _createCommentVNode("", true)
  ]))
}

defaultExport.render = render
export default defaultExport