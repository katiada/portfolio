// NomAnime.js
// Anime le nom dans le hero lettre par lettre

const NomAnime = {

  init() {
    const elemNom = document.getElementById("hero-nom");

    if (!elemNom) return;

    // Séparer chaque lettre dans son propre span
    const lettres = elemNom.textContent.split("");
    elemNom.innerHTML = "";

    lettres.forEach((lettre) => {
      if (lettre === " ") {
        elemNom.innerHTML += " ";
      } else {
        const span = document.createElement("span");
        span.className   = "lettre";
        span.textContent = lettre;
        elemNom.appendChild(span);
      }
    });

    // Faire apparaître chaque lettre avec un délai progressif
    setTimeout(() => {
      const toutesLettres = elemNom.querySelectorAll(".lettre");

      toutesLettres.forEach((lettre, index) => {
        setTimeout(() => {
          lettre.classList.add("visible");
        }, 200 + index * 80);
      });
    }, 150);
  }

};

export default NomAnime;
