//Zadanue 1
//Punkt 1 - Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
const categoriesList = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesList.length}`);
//Punkt 2 - Dla każdego elementu li.item na liście ul#categories,
// znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>)
// i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
