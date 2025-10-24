import { useState, useEffect } from "react";
import styles from "./SelfieCarousel.module.css";
import { FaArrowRight } from "react-icons/fa6";
import selfie1 from "../../assets/madsselfie.jpg";
import selfie2 from "../../assets/injuryselfie.jpg";
import selfie3 from "../../assets/agfselfie.jpg";
import selfie4 from "../../assets/waterpoloselfie.jpg";
import selfie5 from "../../assets/boatselfie.jpeg";
import selfie6 from "../../assets/lacabraselfie.jpg";

export default function SelfieCarousel() {
  const selfies = [
    { src: selfie1, desc: "At the park" },
    { src: selfie2, desc: "Injury recovery day" },
    { src: selfie3, desc: "AGF match" },
    { src: selfie4, desc: "Water polo training" },
    { src: selfie5, desc: "Boat trip fun" },
    { src: selfie6, desc: "La Cabra adventure" },
  ];

  const [showHint, setShowHint] = useState(true);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scrollArea}>
        {selfies.map((selfie, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              src={selfie.src}
              alt={`Selfie ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <p>{selfie.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {showHint && (
        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <FaArrowRight className={styles.arrowIcon} />
        </div>
      )}
    </div>
  );
}
