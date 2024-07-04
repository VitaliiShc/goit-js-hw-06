const body = document.querySelector("body");
const bthChangeBodyColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

bthChangeBodyColor.addEventListener("click", onClickChangeBodyColor);

function onClickChangeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
