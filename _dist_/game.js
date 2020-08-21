import './game.css.proxy.js';

import stacks from "./stacks.js";
import rngs from "./rngs.js";
import blocks from "./blocks.js";
import details from "./details.js";
import { debugReset } from "./storage.js";
import { pushBlock } from "./exchange.js";

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
            lastBlock: null,
            exportedBlock: null,
            publishing: false,
        };
    },
    methods: {
        async resetGame() {
            await debugReset();
            location.reload();
        },
        async publishBlock() {
            this.publishing = true;
            await pushBlock(this.lastBlock);
            this.publishing = false;
            this.exportedBlock = null;
        }
    },
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, toDisplayString as _toDisplayString, resolveDynamicComponent as _resolveDynamicComponent, createVNode as _createVNode, createCommentVNode as _createCommentVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "game" }
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { class: "export-block" }
const _hoisted_4 = { class: "block-output" }

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
            _createVNode("div", null, [
              _createVNode("pre", _hoisted_4, _toDisplayString(_ctx.exportedBlock), 1)
            ]),
            _createVNode("button", {
              disabled: _ctx.publishing,
              onClick: _cache[1] || (_cache[1] = $event => (_ctx.publishBlock($event)))
            }, "Publish", 8, ["disabled"]),
            _createVNode("button", {
              disabled: _ctx.publishing,
              onClick: _cache[2] || (_cache[2] = $event => (_ctx.exportedBlock = null))
            }, "Done", 8, ["disabled"])
          ])
        ]))
      : _createCommentVNode("", true),
    _createVNode("button", {
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.resetGame($event)))
    }, "RESET")
  ]))
}

defaultExport.render = render
export default defaultExport