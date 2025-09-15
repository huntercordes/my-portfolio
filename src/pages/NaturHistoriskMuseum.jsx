import { useState } from "react";
import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import DoubleDiamond from "../components/DoubleDiamond/DoubleDiamond";
import styles from "../styles/NaturHistoriskMuseum.module.css";

export default function NaturHistoriskMuseum() {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    { title: "Discover", items: ["Desk research", "Field research", "Interviews"] },
    { title: "Define", items: ["Affinity mapping", "Problem framing"] },
    { title: "Develop", items: ["Ideation workshops", "Prototyping"] },
    { title: "Deliver", items: ["User testing", "Final implementation"] },
  ];

  function handlePhaseClick(idx) {
    setActivePhase(idx);
    // You can trigger your triangle expansion logic here if needed
  }

  return (
    <div>
      <CaseStudyIntro
        title="Strategic Design for Naturhistorisk Museum"
        subtitle="NHM - CASE STUDY"
        description="This project was part of..."
        role="UX Designer"
        date="January - March 2024"
      />

      <DoubleDiamond
        phases={phases}
        activePhase={activePhase}
        onPhaseClick={handlePhaseClick}
      />
    </div>
  );
}
