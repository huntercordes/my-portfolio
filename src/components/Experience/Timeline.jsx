import styles from "../../styles/Timeline.module.css";

const sections = {
  before: [
    { year: 2016, tooltip: "Project Rishi" },
    { year: 2017, tooltip: "Internship" },
    { year: 2018, tooltip: "Volunteer work" },
    { year: 2019, tooltip: "", empty: true },
    { year: 2020, tooltip: "Moved to Denmark" },
  ],
  after: [
    { year: 2020, tooltip: "Language courses" },
    { year: 2021, tooltip: "University projects" },
    { year: 2022, tooltip: "Freelance UX/UI" },
    { year: 2023, tooltip: "Internship in Aarhus" },
    { year: 2024, tooltip: "Portfolio projects" },
    { year: 2025, tooltip: "Current work" },
  ],
};

function Timeline({ section, setSection, onDotClick, activeYear }) {
  const years = sections[section];

  return (
    <div className={styles.timelineWrapper}>
      {/* Up arrow */}
      <button
        className={styles.arrow}
        onClick={() => setSection("before")}
        disabled={section === "before"}
      >
        ↑
      </button>

      {/* Dots + vertical line */}
      <div className={styles.dotsContainer}>
        <div className={styles.line} />
        {years.map(({ year, tooltip, empty }) => (
          <div key={year} className={styles.dotRow}>
            <div
              className={`${styles.dot} ${empty ? styles.invisibleDot : ""} ${
                activeYear === year ? styles.activeDot : ""
              }`}
              onClick={() => !empty && onDotClick(year)}
            >
              {!empty && <div className={styles.tooltip}>{tooltip}</div>}
            </div>
            <span className={styles.year}>{year}</span>
          </div>
        ))}
      </div>

      {/* Down arrow */}
      <button
        className={styles.arrow}
        onClick={() => setSection("after")}
        disabled={section === "after"}
      >
        ↓
      </button>
    </div>
  );
}

export default Timeline;
