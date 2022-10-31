const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsRef = document.querySelector(`#ingredients`);

const listIngredientsRef = ingredients.map((ingredient) => {
  const addElement = document.createElement(`li`);
  addElement.textContent = ingredient;
  addElement.classList.add(`item`);
  return addElement;
});

ulIngredientsRef.append(...listIngredientsRef);
