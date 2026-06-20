
document.addEventListener('DOMContentLoaded', function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('portfolio-theme');
  const revealElements = document.querySelectorAll('.reveal');

  if (storedTheme) {
    root.setAttribute('data-theme', storedTheme);
  }
  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // Theme toggle button support
  const toggleBtn = document.getElementById('themeToggle');

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
});