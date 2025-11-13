// src/app.js

// --- Reveal on scroll ---
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

// --- Footer year ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Language toggle routing ---

function normalizePath(path) {
  return path.replace(/\/+/g, '/');
}

const frToEn = {
  '/': '/en/index.html',
  '/index.html': '/en/index.html',
  '/about.html': '/en/about.html',
  '/who.html': '/en/who.html',
  '/services.html': '/en/services.html',
  '/equipe.html': '/en/team.html',
  '/contact.html': '/en/contact.html',
};

const enToFr = {
  '/en': '/index.html',
  '/en/': '/index.html',
  '/en/index.html': '/index.html',
  '/en/about.html': '/about.html',
  '/en/who.html': '/who.html',
  '/en/services.html': '/services.html',
  '/en/team.html': '/equipe.html',
  '/en/contact.html': '/contact.html',
};

function toggleLang() {
  const rawPath = window.location.pathname || '/';
  const path = normalizePath(rawPath);

  let target;

  if (path.startsWith('/en')) {
    // EN → FR
    target = enToFr[path] || '/index.html';
  } else {
    // FR → EN
    target = frToEn[path] || '/en/index.html';
  }

  window.location.href = target;
}

// Attach to both desktop & mobile buttons
document.addEventListener('click', (event) => {
  const btn = event.target.closest('#langToggle, #langToggleMobile');
  if (btn) {
    event.preventDefault();
    toggleLang();
  }
});
