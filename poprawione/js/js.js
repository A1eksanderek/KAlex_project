// Pobranie elementu formularza o ID "contactForm"
let form = document.getElementById("contactForm");

// Sprawdzenie, czy formularz istnieje na stronie
if (form) {
  // Dodanie nasłuchiwania na zdarzenie "submit" (wysłanie formularza)
  form.addEventListener("submit", function (e) {
    // Zatrzymanie domyślnej akcji przeglądarki (czyli faktycznego wysłania formularza)
    e.preventDefault();

    // Pobranie i usunięcie białych znaków z pola "name"
    let imie = document.getElementById("name").value.trim();

    // Pobranie i usunięcie białych znaków z pola "email"
    let mail = document.getElementById("email").value.trim();

    // Pobranie i usunięcie białych znaków z pola "message"
    let wiadomosc = document.getElementById("message").value.trim();

    // Pobranie elementu, w którym wyświetlany jest status formularza
    let status = document.getElementById("form-status");

    // Pobranie przycisku "submit" znajdującego się wewnątrz formularza
    let btn = form.querySelector("button[type='submit']");

    form.reset();

    // Upewnienie się, że przycisk submit nie jest zablokowany
    btn.disabled = false;

    // Po 5 sekundach wyczyszczenie komunikatu statusu
    setTimeout(() => {
      status.textContent = "";
