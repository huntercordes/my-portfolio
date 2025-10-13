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

function Timeline({ section, setSection, onDotClick, activeYear, scrollRef }) {
  // Reverse both sections for newest → oldest
  const years =
    section === "after"
      ? [...sections.after].reverse()
      : [...sections.before].reverse();

  // Handle section change & scroll to top
  const handleSectionChange = (newSection) => {
    setSection(newSection);
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Correct arrow logic:
  // - "after" section is first, down arrow goes to "before" (next in timeline)
  // - "before" section is last, up arrow goes back to "after"
  const prevSection = section === "before" ? "after" : null; // Up arrow
  const nextSection = section === "after" ? "before" : null;  // Down arrow

  return (
    <div className={styles.timelineWrapper}>
      {/* Up arrow */}
      <button
        className={styles.arrow}
        onClick={() => prevSection && handleSectionChange(prevSection)}
        disabled={!prevSection}
      >
        ↑
      </button>

      {/* Dots + line */}
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
        onClick={() => nextSection && handleSectionChange(nextSection)}
        disabled={!nextSection}
      >
        ↓
      </button>

      {/* Floating label */}
      <div className={styles.labelWrapper}>
        <div className={`${styles.flipBox} ${section === "after" ? styles.flipped : ""}`}>
          <div className={styles.flipFront}>Before</div>
          <div className={styles.flipBack}>Since</div>
        </div>
        <span className={styles.labelStatic}>Denmark</span>
      </div>
    </div>
  );
}

export default Timeline;
