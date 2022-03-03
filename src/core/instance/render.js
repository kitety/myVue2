import { createElement } from "../vdom/create-element";

// initRender
export function initRender(vm) {
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);
  console.log("vm.$createElement: ", vm.$createElement);
}
export function renderMixin(Vue) {
  Vue.prototype._render = function () {
    const vm = this;
    const { render, _parentNode } = vm.$options;
    console.log("render: ", render);
    let vnode = "111";
    vnode = render.call(vm._renderProxy, vm.$createElement);
    console.log("vnode: ", vnode);
    return vnode;
  };
}
