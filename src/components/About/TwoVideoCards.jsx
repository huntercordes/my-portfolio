import { useRef, useState, useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import styles from "./TwoVideoCards.module.css";
import overlayStyles from "../../styles/OverlayText.module.css";

function VideoCard({ videoData }) {
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
    <div className={`${styles.card} ${overlayStyles.mediaWrapper}`}>
      <video
        ref={videoRef}
        className={`${styles.video} ${overlayStyles.media}`}
        onPlay={() => registerVideo(videoRef.current)}
      >
        <source src={videoData.src} type="video/mp4" />
        {videoData.title}
      </video>

      {/* Overlay text */}
      <div className={overlayStyles.overlay}>
        <div>
          <h3>{videoData.title}</h3>
          {videoData.description && <p>{videoData.description}</p>}
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

export default function TwoVideoCards({ leftVideo, rightVideo }) {
  return (
    <div className={styles.container}>
      <VideoCard videoData={leftVideo} />
      <VideoCard videoData={rightVideo} />
    </div>
  );
}
