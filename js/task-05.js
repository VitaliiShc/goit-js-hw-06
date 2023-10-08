/*
Завдання 5
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const valueByDefault = nameOutput.textContent;

nameInput.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
  if (!event.currentTarget.value) {
    nameOutput.textContent = valueByDefault;
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
