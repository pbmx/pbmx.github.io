import './rngs.css.proxy.js';

import { getGame } from "./state.js";
import rng from "./rng.js";
import { Rng } from "/web_modules/pbmx-web.js";

const defaultExport = {
    components: { rng },
    computed: {
        rngs() {
            return getGame().rngs();
        },
    }
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent, createVNode as _createVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }

export function render(_ctx, _cache) {
  const _component_rng = _resolveComponent("rng")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.rngs, (rng) => {
      return (_openBlock(), _createBlock(_component_rng, {
        key: rng[0],
        rng: rng[1]
      }, null, 8, ["rng"]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

defaultExport.render = render
export default defaultExport