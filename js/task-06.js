/* Treść Zadania 6

Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) 
sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek 
walidacji (ma odpowiednią długość).

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

- Informacja o liczbie symboli, która powinna znajdować się w polu input, 
zawarta się w jego atrybucie data-length.
- Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się 
zielony, a jeśli liczba jest nieprawidłowa - czerwony.
- Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do 
plików źródłowych zadania.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

*/

const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation() {
  const inputText = input.value;
  const finalText = inputText.trim();
  const correctLength = Number(input.dataset.length);

  if (finalText.length === correctLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

/* by ChatGPT

const validationInput = document.getElementById("validation-input");

    validationInput.addEventListener("blur", () => {
      const inputValue = validationInput.value.trim();
      const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);

      if (inputValue.length === expectedLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
      } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
      }
    });


Opis działania skryptu:

1. Pobranie elementu: 
`const validationInput = document.getElementById("validation-input");`
- Pobieramy referencję do elementu input o id "validation-input" i zapisujemy ją w zmiennej `validationInput`.

2. Dodanie event listenera:
`validationInput.addEventListener("blur", () => { ... });`
- Dodajemy event listener, który nasłuchuje zdarzenia "blur" (utrata fokusu) na elemencie input.

3. Pobranie wartości i oczekiwanej długości:
`const inputValue = validationInput.value.trim();`
`const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);`
- Pobieramy wartość wpisaną przez użytkownika i usuwamy ewentualne białe znaki z początku i końca (metoda `trim()`).
- Pobieramy oczekiwaną długość z atrybutu `data-length` i konwertujemy ją na liczbę całkowitą.

4. Walidacja i dodanie klas:
if (inputValue.length === expectedLength) {
  validationInput.classList.remove("invalid");
  validationInput.classList.add("valid");
} else {
  validationInput.classList.remove("valid");
  validationInput.classList.add("invalid");
}
- Sprawdzamy, czy długość wprowadzonej wartości jest zgodna z oczekiwaną długością.
- Na podstawie wyniku walidacji dodajemy lub usuwamy klasy CSS ("valid" lub "invalid") odpowiedzialne 
za kolor obramowania pola input.

W rezultacie, po utracie fokusu, obramowanie pola input zmieni kolor na zielony, jeśli wprowadzona 
wartość ma oczekiwaną długość, lub na czerwony, jeśli jest nieprawidłowa.

*/
