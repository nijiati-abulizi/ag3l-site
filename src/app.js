// Intersection reveal
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

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Language toggle with explicit mapping
function toggleLang() {
  let p = window.location.pathname;

  // Normalize trailing slash
  if (p !== '/' && p.endsWith('/')) {
    p = p.slice(0, -1);
  }

  const frToEn = {
    '/': '/en/index.html',
    '/index.html': '/en/index.html',
    '/about.html': '/en/about.html',
    '/who.html': '/en/who.html',
    '/services.html': '/en/services.html',
    '/equipe.html': '/en/team.html',      // 🔴 special: équipe → team
    '/contact.html': '/en/contact.html'
  };

  const enToFr = {
    '/en': '/index.html',
    '/en/': '/index.html',
    '/en/index.html': '/index.html',
    '/en/about.html': '/about.html',
    '/en/who.html': '/who.html',
    '/en/services.html': '/services.html',
    '/en/team.html': '/equipe.html',      // 🔴 back: team → équipe
    '/en/contact.html': '/contact.html'
  };

  const isEN = p.startsWith('/en/');

  const next = isEN
    ? enToFr[p] || '/index.html'       // fallback to FR home
    : frToEn[p] || '/en/index.html';   // fallback to EN home

  window.location.href = next;
}

// Attach to both desktop + mobile buttons
document.addEventListener('click', (e) => {
  const id = e.target?.id;
  if (id === 'langToggle' || id === 'langToggleMobile') {
    toggleLang();
  }
});
