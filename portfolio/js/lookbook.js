const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll("#thumbnails li img");

thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener("mouseover", (event) => {
    mainImage.src = event.target.src;

    mainImage.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 500,
      fill: "forwards",
    });
  });
});
