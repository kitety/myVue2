export function query(el) {
  if (typeof el === "string") {
    const selector = document.querySelector(el);
    if (!selector) {
      return document.createElement("div");
    }
    return selector;
  } else {
    return el;
  }
}
