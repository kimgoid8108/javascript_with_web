const input = document.querySelector("#input");
const hasCat = /\bcat\b/;

input.addEventListener("input", () => {
  if (input.value.match(hasCat)) {
    console.log("고양이 포함");
  } else {
    console.log("고양이 없음");
  }
});
