function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const showColorName = () => {
  textEl.textContent = bodyEl.style.backgroundColor = getRandomHexColor();
  
};


buttonEl.addEventListener('click', showColorName);



