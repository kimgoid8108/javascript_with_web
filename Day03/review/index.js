const capitalList = document.querySelector("#capitalList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");

const data = [
  { nation: "England", capital: "London" },
  { nation: "France", capital: "Paris" },
  { nation: "Japan", capital: "Tokyo" },
];

data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.capital;
  newLi.id = v.capital;
  newLi.addEventListener("click", () => {
    capital.innerText = v.capital;
    desc.innerText = `${v.capital} is the capital city of ${v.nation}`;
  });
  capitalList.appendChild(newLi);
});
