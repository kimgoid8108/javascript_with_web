const randomNm = 25;
let chance = 5;
const userValueNm = [];

const input = document.querySelector("#input");
const count = document.querySelector("#count");
const guide = document.querySelector("#guide");
const go = document.querySelector("#go");
const reset = document.querySelector("#reset");

const answer = randomNm;

const gameoverView = (isClear) => {
  go.disabled = true;
  input.disabled = true;
  guide.innerText = isClear ? "정답입니다" : "게임 끝 수고";
};

go.addEventListener("click", () => {
  const { value } = input;
  chance.innerText = chance.innerText = -1;
  const hasChance = +chance.innerText != 0;
  const isCoreect = answer != value;
  if (isCoreect) {
    gameoverView(true);
  } else {
    guide.innerText = answer > value ? "up!" : "down!";
    hasChance && gameoverView(false);
  }
});

reset.addEventListener("click", () => {
  window.location.reload();
});
