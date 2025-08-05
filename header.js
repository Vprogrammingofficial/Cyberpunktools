const headerHTML = `
<header>CyberBuddy
<div class =stngbtn>⚙
    <div class="stngdropdown-content">
        <div style="border-bottom: 2px solid var(--accent-color);">Themes</div>
        <a onclick="applyTheme('Cyberpunk Light')">Light</a>
        <a onclick="applyTheme('Cyberpunk Dark')">Dark</a>
        <a onclick="applyTheme('Terminal')">Terminal</a>
    </div>
</div>
</header>
<div class="navholder">
<nav class="navbar">
    <a href="index.html">Home</a>
    <div class="dropdown">
        <div class="dropbtn">Player▼</div>
        <div class="dropdown-content">
          <a href="roles.html">Roles</a>
          <a href="#">Stats</a>
          <a href="#">Skills</a>
          <a href="#">character creation</a>
        </div>
    </div>
    <a href="nightmarket.html">Nightmarket</a>
    <div class="dropdown">
        <div class="dropbtn">GameMaster▼</div>
        <div class="dropdown-content">
          <a href="#">Goonopedia</a>
          <a href="#">Pharmacy</a>
          <a href="#">Ripperdoc</a>
          <a href="#">Netware</a>
          <a href="#">Surplus</a>
        </div>
    </div>
    <div class="dropdown">
        <div class="dropbtn">References▼</div>
        <div class="dropdown-content">
          <a href="#">Combat rules</a>
          <a href="#">Movement rules</a>
          <a href="#">Conditions</a>
          <a href="#">Misc</a>
        </div>
    </div>
    
</nav>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const existingHeader = document.querySelector("header");
  if (existingHeader) {
    existingHeader.outerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }
});