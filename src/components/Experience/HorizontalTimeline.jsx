import styles from "../../styles/HorizontalTimeline.module.css";

export default function HorizontalTimeline({ years, activeIndex, onDotClick }) {
  if (!years?.length) {
    return null;
  }

  return (
    <nav className={styles.timeline} aria-label="Experience timeline">
      <ol className={styles.yearList}>
        {years.map((year, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={`${year}-${index}`} className={styles.yearItem}>
              <button
                type="button"
                onClick={() => onDotClick(index)}
                className={`${styles.yearButton} ${
                  isActive ? styles.activeYearButton : ""
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                <span className={styles.yearLabel}>{year}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
