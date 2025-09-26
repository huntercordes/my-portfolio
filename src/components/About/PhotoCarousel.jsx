import { useState } from "react";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 3) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 3 + images.length) % images.length);
  };

  const visibleImages = images.slice(index, index + 3).concat(
    index + 3 > images.length ? images.slice(0, (index + 3) % images.length) : []
  );

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={styles.arrow}>‹</button>

      <div className={styles.images}>
        {visibleImages.map((img, i) => (
          <img key={i} src={img} alt={`Photography ${i}`} />
        ))}
      </div>

      <button onClick={next} className={styles.arrow}>›</button>
    </div>
  );
}
