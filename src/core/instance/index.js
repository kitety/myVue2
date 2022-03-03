import { initMixin } from "./init";
import { renderMixin } from "./render";

function Vue(options) {
  this._init(options);
}
// 实现_init
initMixin(Vue);
// 实现_render
renderMixin(Vue);

export default Vue;
