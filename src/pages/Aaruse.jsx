import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import styles from "../styles/NaturHistoriskMuseum.module.css";
import Notion from "../components/FeaturedProjects/Notion";

export default function Aaruse() {
  return (
    <div className={styles.container}>
      {/* my case study content */}
      <CaseStudyIntro
        title="Aaruse"
        description="This project was completed during my third semester in the Multimedia Design program. We were asked to create an application with monetization and sustainability in mind that encourages environmental awareness and care in Aarhus. We had large amounts of freedom when coming up with ideas and after intial research, landed on improving the process of reuse and ordering storskrald for waste. The full process from research to final prototype can be followed in the below notion file."
        role={["UX", "UI", "User Research", "Front-end Development"]}
        date="September - November 2025"
      />
      <Notion />
    </div>
  );
}
