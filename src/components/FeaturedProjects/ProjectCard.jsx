import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ id, title, date, keywords = [], description, link, image }) {
  return (
    <div id={id} className={styles.card}>
      {/* Left 75% */}
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.subtitle}>{date}</h4>

        <div className={styles.bubbles}>
          {keywords.map((kw, i) => (
            <span key={i} className={styles.bubble}>{kw}</span>
          ))}
        </div>

        <p className={styles.description}>{description}</p>

        <Link to={link} className={styles.button}>
          See More
        </Link>
      </div>

      {/* Right 25% */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </div>
  );
}
