import './rngs.css.proxy.js';

import { getGame } from "./state.js";
//import block from "./block.vue";
//import { saveBlock, hasBlock } from "./storage.js";
//import { pullBlocks } from "./exchange.js";
//import { Block } from "pbmx-web";

const defaultExport = {
    data() {
        return {
        };
    }
};

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1))
}

defaultExport.render = render
export default defaultExport