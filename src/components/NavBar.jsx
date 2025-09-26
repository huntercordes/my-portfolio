import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import greekmanbow from "../assets/greekmanbow.png";
import animelogo33 from "../assets/animelogo33.png";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={animelogo33} alt="Hunter Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/featured-projects">Featured Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/about">All About Me</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
