import { useRef, useEffect } from "react";
import ProjectCard from "../components/FeaturedProjects/ProjectCard";
import styles from "../styles/FeaturedProjects.module.css";
import animelogo33 from "../assets/animelogo33.png";
import Biomesgroup from "../assets/Biomesgroup.png";
import PixelBlast from "../components/PixelBlast";
import spillcafeen from "../assets/spilcafeenmockuphome.png";

import handeheldforest from "../assets/handeheldforest.png";

const projects = [
  {
    id: "project-1",
    title: "Naturhistorisk Museum (Full Case Study)",
    date: "Spring 2025",
    keywords: [
      "React",
      "Figma",
      "UX/UI Design",
      "Team Project",
      "Prototyping and Testing",
    ],
    description:
      "An interactive digital solution built to increase user engagement with exhibitions at the Naturhistorisk Museum in Aarhus.",
    link: "/featured-projects/naturhistoriskmuseum",
    image: handeheldforest,
  },
  {
    id: "project-2",
    title: "Spilcaféen",
    date: "Fall 2024",
    keywords: ["UX/UI", "Prototyping", "Case Study"],
    description:
      "A redesign of Spilcaféen’s website aimed at creating a more intuitive, visually consistent, and user-friendly experience.",
    link: "/featured-projects/spilcafeen",
    image: spillcafeen,
  },
];

export default function FeaturedProjects() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // optional slow motion
    }
  }, []);

  return (
    <div className={styles.container}>
      {/* Background video */}
      <PixelBlast
        className={styles.pixelBackground}
        color="#B19EEF" // visible purple
        transparent={false} // <-- IMPORTANT: let PixelBlast be opaque
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Featured Projects</h1>
        <div className={styles.cards}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              date={project.date}
              keywords={project.keywords}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
