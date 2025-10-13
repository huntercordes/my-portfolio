import React from "react";
import styles from "./OnePhoto.module.css";

function OnePhoto({ src, alt }) {
  return (
    <div className={styles.photoContainer}>
      <img src={src} alt={alt} className={styles.photo} />
    </div>
  );
}

export default OnePhoto;
