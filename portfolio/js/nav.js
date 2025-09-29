// 메뉴 열기/닫기
// -----------------------------------------------
const menuBtn = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menuBar = document.querySelector("#menu-bar");

const menuToggle = () => {
  menuBar.classList.toggle("show");
  menuBar.classList.toggle("hidden");
};

menuBtn.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);
