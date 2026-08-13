const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if (document.querySelector('.contact-actions')) {
  const contactStyles = document.createElement('link');
  contactStyles.rel = 'stylesheet';
  contactStyles.href = 'contact-actions.css';
  document.head.appendChild(contactStyles);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
