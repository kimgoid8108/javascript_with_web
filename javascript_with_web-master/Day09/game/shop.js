const owner = document.querySelector("#owner");
const shopinven = document.querySelector("#shopinven");
const close = document.querySelector("#close");

const potion = document.querySelector("#potion");
const potioninfo = document.querySelector("#potioninfo");
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
  potioninfo.style.display = "block";
});

yes.addEventListener("click", () => {
  potioninfo.style.display = "none";
});

no.addEventListener("click", () => {
  potioninfo.style.display = "none";
});
