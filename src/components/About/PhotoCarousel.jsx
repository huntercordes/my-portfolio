import { useState, useEffect } from "react";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adjust how many images to show per row based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 700) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1100) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + itemsPerPage) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - itemsPerPage + images.length) % images.length);
  };

  const visibleImages = images
    .slice(index, index + itemsPerPage)
    .concat(
      index + itemsPerPage > images.length
        ? images.slice(0, (index + itemsPerPage) % images.length)
        : []
    );

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={`${styles.arrow} ${styles.arrowLeft}`}>
        ‹
      </button>

      <div className={styles.images}>
        {visibleImages.map((img, i) => (
          <div key={i} className={styles.imageWrapper}>
            <img src={img.src} alt={`Photography ${i}`} />
            <div className={styles.overlay}>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={next} className={`${styles.arrow} ${styles.arrowRight}`}>
        ›
      </button>
    </div>
  );
}
