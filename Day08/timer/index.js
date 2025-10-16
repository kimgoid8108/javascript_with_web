const Roket = document.querySelector("#Roket");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let count = 4;
  const interval = setInterval(() => {
    Roket.innerHTML = `🚀${count}초전`;
    count--;

    if (count < 0) {
      clearInterval(interval);
      Roket.innerHTML = " 🚀발사!";
    }
  }, 1000);
});
