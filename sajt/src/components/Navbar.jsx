import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <h2 className="navbar-logo">VilaVina 🍷</h2>
      </div>
    </nav>
  );
};

export default Navbar;