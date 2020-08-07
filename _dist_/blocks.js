import './blocks.css.proxy.js';

import block from "./block.js";
import { saveBlock, hasBlock } from "./storage.js";
import { getGame, mutGame } from "./state.js";
import { pullBlocks } from "./exchange.js";
import { Block } from "/web_modules/pbmx-web.js";

function glue(str) {
    return str.replace(/\s+/g, "");
}

const defaultExport = {
    components: { block },
    data() {
        return {
            newBlock: null,
            addingBlock: false,
        };
    },
    computed: {
        blockCount() {
            return getGame().blockCount();
        },
        blocks() {
            return getGame().blocks();
        },
    },
    methods: {
        async addBlock() {
            this.addingBlock = true;
            const block = Block.import(glue(this.newBlock));
            await saveBlock(mutGame(g => g.addBlock(block)));
            this.newBlock = null;
            this.addingBlock = false;
        },
        async fetchBlocks() {
            this.addingBlock = true;
            let blocks = await pullBlocks();
            for(const raw of blocks) {
                const block = Block.import(raw);
                if(!await hasBlock(block.id().export())) {
                    await saveBlock(mutGame(g => g.addBlock(block)));
                }
            }
            this.addingBlock = false;
        }
    },
};

import { vModelText as _vModelText, createVNode as _createVNode, withDirectives as _withDirectives, toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }

export function render(_ctx, _cache) {
  const _component_block = _resolveComponent("block")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", null, [
      _createVNode("div", null, [
        _withDirectives(_createVNode("textarea", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.newBlock = $event)),
          readonly: _ctx.addingBlock,
          class: "block-input",
          placeholder: "paste a block here"
        }, null, 8, ["readonly"]), [
          [_vModelText, _ctx.newBlock]
        ])
      ]),
      _createVNode("button", {
        onClick: _cache[2] || (_cache[2] = $event => (_ctx.addBlock($event))),
        disabled: !_ctx.newBlock || _ctx.addingBlock
      }, "Add block", 8, ["disabled"]),
      _createVNode("button", {
        onClick: _cache[3] || (_cache[3] = $event => (_ctx.fetchBlocks($event))),
        disabled: _ctx.addingBlock
      }, "Fetch blocks", 8, ["disabled"])
    ]),
    _createVNode("div", null, "Blocks: " + _toDisplayString(_ctx.blockCount), 1),
    _createVNode("div", null, [
      (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.blocks, (block) => {
        return (_openBlock(), _createBlock(_component_block, {
          key: block.id().export(),
          block: block
        }, null, 8, ["block"]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

defaultExport.render = render
export default defaultExport