import './details.css.proxy.js';

import identifier from "./identifier.js";
import { saveBlock } from "./storage.js";
import { getGame, mutGame } from "./state.js";
import { shortFingerprint, formatBase64 } from "./display.js";

const defaultExport = {
    components: { identifier },
    data() {
        return {
            name: null,
        };
    },
    computed: {
        gameFingerprint() {
            return shortFingerprint(getGame().fingerprint().export());
        },
        playerFingerprint() {
            return shortFingerprint(getGame().playerFingerprint().export());
        },
        players() {
            const arr = [];
            for(const player of getGame().players()) {
                arr.push({ name: player[1], id: shortFingerprint(player[0]) });
            }
            return arr;
        },
        joined() {
            return getGame().joined();
        },
    },
    methods: {
        async join() {
            const block = mutGame(g => g.finishBlock(g.join(this.name)));
            await saveBlock(block, getGame().id);
            this.$parent.lastBlock = block;
            this.$parent.exportedBlock = formatBase64(block.export());
        },
    },
};

import { createVNode as _createVNode, resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, vModelText as _vModelText, withDirectives as _withDirectives, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, toDisplayString as _toDisplayString } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = /*#__PURE__*/_createVNode("div", null, "Game fingerprint", -1)
const _hoisted_4 = /*#__PURE__*/_createVNode("div", null, "Your fingerprint", -1)
const _hoisted_5 = { key: 0 }
const _hoisted_6 = /*#__PURE__*/_createTextVNode(" You have not joined this game. ")
const _hoisted_7 = { class: "player-list" }

export function render(_ctx, _cache) {
  const _component_identifier = _resolveComponent("identifier")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_ctx.joined)
      ? (_openBlock(), _createBlock("div", _hoisted_2, [
          _hoisted_3,
          _createVNode(_component_identifier, { value: _ctx.gameFingerprint }, null, 8, ["value"])
        ]))
      : _createCommentVNode("", true),
    _createVNode("div", null, [
      _hoisted_4,
      _createVNode(_component_identifier, { value: _ctx.playerFingerprint }, null, 8, ["value"])
    ]),
    (!_ctx.joined)
      ? (_openBlock(), _createBlock("div", _hoisted_5, [
          _hoisted_6,
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
    _createVNode("div", _hoisted_7, [
      (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.players, (player) => {
        return (_openBlock(), _createBlock("div", {
          key: player.id
        }, [
          _createTextVNode(_toDisplayString(player.name) + " : ", 1 /* TEXT */),
          _createVNode(_component_identifier, {
            inline: "",
            value: player.id
          }, null, 8, ["value"])
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

defaultExport.render = render
export default defaultExport