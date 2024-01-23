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

//Zadanie 2
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Punkt 1. - Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
//Punkt 2. - Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
//Punkt 3. - Doda do elementu klasę item.
//Punkt 4. - Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});

//Zadanie 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images
  .map(
    (image) =>
      `<li class="gallety-image new"><img src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItems);

//Zadanie 4
//Zadanie 5
//Zadanie 6
//Zadanie 7
//Zadanie 8
//Zadanie 9
//Zadanie 10
