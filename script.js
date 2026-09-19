const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.querySelector('.contact-form');
const themeToggle = document.querySelector('.theme-toggle');

const updateThemeToggle = () => {
  if (!themeToggle) {
    return;
  }

  const isLight = document.documentElement.dataset.theme === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
};

updateThemeToggle();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('unsaltd-theme', nextTheme);
    updateThemeToggle();
  });
}

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
