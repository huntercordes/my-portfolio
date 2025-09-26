// components/YearsInfo.jsx
import styles from "../styles/YearsInfo.module.css";

export default function YearsInfo({ yearData }) {
  if (!yearData) return null;

  return (
    <div className={styles.container}>
      {/* Year as main title */}
      <h2 className={styles.year}>{yearData.year}</h2>

      {/* Loop through events in that year */}
      {yearData.events.map((event, idx) => (
        <div key={idx} className={styles.event}>
          <h3 className={styles.subtitle}>{event.subtitle}</h3>
          <p className={styles.description}>{event.description}</p>
          {event.image && (
            <img
              src={event.image}
              alt={event.subtitle}
              className={styles.image}
            />
          )}
        </div>
      ))}
    </div>
  );
}
