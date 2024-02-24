document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("scroll", function () {
  const image = document.querySelector(".spacer-ball");
  const rotationRate = 0.1; 
  const scrollPosition = window.pageYOffset;
  const rotation = scrollPosition * rotationRate;
  image.style.transform = `rotate(${rotation}deg)`; 
});

document.addEventListener("scroll", function () {
  const image = document.querySelector(".spacer-giraffe");
  const swayRate = 20; 
  const swayRotation = Math.sin(window.pageYOffset / 100) * swayRate;
  image.style.transform = `rotate(${swayRotation}deg)`;
});
