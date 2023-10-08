/*
Завдання 7
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const inputFontSizeControl = document.getElementById('font-size-control');
const textForChange = document.getElementById('text');

inputFontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
     textForChange.style.fontSize = `${event.currentTarget.value}px`;
}



