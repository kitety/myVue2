import { initRender } from "./render";
import { initProxy } from "./proxy";

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    console.log("11 options: ", options, this);
    // 先写在这里
    if (options && options._isComponent) {
      this.$mount(options.el);
    } else {
      // mergeOption
      // options挂载在vm属性上
      vm.$options = options;
    }

    // init render
    // 初始化render
    initProxy(vm);
    initRender(vm);

    // 挂载
    if (vm.$options.el) {
      console.log("vm.$options.el: ", vm.$options.el);
      vm.$mount(vm.$options.el);
    }
  };
}
