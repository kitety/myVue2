export function mountComponent(vm, el, hydrating) {
  console.log("el: ", el, vm);
  vm.$el = el;
}
