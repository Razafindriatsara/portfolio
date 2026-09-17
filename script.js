(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}

  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var effectiveCurrent = current || (prefersDark ? 'dark' : 'light');
    var next = effectiveCurrent === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
})();
