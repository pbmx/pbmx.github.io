import './stacks.css.proxy.js';

const defaultExport = {
    data() {
        return {
            stacks: [],
        };
    }
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, resolveComponent as _resolveComponent, createVNode as _createVNode } from "/web_modules/vue.js"

const _hoisted_1 = { class: "view" }

export function render(_ctx, _cache) {
  const _component_stack = _resolveComponent("stack")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.stacks, (stack) => {
      return (_openBlock(), _createBlock(_component_stack, { stack: stack }, null, 8, ["stack"]))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}

defaultExport.render = render
export default defaultExport