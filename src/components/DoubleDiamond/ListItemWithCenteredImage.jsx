import styles from "./ListItemWithCenteredImage.module.css";

export default function ListItemWithCenteredImage({ images, show }) {
  return (
    <div className={`${styles.listItemCenteredImages} ${show ? styles.show : ""}`}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt="" />
      ))}
    </div>
  );
}
