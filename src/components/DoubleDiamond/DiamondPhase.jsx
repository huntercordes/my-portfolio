import React, { useEffect, useRef, useState } from "react";
import styles from "./DoubleDiamond.module.css";

export default function DiamondPhase({
  title,
  items = [],
  side,
  isActive,
  hasActive,
  onClick,
}) {
  const ref = useRef();
  const [centerStyle, setCenterStyle] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [expandOrigin, setExpandOrigin] = useState({ top: 0, left: 0 });
  const [activeRotate, setActiveRotate] = useState("0deg");

  useEffect(() => {
    if (isActive && !expanded) {
      const timer = setTimeout(() => setExpanded(true), 1000); // Wait for move/rotate
      return () => clearTimeout(timer);
    }
  }, [isActive, expanded]);

  function handleClick() {
    if (!isActive) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const centerY = window.innerHeight / 2 - (rect.top + rect.height / 2);

      const rotateDeg = side === "left" ? "90deg" : "-90deg";

      setCenterStyle({
        "--center-x": `${centerX}px`,
        "--center-y": `${centerY}px`,
        "--active-rotate": rotateDeg,
      });

      setActiveRotate(rotateDeg); // <-- Always set this!

      setExpandOrigin({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });

      onClick();
    }
  }

  console.log("expanded:", expanded, "rotate:", centerStyle["--active-rotate"]);

  return (
    <div
      ref={ref}
      className={`${styles.phaseWrapper} ${
        isActive ? styles.activeWrapper : ""
      } ${!isActive && hasActive ? styles.inactiveWrapper : ""}`}
      style={isActive ? centerStyle : {}}
      onClick={handleClick}
    >
      <div
        className={`${styles.triangleTitle} ${
          isActive ? styles.titleActive : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`${styles.triangleShape} ${
          side === "left" ? styles.left : styles.right
        } ${expanded ? styles.expandedShape : isActive ? styles.activeShape : ""}`}
        style={{
          ...(expanded
            ? {
                top: `${expandOrigin.top}px`,
                left: `${expandOrigin.left}px`,
                width: "100vw",
                height: "100vh",
              }
            : isActive
            ? centerStyle
            : {}),
          "--active-rotate": activeRotate, // <-- Use the state, not centerStyle!
        }}
      />
      <div
        className={`${styles.triangleContent} ${
          expanded ? styles.expandedContent : ""
        }`}
      >
        <ul className={styles.phaseList}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
