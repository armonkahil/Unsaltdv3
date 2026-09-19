(() => {
  const validVersions = ['cinematic', 'parchment', 'ember', 'garden', 'midnight', 'mono', 'bears', 'purple', 'chicago', 'milwaukee'];
  const queryVersion = new URLSearchParams(window.location.search).get('version');
  const savedVersion = localStorage.getItem('unsaltd-version');
  const version = validVersions.includes(queryVersion) ? queryVersion : (validVersions.includes(savedVersion) ? savedVersion : 'cinematic');
  const savedTheme = localStorage.getItem('unsaltd-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = queryVersion
    ? (version === 'parchment' || version === 'milwaukee' ? 'light' : 'dark')
    : (savedTheme || (version === 'parchment' || systemPrefersLight ? 'light' : 'dark'));
  localStorage.setItem('unsaltd-version', version);
  document.documentElement.dataset.version = version;
  document.documentElement.dataset.theme = theme;
})();
