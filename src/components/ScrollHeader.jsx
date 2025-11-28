import styles from "../styles/ScrollHeader.module.css";

export default function ScrollHeader({ title, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        {children && <p className={styles.text}>{children}</p>}
      </div>
    </div>
  );
}
