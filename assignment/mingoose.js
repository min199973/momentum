const body = document.querySelector("body");

window.onresize = function (event) {
  const innerWidth = window.innerWidth;
  if (body.classList.contains(innerWidth)) {
    h1.classList.remove(innerWidth);
};
