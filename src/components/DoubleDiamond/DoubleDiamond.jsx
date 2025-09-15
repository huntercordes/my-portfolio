import styles from "./DoubleDiamond.module.css";
import DiamondPhase from "./DiamondPhase";

export default function DoubleDiamond({ phases, activePhase, onPhaseClick }) {
  if (!phases || phases.length !== 4) {
    console.warn("DoubleDiamond expects exactly 4 phases (array of 4).");
    return null;
  }

  return (
    <div className={styles.diamondContainer}>
      {/* First diamond */}
      <div className={styles.diamond}>
        <DiamondPhase
          title={phases[0].title}
          items={phases[0].items}
          side="left"
          isActive={activePhase === 0}
          hasActive={activePhase !== null}
          onClick={() => onPhaseClick(0)}
        />
        <DiamondPhase
          title={phases[1].title}
          items={phases[1].items}
          side="right"
          isActive={activePhase === 1}
          hasActive={activePhase !== null}
          onClick={() => onPhaseClick(1)}
        />
      </div>

      {/* Second diamond */}
      <div className={styles.diamond}>
        <DiamondPhase
          title={phases[2].title}
          items={phases[2].items}
          side="left"
          isActive={activePhase === 2}
          hasActive={activePhase !== null}
          onClick={() => onPhaseClick(2)}
        />
        <DiamondPhase
          title={phases[3].title}
          items={phases[3].items}
          side="right"
          isActive={activePhase === 3}
          hasActive={activePhase !== null}
          onClick={() => onPhaseClick(3)}
        />
      </div>
    </div>
  );
}
