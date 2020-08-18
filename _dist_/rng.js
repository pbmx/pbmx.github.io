import './rng.css.proxy.js';

import { getGame, mutGame } from "./state.js";
import { saveBlock } from "./storage.js";
import { formatBase64 } from "./display.js";
import { Payload } from "/web_modules/pbmx-web.js";

const defaultExport = {
    components: { },
    props: ["rng", "name"],
    computed: {
        spec() {
            return this.rng.spec();
        },
        state() {
            return this.rng.state(getGame());
        },
        value() {
            return this.rng.value(getGame());
        },
    },
    methods: {
        async provide() {
            const builder = getGame().buildBlock();
            builder.addPayload(Payload.randomEntropy(this.name, getGame().maskRandom()));
            const block = mutGame(g => g.finishBlock(builder));
            await saveBlock(block, getGame().id);
            this.$parent.$parent.lastBlock = block;
            this.$parent.$parent.exportedBlock = formatBase64(block.export());
        },
        async reveal() {
            const [share, proof] = getGame().unmaskShare(this.rng.mask());
            const builder = getGame().buildBlock();
            builder.addPayload(Payload.randomReveal(this.name, share, proof));
            const block = mutGame(g => g.finishBlock(builder));
            await saveBlock(block, getGame().id);
            this.$parent.$parent.lastBlock = block;
            this.$parent.$parent.exportedBlock = formatBase64(block.export());
        },
    },
};

import { toDisplayString as _toDisplayString, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "rng" }
const _hoisted_2 = { class: "header" }
const _hoisted_3 = { class: "blob" }
const _hoisted_4 = { class: "blob text" }
const _hoisted_5 = { key: 0 }
const _hoisted_6 = { key: 0 }
const _hoisted_7 = { key: 0 }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, [
      _createVNode("div", _hoisted_3, _toDisplayString(_ctx.name), 1),
      _createVNode("div", _hoisted_4, _toDisplayString(_ctx.spec), 1),
      (_ctx.state == 'entropy')
        ? (_openBlock(), _createBlock("button", {
            key: 0,
            onClick: _cache[1] || (_cache[1] = $event => (_ctx.provide($event)))
          }, "Provide entropy"))
        : _createCommentVNode("", true),
      (_ctx.state == 'waitEntropy')
        ? (_openBlock(), _createBlock("div", _hoisted_5, "Waiting for entropy..."))
        : _createCommentVNode("", true),
      (_ctx.state == 'reveal')
        ? (_openBlock(), _createBlock("button", {
            key: 0,
            onClick: _cache[2] || (_cache[2] = $event => (_ctx.reveal($event)))
          }, "Reveal"))
        : _createCommentVNode("", true),
      (_ctx.state == 'waitReveal')
        ? (_openBlock(), _createBlock("div", _hoisted_6, "Waiting for reveal..."))
        : _createCommentVNode("", true),
      (_ctx.state == 'generated')
        ? (_openBlock(), _createBlock("div", _hoisted_7, _toDisplayString(_ctx.value), 1))
        : _createCommentVNode("", true)
    ])
  ]))
}

defaultExport.render = render
export default defaultExport