import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import styles from "../styles/NaturHistoriskMuseum.module.css"; // ✅ reuse background + layout styles

export default function SpilCafeen() {

  return (
    <div className={styles.container}>      

      {/* ✅ your case study content */}
      <CaseStudyIntro
        title="Spilcafeen"
        description="This project was completed during my second semester in the Multimedia Design program. We were asked to apply key design processes and principles to redesign the Spilcafeen’s website and create a new digital solution that encourages visitors to return and engage more deeply with the exhibitions."
        role={["UX", "UI", "User Research", "Front-end Development"]}
        date="May - June 2025"
      />
    </div>
  );
}