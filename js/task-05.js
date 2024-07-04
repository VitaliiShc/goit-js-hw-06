const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const valueByDefault = nameOutput.textContent;

nameInput.addEventListener("input", onNameInputChange);

function onNameInputChange(event) {
  if (!event.currentTarget.value) {
    nameOutput.textContent = valueByDefault;
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
}
