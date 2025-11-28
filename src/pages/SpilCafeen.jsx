import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import styles from "../styles/NaturHistoriskMuseum.module.css"; // ✅ reuse background + layout styles
import OnePhoto from "../components/FeaturedProjects/OnePhoto";
import DoublePicture from "../components/FeaturedProjects/DoublePicture";
import usermap from "../assets/userandclientmap.png";
import inspirationboard from "../assets/inspirationboard.png";
import guerillatesting from "../assets/guerillatesting.png";
import CaseStudyVideo from "../components/CaseStudyVideo/CaseStudyVideo";
import spilcafeenvideo from "../assets/spilcafeenvideo.mp4";
export default function SpilCafeen() {
  return (
    <div className={styles.container}>
      {/* ✅ your case study content */}
      <CaseStudyIntro
        title="Spilcafeen"
        description="This project took place over two weeks in our first semester. To begin, our class spent an afternoon at the café, observing how visitors interacted with both the physical space and the available games. These insights helped us understand the user journey and how it connected to the café’s website.

From there, we reviewed the existing website and identified several usability issues that affected how visitors searched for games or explored upcoming events. We redesigned the site to create a more intuitive experience and built a system for keeping the café’s game inventory up to date.

My responsibilities included conducting user research, defining the site’s requirements, and designing the admin-facing interface."
        role={["UX", "UI", "User Research", "Front-end Development"]}
        date="May - June 2025"
      />
      <OnePhoto src={usermap} alt="User and Client story mappings" />

      <DoublePicture
        leftImg={inspirationboard}
        rightImg={guerillatesting}
        leftAlt="Inspiration Board"
        rightAlt="Guerrilla Testing"
      />
      <CaseStudyVideo src={spilcafeenvideo} />
    </div>
  );
}
