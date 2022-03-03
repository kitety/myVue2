export function renderMixin(Vue) {
  Vue.prototype._render = function () {
    const vm = this;
    const { render, _parentNode } = vm.$options;
    let vnode = "111";
    vnode = render.call(vm._renderProxy, vm.$createElement);
    console.log("vnode: ", vnode);
    return vnode;
  };
}
