import Vue from "./runtime/index";
import { query } from "./util/index";

const mount = Vue.prototype.$mount;
// 重写$mount
Vue.prototype.$mount = function (el, hydrating) {
  el = el && query(el);
  const options = this.$options;

  if (!options.render) {
    let template = options.template;
    if (template) {
      // 是个字符串
      if (typeof template === "string") {
        // #开头的 是选择器
        if (template.charAt(0) === "#") {
        }
      } else if (template.nodeType) {
        // template dom元素
        // template = template.innerHTML;
      } else {
        return this;
      }
    } else if (el) {
    }
    if (template) {
      let render = () => {
        console.log("gsd render");
      };
      options.render = render;
      console.log("options: ", options);
    }
  }
  return mount.call(this, el, hydrating);
};

export default Vue;
