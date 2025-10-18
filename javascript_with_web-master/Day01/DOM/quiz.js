// 유저에게 태그와 내용을 프롬포트 한번에 입력 받고
// 올바른 태그를 넣으면 태그와 내용 만들기

// ex) div 김치찌개 -> <div>김치찌개</div>

// const [tag, contents] = prompt("태그와 내용을 입력하시오").split(" ");
// const newTag = document.createElement("tag");
// newTag.innerText = contents;
// document.body.appendChild(newTag);

// 유저에게 내용을 프롬포트로 한번에 입력 받고
// 띄어쓰기 기준으로 해서 내용들을 버튼 태그로 만들어서 나타내기
// ex) 김치 순대 떡볶이 사탕

const contents = prompt("먹고 싶은거 적기").split(" ");

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  document.body.appendChild(btn);
});
