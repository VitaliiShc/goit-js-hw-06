let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementClick);
incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  counter.innerHTML = `${counterValue}`;
}

function onIncrementClick() {
  counterValue += 1;
  counter.innerHTML = `${counterValue}`;
}
