const h1 = document.querySelector("div.hello:first-child h1");

function handelTitleClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handelTitleClick);
