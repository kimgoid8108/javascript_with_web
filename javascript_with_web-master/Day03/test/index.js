const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#thrid");
const fourth = document.querySelector("#forest");
const represent = document.querySelector("#represent");

const albums = [
  { img: first, src: "kamil-szumotalski-S_TOlmclnYg-unsplash.jpg" },
  { img: second, src: "silvan-arnet-rw0NoDI1G7o-unsplash.jpg" },
  { img: third, src: "tom-lorber-EiUcDs-bLpo-unsplash.jpg" },
  { img: fourth, src: "vlad-binzaru-K1CovkSghDg-unsplash.jpg" },
];

albums.forEach((v) => {
  v.img.addEventListener("click", () => {
    represent.src = v.src;
  });
});
