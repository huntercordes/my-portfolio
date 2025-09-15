import { Link } from "react-router-dom";
import styles from "../styles/MyWork.module.css";

function MyWork() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Work</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Naturhistorisk Museum</h2>
          <p>A project I worked on with React and UX design.</p>
          <Link to="/mywork/naturhistoriskmuseum">See More</Link>
        </div>

        {/* Add more project cards here */}
      </div>
    </div>
  );
}

export default MyWork;
