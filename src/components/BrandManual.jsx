import styles from "../styles/BrandManual.module.css";
import BrandManualImg from "../assets/BrandManualAaruse.png"; // update path if needed

export default function BrandManual() {
  return (
    <div className={styles.container}>
      <img
        src={BrandManualImg}
        alt="Brand Manual"
        className={styles.brandManual}
      />
    </div>
  );
}
