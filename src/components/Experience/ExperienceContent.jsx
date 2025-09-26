import ExperienceItem from "./ExperienceItem"; // correct path
import styles from "../../styles/ExperienceContent.module.css";
import animelogo33 from "../../assets/animelogo33.png";

const beforeContent = [
  {
    year: 2016,
    title: "Project RISHI",
    subtitle: ["Photography", "NGO", "India", "Videography", "Volunteer"],
    description: "Worked with local NGOs in the summers of 2016 and 2017, I contributed to a rural development initiative in three villages near New Delhi. My primary responsibility was documenting the progress of various projects, while also collaborating with local NGOs on construction efforts that supported the community's development through photography.",
    photo: animelogo33
  },
  {
    year: 2016,
    title: "Cal Poly Pomona University (International Business)",
    subtitle: ["Education", "Business", "Economics", "Marketing", "Bachelor Degree"],
    description: "From 2015 to 2020, I pursued a Bachelor’s degree in International Business, with coursework focused on marketing, accounting, economics, statistics, and business strategy.",
  },
  {
    year: 2017,
    title: "Russian, French, and Portuguese Language Courses",
    subtitle: ["Language", "Night Classes", "Cultural Exposure"],
    description: "Between 2017 and 2019, alongside my university studies in French, I also pursued Portuguese at Pasadena Community College and Russian at Santa Monica Community College. This experience reflects my continuous pursuit of knowledge and passion for global cultures. It later inspired me to live in Lisbon and spend extended periods in Moscow, further deepening my proficiency and practical use of Portuguese and Russian.",
  },
  {
    year: 2018,
    title: "Northwestern Mutual (Financial Representative Intern)",
    subtitle: ["Finance", "Internship", "Client Relations"],
    description: "In the summer of 2018, I worked for a Forbes 50 company in downtown Los Angeles’ financial district. My responsibilities focused on networking to build a client base while pursuing certifications and developing a deeper understanding of financial markets and investment products.",
  },
  {
    year: 2020,
    title: "Moved to Denmark",
    subtitle: ["Travel", "Experiences", "Cultural Adaptation"],
    description: "In the winter of 2020, amid the challenges of COVID-19, I relocated to Aarhus, demonstrating resilience and adaptability while beginning a new stage in my personal and professional life.",
  },
];

const afterContent = [
  {
    year: 2021,
    title: "Cafe Her og Der",
    subtitle: ["Danish", "Full-time", "Barista"],
    description: "In early 2021, I began working at a small café in Aarhus, where I gained experience in food preparation, coffee making, and daily operations such as opening and closing. This role also offered my first real opportunity to practice Danish and engage with local culture at a time when language schools and many other businesses remained closed.",
  },
  {
    year: 2022,
    title: "Danish Classes",
    subtitle: ["Danish Language", "Integration", "Education"],
    description: "I attended CLAVIS Danish courses for two years, completing the highest module. Beyond the classroom, I made a daily effort to practice the language, using it in everyday situations to steadily build confidence and cultural understanding.",
  },
  {
    year: 2022,
    title: "VIA University College (Software Engineering)",
    subtitle: ["Software Development", "Backend Development", "Full Stack", "Mathematics"],
    description: "In the winter of 2022, I began a software engineering program, diving deeply into coding principles and organizational frameworks. During the program, I worked extensively with Java, JavaScript, CSS, HTML, C#, .NET, SQL, SCRUM, UML, and MVVM, building practical skills in both development and software design. Although I concluded my studies after the spring semester of 2023 due to financial constraints, the experience strengthened my technical foundation and problem-solving abilities.",
  },
  {
    year: 2023,
    title: "Netto Warehouse",
    subtitle: ["Warehouse", "Full-time", "Logistics"],
    description: "In early summer 2023, I started working at the Netto warehouse in Brabrand. While the role involved physically demanding tasks, it allowed me to maintain financial stability in Denmark and pursue further educational opportunities.",
  },
  {
    year: 2024,
    title: "Erhvervsakademiet Aarhus (Multimedia Design)",
    subtitle: ["Education", "UX/UI", "Web Development", "Design Thinking"],
    description: "In the fall of 2024, I began studying Multimedia Design. Combining my prior coding experience with a creative mindset, I found the program to be the perfect balance of technical and design skills, preparing me for the professional market. Our coursework focuses on HTML, CSS, and JavaScript, using Firebase and React for development, while UX/UI projects are designed with Figma and other essential digital product tools.",
  },
  {
    year: 2024,
    title: "SEIN Magazine",
    subtitle: ["SoMe", "Freelance", "Photography", "Videography"],
    description: "In the summer of 2024, I started volunteering for SEIN magazine on their social media team. When a position opened, I transitioned to the film team—a challenge I eagerly embraced as my first professional environment where I spoke only Danish. A year later, I remain grateful for the colleagues who nurtured my creativity and helped me gain the confidence to use Danish in any situation.",
  },
   {
    year: 2025,
    title: "SPOT/ UMTO/ FoW",
    subtitle: ["SoMe", "Freelance", "Photography", "Videography", "Event Coverage"],
    description: "In 2025, after attending a week-long videography camp organized by SPOT Festival in collaboration with UMTO and SEIN, I helped film concerts throughout the festival. This experience led to a position with a new CBS research project documenting Denmark’s evolving labor market through film. The “Future of Work” project has been featured on DR News, and we are currently producing “portraits” of individuals across a wide range of professions in Denmark.",
  },
];

function ExperienceContent({ section, refs }) {
  const content = section === "before" ? beforeContent : afterContent;

  return (
    <div className={styles.contentWrapper}>
      {content.map((item) => (
        <ExperienceItem
    key={`${item.year}-${item.title}`}  // unique key
          title={item.title}
          year={item.year}
          bubbles={item.subtitle}
          description={item.description}
            photo={item.photo} // <— must include this

          ref={(el) => (refs.current[item.year] = el)}
        />
      ))}
    </div>
  );
}

export default ExperienceContent;
