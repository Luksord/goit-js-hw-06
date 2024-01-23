/* Treść Zadania 10

Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza 
liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie 
się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Utwórz funkcję createBoxes(amount), która przyjmuje jeden parametr - liczbę. 
Funkcja tworzy tyle elementów <div>, ile wybrano w amount i dodaje je do div#boxes.
1. Wymiary pierwszego <div> - 30px na 30px.
2. Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
3. Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej 
funkcji getRandomHexColor aby otrzymać kolor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

*/

const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];

  if (amount >= numberInput.min && amount <= numberInput.max) {
    for (let i = 0; i < numberInput.value; i++) {
      const box = document.createElement("div");
      const randomColor = getRandomHexColor();

      box.style.backgroundColor = randomColor;
      box.style.height = `${30 + 10 * i}px`;
      box.style.width = `${30 + 10 * i}px`;
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  } else {
    alert("Enter a number from 1 to 100");
  }

  numberInput.value = "";
}

function destroyBoxes() {
  boxesContainer.textContent = "";
}

/* by ChatGPT

function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function createBoxes() {
      const amountInput = document.getElementById('amountInput');
      const amount = parseInt(amountInput.value);

      if (isNaN(amount) || amount < 1) {
        alert('Please enter a valid number greater than 0.');
        return;
      }

      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';

      let boxSize = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);

        boxSize += 10;
      }
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = '';
    }

    
Opis działania skryptu:

1. Funkcja getRandomHexColor():
- Jest to funkcja generująca losowy kolor w formacie szesnastkowym (HEX).
- Wykorzystuje `Math.random()` do uzyskania losowej liczby z zakresu od 0 do 16777215 (co odpowiada maksymalnej liczbie kolorów HEX).
- Następnie, za pomocą toString(16) przekształca tę liczbę na reprezentację szesnastkową.
- Metoda `padStart(6, '0')` dodaje zera na początku, aby zawsze uzyskać 6 znaków (kolor HEX ma zawsze 6 cyfr).

2. Funkcja createBoxes():
- Pobiera wartość wpisaną przez użytkownika w polu input (`amountInput`) i parsuje ją na liczbę.
- Sprawdza, czy wprowadzona liczba jest poprawna (nie jest NaN i jest większa niż 0).
- Pobiera kontener (`boxesContainer`), w którym będą umieszczane elementy div.
- Czyści zawartość kontenera, aby usunąć istniejące elementy.
- Inicjuje zmienną `boxSize` na 30 (rozmiar pierwszego diva).
- W pętli tworzy elementy div o klasie `box` o zmiennym rozmiarze i losowym kolorze tła.
- Dodaje każdy nowo utworzony div do kontenera `boxesContainer`.

3. Funkcja destroyBoxes():
- Pobiera kontener (`boxesContainer`).
- Czyści zawartość kontenera, co skutkuje usunięciem wszystkich istniejących elementów div.

4. Obsługa przycisków:
- Przycisk "Create" ma atrybut `onclick`, który wywołuje funkcję `createBoxes()` po jego kliknięciu.
- Przycisk "Destroy" ma atrybut `onclick`, który wywołuje funkcję `destroyBoxes()` po jego kliknięciu.

Działanie skryptu polega na dynamicznym tworzeniu i usuwaniu elementów div na podstawie liczby 
wpisanej przez użytkownika. Wszystko odbywa się bez konieczności odświeżania strony.

*/
