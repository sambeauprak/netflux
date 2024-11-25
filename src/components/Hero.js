import heroBg from "../assets/images/hero_bg.png";
import supTitle from "../assets/images/netflix_original.svg";
import title from "../assets/images/logo-narcos.svg";
import play from "../assets/images/play.png";
import plus from "../assets/images/plus.png";

import "../components/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__bg" src={heroBg} />
      <div className="hero__content">
        <div className="hero__titles">
          <img className="hero__suptitle" src={supTitle} />
          <img className="hero__title" src={title} />
        </div>
        <div className="hero__text">
          <h2>Regardez la saison 3 maintenant</h2>
          <p>
            Le cartel de Cali reprend le pouvoir en Colombie. Les successeurs
            d’Escobar passent à l’action et déclarent la guerre au gouvernement.
          </p>
        </div>
        <div className="hero__ctas">
          <a href="">
            <img src={play} />
            Lecture
          </a>
          <a href="">
            <img src={plus} />
            My List
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
