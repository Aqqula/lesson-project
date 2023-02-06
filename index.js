"use strict";

const db = [
  "https://assets.reedpopcdn.com/Genshin-Impact-anime.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/Genshin-Impact-anime.jpg",
  "https://i.pinimg.com/736x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg",
  "https://eneyida.tv/uploads/posts/2020-02/1580680037_1.jpg",
  "https://i1.sndcdn.com/artworks-rbJgpBVptDOOoti0-c3kO9g-t500x500.jpg",
];

const image = document.querySelector(".slide>img");
image.src = db[0];
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);
