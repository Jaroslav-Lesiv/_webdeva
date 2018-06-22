const create = tagname => document.createElement(tagname);

const div = create("div");
const span = create("span");
const nav = create("nav");
const ul = create("ul");
const li = create("li");
const strong = create("strong");
const a = create("a");
const h3 = create("h3");
const p = create("p");
const img = create("img");
const button = create("button");

const setStyle = (selector, styles = {}) => {
    console.log(styles);
    for (let [key, value] of Object.entries(styles)) {
      selector.style[key] = value;
    }
  };

export {
    div,
    span,
    nav,
    ul,
    li,
    strong,
    a,
    h3,
    p,
    img,
    button,
    setStyle
}