/*
Завдання 6
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid' );
  }
}
