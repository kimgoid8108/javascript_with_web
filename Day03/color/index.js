const navList = document.querySelector("#navList");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const box = document.querySelector("#box");

const data = [
  { title: "Home", color: "red" },
  { title: "News", color: "green" },
  { title: "Contact", color: "blue" },
  { title: "About", color: "purple" },
];

data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.title;
  newLi.id = v.title;

  newLi.addEventListener("click", () => {
    title.innerText = v.title;
    desc.innerText = `${v.title} is where the heart is...`;
    box.style.backgroundColor = v.color;
  });
  navList.appendChild(newLi);
});
