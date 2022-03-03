import Watcher from "../observer/watcher";
import { noop } from "../util/index";

export function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    const vm = this;
    console.log("gsd vnode: ", vnode);
  };
}

export function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  let updateComponent;

  console.log("vm._render(): ", vm._render());
  //   render 可以得到虚拟dom，再调用update方法
  updateComponent = () => {
    vm._update(vm._render(), hydrating);
  };
  new Watcher(vm, updateComponent, noop, {}, true);
  return vm;
}
