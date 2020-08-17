import './games.css.proxy.js';

import { reactive } from "/web_modules/vue.js";
import { getGames } from "./storage.js";
import initGame, { getGame } from "./state.js";

function reactivePromise(p) {
    const react = reactive({ value: undefined });
    p.then(r => react.value = r);
    return react;
}

const defaultExport = {
    data() {
        return {
            games: reactivePromise(getGames()),
        };
    },
    methods: {
        async start() {
            await initGame();
            window.location.href = window.location.href + "#" + getGame().id;
            window.location.reload();
        },
        load(game) {
            window.location.href = window.location.href + "#" + game.id;
            window.location.reload();
        }
    },
};

import { createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString } from "/web_modules/vue.js"

const _hoisted_1 = { class: "gameList" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("button", {
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.start($event)))
    }, "New game"),
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.games.value, (game) => {
      return (_openBlock(), _createBlock("div", {
        key: game.id
      }, [
        _createVNode("button", {
          onClick: $event => (_ctx.load(game))
        }, _toDisplayString(game.id), 9, ["onClick"])
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

defaultExport.render = render
export default defaultExport