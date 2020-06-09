import './game.css.proxy.js';

import stacks from "./stacks.js";
import rngs from "./rngs.js";
import details from "./details.js";

const tabs = [
    {
        name: "Details",
        component: details
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
    }
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "game" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = /*#__PURE__*/_createTextVNode(" Copy this block and broadcast it to the other players ")
const _hoisted_4 = {
  class: "block",
  readonly: ""
}

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.tabs, (tab) => {
      return (_openBlock(), _createBlock("button", {
        key: tab.name,
        class: [{ active: _ctx.currentTab.name === tab.name }, "tab-button"],
        onClick: $event => (_ctx.currentTab = tab)
      }, _toDisplayString(tab.name), 11, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.currentTab.component), { class: "tab" })),
    (_ctx.exportedBlock)
      ? (_openBlock(), _createBlock("div", _hoisted_2, [
          _hoisted_3,
          _createVNode("div", null, [
            _createVNode("textarea", _hoisted_4, _toDisplayString(_ctx.exportedBlock), 1)
          ])
        ]))
      : _createCommentVNode("", true)
  ]))
}

defaultExport.render = render
export default defaultExport