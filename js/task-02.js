const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
});

ingredientsList.append(...markup);
