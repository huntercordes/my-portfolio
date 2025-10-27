import { forwardRef, useRef, useEffect } from "react";
import styles from "../../styles/ExperienceCarousel.module.css";
import animelogo33 from "../../assets/animelogo33.png";
import calpolypomona from "../../assets/CalPoly.png";
import northwesternmutual from "../../assets/northwestern-mutual.jpeg";
import netto from "../../assets/netto.jpg";
import lars from "../../assets/lars.jpeg";
import Klara from "../../assets/Klara.png";
import morisaki from "../../assets/morisaki.png";

const experiences = [
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

const ExperienceCarousel = forwardRef(
  ({ activeIndex, setActiveIndex }, ref) => {
    const containerRef = useRef();

    useEffect(() => {
      const container = containerRef.current;
      const handleScroll = () => {
        const cards = Array.from(container.children);
        const center = container.scrollLeft + container.offsetWidth / 2;
        const closest = cards.reduce((prev, curr, i) => {
          const currCenter = curr.offsetLeft + curr.offsetWidth / 2;
          return Math.abs(currCenter - center) <
            Math.abs(
              cards[prev].offsetLeft + cards[prev].offsetWidth / 2 - center
            )
            ? i
            : prev;
        }, 0);
        setActiveIndex(closest);
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }, [setActiveIndex]);

    return (
      <div
        ref={(el) => {
          ref.current = el;
          containerRef.current = el;
        }}
        className={styles.carousel}>
        {experiences.map((exp, i) => (
          <div
            key={exp.year + exp.title}
            className={`${styles.card} ${
              activeIndex === i ? styles.activeCard : ""
            }`}>
            <h2 className={styles.year}>{exp.year}</h2>
            <h3 className={styles.title}>{exp.title}</h3>
            <div className={styles.bubbles}>
              {exp.bubbles.map((b, index) => (
                <span key={index} className={styles.bubble}>
                  {b}
                </span>
              ))}
            </div>
            <p className={styles.description}>{exp.description}</p>
            {exp.photo && (
              <img src={exp.photo} alt={exp.title} className={styles.photo} />
            )}
          </div>
        ))}
      </div>
    );
  }
);

export default ExperienceCarousel;
