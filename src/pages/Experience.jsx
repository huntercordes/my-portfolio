import { useState, useRef } from "react";
import HorizontalTimeline from "../components/Experience/HorizontalTimeline";
import ExperienceCarousel, {
  experiences,
} from "../components/Experience/ExperienceCarousel";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const years = experiences.map((exp) => exp.year);

  const handleDotClick = (index) => {
    setActiveIndex(index);

    if (carouselRef.current?.scrollToIndex) {
      carouselRef.current.scrollToIndex(index);
    }
  };

  return (
    <div className={styles.experienceContainer}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/darkbackground.mp4?alt=media&token=976b1a8a-2d63-4753-8e06-ab5164ff97cf"
          type="video/mp4"
        />
      </video>

      <h1 className={styles.pageTitle}>
        My<span className={styles.highlight}>Experiences</span>
      </h1>

      <HorizontalTimeline
        years={years}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />

      <ExperienceCarousel
        ref={carouselRef}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
