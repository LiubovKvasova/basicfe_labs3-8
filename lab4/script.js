'use strict';

const firstEl = document.getElementById("first-el");
const secondEl = document.querySelector("#second-el");

const addImg = document.querySelector(".add-img-button");
const enlargeImg = document.querySelector(".enlarge-img-button");
const reduceImg = document.querySelector(".reduce-img-button");
const removeImg = document.querySelector(".remove-img-button");
const imgButton = document.querySelector(".img-button");
const image = document.querySelector(".image");

let scale = 1;

/* Task 1 */
const changeColor = (el, change) => {
  const randomBackColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  el.style[change] = randomBackColor;
};

firstEl.addEventListener("click", () => {
  changeColor(firstEl, "background");
  changeColor(firstEl, "color");
});

secondEl.addEventListener("click", () => {
  changeColor(secondEl, "background");
  changeColor(secondEl, "color");
});

/* Task 2 */
addImg.addEventListener("click", () => {
  imgButton.style.display = "block";
  scale = 1;
  image.style.transform = `scale(${scale})`; 
});

enlargeImg.addEventListener('click', () => {
  if(scale < 1.5) {
    scale += 0.1;
    image.style.transform = `scale(${scale})`
  }
});

reduceImg.addEventListener('click', () => {
  if(scale > 0.75) {
    scale -= 0.1;
    image.style.transform = `scale(${scale})`
  }
});

removeImg.addEventListener("click", () => {
  imgButton.style.display = "none";
});