import { useRef, useEffect } from "react";
import ProjectCard from "../components/FeaturedProjects/ProjectCard";
import styles from "../styles/FeaturedProjects.module.css";
import animelogo33 from "../assets/animelogo33.png";
import Biomesgroup from "../assets/Biomesgroup.png";
import handeheldforest from "../assets/handeheldforest.png";

const projects = [
  {
    id: "project-1",
    title: "Naturhistorisk Museum",
    date: "May - June, 2025",
    keywords: ["React", "Figma", "UX/UI Design", "Team Project","Prototyping and Testing"],
    description:
      "An interactive digital solution built to increase user engagement with exhibitions at the Naturhistorisk Museum in Aarhus.",
    link: "/featured-projects/naturhistoriskmuseum",
    image: handeheldforest,
  },
  {
    id: "project-2",
    title: "Other Case Study",
    date: "Fall 2024",
    keywords: ["UX/UI", "Prototyping", "Case Study"],
    description:
      "A UX/UI design case study focusing on user-centered research and wireframing for a mobile-first solution.",
    link: "/featured-projects/other-case-study",
    image: animelogo33,
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
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbac0.firebasestorage.app/o/darkbackground.mp4?alt=media&token=976b1a8a-2d63-4753-8e06-ab5164ff97cf"
          type="video/mp4"
        />
      </video>

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
  );
}
