const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function getTheme() {
  return root.getAttribute('data-theme') || 'light';
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'
  );
}

toggle.addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

setTheme(getTheme());
