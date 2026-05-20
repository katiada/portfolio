// Videos.js
// Lance la vidéo au survol d'une carte, la met en pause en quittant

const Videos = {

  init() {
    const cartes = document.querySelectorAll(".carte");

    cartes.forEach((carte) => {
      const video = carte.querySelector("video");

      if (!video) return;

      carte.addEventListener("mouseenter", () => {
        video.play();
      });

      carte.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

};

export default Videos;
