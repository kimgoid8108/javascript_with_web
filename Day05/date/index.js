const date = new Date();
const time = document.querySelector("#time");
const btn = document.querySelector("#new");

// 브라우저 화면에
// 현재시간 시 분 초 나오도록하기

time.innerText = `현재시간:${date.getHours()}시 ${date.getMinutes()}분${date.getSeconds()}초`;

btn.addEventListener("click", () => {
  const date = new Date();
  time.innerText = `현재시간:${date.getHours()}시 ${date.getMinutes()}분${date.getSeconds()}초`;
});
