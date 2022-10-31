const btnColorRef = document.querySelector(`.change-color`);
const textRef = document.querySelector(`.color`);
const bodyElementRef = document.querySelector(`body`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnColorRef.addEventListener(`click`, () => {
  bodyElementRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
});
