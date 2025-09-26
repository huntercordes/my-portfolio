import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link}>See More</Link>
    </div>
  );
}
