// Hamburger menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('open');
  });

  // Close menu on nav item click (mobile)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('nav ul').classList.remove('active');
      mobileToggle.classList.remove('open');
    });
  });
}

// Contact form validation & feedback
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const status = document.getElementById('form-status');

    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const messageVal = message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameVal || !emailVal || !messageVal) {
      status.textContent = 'Wypełnij wszystkie pola.';
      status.style.color = 'orange';
      return;
    }

    if (!emailRegex.test(emailVal)) {
      status.textContent = 'Podaj poprawny adres e-mail.';
      status.style.color = 'orange';
      return;
    }

    // Lock form
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    status.textContent = 'Wysyłanie...';
    status.style.color = '#fff';

    setTimeout(() => {
      status.textContent = 'Dziękujemy! Twoja wiadomość została wysłana.';
      status.style.color = '#00ffc3';

      contactForm.reset();
      submitButton.disabled = false;

      setTimeout(() => {
        status.textContent = '';
      }, 5000);
    }, 1500);
  });
}
