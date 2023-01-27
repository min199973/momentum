const body = document.querySelector("body");

function handlResize() {
  let innerWidth = window.innerWidth;
  if (innerWidth <= "600") {
    body.style.background = "blue";
  } else if (600 < innerWidth && innerWidth <= "800") {
    body.style.background = "purple";
  } else if (800 < innerWidth && innerWidth <= "1000") {
    body.style.background = "yellow";
  }
}

window.addEventListener("resize", handlResize);
