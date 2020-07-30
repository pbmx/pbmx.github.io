import './payload.css.proxy.js';

//import pubkey from "./payload-pubkey.vue";

//const components = { pubkey };

const defaultExport = {
    props: ["payload"],
    computed: {
        //component() {
        //    return components[payload.kind()];
        //},
    },
};

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div"))
}

defaultExport.render = render
export default defaultExport