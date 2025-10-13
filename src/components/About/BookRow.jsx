import { useState } from "react";
import styles from "./BookRow.module.css";

export default function BookRow({ books, title }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={styles.bookRow}>
      {/* Floating title/description */}
      <h3 className={styles.rowTitle}>{title}</h3>

      <div className={styles.booksContainer}>
        {books.map((book, index) => (
          <div
            key={index}
            className={`${styles.bookWrapper} ${
              hoveredIndex === index ? styles.hovered : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={book.cover}
              alt={book.alt}
              className={styles.bookCover}
            />
            {hoveredIndex === index && (
              <div className={styles.overlay}>
                <p>{book.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
