import { useRef, useState, useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import styles from "./FullscreenVideo.module.css";
import overlayStyles from "../../styles/OverlayText.module.css";

export default function FullscreenVideo({ src, alt, title, description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { registerVideo } = useContext(VideoContext);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      registerVideo(videoRef.current);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`${styles.fullscreen} ${overlayStyles.mediaWrapper}`}>
      <video
        ref={videoRef}
        className={`${styles.video} ${overlayStyles.media}`}
        onPlay={() => registerVideo(videoRef.current)}
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

      {/* Play/Pause button */}
      <button
        className={styles.playPauseButton}
        onClick={togglePlay}
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
}
