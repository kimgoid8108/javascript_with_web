const inventory = document.getElementById("inventory");

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "i") {
    // 대소문자 구분 없이
    e.preventDefault();
    inventory.classList.toggle("active");
    if (inventory.classList.contains("active")) {
      updateInventoryUI();
    }
  }
});
