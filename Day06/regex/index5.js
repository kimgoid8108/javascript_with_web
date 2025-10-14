// 아이디 입력
const nickname = document.querySelector("#nickname");
const nickEN = document.querySelector("#nickEN");
const nickL = document.querySelector("#nickL");

// 비밀번호 입력
const password = document.querySelector("#password");
const pwE = document.querySelector("#pwE");
const pwN = document.querySelector("#pwN");
const pwS = document.querySelector("#pwS");
const pwL = document.querySelector("#pwL");

// 이메일 입력
const email = document.querySelector("#email");
const emailL = document.querySelector("#emailL");

// 버튼 활성화
const btn = document.querySelector("#btn");

//정규식
const regex_nickEN = /^[a-zA-Z0-9]+$/;
const regex_nickL = /^.{6,20}$/;
const regex_pwE = /[a-zA-Z]/;
const regex_pwN = /[0-9]/;
const regex_pwS = /[!@#$%^&*-_]/;
const regex_pwL = /^.{8,20}$/;
const regex_emailL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 아이디 입력----------------------------
nickname.addEventListener("input", () => {
  const { value } = nickname;

  nickEN.style.color = regex_nickEN.test(value) ? "green" : "#999";
  nickL.style.color = regex_nickL.test(value) ? "green" : "#999";
});
//-----------------------------------------

// 비밀번호 입력---------------------------
password.addEventListener("input", () => {
  const { value } = password;

  pwE.style.color = regex_pwE.test(value) ? "green" : "#999";
  pwN.style.color = regex_pwN.test(value) ? "green" : "#999";
  pwS.style.color = regex_pwS.test(value) ? "green" : "#999";
  pwL.style.color = regex_pwL.test(value) ? "green" : "#999";
});
//---------------------------------------------

// 이메일 입력---------------------------------

email.addEventListener("input", () => {
  const { value } = email;
  emailL.style.color = regex_emailL.test(value) ? "green" : "#999";
});

// --------------------------------------------

function validateButton() {
  const nickValid =
    regex_nickEN.test(nickname.value) && regex_nickL.test(nickname.value);
  const pwValid =
    regex_pwE.test(password.value) &&
    regex_pwN.test(password.value) &&
    regex_pwS.test(password.value) &&
    regex_pwL.test(password.value);
  const emailValid = regex_emailL.test(email.value);

  btn.disabled = !(nickValid && pwValid && emailValid);
}

[nickname, password, email].forEach((input) => {
  input.addEventListener("input", validateButton);
});
