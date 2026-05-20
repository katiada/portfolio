// Carrousel.js
// Gère les carrousels dans les cartes de projets

const Carrousel = {

  init() {
    const carrousels = document.querySelectorAll(".carrousel");

    carrousels.forEach((carrousel) => {
      this.initialiser(carrousel);
    });
  },

  initialiser(carrousel) {
    const piste  = carrousel.querySelector(".carrousel-piste");
    const diapos = carrousel.querySelectorAll(".carrousel-diapo");
    const points = carrousel.querySelectorAll(".carrousel-point");
    const flecheGauche = carrousel.querySelector(".carrousel-fleche.gauche");
    const flecheDroite = carrousel.querySelector(".carrousel-fleche.droite");

    // Si une seule diapo, on cache les contrôles
    if (diapos.length <= 1) {
      if (flecheGauche) flecheGauche.style.display = "none";
      if (flecheDroite) flecheDroite.style.display = "none";
      return;
    }

    let indexActuel = 0;

    // Aller à une diapo spécifique
    function allerA(index) {
      indexActuel = index;
      piste.style.transform = "translateX(-" + (indexActuel * 100) + "%)";

      // Mettre à jour les points
      points.forEach((point, i) => {
        point.classList.toggle("actif", i === indexActuel);
      });

      // Désactiver les flèches aux extrémités
      flecheGauche.classList.toggle("desactive", indexActuel === 0);
      flecheDroite.classList.toggle("desactive", indexActuel === diapos.length - 1);

      // Gérer les vidéos : jouer celle qui est visible, mettre pause aux autres
      diapos.forEach((diapo, i) => {
        const video = diapo.querySelector("video");
        if (!video) return;

        if (i === indexActuel) {
          // La carte doit être survolée pour jouer
          const carte = carrousel.closest(".carte");
          if (carte.matches(":hover")) {
            video.play();
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      });
    }

    // Flèche gauche
    flecheGauche.addEventListener("click", (e) => {
      e.stopPropagation(); // Ne pas ouvrir la lightbox
      if (indexActuel > 0) {
        allerA(indexActuel - 1);
      }
    });

    // Flèche droite
    flecheDroite.addEventListener("click", (e) => {
      e.stopPropagation();
      if (indexActuel < diapos.length - 1) {
        allerA(indexActuel + 1);
      }
    });

    // Clic sur un point
    points.forEach((point, i) => {
      point.addEventListener("click", (e) => {
        e.stopPropagation();
        allerA(i);
      });
    });

    // Initialiser le premier état
    allerA(0);
  }

};

export default Carrousel;
