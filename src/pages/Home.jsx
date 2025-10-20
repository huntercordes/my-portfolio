import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom"; // import Link
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className={styles.homePage}>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className={styles.floatingDot}
          style={{
            top: `${Math.random() * 80}vh`,
            left: `${Math.random() * 90}vw`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Foreground content */}
      <div className={styles.homeWrapper}>
        <h1 className={styles.title}>
          Hello, I am a{" "}
          <span className={styles.highlight}>
            <Typewriter
              words={[
                "<FRONTEND DEVELOPER",
                "<UX/UI DESIGNER",
                "<CREATIVE STORYTELLER",
              ]}
              loop={2} // infinite if you want
              cursor
              cursorStyle=">"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </span>{" "}
        </h1>
        <h1 className={styles.titleTwo}>
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
