/* Treść Zadania 7

Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) 
i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas zmiany 
wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

*/

const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

function changeFontSize() {
  span.style.fontSize = input.value + "px";
}

changeFontSize();

input.addEventListener("input", changeFontSize);

/* by ChatGPT

const fontSizeControl = document.getElementById("font-size-control");
      const textSpan = document.getElementById("text");

      fontSizeControl.addEventListener("input", (event) => {
        const fontSizeValue = event.target.value;
        textSpan.style.fontSize = `${fontSizeValue}px`;
      });

      
Opis działania skryptu:

1. `const fontSizeControl = document.getElementById("font-size-control");` 
- Pobiera referencję do elementu HTML o identyfikatorze "font-size-control", który jest suwakiem (`<input type="range" />`).

2. `const textSpan = document.getElementById("text");` 
- Pobiera referencję do elementu HTML o identyfikatorze "text", który jest spanem (`<span>`), w którym znajduje się tekst "Abracadabra!".

3. `fontSizeControl.addEventListener("input", (event) => {` 
- Dodaje event listener do elementu suwaka (font-size-control) na zdarzenie `input`, co oznacza, że funkcja 
zwrotna (callback) będzie wywoływana za każdym razem, gdy wartość suwaka ulegnie zmianie.

4. `const fontSizeValue = event.target.value;` 
- Pobiera aktualną wartość suwaka z obiektu zdarzenia (`event`) poprzez odczytanie `value` z elementu, który wywołał zdarzenie (`event.target`).

5. `textSpan.style.fontSize = `${fontSizeValue}px`;` 
- Ustawia rozmiar tekstu w elemencie span (`textSpan`) na wartość odczytaną z suwaka. Zastosowanie szablonu 
stringa pozwala na dodanie jednostki `px`, a całość jest przypisana do właściwości `fontSize` w stylu inline elementu. 
Dzięki temu, zmiana wartości suwaka natychmiastowo wpływa na rozmiar tekstu w elemencie span.

*/
