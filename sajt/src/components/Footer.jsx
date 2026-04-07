import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

       <div className="footer-section">
        
  <h3>Kontakt</h3>
  <p>
    Mail:{" "}
    <a href="mailto:info@vinarija-milosavljevic.com">
      info@vinarija-milosavljevic.com
    </a>
  </p>
  <p>
    Telefon:{" "}
    <a href="tel:+38169733169">+381 69 733 169</a>
    <br />
    <a href="tel:+381641766103">+381 64 17 66 103</a>
  </p>
  <p>
    Adresa:<br />
    Selo Bučje<br />
    37243 Počekovina<br />
    Srbija
  </p>
  <p>Radno vreme: 10:00 - 18:00</p>
</div>

        <div className="footer-section">
          <h3>Društvene mreže</h3>
          <a href="https://www.facebook.com/p/Vinarija-Milosavljevi%C4%87-100063612280233/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/vila__vina" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="footer-section">
  <h3>Brzi linkovi</h3>
  <Link className="footer-link" to="/about">O nama</Link>
  <Link className="footer-link" to="/wines">Vina</Link>
  <Link className="footer-link" to="/visit">Kontakt</Link>
  <Link className="footer-link" to="/blog">Blog</Link>
</div>

      </div>

      <div className="footer-bottom">
  <p className="footer-glow">VILA VINA - VINARIJA MILOSAVLJEVIĆ</p>
      </div>
    </footer>
  );
};

export default Footer;