import './details.css.proxy.js';

import identifier from "./identifier.js";
import { saveBlock } from "./storage.js";
import { getGame, mutGame } from "./state.js";
import { Block } from "/web_modules/pbmx-web.js";

const defaultExport = {
    components: { identifier },
    data() {
        return {
            name: null,
            newBlock: null,
            addingBlock: false,
        };
    },
    computed: {
        gameFingerprint() {
            return getGame().fingerprint().export();
        },
        playerFingerprint() {
            return getGame().playerFingerprint().export();
        },
        players() {
            return getGame().playerCount();
        },
        blocks() {
            return getGame().blockCount();
        },
        joined() {
            return getGame().joined();
        }
    },
    methods: {
        async join() {
            const block = mutGame(g => g.finishBlock(g.join(this.name)));
            await saveBlock(block);
            this.$parent.exportedBlock = block.export();
        },
        async addBlock() {
            this.addingBlock = true;
            const block = mutGame(g => g.addBlock(Block.import(this.newBlock)));
            await saveBlock(block);
            this.addingBlock = false;
        }
    }
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, vModelText as _vModelText, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = /*#__PURE__*/_createTextVNode(" You have not joined this game. ")

export function render(_ctx, _cache) {
  const _component_identifier = _resolveComponent("identifier")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_ctx.players > 0)
      ? _createVNode(_component_identifier, {
          key: 0,
          label: "Game Fingerprint",
          value: _ctx.gameFingerprint
        }, null, 8, ["value"])
      : _createCommentVNode("", true),
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
      : _createCommentVNode("", true),
    _createVNode("div", null, [
      _createVNode("div", null, [
        _withDirectives(_createVNode("textarea", {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.newBlock = $event)),
          readonly: _ctx.addingBlock,
          class: "block",
          placeholder: "paste a block here"
        }, null, 8, ["readonly"]), [
          [_vModelText, _ctx.newBlock]
        ])
      ]),
      _createVNode("button", {
        onClick: _cache[4] || (_cache[4] = $event => (_ctx.addBlock($event))),
        disabled: !_ctx.newBlock || _ctx.addingBlock
      }, "Add block", 8, ["disabled"])
    ])
  ]))
}

defaultExport.render = render
export default defaultExport