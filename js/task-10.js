/*
Завдання 10 (виконувати не обов'язково)
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesQuantity = document.querySelector('#controls > input');
const resContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(boxesQuantity.value);
  const hasBoxesQuantity = resContainer.childElementCount;
  let markup = '';

  if (!hasBoxesQuantity) {
    for (let i = 0; i < amount; i += 1) {
      markup += `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10 + 'px'
      }; height: ${30 + i * 10 + 'px'}'></div>`;
    }
  } else {
    for (let i = hasBoxesQuantity; i < amount + hasBoxesQuantity; i += 1) {
      markup += `<div style='background-color: ${getRandomHexColor()}; width: ${
        30 + i * 10 + 'px'
      }; height: ${30 + i * 10 + 'px'}'></div>`;
    }
  }
  resContainer.insertAdjacentHTML('beforeend', markup);
  boxesQuantity.value = '';
}

function destroyBoxes() {
  boxesQuantity.value = '';
  resContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
