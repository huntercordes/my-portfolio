import React from "react";
import styles from "./VideoNatur.module.css";

function ProjectManagement({ title, description, video, videoAlt }) {
  return (
    <section className={styles.startSection}>
      <div className={styles.imageContainer}>
        <video
          src={video}
          alt={videoAlt}
          className={styles.image}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

export default ProjectManagement;
