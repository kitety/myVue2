import Vue from "./runtime/index";
import { query } from "./util/index";
Vue.prototype.$mount = function (el, hydrating) {
  el = el && query(el);
  console.log("el: ", el);
  const options = this.$options;

  if (!options.render) {
    let template = options.template;
    if (template) {
      console.log("template: ", template);
      // 是个字符串
      if (typeof template === "string") {
      } else if (template.nodeType) {
        // template dom元素
        template = template.innerHTML;
      } else {
        return this;
      }
    } else if (el) {
    }
  }
};

export default Vue;
