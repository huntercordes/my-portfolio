import styles from "./ListItemWithTextAndImage.module.css";

export default function ListItemWithTextAndImage({ text, images, show }) {
  return (
    <div className={`${styles.listItemTextImage} ${show ? styles.show : ""}`}>
      <div className={styles.text}>{text}</div>
      <div className={styles.images}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt="" />
        ))}
      </div>
    </div>
  );
}
