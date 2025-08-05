
function showFromId() {
    const hash = window.location.hash.substring(1);
    const sections = document.querySelectorAll('.roleinfo > div');

    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the target section if it exists
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.style.display = 'block';
      }
    }
}


// run on first load
window.addEventListener('DOMContentLoaded', showFromId);
// Run on hash change
window.addEventListener('hashchange', showFromId);