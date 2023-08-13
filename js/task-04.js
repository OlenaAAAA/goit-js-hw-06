let counterValue = 0;
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrBtn = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onClickIncrBtn = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrBtn);
incrementBtn.addEventListener('click', onClickIncrBtn);