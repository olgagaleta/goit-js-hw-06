const valueEl = document.querySelector(`#value`);
const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);

let counterValue = 0;

decrementBtnEl.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1;
});

incrementBtnEl.addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1;
});
