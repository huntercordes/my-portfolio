import React, { useState } from "react";
import styles from "./Start.module.css";

function Start({
  deskTitle,
  deskDescription,
  deskImgSrc,
  deskImgAlt,
  fieldTitle,
  fieldDescription,
  fieldImgSrc,
  fieldImgAlt,
  deskButtonText = "Click for Field Research", // default values
  fieldButtonText = "Click for Desk Research",
}) {
  const [isFieldResearch, setIsFieldResearch] = useState(false);

  const handleToggle = () => setIsFieldResearch((prev) => !prev);

  const title = isFieldResearch ? fieldTitle : deskTitle;
  const description = isFieldResearch ? fieldDescription : deskDescription;
  const imgSrc = isFieldResearch ? fieldImgSrc : deskImgSrc;
  const imgAlt = isFieldResearch ? fieldImgAlt : deskImgAlt;
  const buttonText = isFieldResearch ? fieldButtonText : deskButtonText;

  return (
    <section className={styles.startSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button onClick={handleToggle} className={styles.toggleButton}>
          {buttonText}
        </button>
      </div>

      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={imgAlt} className={styles.image} />
      </div>
    </section>
  );
}

export default Start;
