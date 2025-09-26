import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import RowOne from "../components/FeaturedProjects/RowOne";
// import more rows as needed

export default function NaturHistoriskMuseum() {
  return (
    <div>
      {/* Intro at top */}
      <CaseStudyIntro
        title="Strategic Design for Naturhistorisk Museum"
        subtitle="NHM - CASE STUDY"
        description="This project was part of a UX design course where we focused on improving visitor experience."
        role="UX Designer"
        date="January - March 2024"
      />

      {/* Row 1 */}
      <RowOne
        leftTitle="Research"
        leftText="Conducted user interviews, observed visitor behavior, and gathered insights about museum navigation."
        rightTitle="Competitive Analysis"
        rightText="Analyzed other museums and exhibitions to understand best practices and identify opportunities."
      />
    </div>
  );
}
