const owner = document.querySelector("#owner");
const shopinven = document.querySelector("#shopinven");
const close = document.querySelector("#close");

const potion = document.querySelector("#potion");
const postioninfo = document.querySelector("#potioninfo");
const sword = document.querySelector("#sword");

const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

owner.addEventListener("click", () => {
  shopinven.style.display = "block";
});

close.addEventListener("click", () => {
  shopinven.style.display = "none";
});

potion.addEventListener("click", () => {
  postioninfo.style.display = "block";
});

yes.addEventListener("click", () => {
  postioninfo.style.display = "none";
});

no.addEventListener("click", () => {
  postioninfo.style.display = "none";
});
