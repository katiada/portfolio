// Petales.js
// Crée et anime les pétales qui tombent dans le hero

const Petales = {

  couleurs: ["#E5C8C0", "#C0D4C8", "#B49EB5", "#C9A87C", "#8FA896", "#EDE6DA"],
  nombrePetales: 14,

  init() {
    const conteneur = document.getElementById("conteneur-petales");

    if (!conteneur) return;

    for (let i = 0; i < this.nombrePetales; i++) {
      const petale = this.creerPetale();
      conteneur.appendChild(petale);
    }
  },

  creerPetale() {
    const petale = document.createElement("div");
    petale.className = "petale";

    const couleur  = this.couleurs[Math.floor(Math.random() * this.couleurs.length)];
    const duree    = 9 + Math.random() * 13;
    const delai    = Math.random() * 18;
    const position = Math.random() * 100;

    petale.style.left                = position + "vw";
    petale.style.background          = couleur;
    petale.style.animationDuration   = duree + "s";
    petale.style.animationDelay      = delai + "s";
    petale.style.opacity             = "0";

    return petale;
  }

};

export default Petales;
