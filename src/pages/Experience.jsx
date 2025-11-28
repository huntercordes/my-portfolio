import { experiences } from "../components/Experience/ExperienceCarousel";
import ExperienceCard from "../components/Experience/ExperienceCard";
import Stack from "../components/Stack";
import styles from "../styles/Experience.module.css";
import PixelBlast from "../components/PixelBlast";

/*export default function Experience() {
  const cards = experiences.map((exp, index) => ({
    id: index,
    component: <ExperienceCard exp={exp} />,
  }));

  return (
    <div className={styles.experiencePage}>
      <PixelBlast
        className={styles.pixelBackground}
        color="#74c8f8"
        transparent={false}
      />

      <div className={styles.experienceContainer}>
        <h1 className={styles.pageTitle}>
          <span className={styles.highlight}>Experiences</span>
        </h1>

        <Stack
          cardsData={cards}
          cardDimensions={{ width: 620 }}
          randomRotation={true}
          sensitivity={160}
          sendToBackOnClick={true}
        />
      </div>
    </div>
  );
}
*/
export default function Experience() {
  return (
    <div className={styles.experiencePage}>
      <PixelBlast
        className={styles.pixelBackground}
        color="#74c8f8"
        transparent={false}
      />

      <div className={styles.updateMessage}>
        <h1>Experience Page Coming Soon</h1>
        <p>
          I'm currently updating this page to showcase my experience and
          collaborations. Please check back soon!
        </p>
      </div>
    </div>
  );
}
