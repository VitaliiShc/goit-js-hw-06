/*
Завдання 4
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  counter.innerHTML = `${counterValue}`;
}

function onIncrementClick() {
  counterValue += 1;
  counter.innerHTML = `${counterValue}`;
}
