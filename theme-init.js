(() => {
  const savedTheme = localStorage.getItem('unsaltd-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  document.documentElement.dataset.theme = theme;
})();
