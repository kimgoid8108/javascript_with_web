const password = document.querySelector("#password");
const verifyPassword = document.querySelector("#verifyPassword");
const btn = document.querySelector("#btn");

password.addEventListener("input", () => {
  btn.disabled = password.value != verifyPassword.value;
});
verifyPassword.addEventListener("input", () => {
  btn.disabled = password.value != verifyPassword.value;
});
