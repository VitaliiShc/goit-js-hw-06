/*
Завдання 9
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

const body = document.querySelector('body');
const bthChangeBodyColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

bthChangeBodyColor.addEventListener('click', onClickChangeBodyColor);

function onClickChangeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
