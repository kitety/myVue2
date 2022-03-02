import { initMixin } from "./init";

function Vue(options) {
  this._init(options);
}
// 实现_init
initMixin(Vue);

export default Vue;
