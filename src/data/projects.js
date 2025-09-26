import persona from "../assets/persona.png";

export const naturHistoriskPhases = [
  {
    id: "discover",
    title: "Discover",
    items: [
      {
        text: "Desk Research",
        type: "textImage",
        content: {
          text: "We gathered insights through desk research...",
          images: [persona, persona],
        },
      },
      {
        text: "Field Research",
        type: "centeredImage",
        content: {
          images: [persona],
        },
      },
    ],
  },
  {
    id: "define",
    title: "Define",
    items: [
      {
        text: "Empathy Map",
        type: "textImage",
        content: {
          text: "We defined the problem using empathy maps...",
          images: [persona],
        },
      },
      {
        text: "User Persona",
        type: "centeredImage",
        content: {
          images: [persona],
        },
      },
    ],
  },
  {
    id: "develop",
    title: "Develop",
    items: [
      {
        text: "Wireframes",
        type: "textImage",
        content: {
          text: "We developed low- and mid-fidelity wireframes...",
          images: [persona],
        },
      },
      {
        text: "User Testing",
        type: "centeredImage",
        content: {
          images: [persona],
        },
      },
    ],
  },
  {
    id: "deliver",
    title: "Deliver",
    items: [
      {
        text: "Final Report",
        type: "textImage",
        content: {
          text: "We delivered the final solution and documentation...",
          images: [persona],
        },
      },
      {
        text: "High-fidelity Mockups",
        type: "centeredImage",
        content: {
          images: [persona],
        },
      },
    ],
  },
];
