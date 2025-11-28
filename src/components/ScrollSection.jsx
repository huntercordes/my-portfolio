import { useRef, useEffect, useState } from "react";
import styles from "../styles/ScrollSection.module.css";

export default function ScrollSection({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.section} ${visible ? styles.visible : ""}`}>
      <div className={styles.scrollPanel}>{children}</div>
    </section>
  );
}
