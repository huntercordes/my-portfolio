// components/TimelineDot.jsx
import styles from "../styles/TimelineDot.module.css";

export default function TimelineDot({ yearData, isActive, onClick }) {
  return (
    <div
      className={`${styles.dotWrapper} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.year}>{yearData.year}</div>
      <div className={styles.dot}></div>
      <div className={styles.tooltip}>
        {yearData.subtitles && yearData.subtitles.map((subtitle, i) => (
          <div key={i}>{subtitle}</div>
        ))}
      </div>
    </div>
  );
}
