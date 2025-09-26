import ProjectCard from "../components/FeaturedProjects/ProjectCard";
import styles from "../styles/FeaturedProjects.module.css";

const projects = [
  {
    title: "Naturhistorisk Museum",
    description: "A project I worked on with React and UX design.",
    link: "/featured-projects/naturhistoriskmuseum",
  },
  {
    title: "Other Case Study",
    description: "Another example of my UX/UI design work.",
    link: "/featured-projects/naturhistoriskmuseum",
  },
];

export default function FeaturedProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured Projects</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
