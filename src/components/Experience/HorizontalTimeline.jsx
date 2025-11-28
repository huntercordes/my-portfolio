import styles from "../../styles/HorizontalTimeline.module.css";

export default function HorizontalTimeline({ years, activeIndex, onDotClick }) {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timelineTrack}>
        <div className={styles.line}></div>
        {years.map((year, index) => (
          <button
            key={year}
            onClick={() => onDotClick(index)}
            className={`${styles.dotWrap} ${
              activeIndex === index ? styles.active : ""
            }`}>
            <span className={styles.dot}></span>
            <span className={styles.year}>{year}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
