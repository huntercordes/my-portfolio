import { useState, useRef, useEffect } from "react";
import Timeline from "../components/Experience/Timeline";
import ExperienceContent from "../components/Experience/ExperienceContent";
import styles from "../styles/Experience.module.css";

function Experience() {
  const [section, setSection] = useState("after"); // Start with "after" (Since Denmark)
  const [activeYear, setActiveYear] = useState(null);
  const contentRefs = useRef({}); // store refs for each year
  const videoRef = useRef(null);
  const pageRef = useRef(null);


  const handleDotClick = (year) => {
    if (contentRefs.current[year]) {
      contentRefs.current[year].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleYear = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleYear = entry.target.dataset.year;
          }
        });
        if (visibleYear) {
          setActiveYear(Number(visibleYear));
        }
      },
      { threshold: 0.5 }
    );

    Object.values(contentRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [section]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // optional slow playback
    }
  }, []);

  return (
    <div ref={pageRef} className={styles.experiencePage}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/darkbackground.mp4?alt=media&token=976b1a8a-2d63-4753-8e06-ab5164ff97cf"
          type="video/mp4"
        />
      </video>

      <h1 className={styles.pageTitle}>
        My<span className={styles.highlight}>Experiences</span>
      </h1>

      <Timeline
        section={section}
        setSection={setSection}
        onDotClick={handleDotClick}
        activeYear={activeYear}
        scrollRef={pageRef}
      />

      <ExperienceContent section={section} refs={contentRefs} />
    </div>
  );
}

export default Experience;
