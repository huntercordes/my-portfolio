import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import PixelBlast from "../components/PixelBlast";

function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        {/* PIXEL BACKGROUND */}
        <PixelBlast
          className={styles.pixelBackground}
          color="#b5ff7b" // visible green
          transparent={false} // <-- IMPORTANT: let PixelBlast be opaque
        />

        {/* CONTENT ABOVE IT */}
        <div className={styles.homeWrapper}>
          <h1 className={styles.title}>Hello, My name is Hunter </h1>

          <h1 className={styles.titleTwo}>
            <span className={styles.divide}> I am a </span>{" "}
            <span className={styles.highlight}>
              <Typewriter
                words={[
                  "<CREATIVE STORYTELLER",
                  "<UX/UI DESIGNER",
                  "<FRONTEND DEVELOPER",
                ]}
                loop={2}
                cursor
                cursorStyle=">"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>{" "}
          </h1>

          <Link to="/featured-projects" className={styles.projectButton}>
            Explore my projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
