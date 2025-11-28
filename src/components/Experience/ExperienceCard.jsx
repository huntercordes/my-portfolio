import styles from "../../styles/ExperienceCarousel.module.css";

export default function ExperienceCard({ exp }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <p className={styles.year}>{exp.year}</p>
        <h2 className={styles.title}>{exp.title}</h2>
      </header>

      <div className={styles.bubbles}>
        {exp.bubbles.map((b, idx) => (
          <span key={`${b}-${idx}`} className={styles.bubble}>
            {b}
          </span>
        ))}
      </div>

      <p className={styles.description}>{exp.description}</p>

      {exp.photo && (
        <img src={exp.photo} alt={exp.title} className={styles.photo} />
      )}
    </article>
  );
}
