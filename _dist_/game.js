import './game.css.proxy.js';

import stacks from "./stacks.js";
import rngs from "./rngs.js";
import blocks from "./blocks.js";
import details from "./details.js";
import { debugReset } from "./storage.js";

const tabs = [
    {
        name: "Details",
        component: details
    },
    {
        name: "Blocks",
        component: blocks
    },
    {
        name: "Stacks",
        component: stacks
    },
    {
        name: "RNGs",
        component: rngs
    }
];

const defaultExport = {
    data() {
        return {
            tabs: tabs,
            currentTab: tabs[0],
            exportedBlock: null,
        };
    },
    methods: {
        async resetGame() {
            await debugReset();
            location.reload();
        }
    },
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "game" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { class: "export-block" }
const _hoisted_4 = /*#__PURE__*/_createTextVNode(" Copy this block and broadcast it to the other players ")
const _hoisted_5 = { class: "block-output" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.tabs, (tab) => {
      return (_openBlock(), _createBlock("button", {
        key: tab.name,
        class: [{ active: _ctx.currentTab.name === tab.name }, "tab-button"],
        onClick: $event => (_ctx.currentTab = tab)
      }, _toDisplayString(tab.name), 11, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    _createVNode("div", null, [
      (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.currentTab.component), { class: "tab" }))
    ]),
    (_ctx.exportedBlock)
      ? (_openBlock(), _createBlock("div", _hoisted_2, [
          _createVNode("div", _hoisted_3, [
            _hoisted_4,
            _createVNode("div", null, [
              _createVNode("pre", _hoisted_5, _toDisplayString(_ctx.exportedBlock), 1)
            ]),
            _createVNode("button", {
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.exportedBlock = null))
            }, "Done")
          ])
        ]))
      : _createCommentVNode("", true),
    _createVNode("button", {
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.resetGame($event)))
    }, "RESET")
  ]))
}

defaultExport.render = render
export default defaultExport