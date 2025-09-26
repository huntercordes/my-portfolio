import { useRef, useState, useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import styles from "./HeroVideo.module.css";
import overlayStyles from "../../styles/OverlayText.module.css";

export default function HeroVideo({ src, alt, title, description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { registerVideo } = useContext(VideoContext);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      registerVideo(videoRef.current); // Register when playing
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`${styles.hero} ${overlayStyles.mediaWrapper}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className={`${styles.video} ${overlayStyles.media}`}
        onPlay={() => registerVideo(videoRef.current)} // catch manual play too
      >
        <source src={src} type="video/mp4" />
        {alt}
      </video>

      {/* Overlay text */}
      <div className={overlayStyles.overlay}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* Pause/Play button */}
      <button
        className={styles.playPauseButton}
        onClick={togglePlay}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
