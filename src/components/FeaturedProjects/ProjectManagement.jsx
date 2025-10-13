import React from "react";
import styles from "./ProjectManagement.module.css";

function ProjectManagement({ title, description, imgSrc, imgAlt }) {
  return (
    <section className={styles.startSection}>
        <div className={styles.imageContainer}>
        <img src={imgSrc} alt={imgAlt} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>


    </section>
  );
}

export default ProjectManagement;
