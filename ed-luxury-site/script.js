(() => {
  const themeStyles = document.querySelector('link[href="home-theme.css"]');
  if (!themeStyles) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'home-theme.css';
    document.head.appendChild(link);
  }

  const root = document.documentElement;
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('edluxury-theme') === 'dark' ? 'dark' : 'light'; } catch (error) {}
  root.dataset.theme = savedTheme;

  const themedImages = document.querySelectorAll('[data-light-src][data-dark-src]');
  themedImages.forEach((image) => {
    image.src = savedTheme === 'dark' ? image.dataset.darkSrc : image.dataset.lightSrc;
  });

  const existingToggle = document.querySelector('.theme-toggle');

  if (!existingToggle) {
    const themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span>';

    const siteHeader = document.querySelector('.site-header');
    const privateHeaderActions = document.querySelector('.private-header-actions');

    if (siteHeader) {
      const privateLink = siteHeader.querySelector('.private-link');
      let actions = siteHeader.querySelector('.header-actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = 'header-actions';
        if (privateLink) {
          siteHeader.insertBefore(actions, privateLink);
          actions.appendChild(privateLink);
        } else {
          siteHeader.appendChild(actions);
        }
      }
      actions.insertBefore(themeToggle, actions.firstChild);
    } else if (privateHeaderActions) {
      privateHeaderActions.insertBefore(themeToggle, privateHeaderActions.firstChild);
    } else {
      themeToggle.classList.add('theme-toggle-floating');
      document.body.appendChild(themeToggle);
    }

    const syncToggle = () => {
      const dark = root.dataset.theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
      themeToggle.title = dark ? 'Mode clair' : 'Mode sombre';
    };

    syncToggle();

    themeToggle.addEventListener('click', () => {
      const dark = root.dataset.theme !== 'dark';
      root.dataset.theme = dark ? 'dark' : 'light';
      document.querySelectorAll('[data-light-src][data-dark-src]').forEach((image) => {
        image.src = dark ? image.dataset.darkSrc : image.dataset.lightSrc;
      });
      try { localStorage.setItem('edluxury-theme', dark ? 'dark' : 'light'); } catch (error) {}
      syncToggle();
    });
  }
})();

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
