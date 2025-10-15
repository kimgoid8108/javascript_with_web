const start = document.querySelector("#start");
const makeRandomTime = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};
const animals = ["🐎", "🐇", "🐢", "🐒", "🐆", "🐅"];

start.addEventListener("click", () => {
  const makeRace = (name) => {
    const time = makeRandomTime(1, 10);
    return new Promise((success) => {
      setTimeout(() => success({ name, time }), time);
    });
  };
  Promise.all(animals.map((v) => makeRace(v))).then((v) => console.log(v));
});
