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
      </div>
    `;

    // Sur les pages projet, le fond est toujours visible
    if (!estSurIndex) {
      header.classList.add("defilé");
    }

    // Ajouter la classe "defilé" quand on scroll sous le hero
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        header.classList.add("defilé");
      } else {
        header.classList.remove("defilé");
      }
    }, { passive: true });
  }

};

export default Header;