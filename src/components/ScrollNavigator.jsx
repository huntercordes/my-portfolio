import { useEffect, useState } from "react";
import styles from "../styles/ScrollNavigator.module.css";

export default function ScrollNavigator({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // IntersectionObserver to update which section is active
  useEffect(() => {
    const observers = [];

    sections.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.6 } // section is "active" when 60% visible
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sections]);

  // When clicking a bar, scroll smoothly to that section
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.navigator}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
          onClick={() => handleClick(section.id)}
        >
          <div className={styles.bar}></div>
          <span className={styles.label}>{section.label}</span>
        </div>
      ))}
    </div>
  );
}
