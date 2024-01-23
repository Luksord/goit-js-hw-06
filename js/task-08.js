/* Treść Zadania 8

Napisz skrypt zarządzania formularzem logowania.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>


1. Funkcjonalność przesyłania formularza form.login-form powinno zostać 
obsłużona przy użycie wydarzenia submit
2. Podczas przesyłania formularza strona nie powinna się odświeżać.
3. Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem 
o tym, że wszystkie pola powinny zostać wypełnione.
4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz 
wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów 
formularza użyj właściwości elements.
5. Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól 
input metodą reset.

*/

const form = document.querySelector(".login-form");
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const submit = document.querySelector("button[type='submit']");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (email.value !== "" && password.value !== "") {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  } else {
    alert("All input fields must be filled before proceeding!");
  }
  form.reset();
});

/* by ChatGPT

document.querySelector('.login-form').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form elements
  const formElements = this.elements;

  // Check if all fields are filled
  if (formElements.email.value === '' || formElements.password.value === '') {
    alert('All fields must be filled');
    return;
  }

  // Create an object with form values
  const formData = {
    email: formElements.email.value,
    password: formElements.password.value
  };

  // Log the form data to the console
  console.log(formData);

  // Reset form values
  this.reset();
});


Opis działania skryptu:

1. `document.querySelector('.login-form').addEventListener('submit', function(event) {...}`
- Dodaje event listener na zdarzenie submit formularza. Event listener wywołuje funkcję zwrotną (callback), 
która obsługuje przesyłanie formularza.

2. `event.preventDefault();`
- Uniemożliwia domyślne zachowanie formularza (czyli odświeżenie strony po przesłaniu).

3. `const formElements = this.elements;`
- Pobiera elementy formularza za pomocą właściwości `elements`.

4. `if (formElements.email.value === '' || formElements.password.value === '') {...}`
- Sprawdza, czy oba pola formularza są wypełnione. Jeśli nie, wyświetla alert.

5. `const formData = {...}`
- Tworzy obiekt `formData` z wartościami pól formularza.

6. `console.log(formData);`
- Wypisuje obiekt z wartościami formularza do konsoli.

7. `this.reset();`
- Czyści wartości pól formularza po pomyślnym przesłaniu.

*/
