// Curseur.js
// Gère le curseur personnalisé (point + anneau)

const Curseur = {

  dot:    null,
  ring:   null,
  sourisX: -100,
  sourisY: -100,
  anneauX: -100,
  anneauY: -100,

  init() {
    this.dot  = document.getElementById("cursor-dot");
    this.ring = document.getElementById("cursor-ring");

    if (!this.dot || !this.ring) return;

    // Suivre la position de la souris
    window.addEventListener("mousemove", (e) => {
      this.sourisX = e.clientX;
      this.sourisY = e.clientY;
    });

    // Animer l'anneau en boucle
    this.animer();

    // Agrandir au survol des éléments cliquables
    const elementsCliquables = document.querySelectorAll("a, button, .carte, .competence, .nav-logo");

    elementsCliquables.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        this.dot.classList.add("survol");
        this.ring.classList.add("survol");
      });

      element.addEventListener("mouseleave", () => {
        this.dot.classList.remove("survol");
        this.ring.classList.remove("survol");
      });
    });

    // Rétrécir au clic
    window.addEventListener("mousedown", () => {
      this.dot.classList.add("clic");
      this.ring.classList.add("clic");
    });

    window.addEventListener("mouseup", () => {
      this.dot.classList.remove("clic");
      this.ring.classList.remove("clic");
    });
  },

  animer() {
    // Le point suit exactement la souris
    this.dot.style.left = this.sourisX + "px";
    this.dot.style.top  = this.sourisY + "px";

    // L'anneau suit avec un léger retard (effet de traîne)
    this.anneauX += (this.sourisX - this.anneauX) * 0.14;
    this.anneauY += (this.sourisY - this.anneauY) * 0.14;
    this.ring.style.left = this.anneauX + "px";
    this.ring.style.top  = this.anneauY + "px";

    requestAnimationFrame(() => this.animer());
  }

};

export default Curseur;
