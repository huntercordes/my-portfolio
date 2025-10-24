import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import animelogo33 from "../assets/animelogo33.png";
import { FaBars, FaTimes } from "react-icons/fa"; // add this at the top

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Left: Logo */}
      <Link to="/" onClick={handleLinkClick} className={styles.logo}>
        <img src={animelogo33} alt="Hunter Logo" />
      </Link>

      {/* Center container (desktop nav links) */}
      <div className={styles.navCenterContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/featured-projects" onClick={handleLinkClick}>
              Featured Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={handleLinkClick}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              All About Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Right buttons (desktop) */}
      <div className={styles.rightButtons}>
        <a
          href="/path-to-your-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navButton}>
          CV
        </a>
        <Link to="/contact" className={styles.navButton}>
          Contact
        </Link>
      </div>

      {/* Hamburger Button (visible on mobile) */}
      <button
        className={`${styles.burgerButton} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}>
        {menuOpen ? (
          <FaTimes size={26} color="#fff" className={styles.icon} />
        ) : (
          <FaBars size={26} color="#000" className={styles.icon} />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navLinksMobile}>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/featured-projects" onClick={handleLinkClick}>
              Featured Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={handleLinkClick}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              All About Me
            </Link>
          </li>
        </ul>

        <div className={styles.navButtonsMobile}>
          <a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navButton}
            onClick={handleLinkClick}>
            CV
          </a>
          <Link
            to="/contact"
            className={styles.navButton}
            onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
