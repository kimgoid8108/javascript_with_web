const heading = document.querySelector("#heading");
const title = document.querySelector("#title");

heading.animate(
  [
    { opacity: 0, transform: "translateY(20px)" },
    { opacity: 0.5, transform: "translateY(10px)" },
    { opacity: 1, transform: "translateY(0px)" },
  ],
  { duration: 400 }
);

title.animate(
  [
    { opacity: 0, transform: "translateY(30px)" },
    { opacity: 0.3, transform: "translateY(20px)" },
    { opacity: 0.7, transform: "translateY(10px)" },
    { opacity: 1, transform: "translateY(0px)" },
  ],
  { duration: 1150 }
);

const menuBtn = document.querySelector("#menu");
const screen = document.querySelector("#screen");
const closeMenu = document.querySelector("#close");

menuBtn.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
  secreen.style.backgroundColor = "black";
  opacity = "0.7";
});

closeMenu.addEventListener("click", () => {
  screen.classList.toggle("show");
  screen.classList.toggle("hidden");
});
