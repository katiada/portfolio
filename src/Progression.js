// Progression.js
// Gère la barre de progression en haut de page (se remplit au scroll)

const Progression = {

  init() {
    const barre = document.getElementById("barre-progression");

    if (!barre) return;

    window.addEventListener("scroll", () => {
      const hauteurPage   = document.body.scrollHeight - window.innerHeight;
      const pourcentage   = (window.scrollY / hauteurPage) * 100;
      barre.style.width   = pourcentage + "%";
    });
  }

};

export default Progression;
