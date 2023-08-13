const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');
const liArray = []

ingredients.forEach(ingredient => {
	const ingredientEl = document.createElement('li')
	ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  liArray.push(ingredientEl);
})

ingredientsList.append(...liArray);

console.log(ingredientsList);




