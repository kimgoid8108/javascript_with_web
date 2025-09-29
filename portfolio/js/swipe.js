// Swiper 초기화
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
