import './App.css.proxy.js';

import game from "./game.js";
import gameList from "./games.js";
import { hasGame } from "./state.js";

const defaultExport = {
    components: { game, gameList },
    data() {
        return {
            gameLoaded: hasGame(),
        };
    }
};

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createCommentVNode as _createCommentVNode, openBlock as _openBlock, createBlock as _createBlock } from "/web_modules/vue.js"

const _hoisted_1 = { class: "app" }

export function render(_ctx, _cache) {
  const _component_game = _resolveComponent("game")
  const _component_gameList = _resolveComponent("gameList")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_ctx.gameLoaded)
      ? _createVNode(_component_game, { key: 0 })
      : _createCommentVNode("", true),
    (!_ctx.gameLoaded)
      ? _createVNode(_component_gameList, { key: 0 })
      : _createCommentVNode("", true)
  ]))
}

defaultExport.render = render
export default defaultExport