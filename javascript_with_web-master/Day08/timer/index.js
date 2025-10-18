const Roket = document.querySelector("#Roket");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let timer = 4;
  let interval = setInterval(() => {
    Roket.innerHTML = `🚀${timer}초전`;
    timer = timer - 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    Roket.innerHTML = `🧨펑!!!!!🧨`;
  }, 5000);
});
