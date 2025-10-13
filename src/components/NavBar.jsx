import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import animelogo33 from "../assets/animelogo33.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link to="/" onClick={handleLinkClick} className={styles.logo}>
        <img src={animelogo33} alt="Hunter Logo" />
      </Link>

      {/* Hamburger Button */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/featured-projects" onClick={handleLinkClick}>Featured Projects</Link></li>
        <li><Link to="/experience" onClick={handleLinkClick}>Experience</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>All About Me</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
