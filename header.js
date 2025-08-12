const headerHTML = `
<header>
  <svg viewBox="-.5 -.5 25 25" class="icon">
    <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 S17.5,2,12,2z"/>
    <path d="M7,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.7,13,7,13z M7,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S7.6,9,7,9z"/>
    <path d="M17,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S18.7,13,17,13z M17,9c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.6,9,17,9z"/>
    <path d="M12,20c-2.4,0-4.7-1.1-6.2-2.9c-0.3-0.4-0.3-1.1,0.1-1.4c0.4-0.3,1.1-0.3,1.4,0.1C8.5,17.2,10.2,18,12,18 s3.5-0.8,4.6-2.2c0.3-0.4,1-0.5,1.4-0.1c0.4,0.3,0.5,1,0.1,1.4C16.7,18.9,14.4,20,12,20z"/>
  </svg> 
CyberBuddy
<div class =stngbtn>⚙
    <div class="stngdropdown-content">
        <div style="border-bottom: 2px solid var(--accent-color);">Themes</div>
        <a onclick="applyTheme('Cyberpunk Light')">Light</a>
        <a onclick="applyTheme('Cyberpunk Dark')">Dark</a>
        <a onclick="applyTheme('Terminal')">Terminal</a>
        <div style="border-bottom: 2px solid var(--accent-color); border-top: 2px solid var(--accent-color);">Fonts</div>
    </div>
</div>
</header>
<div class="navholder">
<nav class="navbar">
    <a href="index.html">Home</a>
    <div class="dropdown">
        <div class="dropbtn">Player▼</div>
        <div class="dropdown-content">
          <a href=#>X Roles</a>
          <a href="#">X Stats</a>
          <a href="#">X Skills</a>
          <a href="#">X character creation</a>
        </div>
    </div>
    <a href="nightmarket.html">Nightmarket</a>
    <div class="dropdown">
        <div class="dropbtn">GameMaster▼</div>
        <div class="dropdown-content">
          <a href="#">X Enemies</a>
        </div>
    </div>
    <div class="dropdown">
        <div class="dropbtn">References▼</div>
        <div class="dropdown-content">
          <a href="#">X Combat rules</a>
          <a href="#">X Movement rules</a>
          <a href="#">X Conditions</a>
          <a href="#">X Misc</a>
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