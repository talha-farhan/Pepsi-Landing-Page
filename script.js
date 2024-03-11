"use strict";

function imageSlider(image) {
  document.querySelector(".pepsi").src = image;
}

function changeBackgroundColor(color) {
  const sec = document.querySelector(".sec");
  sec.style.background = color;
}
