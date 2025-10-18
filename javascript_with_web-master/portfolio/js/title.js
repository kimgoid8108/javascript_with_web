const first_text = document.querySelector("#first-text");
const second_text = document.querySelector("#second-text");

const keyframes = [
  { opacity: 0, transform: "translate(-55%, 80%) translateY(20%)" },
  { opacity: 0.5, transform: "translate(-55%, 80%) translateY(0%)" },
  { opacity: 1, transform: "translate(-55%, 80%) translateY(-10%)" },
];

const option = {
  duration: 2000,
  delay: 2000,
  fill: "forwards",
  easing: "ease-out",
};

first_text.animate(keyframes, option);
second_text.animate(keyframes, option);
