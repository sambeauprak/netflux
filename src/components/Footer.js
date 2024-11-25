import "./Footer.css";

import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";

function Footer() {
  return (
    <footer>
      {/* Réseaux sociaux */}
      <div className="footer__social">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={youtube} alt="YouTube" />
      </div>
      {/* Multicolonnes */}
      <div className="footer__links">
        <ul>
          <li>
            <a href="#">Audio et sous-titres</a>
          </li>
          <li>
            <a href="#">Presse</a>
          </li>
          <li>
            <a href="#">Confidentialité</a>
          </li>
          <li>
            <a href="#">Nous contacter</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Autodescription</a>
          </li>
          <li>
            <a href="#">Relations investisseurs</a>
          </li>
          <li>
            <a href="#">Informations légales</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Centre d’aide</a>
          </li>
          <li>
            <a href="#">Recrutement</a>
          </li>
          <li>
            <a href="#">Préférences de cookies</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Cartes cadeaux</a>
          </li>
          <li>
            <a href="">Conditions d’utilisation</a>
          </li>
          <li>
            <a href="">Mentions légales</a>
          </li>
        </ul>
      </div>
      <a href="" className="footer__button">
        Service code
      </a>
      <p>© 1997-2018 Netflix, Inc.</p>
    </footer>
  );
}

export default Footer;
