import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import animelogo33 from "../assets/animelogo33.png";
import { FaBars, FaTimes } from "react-icons/fa"; // add this at the top

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCVPopup, setShowCVPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

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
        <button
          className={styles.navButton}
          onClick={() => setShowCVPopup(true)}>
          CV
        </button>

        <button
          className={styles.navButton}
          onClick={() => setShowContactPopup(true)}>
          Contact
        </button>
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
          <FaBars
            size={26}
            color="var(--color--primarywhite)"
            className={styles.icon}
          />
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
          <button
            className={styles.navButton}
            onClick={() => {
              setShowCVPopup(true);
              handleLinkClick();
            }}>
            CV
          </button>

          <button
            className={styles.navButton}
            onClick={() => {
              setShowContactPopup(true);
              handleLinkClick();
            }}>
            Contact
          </button>
        </div>
      </div>
      {showCVPopup && (
        <div className={styles.cvOverlay} onClick={() => setShowCVPopup(false)}>
          <div className={styles.cvPopup} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.cvCloseButton}
              onClick={() => setShowCVPopup(false)}>
              ✕
            </button>

            {/* Embedded PDF viewer */}
            <iframe
              src={`${import.meta.env.BASE_URL}your-cv.pdf`}
              title="My CV"
              className={styles.cvFrame}
            />
          </div>
        </div>
      )}

      {showContactPopup && (
        <div
          className={styles.popupOverlay}
          onClick={() => setShowContactPopup(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h2>Contact Me:</h2>
            <p>Email: huntercordes@gmail.com</p>
            <p>Phone: +45 31 71 29 77</p>
            <button
              className={styles.closeButton}
              onClick={() => setShowContactPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
