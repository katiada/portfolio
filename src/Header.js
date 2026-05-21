// Header.js
// Composant header — injecté dans toutes les pages

const Header = {

  init() {
    const header = document.getElementById("header");

    if (!header) return;

    const estSurIndex = window.location.pathname.endsWith("index.html")
      || window.location.pathname === "/"
      || window.location.pathname.endsWith("/");

    const base = estSurIndex ? "" : "./";
    const ancre = estSurIndex ? "#" : "./index.html#";

    header.innerHTML = `
      <div class="contenu-entete">
        <a href="${ancre}hero" class="nav-logo">KD/A</a>

        <nav>
          <ul>
            <li><a href="${ancre}hero">Accueil</a></li>
            <li><a href="${ancre}projets">Projets</a></li>
            <li><a href="${ancre}apropos">À propos</a></li>
            <li><a href="${ancre}contact">Contact</a></li>
            <li><a href="https://katiad-a.pixieset.com/" target="_blank" rel="noopener">Galerie</a></li>
            <li><a href="${base}assets/DaSilva-Almeida_Katia_CV.pdf" target="_blank">CV</a></li>
          </ul>
        </nav>

        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="menu-mobile" id="menu-mobile">
        <ul>
          <li><a href="${ancre}hero">Accueil</a></li>
          <li><a href="${ancre}projets">Projets</a></li>
          <li><a href="${ancre}apropos">À propos</a></li>
          <li><a href="${ancre}contact">Contact</a></li>
          <li><a href="https://katiad-a.pixieset.com/" target="_blank" rel="noopener">Galerie</a></li>
          <li><a href="${base}assets/DaSilva-Almeida_Katia_CV.pdf" target="_blank">CV</a></li>
        </ul>
      </div>
    `;

    // Sur les pages projet, le fond est toujours visible
    if (!estSurIndex) {
      header.classList.add("defilé");
    }

    // Fond au scroll
    window.addEventListener("scroll", () => {
      // Ne pas changer le header si le menu mobile est ouvert
      if (menuMobile && menuMobile.classList.contains("ouvert")) return;

      if (window.scrollY > 80) {
        header.classList.add("defilé");
      } else {
        if (estSurIndex) header.classList.remove("defilé");
      }
    }, { passive: true });

    // Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const menuMobile = document.getElementById("menu-mobile");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("ouvert");
      menuMobile.classList.toggle("ouvert");
    });

    // Fermer le menu au clic sur un lien
    menuMobile.querySelectorAll("a").forEach((lien) => {
      lien.addEventListener("click", () => {
        hamburger.classList.remove("ouvert");
        menuMobile.classList.remove("ouvert");
      });
    });
  }

};

export default Header;