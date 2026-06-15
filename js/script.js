

(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('portfolio-theme');

  if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
  }

  function updateToggleLabel() {
    if (!toggleBtn) return;
    const current = root.getAttribute('data-theme') || 'dark';
    toggleBtn.textContent = current === 'light' ? '🌙 Dark mode' : '☀️ Light mode';
  }

  updateToggleLabel();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateToggleLabel();
    });
  }
})();