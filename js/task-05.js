/* Treść Zadania 5

Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) 
wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie 
powinien wyświetlić się tekst "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

*/

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value.trim();
  }
});

/* by ChatGPT

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim();

    // Sprawdzamy, czy pole input jest puste
    if (inputValue === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = inputValue;
    }
  });



Opis działania skryptu:

W tym skrypcie, aby interaktywnie reagować na zmiany w polu input i aktualizować zawartość 
spana w zależności od wprowadzonych danych. Oto szczegółowe omówienie wykonanych operacji:

1. Pobranie referencji do elementów DOM:
- `nameInput` - Uzyskujemy referencję do elementu input o id "name-input" za pomocą `document.getElementById("name-input")`.
- `nameOutput` - Uzyskujemy referencję do elementu span o id "name-output" za pomocą `document.getElementById("name-output")`.

2. Dodanie Event Listenera:
- `nameInput.addEventListener("input", () => {...})` - Dodajemy event listener do pola input, nasłuchujący zdarzenia "input". 
Zdarzenie "input" występuje, gdy użytkownik wpisuje, usuwa lub modyfikuje tekst w polu input.

3. Obsługa Zdarzenia Input:
- `const inputValue = nameInput.value.trim()` - Pobieramy aktualną wartość pola input i usuwamy białe znaki na początku 
i końcu przy użyciu `trim()`. Wartość jest przypisywana do zmiennej `inputValue`.
- Warunek sprawdzający, czy `inputValue` jest puste:

if (inputValue === "") {
  nameOutput.textContent = "Anonymous";
} else {
  nameOutput.textContent = inputValue;
}

- Jeśli `inputValue` jest puste, ustawiamy tekst w spanie (`nameOutput.textContent`) na "Anonymous".
- W przeciwnym razie, jeśli `inputValue` nie jest puste, ustawiamy tekst w spanie na aktualną wartość pola input.

Dzięki temu kodowi, po wpisaniu tekstu w polu input, zawartość spana "name-output" zostanie dynamicznie zaktualizowana 
w zależności od wprowadzonych danych, a jeśli pole input jest puste, span pokaże "Anonymous".


*/
