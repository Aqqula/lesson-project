"use strict";

const db = [
  "https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/Genshin-Impact-anime.jpg",
  "https://i.pinimg.com/736x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg",
  "https://i.pinimg.com/564x/33/1e/f8/331ef84fb395c652c97624a16a8ba96b.jpg",
  "https://i.pinimg.com/564x/94/a7/f2/94a7f20185f674a908e955c031ac13ed.jpg",
];

const slider = new Slider(db);

const image = document.querySelector(".slide>img");
function updateView() {
  image.src = slider.currentSlide;
}

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);

prevBtn.addEventListener("click", () => {
  slider.currentIndex = slider.prev();
  updateView();
});
nextBtn.addEventListener("click",() => {
  slider.currentIndex = slider.next();
  updateView();
});
