import styles from "./Introduction.module.css";
import cutout1 from "../../assets/cutout1.png";

export default function Introduction() {
  return (
    <section id="introduction" className={styles.introSection}>
      <div className={styles.fadeOval}>
        <div className={styles.introContent}>
          <img src={cutout1} alt="Me" className={styles.photo} />
          <p>
            I love music, art, and books. I’m fascinated by the ways people communicate without speaking—the way a subtle brushstroke or a softly pressed piano key can evoke 
            complex emotions, or how a single metaphor can transform confusion into clarity.
          </p>
          <p>Drawing inspiration from art fuels creativity and sparks new ideas.</p>
          <p>
            Through different mediums, I strive to create experiences that resonate
            universally while reflecting my personal vision.
          </p>
        </div>
      </div>
    </section>
  );
}
