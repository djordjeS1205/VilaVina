import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../img/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImage} alt="Vila Vina logo" className="navbar-logo-image" />
        </Link>

        <div className="nav-desktop">
          {!isHome && (
            <Link to="/" className="nav-link">
              Naslovna
            </Link>
          )}
          <Link to="/about" className="nav-link">
            O nama
          </Link>
          <Link to="/wines" className="nav-link">
            Vina
          </Link>
          <Link to="/visit" className="nav-link">
            Posetite nas
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/order" className="nav-link">
            Poruči vino
          </Link>
        </div>

        <button
          className={`burger ${menuOpen ? "burger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {!isHome && (
          <Link to="/" className="mobile-link" onClick={closeMenu}>
            Naslovna
          </Link>
        )}
        <Link to="/about" className="mobile-link" onClick={closeMenu}>
          O nama
        </Link>
        <Link to="/wines" className="mobile-link" onClick={closeMenu}>
          Vina
        </Link>
        <Link to="/visit" className="mobile-link" onClick={closeMenu}>
          Posetite nas
        </Link>
        <Link to="/blog" className="mobile-link" onClick={closeMenu}>
          Blog
        </Link>
        <Link to="/order" className="mobile-link" onClick={closeMenu}>
          Poruči vino
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;