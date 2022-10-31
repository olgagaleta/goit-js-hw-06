const listRef = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${listRef.length}`);

const ulRef = document.querySelectorAll("#categories>li");
ulRef.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`
  );
});
