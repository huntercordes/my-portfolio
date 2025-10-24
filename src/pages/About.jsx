import ScrollNavigator from "../components/ScrollNavigator";
import { useRef, useEffect } from "react";
import HeroVideo from "../components/About/HeroVideo";
import TwoVideoCards from "../components/About/TwoVideoCards";
import PhotoCarousel from "../components/About/PhotoCarousel";
import FullscreenVideo from "../components/About/FullscreenVideo";
import Introduction from "../components/About/Introduction";
import Me from "../assets/Me.jpeg";
import BookRow from "../components/About/BookRow";
import Klara from "../assets/Klara.png";
import morisaki from "../assets/morisaki.png";
import quantum from "../assets/quantum.png";
import indianman from "../assets/indianman.jpg";
import berlin from "../assets/berlin.PNG";
import bicycle from "../assets/bicycle.jpg";
import lisbonfilm from "../assets/lisbonfilm.JPG";
import mountains from "../assets/mountains.JPG";
import photoshoot from "../assets/photoshoot.jpeg";
import wedding from "../assets/wedding.jpg";
import texas from "../assets/texas.jpg";

import cutout1 from "../assets/cutout1.png";
import styles from "../styles/About.module.css";

function About() {
  const backgroundRef = useRef(null);

  return (
    <div className={styles.snapContainer}>
      {/* Section 0: Introduction */}
      <Introduction />
      {/* Section 3: Photography Carousel */}
      <section id="photography" className={styles.snapSection}>
        <PhotoCarousel
          images={[
            {
              src: indianman,
              description:
                "A quiet bookstore in Kyoto where I spent an afternoon reading.",
            },
            {
              src: berlin,
              description: "The misty mountains at sunrise felt surreal.",
            },
            {
              src: lisbonfilm,
              description:
                "A lively street festival full of colors and sounds.",
            },
            {
              src: photoshoot,
              description: "The calm of a hidden temple garden.",
            },
            {
              src: wedding,
              description:
                "Watching the countryside roll by on the Shinkansen.",
            },
            {
              src: texas,
              description:
                "Watching the countryside roll by on the Shinkansen.",
            },
          ]}
        />
      </section>

      {/* Section 1: Piano */}
      <section id="piano" className={styles.snapSection}>
        <HeroVideo
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/LunEditPortfolio.mp4?alt=media&token=94914e80-35d0-4747-bbf3-74265ccbaa71"
          alt="Hunter playing piano"
          title="My Piano"
          description="In 2021, I bought a piano and began to self-teach. This journey has taught me much on my own perseverance and discipline, and I constantly share my journey to inspire others who believe it is too late to start a new skill."
        />
      </section>

      {/* Section 2.5: Books */}
      <section id="books" className={styles.snapSection}>
        <BookRow
          title="My Last 3 Books"
          books={[
            {
              cover: Klara,
              alt: "Klara and the Sun",
              description:
                "A Nobel Prize winner in literature, Klara and the Sun is one of the most fascinating books I’ve ever read. What struck me most about the author’s portrayal of being “born” into the world as an AI was how ordinary human experiences — the ones we never think twice about — could feel so strange and alien.",
            },
            {
              cover: morisaki,
              alt: "Days at the Morisaki Bookshop",
              description:
                "Before my trip to Japan a few months ago, I read Days at the Morisaki Bookshop — and its sequel while I was there. Reading about someone working in a bookshop while I sat in a Kyoto bookstore, watching the rain fall outside, is a memory I’ll always cherish.",
            },
            {
              cover: quantum,
              alt: "Beyond Weird: Quantum Physics Explained",
              description:
                "A book on a complex topic I know nothing about? Why not. I just wanted a Cillian Murphy moment where I lay in bed and suddenly I have a vision on how to split an atom. That moment never came, but I love that I can now join a conversation on quantum physics and actually understand a bit of what is going on!",
            },
          ]}
        />
      </section>

      {/* Section 4: Videography */}
      <section id="videography" className={styles.snapSection}>
        <FullscreenVideo
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/LunEditPortfolio.mp4?alt=media&token=94914e80-35d0-4747-bbf3-74265ccbaa71"
          alt="Videography showcase"
          title="Videography Showcase"
          description="A compilation of my videography work."
        />
      </section>

      {/* Scroll Navigator */}
      <ScrollNavigator
        sections={[
          { id: "introduction", label: "Introduction" },
          { id: "photography", label: "Photography" },
          { id: "piano", label: "Piano" },
          { id: "books", label: "Books" },
          { id: "videography", label: "Videography" },
        ]}
      />
    </div>
  );
}

export default About;
