const image = document.getElementById("scrollImage");

const images = [
  "./Animes.jpg ",
  "./Chrome.jpg",
  "./Naruto Kakashi (2).jpg",
  "./Spidy.jpg",
];

const steps = document.querySelectorAll(".step");

window.addEventListener("scroll", () => {
  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      image.src = images[index];
    }
  });
});
