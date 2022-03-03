import VNode from "./vnode";

const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;

export function createElement(
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  return _createElement(context, tag, data, children, normalizationType);
}

export function _createElement(
  context,
  tag,
  data,
  children,
  normalizationType
) {
  let vnode;
  if (normalizationType === ALWAYS_NORMALIZE) {
    // return simpleNormalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    // return simpleNormalizeChildren(children);
  }

  if (typeof tag === "string") {
    //   Todo
    vnode = new VNode(tag, data, children, undefined, undefined, context);
  }
  //   Todo
  return vnode;
}
