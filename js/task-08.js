const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled in!");
  } else {
    const resObj = { email: email.value, password: password.value };
    console.log(resObj);
    event.currentTarget.reset();
  }
}
