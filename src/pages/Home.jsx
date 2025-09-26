import styles from "../styles/Home.module.css";
import darkbackground from "../assets/darkbackground.mp4";
import { Link } from "react-router-dom"; // import Link

function Home() {
  return (
    <div className={styles.homePage}>
      {/* Background video */}
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={darkbackground} type="video/mp4" />
      </video>

      {/* Foreground content */}
      <div className={styles.homeWrapper}>
        <h1 className={styles.title}>
          I am a <span className={styles.highlight}>FRONTEND DEVELOPER</span>,{" "}
          <span className={styles.highlight}>UX/UI DESIGNER</span>, and{" "}
          <span className={styles.highlight}>CREATIVE STORYTELLER </span>
          from Los Angeles, currently located in Denmark
        </h1>
        <Link to="/featured-projects" className={styles.projectButton}>
          Explore my projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
