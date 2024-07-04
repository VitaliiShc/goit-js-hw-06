const inputFontSizeControl = document.getElementById("font-size-control");
const textForChange = document.getElementById("text");

inputFontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textForChange.style.fontSize = `${event.currentTarget.value}px`;
}
