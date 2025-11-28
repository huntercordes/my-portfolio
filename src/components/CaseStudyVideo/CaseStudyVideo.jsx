import React from "react";
import styles from "./CaseStudyVideo.module.css";

export default function CaseStudyVideo({ src }) {
  return (
    <div className={styles.videoWrapper}>
      <video
        className={styles.video}
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
