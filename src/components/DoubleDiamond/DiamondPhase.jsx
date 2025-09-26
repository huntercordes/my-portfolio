import React, { useEffect, useRef, useState } from "react";
import styles from "./DoubleDiamond.module.css";
import ListItemWithTextAndImage from "./ListItemWithTextAndImage";
import ListItemWithCenteredImage from "./ListItemWithCenteredImage";

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
  const [animateList, setAnimateList] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [activeRotate, setActiveRotate] = useState("0deg");

  useEffect(() => {
    if (isActive && !expanded) {
      const timer = setTimeout(() => setExpanded(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, expanded]);

  // Trigger list stagger drop after expansion
  useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => setAnimateList(true), 800);
      return () => clearTimeout(timer);
    } else {
      setAnimateList(false);
      setShowContent(false);
    }
  }, [expanded]);

  // Trigger content fade-in AFTER list drop completes
  useEffect(() => {
    if (animateList) {
      const timer = setTimeout(() => setShowContent(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [animateList]);

  function handleClick() {
    if (!isActive) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(() => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2 - (rect.left + rect.width / 2);
        const centerY = window.innerHeight / 2 - (rect.top + rect.height / 2);
        const rotateDeg = side === "left" ? "90deg" : "-90deg";

        setCenterStyle({
          "--center-x": `${centerX}px`,
          "--center-y": `${centerY}px`,
          "--active-rotate": rotateDeg,
        });
        setActiveRotate(rotateDeg);
        onClick();
      }, 400);
    }
  }

  return (
    <div
      ref={ref}
      className={`${styles.phaseWrapper} ${
        isActive ? styles.activeWrapper : ""
      } ${!isActive && hasActive ? styles.inactiveWrapper : ""}`}
      style={isActive ? centerStyle : {}}
      onClick={handleClick}
    >
      {/* Title */}
      <div
        className={`${styles.triangleTitle} ${
          isActive ? styles.titleActive : ""
        }`}
      >
        {title}
      </div>

      {/* Triangle */}
      <div
        className={`${styles.triangleShape} ${
          side === "left" ? styles.left : styles.right
        } ${expanded ? styles.expandedShape : isActive ? styles.activeShape : ""}`}
        style={{
          "--active-rotate": activeRotate,
          "--expand-scale": expanded ? 6 : 1,
        }}
      />

      {/* List Items */}
      <ul className={`${styles.triangleContent}`}>
        {items.map((item, idx) => {
          const delay = idx * 0.5; // stagger

          return (
            <li
              key={idx}
              className={`${styles.listItem} ${
                animateList ? styles.listItemAnimate : ""
              }`}
              style={{
                transitionDelay: animateList ? `${delay}s` : "0s",
              }}
            >
              {item.text || item}

              <div
                className={`${styles.listItemContent} ${
                  showContent ? styles.listItemContentVisible : ""
                }`}
              >
                {item.type === "textImage" && (
                  <ListItemWithTextAndImage {...item.content} show={showContent} />
                )}
                {item.type === "centeredImage" && (
                  <ListItemWithCenteredImage {...item.content} show={showContent} />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
