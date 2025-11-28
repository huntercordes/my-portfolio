import styles from "./Introduction.module.css";
import CircularGallery from "./CircularGallery";

// Import your selfies
import agf from "../../assets/agfselfie.jpg";
import boat from "../../assets/boatselfie.jpeg";
import injury from "../../assets/injuryselfie.jpg";
import lacabra from "../../assets/lacabraselfie.jpg";
import mads from "../../assets/madsselfie.jpg";
import waterpolo from "../../assets/waterpoloselfie.JPG";

export default function Introduction() {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.textBlock}>
        <CircularGallery
          key="intro-gallery"
          items={[
            { image: agf, text: "I Enjoy a good Superliga game" },
            {
              image: boat,
              text: "Worked in Ebeltoft for a summer focusing on my Danish",
            },
            { image: injury, text: "A short football injury can't stop me!" },
            { image: lacabra, text: "I have a BMO addiction" },
            { image: mads, text: "I met Mads Mikkelsen in Tokyo" },
            { image: waterpolo, text: "I love playing waterpolo" },
          ]}
          bend={2}
          textColor="#fff"
          borderRadius={0.06}
        />

        <p>
          I have driven to all 49 states you can drive to (multiple times),
          lived in multiple states and countries, and even learned a few
          languages! Through experiencing different cultures deeply and
          intently, I have gained an understanding of how people respond
          differently to interactions and environments. This has helped me
          become a more empathetic and adaptable person, which I believe are
          crucial qualities for a successful designer.
        </p>
      </div>
    </div>
  );
}
