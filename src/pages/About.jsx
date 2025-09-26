import ScrollNavigator from "../components/ScrollNavigator";
import { useRef, useEffect } from "react";
import HeroVideo from "../components/About/HeroVideo";
import TwoVideoCards from "../components/About/TwoVideoCards";
import PhotoCarousel from "../components/About/PhotoCarousel";
import FullscreenVideo from "../components/About/FullscreenVideo";
import Introduction from "../components/About/Introduction";
import video from "../assets/C0058.mp4";
import Me from "../assets/Me.jpeg";
import cutout1 from "../assets/cutout1.png";
import styles from "../styles/About.module.css";
import lun from "../assets/LunEditPortfolio.mp4";
import darkbackground from "../assets/darkbackground.mp4";

function About() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.playbackRate = 0.5; // slow down background video
    }
  }, []);

  return (
    <div className={styles.snapContainer}>
      {/* Background Video */}
      <video
        ref={backgroundRef}
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
        style={{ animation: "fadeIn 1s ease" }}
        playbackRate={0.1}
      >
        <source src={darkbackground} type="video/mp4" />
      </video>

      {/* Section 0: Introduction */}
      <Introduction />

      {/* Section 1: Piano */}
      <section id="piano" className={styles.snapSection}>
        <HeroVideo
          src={lun}
          alt="Hunter playing piano"
          title="Piano Performance"
          description="Improvised piano performance showing creativity and focus."
        />
      </section>

      {/* Section 2: Violin + Poetry */}
      <section id="violin" className={styles.snapSection}>
        <TwoVideoCards
          leftVideo={{ src: video, title: "Violin" }}
          rightVideo={{ src: video, title: "Poetry" }}
        />
      </section>

      {/* Section 3: Photography Carousel */}
      <section id="photography" className={styles.snapSection}>
        <PhotoCarousel images={[Me, Me, Me, Me, Me, Me, Me, Me, Me]} />
      </section>

      {/* Section 4: Videography */}
      <section id="videography" className={styles.snapSection}>
        <FullscreenVideo
          src={video}
          alt="Videography showcase"
          title="Videography Showcase"
          description="A compilation of my videography work."
        />
      </section>

      {/* Scroll Navigator */}
      <ScrollNavigator
        sections={[
          { id: "introduction", label: "Introduction" },
          { id: "piano", label: "Piano" },
          { id: "violin", label: "Violin & Poetry" },
          { id: "photography", label: "Photography" },
          { id: "videography", label: "Videography" },
        ]}
      />
    </div>
  );
}

export default About;
