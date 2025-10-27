import { useState } from "react";
import HorizontalTimeline from "../components/Experience/HorizontalTimeline";
import ExperienceCarousel, {
  experiences,
} from "../components/Experience/ExperienceCarousel";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const years = experiences.map((exp) => exp.year);

  const handleDotClick = (index) => {
    const clampedIndex = Math.min(
      Math.max(index, 0),
      Math.max(experiences.length - 1, 0)
    );
    setActiveIndex(clampedIndex);
  };

  return (
    <section className={styles.experienceContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>
          My<span className={styles.highlight}>Experiences</span>
        </h1>
        <p className={styles.subtitle}>
          Use the arrows to move one card at a time or jump straight to a year
          with the timeline below.
        </p>
      </header>

      <HorizontalTimeline
        years={years}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />

      <ExperienceCarousel
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}
