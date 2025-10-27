import { useState, useRef } from "react";
import HorizontalTimeline from "../components/Experience/HorizontalTimeline";
import ExperienceCarousel from "../components/Experience/ExperienceCarousel";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2018, 2017, 2016];

  const handleDotClick = (index) => {
    if (carouselRef.current) {
      const scrollX =
        carouselRef.current.children[index].offsetLeft -
        carouselRef.current.offsetWidth / 2 +
        carouselRef.current.children[index].offsetWidth / 2;
      carouselRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
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
        years={years}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
