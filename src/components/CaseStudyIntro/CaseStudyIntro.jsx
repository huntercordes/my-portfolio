import styles from "./CaseStudyIntro.module.css";

export default function CaseStudyIntro({
  title,
  subtitle,
  description,
  role = [],
  date,
}) {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>
        {description.split("\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.meta}>
        <div>
          <h3>Role</h3>
          <div className={styles.bubbles}>
            {Array.isArray(role) ? (
              role.map((item, index) => (
                <span key={index} className={styles.bubble}>
                  {item}
                </span>
              ))
            ) : (
              <span className={styles.bubble}>{role}</span>
            )}
          </div>
        </div>

        <div>
          <h3>Date</h3>
          <p>{date}</p>
        </div>
      </div>
    </section>
  );
}
