const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('.contact-form');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 900);
  }
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const subject = String(formData.get('subject') || '').trim();
    const message = [
      `Name: ${String(formData.get('name') || '').trim()}`,
      `Email: ${String(formData.get('email') || '').trim()}`,
      '',
      String(formData.get('message') || '').trim()
    ].join('\n');
    const mailto = `mailto:atasteofart47@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const status = contactForm.querySelector('.form-status');

    if (status) {
      status.textContent = 'Opening your email app...';
    }

    window.location.assign(mailto);
  });
}
