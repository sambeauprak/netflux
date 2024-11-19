import "../assets/Hero.css";

import play from "../assets/images/play.png";
import plus from "../assets/images/plus.png";
import heroBG from "../assets/images/hero_bg.png";
import netflixOriginal from "../assets/images/netflix_original.svg";
import logoNarcos from "../assets/images/logo-narcos.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={heroBG} className="hero__bg" />
      <div className="hero__container">
        <div className="hero__title">
          <img src={netflixOriginal} className="hero__netflix_original" />
          <img src={logoNarcos} className="title__logo" />
        </div>

        <div className="hero__content">
          <h2>Regardez la saison 3 maintenant</h2>
          <p className="content__description">
            Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
            d’Escobar passent à l’action et déclarent la guerre au gouvernement.
          </p>
        </div>
        <div className="hero__ctas">
          <a className="hero__cta">
            <img src={play} alt="Play" />
            Lecture
          </a>
          <a className="hero__cta">
            <img src={plus} alt="Plus" />
            My List
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
