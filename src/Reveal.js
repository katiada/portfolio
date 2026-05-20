// Reveal.js
// Fait apparaître les éléments au fur et à mesure du scroll

const Reveal = {

  init() {
    const elements = document.querySelectorAll(".reveal");

    // Observer chaque élément — dès qu'il entre dans la vue, on l'affiche
    const observateur = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observateur.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -32px 0px"
    });

    elements.forEach((element) => {
      observateur.observe(element);
    });

    // Les éléments du hero s'affichent immédiatement (sans attendre le scroll)
    setTimeout(() => {
      const elementsHero = document.querySelectorAll("#hero .reveal");

      elementsHero.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("visible");
        }, index * 80);
      });
    }, 120);
  }

};

export default Reveal;
