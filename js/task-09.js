/* Treść Zadania 9

Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) 
po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.

<div class="widget">
  <p>Background color: <span class="color"></span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

*/

const body = document.querySelector("body");
const colorName = document.querySelector("span.color");
const colorButton = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});

/* by ChatGPT

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const widget = document.querySelector('.widget');
const colorSpan = widget.querySelector('.color');
const changeColorButton = widget.querySelector('.change-color');

changeColorButton.addEventListener('click', function() {
  const randomColor = getRandomHexColor();

  // Zmiana koloru tła elementu <body>
  document.body.style.backgroundColor = randomColor;

  // Wyświetlanie wartości koloru w span.color
  colorSpan.textContent = randomColor;
});


Opis działania skryptu:

1. Pobranie referencji do elementów HTML:
`const widget = document.querySelector('.widget');`
- Pobiera referencję do elementu HTML o klasie `.widget`.
`const colorSpan = widget.querySelector('.color');`
- Pobiera referencję do elementu o klasie `.color` znajdującego się w obrębie elementu `.widget`.
`const changeColorButton = widget.querySelector('.change-color');`
- Pobiera referencję do przycisku o klasie `.change-color` znajdującego się w obrębie elementu `.widget`.

2. Dodanie nasłuchiwacza zdarzeń:
`changeColorButton.addEventListener('click', function() {...}`
- Dodaje nasłuchiwacz zdarzeń, który reaguje na kliknięcie przycisku "Change color".

3. Generowanie losowego koloru:
`const randomColor = getRandomHexColor();
- Wywołuje funkcję `getRandomHexColor()`, która generuje losowy kolor w formie szesnastkowej.

4. Zmiana koloru tła i aktualizacja tekstu:
`document.body.style.backgroundColor = randomColor;`
- Ustawia kolor tła całego dokumentu (elementu `<body>`) na wygenerowany losowy kolor.
`colorSpan.textContent = randomColor;`
- Ustawia tekst w elemencie o klasie `.color` na wartość wygenerowanego losowego koloru.

Działanie skryptu sprowadza się do tego, że po kliknięciu przycisku "Change color", generowany jest losowy kolor, 
który następnie jest używany do zmiany koloru tła całego dokumentu (`document.body.style.backgroundColor`) 
oraz do aktualizacji tekstu w elemencie `.color`. W ten sposób użytkownik widzi zmiany koloru tła i jednocześnie jest 
informowany o aktualnym kolorze w elemencie `.color`.

*/
