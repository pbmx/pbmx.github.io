import './rngs.css.proxy.js';

import { getGame, mutGame } from "./state.js";
import { saveBlock } from "./storage.js";
import { formatBase64 } from "./display.js";
import rng from "./rng.js";
import { Payload } from "/web_modules/pbmx-web.js";

const defaultExport = {
    components: { rng },
    computed: {
        rngs() {
            return getGame().rngs();
        },
    },
    methods: {
        async makeNew() {
            const builder = getGame().buildBlock();
            builder.addPayload(Payload.randomSpec(this.name, this.spec));
            builder.addPayload(Payload.randomEntropy(this.name, getGame().maskRandom()));
            const block = mutGame(g => g.finishBlock(builder));
            await saveBlock(block, getGame().id);
            this.$parent.lastBlock = block;
            this.$parent.exportedBlock = formatBase64(block.export());
        },
    },
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent, createVNode as _createVNode, vModelText as _vModelText, withDirectives as _withDirectives } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }

export function render(_ctx, _cache) {
  const _component_rng = _resolveComponent("rng")

  return (_openBlock(), _createBlock(_Fragment, null, [
    _createVNode("div", _hoisted_1, [
      (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.rngs, (rng) => {
        return (_openBlock(), _createBlock(_component_rng, {
          key: rng[0],
          name: rng[0],
          rng: rng[1]
        }, null, 8, ["name", "rng"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _createVNode("div", null, [
      _withDirectives(_createVNode("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.name = $event)),
        placeholder: "RNG name"
      }, null, 512), [
        [_vModelText, _ctx.name]
      ]),
      _withDirectives(_createVNode("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (_ctx.spec = $event)),
        placeholder: "RNG spec, e.g., 1d6+2"
      }, null, 512), [
        [_vModelText, _ctx.spec]
      ]),
      _createVNode("button", {
        onClick: _cache[3] || (_cache[3] = $event => (_ctx.makeNew($event)))
      }, "New RNG")
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

defaultExport.render = render
export default defaultExport