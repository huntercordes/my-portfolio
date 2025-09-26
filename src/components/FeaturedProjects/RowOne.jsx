import styles from "./RowOne.module.css";

export default function RowOne({ leftTitle, leftText, rightTitle, rightText }) {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.column}>
        <h3 className={styles.title}>{leftTitle}</h3>
        <p className={styles.text}>{leftText}</p>
      </div>

      <div className={styles.column}>
        <h3 className={styles.title}>{rightTitle}</h3>
        <p className={styles.text}>{rightText}</p>
      </div>
    </div>
  );
}
