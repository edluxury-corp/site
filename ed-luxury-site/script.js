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

  const siteHeader = document.querySelector('.site-header');
  const privateHeaderActions = document.querySelector('.private-header-actions');
  let actions = siteHeader?.querySelector('.header-actions') || null;

  if (siteHeader && !actions) {
    const privateLink = siteHeader.querySelector('.private-link');
    actions = document.createElement('div');
    actions.className = 'header-actions';
    if (privateLink) {
      siteHeader.insertBefore(actions, privateLink);
      actions.appendChild(privateLink);
    } else {
      siteHeader.appendChild(actions);
    }
  }

  const existingToggle = document.querySelector('.theme-toggle');

  if (!existingToggle) {
    const themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span>';

    if (actions) {
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

  if (!document.querySelector('.language-menu')) {
    const languageMenu = document.createElement('div');
    languageMenu.className = 'language-menu';
    languageMenu.innerHTML = `
      <button class="language-trigger" type="button" aria-expanded="false" aria-haspopup="true">
        <span class="language-current">FR</span>
        <span class="language-chevron" aria-hidden="true"></span>
      </button>
      <div class="language-dropdown" hidden>
        <button type="button" class="language-option active" data-lang="fr">FR</button>
        <button type="button" class="language-option" data-lang="en" aria-disabled="true">EN</button>
        <button type="button" class="language-option" data-lang="ko" aria-disabled="true">KO</button>
        <button type="button" class="language-option" data-lang="ja" aria-disabled="true">JA</button>
      </div>`;

    const languageTarget = actions || privateHeaderActions;
    if (languageTarget) {
      const themeToggle = languageTarget.querySelector('.theme-toggle');
      languageTarget.insertBefore(languageMenu, themeToggle || languageTarget.firstChild);
    } else {
      languageMenu.classList.add('language-menu-floating');
      document.body.appendChild(languageMenu);
    }

    const trigger = languageMenu.querySelector('.language-trigger');
    const dropdown = languageMenu.querySelector('.language-dropdown');

    const closeLanguageMenu = () => {
      dropdown.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('click', () => {
      const willOpen = dropdown.hidden;
      dropdown.hidden = !willOpen;
      trigger.setAttribute('aria-expanded', String(willOpen));
    });

    languageMenu.querySelectorAll('.language-option').forEach((option) => {
      option.addEventListener('click', () => {
        if (option.dataset.lang !== 'fr') return;
        closeLanguageMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (!languageMenu.contains(event.target)) closeLanguageMenu();
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
