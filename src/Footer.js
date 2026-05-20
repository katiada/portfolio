// Footer.js
// Composant footer — injecté dans toutes les pages

const Footer = {

  init() {
    const footer = document.getElementById("footer");

    if (!footer) return;

    const estSurIndex = window.location.pathname.endsWith("index.html")
      || window.location.pathname === "/"
      || window.location.pathname.endsWith("/");

    const base = estSurIndex ? "" : "./";

    footer.innerHTML = `
      <div class="contenu-footer">
        <span class="footer-nom">Katia DaSilva-Almeida</span>

        <div class="liens-footer">
          <ul>
            <li><a href="https://katiad-a.pixieset.com/" target="_blank" rel="noopener">Galerie</a></li>
            <li><a href="${base}DaSilva-Almeida_Katia_CV.pdf" target="_blank">CV</a></li>
            <li><a href="https://www.linkedin.com/in/katia-dasilva-almeida" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>

        <span class="footer-annee">© 2026</span>
      </div>
    `;
  }

};

export default Footer;
