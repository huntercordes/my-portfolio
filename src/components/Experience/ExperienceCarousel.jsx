import styles from "../../styles/ExperienceCarousel.module.css";
import animelogo33 from "../../assets/animelogo33.png";
import northwesternmutual from "../../assets/northwestern-mutual.jpeg";
import netto from "../../assets/netto.jpg";
import lars from "../../assets/lars.jpeg";
import Klara from "../../assets/Klara.png";
import morisaki from "../../assets/morisaki.png";

export const experiences = [
  {
    year: 2025,
    title: "SPOT / UMTO / FoW",
    bubbles: [
      "SoMe",
      "Freelance",
      "Photography",
      "Videography",
      "Event Coverage",
    ],
    description:
      "After attending SPOT Festival’s videography camp, I filmed concerts and worked on CBS’s 'Future of Work' project documenting Denmark’s labor market.",
    photo: lars,
  },
  {
    year: 2024,
    title: "SEIN Magazine",
    bubbles: ["SoMe", "Freelance", "Photography", "Videography"],
    description:
      "Joined SEIN Magazine’s film team — my first professional environment conducted entirely in Danish.",
    photo: morisaki,
  },
  {
    year: 2024,
    title: "Erhvervsakademiet Aarhus",
    bubbles: ["UX/UI", "Web Development", "Design Thinking"],
    description:
      "Began Multimedia Design — a program blending creativity and coding using React, Firebase, and Figma.",
    photo: Klara,
  },
  {
    year: 2023,
    title: "Netto Warehouse",
    bubbles: ["Warehouse", "Full-time", "Logistics"],
    description:
      "Maintained financial stability while working full-time in Brabrand and continuing independent design work.",
    photo: netto,
  },
  {
    year: 2022,
    title: "VIA University College",
    bubbles: ["Software Engineering", "Full Stack", "Mathematics"],
    description:
      "Studied Software Engineering focusing on Java, C#, and system architecture — foundation for modern web dev.",
  },
  {
    year: 2021,
    title: "Cafe Her og Der",
    bubbles: ["Danish", "Full-time", "Barista"],
    description:
      "Worked at a small café in Aarhus while improving my Danish and understanding of local work culture.",
  },
  {
    year: 2020,
    title: "Moved to Denmark",
    bubbles: ["Travel", "Adaptation", "New Beginnings"],
    description:
      "Relocated during COVID-19 — a leap that shaped both my cultural and personal resilience.",
  },
  {
    year: 2018,
    title: "Northwestern Mutual",
    bubbles: ["Finance", "Internship", "Client Relations"],
    description:
      "Worked in LA’s financial district, developing networking and analytical skills in investment services.",
    photo: northwesternmutual,
  },
  {
    year: 2016,
    title: "Project RISHI",
    bubbles: ["Photography", "NGO", "India", "Videography"],
    description:
      "Documented community projects in rural India, combining visual storytelling and volunteer work.",
    photo: animelogo33,
  },
];

export default function ExperienceCarousel({ activeIndex, setActiveIndex }) {
  const totalExperiences = experiences.length;
  const safeIndex = Math.min(
    Math.max(activeIndex ?? 0, 0),
    Math.max(totalExperiences - 1, 0)
  );
  const experience = experiences[safeIndex];

  if (!experience) {
    return null;
  }

  const showPrevious = safeIndex > 0;
  const showNext = safeIndex < totalExperiences - 1;

  const handlePrevious = () => {
    if (!showPrevious) return;
    setActiveIndex((current) => Math.max((current ?? safeIndex) - 1, 0));
  };

  const handleNext = () => {
    if (!showNext) return;
    setActiveIndex((current) =>
      Math.min((current ?? safeIndex) + 1, totalExperiences - 1)
    );
  };

  return (
    <div className={styles.carousel}>
      <button
        type="button"
        className={styles.navButton}
        onClick={handlePrevious}
        disabled={!showPrevious}
        aria-label="View previous experience"
      >
        <span aria-hidden="true">←</span>
      </button>

      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <p className={styles.year}>{experience.year}</p>
          <h2 className={styles.title}>{experience.title}</h2>
        </header>

        <div className={styles.bubbles}>
          {experience.bubbles.map((bubble, index) => (
            <span key={`${bubble}-${index}`} className={styles.bubble}>
              {bubble}
            </span>
          ))}
        </div>

        <p className={styles.description}>{experience.description}</p>

        {experience.photo ? (
          <img
            src={experience.photo}
            alt={experience.title}
            className={styles.photo}
          />
        ) : null}

        <footer className={styles.footer}>
          <span className={styles.counter}>
            {safeIndex + 1} / {totalExperiences}
          </span>
        </footer>
      </article>

      <button
        type="button"
        className={styles.navButton}
        onClick={handleNext}
        disabled={!showNext}
        aria-label="View next experience"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
