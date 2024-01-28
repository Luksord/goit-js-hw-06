/* Treść Zadania 2

W HTML znajduje się pusta lista ul#ingredients.

<ul id="ingredients"></ul>

W JavaScript znajduje się tablica ciągów.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


Napisz skrypt, który dla każdego elementu tablicy ingredients:
1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
3. Doda do elementu klasę item.
4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

// nowe
const items = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
});

ingredientsList.append(...items);

/* stare
const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
*/
