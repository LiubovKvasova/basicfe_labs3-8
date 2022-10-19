'use strict';

const firstEl = document.getElementById('first-el');
const secondEl = document.querySelector('#second-el');

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