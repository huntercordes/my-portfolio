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
    setActiveIndex(index);
  };

  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.pageTitle}>
        My<span className={styles.highlight}>Experiences</span>
      </h1>

      <HorizontalTimeline
        years={years}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />

      <ExperienceCarousel
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
