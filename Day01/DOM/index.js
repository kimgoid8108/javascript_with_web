const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
document.body.appendChild(btn);
btn.style.color = "blue";

// div 태그로 내일은 화요일이다! 만드셈

const tomorrow = document.createElement("div");
tomorrow.innerText = "내일은 화요일이다!";
document.body.appendChild(tomorrow);

// a태그 만들어서 쿠팡 이동 내용 만드셈
const coupang = document.createElement("a");
coupang.innerText = "쿠팡 이동";
coupang.href = "https://www.coupang.com/";
document.body.appendChild(coupang);
