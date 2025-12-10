import styles from "./notion.module.css";
import notionLogo from "../../assets/notionlogo.png";

export default function Notion() {
  return (
    <a
      href="https://www.notion.so/AARUSE-27fdff37ca5180daa7dbcde81fd40b94"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}>
      <div className={styles.card}>
        <img src={notionLogo} alt="Notion Logo" className={styles.image} />
        <p className={styles.label}>View Notion Case Study</p>
      </div>
    </a>
  );
}
