import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import styles from "../styles/NaturHistoriskMuseum.module.css"; // ✅ reuse background + layout styles
import OnePhoto from "../components/FeaturedProjects/OnePhoto";
import DoublePicture from "../components/FeaturedProjects/DoublePicture";
import usermap from "../assets/userandclientmap.png";
import inspirationboard from "../assets/inspirationboard.png";
import guerillatesting from "../assets/guerillatesting.png";
import CaseStudyVideo from "../components/CaseStudyVideo/CaseStudyVideo";
import spilcafeenvideo from "../assets/spilcafeenvideo.mp4";
import BrandManual from "../components/BrandManual";
export default function BrandManuals() {
  return (
    <div className={styles.container}>
      {/*  my case study content */}
      <CaseStudyIntro
        title="Brand Manual Aaruse"
        description="Developing this brand manual was a key part of establishing a clear and consistent visual identity for our project. The goal was not only to define the essential design elements - such as typography, color, layout, iconography, and photography - but also to create a unified system that supports both the product experience and future design expansion.
Throughout this process, I approached the work the same way I would structure a digital design system: identifying patterns, defining reusable components, creating rules around spacing and hierarchy, and ensuring the brand communicates the right tone in every context. The manual reflects the strategic decisions behind these choices and documents the reasoning that shaped the final direction.

This manual serves as a reference for designers and developers, helping ensure the brand remains recognizable, accessible, and aligned with its intended message. It also demonstrates our process-driven approach: combining research, visual exploration, prototyping, and careful iteration to build a system that is both functional and aesthetically coherent.
Below is the full brand manual, so feel free to explore each section as it walks through the complete identity of Aaruse and the decisions behind it."
        role={["UX", "UI", "User Research", "Figma Design", "Brand Manual"]}
        date="Fall 2025"
      />
      <BrandManual />
    </div>
  );
}
