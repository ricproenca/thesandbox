// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon();
  });
}
function updateThemeIcon() {
  const icon = themeToggle?.querySelector('.theme-icon');
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (icon) icon.textContent = isDark ? '☀️' : '🌙';
}
updateThemeIcon();

// Mobile menu
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  const links = document.querySelector('.nav-links');
  if (menuOpen) {
    links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:var(--navy);padding:16px 24px 24px;gap:16px;border-bottom:1px solid rgba(255,255,255,.1);animation:slideDown 0.3s ease';
  } else {
    links.style.cssText = '';
  }
}
const style = document.createElement('style');
style.textContent = '@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }';
document.head.appendChild(style);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (menuOpen) toggleMenu();
    }
  });
});
