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

// Swiper vertical 초기화
// -----------------------------------------------
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  mousewheel: true,
});

// 메뉴 클릭 시 Swiper 슬라이드 이동
// -----------------------------------------------
const menuItems = document.querySelectorAll(".menu-list li");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    swiper.slideTo(index);

    menuBar.classList.add("hidden");
    menuBar.classList.remove("show");
  });
});
