import './App.css.proxy.js';

import game from "./game.js";

const defaultExport = {
    components: { game },
    data() {
        return {
        };
    }
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "app" }

export function render(_ctx, _cache) {
  const _component_game = _resolveComponent("game")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode(_component_game)
  ]))
}

defaultExport.render = render
export default defaultExport