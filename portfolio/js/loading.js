const loading = document.querySelector("#loading");
const loading_screen = document.querySelector("#loading-screen");
const loading_text = document.querySelector("#loading-text");

window.addEventListener("load", () => {
  loading.animate(
    [
      { opacity: 1, transform: "translateY(0%)" },
      { opacity: 0.5, transform: "translateY(-25%)" },
      { opacity: 0, transform: "translateY(-50%)" },
    ],
    {
      duration: 1000,
      delay: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );

  loading_screen.animate(
    [
      { transform: "translateY(100vh)", opacity: 0 },
      { translate: "translateY(0)", opacity: 1 },
      { translate: "translateY(-100vh)", opacity: 0 },
    ],
    {
      duration: 1500,
      delay: 800,
      easing: "ease",
      fill: "forwards",
    }
  );
});
