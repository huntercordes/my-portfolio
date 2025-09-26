import styles from "./Introduction.module.css";
import Me from "../../assets/Me.jpeg";
import cutout1 from "../../assets/cutout1.png";

export default function Introduction() {
  return (
    <section id="introduction" className={styles.introSection}>
      <div className={styles.introContent}>
        <h1 className={styles.title}>Introduction</h1>
        <img src={cutout1} alt="Me" className={styles.photo} />
        <p>
          Art has always been a cornerstone of my creative journey. It allows me to explore
          emotions, perspectives, and ideas beyond the constraints of words.
        </p>
        <p>
          Through different mediums, I strive to communicate experiences that resonate
          universally while reflecting my personal vision.
        </p>
        <p>
          Whether through visual design, video, or digital storytelling, art guides
          my approach to both creativity and problem-solving.
        </p>
      </div>
    </section>
  );
}
