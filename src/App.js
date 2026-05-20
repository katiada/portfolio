import Header from "./Header.js";
import Footer from "./Footer.js";
import Curseur from "./Curseur.js";
import Progression from "./Progression.js";
import Petales from "./Petales.js";
import NomAnime from "./NomAnime.js";
import Reveal from "./Reveal.js";

const App = {
  main() {
    Header.init();
    Footer.init();
    Curseur.init();
    Progression.init();
    Petales.init();
    NomAnime.init();
    Reveal.init();
  }
};

export default App;
