// Lightbox.js
// Ouvre une fenêtre modale au clic sur une carte de projet

const Lightbox = {

  fond: null,
  zoneMedia: null,
  lbType: null,
  lbTitre: null,
  lbDesc: null,
  lbTags: null,
  lbLiens: null,

  init() {
    this.fond = document.getElementById("lightbox");
    this.zoneMedia = document.getElementById("lb-media");
    this.lbType = document.getElementById("lb-type");
    this.lbTitre = document.getElementById("lb-titre");
    this.lbDesc = document.getElementById("lb-desc");
    this.lbTags = document.getElementById("lb-tags");
    this.lbLiens = document.getElementById("lb-liens");

    if (!this.fond) return;

    // Ouvrir au clic sur une carte
    const cartes = document.querySelectorAll(".carte");

    cartes.forEach((carte) => {
      carte.addEventListener("click", (e) => {
        // Ne pas ouvrir si on clique sur un lien ou bouton
        if (e.target.closest("a, button")) return;
        this.ouvrir(carte);
      });
    });

    // Fermer avec le bouton ✕
    document.getElementById("lb-fermer").addEventListener("click", () => {
      this.fermer();
    });

    // Fermer en cliquant sur le fond sombre
    this.fond.addEventListener("click", (e) => {
      if (e.target === this.fond) {
        this.fermer();
      }
    });

    // Fermer avec la touche Échap
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.fermer();
      }
    });
  },

  ouvrir(carte) {
    // --- Média ---
    this.zoneMedia.innerHTML = "";

    const carteMedia = carte.querySelector(".carte-media");
    const image = carteMedia.querySelector("img");
    const video = carteMedia.querySelector("video");
    const numDeco = carteMedia.querySelector(".carte-num-deco");

    if (image) {
      const nouvelleImage = document.createElement("img");
      nouvelleImage.src = image.src;
      nouvelleImage.alt = image.alt;
      this.zoneMedia.appendChild(nouvelleImage);

    } else if (video) {
      const nouvelleVideo = document.createElement("video");
      nouvelleVideo.src = video.src;
      nouvelleVideo.muted = true;
      nouvelleVideo.loop = true;
      nouvelleVideo.autoplay = true;
      nouvelleVideo.playsInline = true;
      this.zoneMedia.appendChild(nouvelleVideo);

    } else {
      // Pas encore de média : placeholder avec le numéro
      const placeholder = document.createElement("div");
      placeholder.className = "lb-placeholder";
      placeholder.textContent = numDeco ? numDeco.textContent : "✦";
      this.zoneMedia.appendChild(placeholder);

      // Couleur de fond selon la position de la carte
      const indexCarte = [...carte.parentElement.children].indexOf(carte);
      const couleurs = ["#D9EBE3", "#F2DDD7", "#E6DCE8", "#EDE0CC", "#D8E8F0"];
      this.zoneMedia.style.background = couleurs[indexCarte] || "#EDE6DA";
    }

    // --- Texte ---
    this.lbType.textContent = carte.querySelector(".carte-num").textContent;
    this.lbTitre.textContent = carte.querySelector(".carte-titre").textContent;
    this.lbDesc.textContent = carte.querySelector(".carte-desc").textContent.trim();

    // --- Tags ---
    this.lbTags.innerHTML = "";
    carte.querySelectorAll(".tag").forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag.textContent;
      this.lbTags.appendChild(span);
    });

    // --- Liens ---
    this.lbLiens.innerHTML = "";

    const lienLive = carte.dataset.lienLive;

    if (lienLive && lienLive !== "#") {
      const bouton = document.createElement("a");
      bouton.href = lienLive;
      bouton.target = "_blank";
      bouton.rel = "noopener";
      bouton.className = "lb-btn lb-btn-principal";
      bouton.textContent = "Voir le projet →";
      this.lbLiens.appendChild(bouton);
    }

    // --- Afficher ---
    this.fond.classList.add("ouverte");
    document.body.style.overflow = "hidden";
  },

  fermer() {
    this.fond.classList.remove("ouverte");
    document.body.style.overflow = "";

    const video = this.zoneMedia.querySelector("video");
    if (video) video.pause();
  }

};

export default Lightbox;
