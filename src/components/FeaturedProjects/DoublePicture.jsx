import React from "react";
import styles from "./DoublePicture.module.css";

export default function DoublePicture({ leftImg, rightImg, leftAlt, rightAlt }) {
  return (
    <section className={styles.doublePicture}>
      <div className={styles.imageWrapper}>
        <img src={leftImg} alt={leftAlt} className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <img src={rightImg} alt={rightAlt} className={styles.image} />
      </div>
    </section>
  );
}
