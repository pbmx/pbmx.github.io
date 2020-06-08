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
        };
    }
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, createVNode as _createVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "game" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.tabs, (tab) => {
      return (_openBlock(), _createBlock("button", {
        key: tab.name,
        class: [{ active: _ctx.currentTab.name === tab.name }, "tab-button"],
        onClick: $event => (_ctx.currentTab = tab)
      }, _toDisplayString(tab.name), 11, ["onClick"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (_openBlock(), _createBlock(_resolveDynamicComponent(_ctx.currentTab.component), { class: "tab" }))
  ]))
}

defaultExport.render = render
export default defaultExport