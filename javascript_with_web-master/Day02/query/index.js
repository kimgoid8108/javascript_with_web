const minus = document.querySelector("#minus");
minus.innerText = "-";
minus.addEventListener("click", () => {
  num.innerText = +num.innerText - 1;
  if (+num.innerText > 5) {
    minus.classList.add("down");
  } else {
    minus.classList.remove("down");
  }
});

const num = document.querySelector("#num");
num.innerText = "0";

const plus = document.querySelector("#plus");
plus.innerText = "+";
plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  if (num.innerText > 5) {
    plus.classList.add("overFive");
  } else {
    plus.classList.remove("overFive");
  }

  //   plus.className = +num.innerText > 5 ? "myButton overFive" : "myButton";
});
