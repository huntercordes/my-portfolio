import styles from "../../styles/ExperienceCarousel.module.css";
import animelogo33 from "../../assets/animelogo33.png";
import northwesternmutual from "../../assets/northwestern-mutual.jpeg";
import netto from "../../assets/netto.jpg";
import lars from "../../assets/lars.jpeg";
import Klara from "../../assets/Klara.png";
import morisaki from "../../assets/morisaki.png";

export const experiences = [
  {
    year: 2025,
    title: "SPOT / UMTO / FoW",
    bubbles: [
      "SoMe",
      "Freelance",
      "Photography",
      "Videography",
      "Event Coverage",
    ],
    description:
      "After attending SPOT Festival’s videography camp, I filmed concerts and worked on CBS’s 'Future of Work' project documenting Denmark’s labor market.",
    photo: lars,
  },
  {
    year: 2024,
    title: "SEIN Magazine",
    bubbles: ["SoMe", "Freelance", "Photography", "Videography"],
    description:
      "Joined SEIN Magazine’s film team — my first professional environment conducted entirely in Danish.",
    photo: morisaki,
  },
  {
    year: 2024,
    title: "Erhvervsakademiet Aarhus",
    bubbles: ["UX/UI", "Web Development", "Design Thinking"],
    description:
      "Began Multimedia Design — a program blending creativity and coding using React, Firebase, and Figma.",
    photo: Klara,
  },
  {
    year: 2023,
    title: "Netto Warehouse",
    bubbles: ["Warehouse", "Full-time", "Logistics"],
    description:
      "Maintained financial stability while working full-time in Brabrand and continuing independent design work.",
    photo: netto,
  },
  {
    year: 2022,
    title: "VIA University College",
    bubbles: ["Software Engineering", "Full Stack", "Mathematics"],
    description:
      "Studied Software Engineering focusing on Java, C#, and system architecture — foundation for modern web dev.",
  },
  {
    year: 2021,
    title: "Cafe Her og Der",
    bubbles: ["Danish", "Full-time", "Barista"],
    description:
      "Worked at a small café in Aarhus while improving my Danish and understanding of local work culture.",
  },
  {
    year: 2020,
    title: "Moved to Denmark",
    bubbles: ["Travel", "Adaptation", "New Beginnings"],
    description:
      "Relocated during COVID-19 — a leap that shaped both my cultural and personal resilience.",
  },
  {
    year: 2018,
    title: "Northwestern Mutual",
    bubbles: ["Finance", "Internship", "Client Relations"],
    description:
      "Worked in LA’s financial district, developing networking and analytical skills in investment services.",
    photo: northwesternmutual,
  },
  {
    year: 2016,
    title: "Project RISHI",
    bubbles: ["Photography", "NGO", "India", "Videography"],
    description:
      "Documented community projects in rural India, combining visual storytelling and volunteer work.",
    photo: animelogo33,
  },
];

const ExperienceCarousel = forwardRef(
  ({ activeIndex, setActiveIndex }, ref) => {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const isProgrammaticScrollRef = useRef(false);
    const resetProgrammaticScrollTimeout = useRef(null);
    const activeIndexRef = useRef(activeIndex);

    useEffect(() => {
      activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const scrollToCard = useCallback((index, behavior = "smooth") => {
      const container = containerRef.current;
      const card = cardRefs.current[index];
      if (!container || !card) return;

      const containerWidth = container.clientWidth;
      const cardWidth = card.clientWidth;
      const cardOffset = card.offsetLeft;
      const maxScrollLeft = container.scrollWidth - containerWidth;
      const target = cardOffset - (containerWidth - cardWidth) / 2;
      const safeTarget = Math.min(Math.max(target, 0), maxScrollLeft);

      if (Math.abs(container.scrollLeft - safeTarget) < 1) return;

      isProgrammaticScrollRef.current = true;
      container.scrollTo({ left: safeTarget, behavior });

      if (resetProgrammaticScrollTimeout.current) {
        clearTimeout(resetProgrammaticScrollTimeout.current);
      }
      resetProgrammaticScrollTimeout.current = window.setTimeout(
        () => {
          isProgrammaticScrollRef.current = false;
        },
        behavior === "smooth" ? 450 : 20
      );
    }, []);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index) => {
        scrollToCard(index);
      },
    }));

    useEffect(() => {
      const frame = requestAnimationFrame(() => {
        scrollToCard(activeIndex, "smooth");
      });

      return () => {
        cancelAnimationFrame(frame);
        if (resetProgrammaticScrollTimeout.current) {
          clearTimeout(resetProgrammaticScrollTimeout.current);
        }
      };
    }, [activeIndex, scrollToCard]);

    useEffect(() => {
      return () => {
        if (resetProgrammaticScrollTimeout.current) {
          clearTimeout(resetProgrammaticScrollTimeout.current);
        }
      };
    }, []);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      let animationFrame = null;

      const handleScroll = () => {
        if (isProgrammaticScrollRef.current) return;
        if (!cardRefs.current.length) return;

        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          const containerRect = container.getBoundingClientRect();
          const center = container.scrollLeft + containerRect.width / 2;

          let closestIndex = 0;
          let minDistance = Infinity;

          cardRefs.current.forEach((card, index) => {
            if (!card) return;
            const cardRect = card.getBoundingClientRect();
            const cardCenter =
              container.scrollLeft +
              (cardRect.left - containerRect.left) +
              cardRect.width / 2;
            const distance = Math.abs(cardCenter - center);

            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          });

          if (closestIndex !== activeIndexRef.current) {
            setActiveIndex(closestIndex);
          }
        });
      };

      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }, [setActiveIndex]);

    useEffect(() => {
      const handleResize = () => {
        scrollToCard(activeIndexRef.current, "auto");
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [scrollToCard]);

  const handleNext = () => {
    if (!showNext) return;
    setActiveIndex((current) =>
      Math.min((current ?? safeIndex) + 1, totalExperiences - 1)
    );
  };

  return (
    <div className={styles.carousel}>
      <button
        type="button"
        className={styles.navButton}
        onClick={handlePrevious}
        disabled={!showPrevious}
        aria-label="View previous experience"
      >
        <span aria-hidden="true">←</span>
      </button>

      <article className={styles.card}>
        <header className={styles.cardHeader}>
          <p className={styles.year}>{experience.year}</p>
          <h2 className={styles.title}>{experience.title}</h2>
        </header>

        <div className={styles.bubbles}>
          {experience.bubbles.map((bubble, index) => (
            <span key={`${bubble}-${index}`} className={styles.bubble}>
              {bubble}
            </span>
          ))}
        </div>

        <p className={styles.description}>{experience.description}</p>

        {experience.photo ? (
          <img
            src={experience.photo}
            alt={experience.title}
            className={styles.photo}
          />
        ) : null}

        <footer className={styles.footer}>
          <span className={styles.counter}>
            {safeIndex + 1} / {totalExperiences}
          </span>
        </footer>
      </article>

      <button
        type="button"
        className={styles.navButton}
        onClick={handleNext}
        disabled={!showNext}
        aria-label="View next experience"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
