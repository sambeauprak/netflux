import polonais from "../assets/images/polonais.svg";
import lageDor from "../assets/images/l-age-d-or-du-cinema-polonais.svg";

import play from "../assets/images/play--red.png";
import bg from "../assets/images/bg-poland.png";

import "../assets/Tabs.css";

function Tabs({ items }) {
  return (
    <div className="tabs">
      <img src={bg} className="tabs__image" />
      <div className="tabs__header">
        <img src={lageDor} />
        <img src={polonais} />
      </div>
      <div className="tabs__content">
        <h3>Netflix Découverte - Juillet 2018</h3>
        <p>
          Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
          Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène
          internationale.
        </p>
      </div>
      <div className="tabs__items">
        {items &&
          items.map((item) => {
            {
              return (
                <div className="tabs__item">
                  <img src={item} className="tabs__item__image" />
                  <div className="tabs__item__play">
                    <img src={play} className="tabs__item__play__icon" />
                  </div>
                </div>
              );
            }
          })}
      </div>
      <nav className="tabs__nav">
        <a href="#">L’âge d’or du cinéma polonais (juillet 2018)</a>
        <a href="#">La nouvelle vague française (juin 2018)</a>
        <a href="#">Direction Cannes (mai 2018)</a>
        <a href="#">Bollywood Classiques (mai 2018)</a>
        <a href="#">L’âge d’or du cinéma polonais (juillet 2018)</a>
        <a href="#">La nouvelle vague française (juin 2018)</a>
        <a href="#">Direction Cannes (mai 2018)</a>
        <a href="#">Bollywood Classiques (mai 2018)</a>
        <a href="#">L’âge d’or du cinéma polonais (juillet 2018)</a>
        <a href="#">La nouvelle vague française (juin 2018)</a>
        <a href="#">Direction Cannes (mai 2018)</a>
        <a href="#">Bollywood Classiques (mai 2018)</a>
        <a href="#">L’âge d’or du cinéma polonais (juillet 2018)</a>
        <a href="#">La nouvelle vague française (juin 2018)</a>
        <a href="#">Direction Cannes (mai 2018)</a>
        <a href="#">Bollywood Classiques (mai 2018)</a>
        <a href="#">L’âge d’or du cinéma polonais (juillet 2018)</a>
        <a href="#">La nouvelle vague française (juin 2018)</a>
        <a href="#">Direction Cannes (mai 2018)</a>
        <a href="#">Bollywood Classiques (mai 2018)</a>
      </nav>
    </div>
  );
}

export default Tabs;
