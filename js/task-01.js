const allCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((elem) => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}\nElements: ${elem.lastElementChild.children.length}`
  );
});
