// src/app.js

// --- Scroll reveal -----------------------------------------
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

// --- Dynamic year in footer --------------------------------
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Language toggle routing -------------------------------

function normalizePath(path) {
  // Remove trailing slashes
  const clean = path.replace(/\/+$/, '') || '/';

  if (clean === '/') return '/index.html';
  if (clean === '/en') return '/en/index.html';

  return clean;
}

function toggleLang() {
  const rawPath = window.location.pathname;
  const path = normalizePath(rawPath);

  // French → English
  const frToEn = {
    '/index.html': '/en/index.html',
    '/about.html': '/en/about.html',
    '/who.html': '/en/who.html',
    '/services.html': '/en/services.html',
    '/equipe.html': '/en/team.html',
    '/contact.html': '/en/contact.html'
  };

  // English → French
  const enToFr = {
    '/en/index.html': '/index.html',
    '/en/about.html': '/about.html',
    '/en/who.html': '/who.html',
    '/en/services.html': '/services.html',
    '/en/team.html': '/equipe.html',
    '/en/contact.html': '/contact.html'
  };

  let target;

  if (path.startsWith('/en/')) {
    // We are on an English page → go to French
    target = enToFr[path] || '/index.html';
  } else {
    // We are on a French page → go to English
    target = frToEn[path] || '/en/index.html';
  }

  window.location.pathname = target;
}

// Click handler for the EN / FR buttons
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target) return;

  const id = target.id;
  if (id === 'langToggle' || id === 'langToggleMobile') {
    event.preventDefault();
    toggleLang();
  }
});
