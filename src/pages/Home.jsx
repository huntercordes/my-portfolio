import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom"; // import Link

function Home() {
  return (
    <div className={styles.homePage}>
      {/* Background video */}
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/darkbackground.mp4?alt=media&token=976b1a8a-2d63-4753-8e06-ab5164ff97cf" type="video/mp4" />
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
