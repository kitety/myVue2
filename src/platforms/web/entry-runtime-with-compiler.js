import Vue from "./runtime/index";
Vue.prototype.$mount = function (el, hydrating) {
  console.log("$mount el: ", el);
};

export default Vue;
