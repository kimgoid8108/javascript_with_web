const btn1 = document.createElement("button");
btn1.innerText = "-";
btn1.addEventListener("click", () => {
  count.innerText = +count.innerText == 0 ? 0 : +count.innerText - 1;
  count.style.color = +count.innerText > 10 ? "blue" : "black";
});

document.body.appendChild(btn1);

const count = document.createElement("span");
count.innerText = "0";

document.body.appendChild(count);

const btn2 = document.createElement("button");
btn2.innerText = "+";
btn2.addEventListener("click", () => {
  count.innerText = +count.innerText + 1;
  count.style.color = +count.innerText > 10 ? "blue" : "black";
});

document.body.appendChild(btn2);

// count.innerText = +count.innerText + 1;
