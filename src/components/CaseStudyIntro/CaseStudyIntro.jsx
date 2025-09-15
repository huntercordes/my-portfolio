import styles from "./CaseStudyIntro.module.css";

export default function CaseStudyIntro({ title, subtitle, description, role, date }) {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.meta}>
        <div>
          <h3>Role</h3>
          <p>{role}</p>
        </div>
        <div>
          <h3>Date</h3>
          <p>{date}</p>
        </div>
      </div>
    </section>
  );
}
