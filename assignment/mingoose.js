const random_number = document.querySelector("#random_number");
const chose_num = document.querySelector("#chose_num");
const input_num = document.querySelector("#input_num");
const max = document.querySelector("#max");
const win_or_lose = document.querySelector("#win_or_lose");

const HIDDEN_CLASSNAME = "hidden";
const WOR = "win_or_lose";

function onPlayButton(event) {
  event.preventDefault();
  chose_num.classList.remove(HIDDEN_CLASSNAME);
  const number = input_num.value;
  const max1 = max.value;
  const random_number = parseInt(Math.round(Math.random() * max1));
  chose_num.innerText = `You chose ${number}, the machine chose ${random_number}`;
  if (number == random_number) {
    win_or_lose.classList.remove(HIDDEN_CLASSNAME);
    win_or_lose.innerText = "You won!";
  } else {
    win_or_lose.classList.remove(HIDDEN_CLASSNAME);
    win_or_lose.innerText = "You Lost!";
  }
}

random_number.addEventListener("submit", onPlayButton);
