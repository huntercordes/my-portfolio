import styles from "../../styles/HorizontalTimeline.module.css";

export default function HorizontalTimeline({ years, activeIndex, onDotClick }) {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.line} />
      <div className={styles.dotsContainer}>
        {years.map((year, index) => (
          <div
            key={`${year}-${index}`}
            className={`${styles.dot} ${
              activeIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => onDotClick(index)}>
            <span className={styles.year}>{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
