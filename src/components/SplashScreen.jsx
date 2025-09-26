import { useEffect, useState } from "react";
import styles from "../styles/SplashScreen.module.css";
import grassandsky from "../assets/grassandsky.mp4"; // replace with your video file

export default function SplashScreen({ onFinish }) {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [];

    // Show text at 3s
    timers.push(setTimeout(() => setShowText(true), 3000));

    // Fade out everything at 7s
    timers.push(
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => onFinish(), 1500); // wait for fade animation
      }, 7000)
    );

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className={`${styles.splash} ${fadeOut ? styles.fadeOut : ""}`}>
      <video autoPlay muted className={styles.video}>
        <source src={grassandsky} type="video/mp4" />
      </video>

      {showText && (
        <h1 className={`${styles.title} ${styles.fadeInText}`}>
          Welcome to Hunter&apos;s Portfolio
        </h1>
      )}
    </div>
  );
}
