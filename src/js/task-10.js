function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector(".number");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = elements => {
	const elementsToAdd = []
	for (let i = 0; i < elements; i++) {
		const divEl = document.createElement('div')
		divEl.style.height = `${30 + 10 * i}px`
		divEl.style.width = `${30 + 10 * i}px`
		divEl.style.background = getRandomHexColor()
    elementsToAdd.push(divEl);
	}
  return elementsToAdd;
}

const destroyBoxes = () => {
	boxesEl.innerHTML = ''
}

createBtn.addEventListener('click', createBoxes)

// console.log(inputNum.value)

destroyBtn.addEventListener('click', destroyBoxes)
