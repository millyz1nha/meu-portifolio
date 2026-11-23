const btn = document.getElementById("info-btn");
const section = document.getElementById("info-extra");

btn.addEventListener("click", () => {
  const estaVisivel = !section.classList.contains("hidden");

  if (estaVisivel) {
    section.classList.add("hidden");
    btn.textContent = "Ver mais";
  } else {
    section.classList.remove("hidden");
    btn.textContent = "Ver menos";
  }
});

let slideAtual = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

setInterval(() => {
  slideAtual = (slideAtual + 1) % totalSlides;
  track.style.transform = `translateX(-${slideAtual * 100}%)`;
}, 2000);
