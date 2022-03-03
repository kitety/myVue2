let initProxy;
initProxy = function initProxy(vm) {
  console.log("initProxy: ", vm);
  vm._renderProxy = vm;
};

export { initProxy };
