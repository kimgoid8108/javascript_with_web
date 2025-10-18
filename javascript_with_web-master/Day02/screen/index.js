const menuBtn = document.querySelector("#menu");
const screen = document.querySelector("#screen");
const closeMenu = document.querySelector("#close");

menuBtn.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});
