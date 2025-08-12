/* themes to select: default Cyberpunk Dark */
const themes = {
    'Cyberpunk Dark': {
      '--bg-color': '#252525',
      '--hover-color': '#474747',
      '--text-color': '#ebebeb',
      '--accent-color': '#cf0606',
      '--header-bg': '#2e2e2e'
    },
    'Cyberpunk Light': {
      '--bg-color': '#ebebeb',
      '--hover-color': '#8b8b8b',
      '--text-color': '#000000',
      '--accent-color': '#cf0606',
      '--header-bg': '#afafaf'
    },
    'Terminal': {
      '--bg-color': '#000000',
      '--hover-color': '#2b2b2b',
      '--text-color': '#00ff00',
      '--accent-color': '#00ff00',
      '--header-bg': '#000000'
    }
  };
const fonts = {
  
}
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    Object.keys(theme).forEach(varName => {
      document.documentElement.style.setProperty(varName, theme[varName]);
    });
  localStorage.setItem('selectedTheme', themeName);
  }
  
function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'Cyberpunk Dark';
    applyTheme(savedTheme);
  }
  
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
});
