const lunch = document.querySelector("#lunch");

const keyframe = [
  { opacity: 0, transform: "translateY(20px)" },
  { opacity: 0.5, transform: "translateY(10px)" },
  { opacity: 1, transform: "translateY(0px)" },
];

const option = { duration: 400, fill: "forwards" };

const ob = new IntersectionObserver((entries, me) => {
  entries.forEach((v) => {
    if (v.isIntersecting) v.target.animate(keyframe, option);
    me.unobserve(v.target);
  });
});

ob.observe(lunch);
