import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro";
import RowOne from "../components/FeaturedProjects/RowOne";
import styles from "../styles/NaturHistoriskMuseum.module.css"; // ✅ reuse background + layout styles
import { useRef, useEffect } from "react";
import OnePhoto from "../components/FeaturedProjects/OnePhoto";
import Bioms from "../assets/Bioms.png";
import digitaljournal from "../assets/digitaljournal.jpg";
import Start from "../components/FeaturedProjects/Start";
import DeskResearch from "../assets/deskresearchr.png";
import fieldresearch from "../assets/fieldresearch.png";
import doublediamond from "../assets/doublediamond.png";
import ProjectManagement from "../components/FeaturedProjects/ProjectManagement";
import DoublePicture from "../components/FeaturedProjects/DoublePicture";
import affinity from "../assets/affinity.png";
import persona from "../assets/persona.png";
import listofvalues from "../assets/listofvalues.png";
import ooux from "../assets/ooux.png";
import moodboard from "../assets/moodboard.png";
import styleguide from "../assets/styleguide.png";
import userflowexam from "../assets/userflowexam.jpg";
import hifive from "../assets/hifive.png";
import lofi from "../assets/lofi.png";
import contrastcheck from "../assets/contrastcheck.jpg";
import Navimage from "../assets/Navbar.jpg";

export default function NaturHistoriskMuseum() {
  return (
    <div className={styles.container}>
      {/* ✅ your case study content */}
      <CaseStudyIntro
        title="Naturhistorisk Museum"
        description="This project was completed during my second semester in the Multimedia Design program. We were asked to apply key design processes and principles to redesign the Naturhistorisk Museum’s website and create a new digital solution that encourages visitors to return and engage more deeply with the exhibitions."
        role={["UX", "UI", "User Research", "Front-end Development"]}
        date="May - June 2025"
      />
      <OnePhoto src={Bioms} alt="Naturhistorisk Museum redesign" />
      <ProjectManagement
        title="Project Management"
        description="We used the double diamond framework to guide our design process, ensuring a structured approach to problem-solving and innovation. This involved phases of discovery, definition, development, and delivery, allowing us to thoroughly explore the challenges and opportunities presented by the museum's digital presence."
        imgSrc={doublediamond}
        imgAlt="Double diamond framework"
      />
      <Start
        deskTitle="Desk Research"
        deskDescription="We began by exploring the Naturhistorisk Museum’s existing digital presence and identifying opportunities to connect the online and physical experiences by also exploring solutions created by existing museums. Our early desk research focused on observing ways other locations make exhibits more interactive and engaging for visitors."
        deskImgSrc={DeskResearch}
        deskImgAlt="Desk research workspace"
        fieldTitle="Field Research"
        fieldDescription="Our field research involved developing a structured observation and interview guide to gain deeper insights into visitor behavior and engagement patterns at the museum. We conducted on-site visits to observe how guests interacted with the exhibits, noting moments of curiosity, confusion, and disengagement. Alongside this, we held short contextual interviews with visitors to understand their motivations, expectations, and challenges when navigating the space. These findings helped us identify key touchpoints in the user journey and uncover opportunities to enhance both the digital and physical experience of the museum."
        fieldImgSrc={fieldresearch}
        fieldImgAlt="Field research observations"
        deskButtonText="Click for Field Research"
        fieldButtonText="Click for Desk Research"
      />

      <RowOne
        leftTitle="Affinity Diagram"
        leftText="We divided the insights from our interviews into five main categories: visit motivation, discovery, exhibit impressions, pain points and critiques, and suggestions for improvement. This method helped us identify which experiences and issues appeared most frequently, providing a strong foundation for shaping our solution. It also allowed us to distinguish between general feedback and feedback that pointed to specific needs or frustrations. Having everything grouped visually made it easier to understand what mattered most to our users and where our design efforts should focus"
        rightTitle="Persona"
        rightText=" Using the themes and patterns identified in the affinity diagram, we created a persona to represent our target group. This persona helps guide our design decisions and keeps the user experience at the center of the project. By referring to it throughout the design process, we remain focused on user needs grounded in research. It ensures that our design choices align with the type of experience visitors - like the one represented by our persona - are looking for."
      />
      <DoublePicture
        leftImg={affinity}
        rightImg={persona}
        leftAlt="Affinity diagram"
        rightAlt="Persona"
      />
      <RowOne
        leftTitle="Further into Defining"
        leftText="Following our persona, we continued our defining phase by creating: an empathy map - to help us capture what users think, feel, see, hear, say, and do while interacting with the museum space, a value proposition canvas - to connect user needs with what our solution could offer, and OOUX tables - to provide a clear foundation for how we structured our content and plan future features."
        rightTitle="List of Requirements/Values"
        rightText="Based on our research, we defined a set of core requirements that guide the development of our digital solution. The login system will allow users to sign in using their mobile number, followed by an SMS verification. To support accessibility, the app includes features such as high contrast visuals, easy-to-read fonts, and animal sounds. These features help make the app easier to use for everyone and are based on accessibility principles recommended in mobile app design. We defined the core values of our digital solution after reviewing insights from research and field observations. From an initial list of 41 values, we selected five that best represent the purpose of our app and what users care most about. These are Creativity, Discovery, Education, Experience, and Nature."
      />
      <DoublePicture
        leftImg={ooux}
        rightImg={listofvalues}
        leftAlt="OOUX tables"
        rightAlt="List of Requirements/Values"
      />
      <Start
        deskTitle="Moodboard"
        deskDescription="Our moodboard was created to set the visual direction for the app in a way that connects to the theme of nature and the atmosphere of the Natural History Museum. The goal was to create a style that feels calm, modern, and inspired by the natural world."
        deskImgSrc={moodboard}
        deskImgAlt="Moodboard"
        fieldTitle="Style Guide"
        fieldDescription="After thoroughly reviewing the system, we created a style guide that includes all the necessary components such as colors, heading levels, text styles, and spacing rules to ensure consistency."
        fieldImgSrc={styleguide}
        fieldImgAlt="Style guide"
        deskButtonText="Click for Style Guide"
        fieldButtonText="Click for Moodboard"
      />
      <RowOne
        leftTitle="Sketches"
        leftText="As part of our ideation process, we used a modified version of the Crazy 8 sketching method, known as Crazy 4. The original Crazy 8 approach is a fast-paced brainstorming exercise where participants sketch eight different design ideas in eight minutes. This activity helped us build momentum in the early stages of design and made it easier to move from broad exploration into focused concept development."
        rightTitle="User Flow"
        rightText="User flow is a crucial part of designing our solution because it shows the path users take to complete important tasks on the website. It helps us understand how users move through the system and what steps they follow to reach their goals smoothly."
      />
      <OnePhoto src={userflowexam} alt="Naturhistorisk Museum redesign" />
      <RowOne
        leftTitle="Lo-Fi Wireframes"
        leftText="This phase helped us define the app’s main features, organize content effectively, and plan how users would interact with different parts of the app. The Lo-Fi wireframes served as a blueprint, allowing us to test the flow and functionality early on, and make improvements before developing the high-fidelity design."
        rightTitle="Gangster and Guerilla testing"
        rightText="To evaluate the usability and findability of our lo-fi wireframe, we applied gangster testing (Trunk Testing) and guerrilla testing methods. We asked people to test the prototype by completing typical tasks like exploring biomes, accessing animal information, and using the profile and story game page. During these sessions, we observed their interactions and asked questions to understand where they struggled or became confused."
      />
      <OnePhoto src={lofi} alt="Naturhistorisk Museum redesign" />
      <RowOne
        leftTitle="Hi-Fi Wireframes"
        leftText="After getting useful feedback from our Lo-Fi testing, we moved on to the high-fidelity mockups. Here, we focused on visual style, adding real content, and making everything feel more finished and user-friendly. We followed our mood board to keep colors consistent across all screens. For visuals, we used AI to generate images that matched the theme of our app. On the Biomes page, we used Sora to create short videos for each biome instead of static pictures."
        rightTitle="Accessibility"
        rightText="To make sure our design is accessible for everyone, we used a Figma plugin called Stark – Contrast and Accessibility Checker. This tool helped us test different parts of our design so that people with different needs and abilities can still use the website comfortably."
      />
      <DoublePicture
        leftImg={hifive}
        rightImg={contrastcheck}
        leftAlt="Hi-Fi Wireframes"
        rightAlt="Accessibility checker"
      />
      <ProjectManagement
        title="Coding"
        description="Once our high-fidelity prototypes were finalized and user-tested, we began developing the new museum website using React, a component-based JavaScript library that supports modular, reusable, and scalable design. This approach streamlined our workflow and improved performance through React’s virtual DOM, which updates only the necessary parts of a page. From the beginning, we also prioritized SEO, implementing best practices such as metadata optimization, descriptive alt text, and server-side rendering where possible. Each component was styled using CSS modules to ensure maintainability and prevent style conflicts. Finally, we focused on responsive design, ensuring the layout adapted smoothly across devices for both on-site and remote visitors."
        imgSrc={Navimage}
        imgAlt="Navigation Bar Code"
      />
    </div>
  );
}
