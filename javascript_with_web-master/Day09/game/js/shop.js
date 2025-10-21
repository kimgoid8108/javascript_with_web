const owner = document.querySelector("#owner");
const shopinven = document.querySelector("#shopinven");
const close = document.querySelector("#close");

const potion = document.querySelector("#potion");
const potioninfo = document.querySelector("#potioninfo");

const sword = document.querySelector("#sword");
const swordinfo = document.querySelector("#swordinfo");

const potionYes = document.querySelector("#potionYes");
const potionNo = document.querySelector("#potionNo");

const swordYes = document.querySelector("#swordYes");
const swordNo = document.querySelector("#swordNo");

owner.addEventListener("click", () => {
  shopinven.style.display = "block";
});

close.addEventListener("click", () => {
  shopinven.style.display = "none";
});

potion.addEventListener("click", () => {
  potioninfo.style.display = "block";
});

potionYes.addEventListener("click", () => {
  alert("구매완료");
  addToInventory("포션🧪");
  potioninfo.style.display = "none";
});

potionNo.addEventListener("click", () => {
  potioninfo.style.display = "none";
});

sword.addEventListener("click", () => {
  swordinfo.style.display = "flex";
});

swordYes.addEventListener("click", () => {
  alert("구매완료");
  addToInventory("철검🗡️");
  swordinfo.style.display = "none";
});

swordNo.addEventListener("click", () => {
  swordinfo.style.display = "none";
});

function addToInventory(itemName) {
  let inventory = JSON.parse(localStorage.getItem("inventory")) || {};

  if (inventory[itemName]) {
    inventory[itemName] += 1;
  } else {
    inventory[itemName] = 1;
  }

  localStorage.setItem("inventory", JSON.stringify(inventory));
  updateInventoryUI();
}

function updateInventoryUI() {
  const inventoryList = document.getElementById("inventory-items");
  if (!inventoryList) return;

  inventoryList.innerHTML = "";

  const inventory = JSON.parse(localStorage.getItem("inventory")) || {};

  for (const [item, count] of Object.entries(inventory)) {
    const li = document.createElement("li");
    li.textContent = count > 1 ? `${item} x${count}` : item;
    inventoryList.appendChild(li);
  }
}
