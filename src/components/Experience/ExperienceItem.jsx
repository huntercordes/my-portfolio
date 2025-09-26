import styles from "../../styles/ExperienceItem.module.css";
import { forwardRef } from "react";

const ExperienceItem = forwardRef(({ title, year, bubbles, description, photo }, ref) => {
  return (
    <div ref={ref} className={styles.item}>
      {/* Column 1: Year */}
      <div className={styles.year}>{year}</div>

      {/* Column 2: Content */}
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.bubbles}>
          {bubbles.map((bubble, i) => (
            <span key={i} className={styles.bubble}>{bubble}</span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Column 3: Photo */}
      {photo && (
        <div className={styles.photoContainer}>
          <img src={photo} alt={title} className={styles.photo} />
        </div>
      )}
    </div>
  );
});

export default ExperienceItem;
