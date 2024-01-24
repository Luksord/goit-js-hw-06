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
