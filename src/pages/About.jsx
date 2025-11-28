import ScrollSection from "../components/ScrollSection";
import PixelBlast from "../components/PixelBlast";
import ScrollHeader from "../components/ScrollHeader";
import Introduction from "../components/About/Introduction";
import PhotoCarousel from "../components/About/PhotoCarousel";
import HeroVideo from "../components/About/HeroVideo";
import BookRow from "../components/About/BookRow";

import styles from "../styles/About.module.css";

import Klara from "../assets/Klara.png";
import morisaki from "../assets/morisaki.png";
import quantum from "../assets/quantum.png";
import indianman from "../assets/indianman.jpg";
import berlin from "../assets/berlin.PNG";
import lisbonfilm from "../assets/lisbonfilm.JPG";
import photoshoot from "../assets/photoshoot.jpeg";
import wedding from "../assets/wedding.jpg";
import texas from "../assets/texas.jpg";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <PixelBlast className={styles.pixelBackground} color="#b5ff7b" />

      {/* 1 — INTRO */}
      <ScrollHeader title="Introduction">
        My name is Hunter Cordes and I was born and raised in Los Angeles,
        California. Growing up in a city of over 12 million people has exposed
        me to so many cultures and has given me so many experiences that have
        shaped who I am today. I love art, music, and reading, and can have a
        good conversation about almost anything as I am fascinated and curious
        about almost everything in this crazy world we live in.
      </ScrollHeader>
      <ScrollSection>
        <div className={styles.card}>
          <Introduction />
        </div>
      </ScrollSection>
      <ScrollHeader title="My Hobbies">
        I am unashamedly a huge nerd when it comes to my hobbies. These hobbies
        allow me to express myself creatively and unwind from the stresses of
        daily life. Below are a few snippets of my photography and piano
        playing, as well as the last 3 books I've read - which can contest to my
        curiosity and constant endeavor to grow!
      </ScrollHeader>
      {/* 2 — PHOTOGRAPHY */}
      <ScrollSection>
        <div className={styles.card}>
          <PhotoCarousel
            images={[
              {
                src: indianman,
                description: "A portrait of a man when I worked in India.",
              },
              {
                src: berlin,
                description: "A friend from Berlin showing me her hometown.",
              },
              {
                src: lisbonfilm,
                description:
                  "Black and white film photograph of old friends out in Lisbon.",
              },
              {
                src: photoshoot,
                description:
                  "A shot from a photoshoot I did of a jewelry line in Copenhagen.",
              },
              {
                src: wedding,
                description:
                  "Overlooking a wedding ceremony outside Delhi, India.",
              },
              {
                src: texas,
                description:
                  "An art installation of Cadillacs in a field outside Amarillo, Texas.",
              },
            ]}
          />
        </div>
      </ScrollSection>

      {/* 3 — PIANO */}
      <ScrollSection>
        <div className={styles.card}>
          <HeroVideo
            src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/LunEditPortfolio.mp4?alt=media&token=94914e80-35d0-4747-bbf3-74265ccbaa71"
            title="My Piano"
            description="In 2021, I bought a piano as a means to spend my time after moving to Denmark and the effects of the pandemic still lingered in our socializing opportunities. This would turn into an unending pursuit of learning piano pieces from classical to contemporary, and I found myself completely immersed in the world of music. Playing piano has become a meditative practice for me, and I love being able to express myself through it."
          />
        </div>
      </ScrollSection>

      {/* 4 — BOOKS */}
      <ScrollSection>
        <div className={styles.card}>
          <BookRow
            title="My Last 3 Books"
            books={[
              {
                cover: Klara,
                alt: "Klara and the Sun",
                description:
                  "A Nobel Prize winner... portrayal of being “born” into the world as an AI...",
              },
              {
                cover: morisaki,
                alt: "Days at the Morisaki Bookshop",
                description:
                  "Reading this in a Kyoto bookstore while it rained...",
              },
              {
                cover: quantum,
                alt: "Beyond Weird",
                description:
                  "Wanted a Cillian Murphy moment. Did not get it. Still fun.",
              },
            ]}
          />
        </div>
      </ScrollSection>

      {/* Videography removed */}
    </div>
  );
}
