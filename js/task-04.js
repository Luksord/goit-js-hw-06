/* Treść Zadania 4

Licznik składa się z elementu span i przycisków, które, po ich kliknięciu, powinny zwiększać 
i zmniejszać jego wartość o jednostkę.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

1. Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj 
jej początkową wartość 0.
2. Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
3. Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

*/

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const value = document.querySelector("#value");
let counterValue = 0;

function increase() {
  counterValue++;
  value.innerHTML = counterValue;
}

function decrease() {
  counterValue--;
  value.innerHTML = counterValue;
}

incrementButton.addEventListener("click", increase);
decrementButton.addEventListener("click", decrease);

/* by ChatGPT

<script>
    let counterValue = 0;

    const decrementButton = document.querySelector(
        '[data-action="decrement"]'
    );
    const incrementButton = document.querySelector(
        '[data-action="increment"]'
    );
    const valueSpan = document.getElementById("value");

    decrementButton.addEventListener("click", () => {
        counterValue -= 1;
        updateCounter();
    });

    incrementButton.addEventListener("click", () => {
        counterValue += 1;
        updateCounter();
    });

    // Step 3
    function updateCounter() {
        valueSpan.textContent = counterValue;
    }
</script>

Opis działania skryptu:

counterValue jest zmienną przechowującą aktualną wartość licznika.
Event listenery są dodawane do przycisków "Decrement" i "Increment", które odpowiednio zmniejszają i zwiększają wartość counterValue.
Funkcja updateCounter aktualizuje widok HTML, ustawiając tekst elementu span na aktualną wartość licznika.
Po każdym kliknięciu przycisku, wartość licznika zostanie zaktualizowana, a widok na stronie również.

*/
