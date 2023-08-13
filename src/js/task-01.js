"use strict";

const ulEl = document.querySelector("#categories");
const liEl = ulEl.querySelectorAll(".item");
console.log("Number of categories: ", liEl.length);



const categoriesArray = document.querySelectorAll('h2');
categoriesArray.forEach((category) => {
  console.log('Category:', category.textContent);
  console.log('Elements:', category.nextElementSibling.children.length);
});
