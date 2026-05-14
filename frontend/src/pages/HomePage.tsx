import React, { useEffect, useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

import heroImg from "../assets/H1.png";
import spaImg from "../assets/H2.png";
import roomImg from "../assets/H3.png";
import po1 from "../assets/Po1.png";
import po2 from "../assets/Po2.png";
import po3 from "../assets/Po3.png";
import { amenityIcons, type AppCopy } from "../data/translations";

type HomePageProps = {
  copy: AppCopy["home"];
  onNavigate: (page: "home" | "services" | "book" | "contact") => void;
};

const HomePage: React.FC<HomePageProps> = ({ copy, onNavigate }) => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const pageElement = pageRef.current;

    if (!pageElement) {
      return;
    }

    const animatedElements = pageElement.querySelectorAll<HTMLElement>("[data-scroll-reveal]");

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <div className="hero-content page-shell">
            <div className="hero-copy">
              <p className="eyebrow">{copy.eyebrow}</p>
              <h1>{copy.title}</h1>
              <p>{copy.description}</p>

              <div className="hero-actions">
                <button className="primary-button" onClick={() => onNavigate("book")} type="button">
                  {copy.primaryAction}
                </button>
                <button className="ghost-button" onClick={() => onNavigate("services")} type="button">
                  {copy.secondaryAction}
                  <ArrowRight size={16} />
                </button>
              </div>

              <span className="location">
                <MapPin size={16} />
                {copy.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="page-shell page-content home-page" ref={pageRef}>
        <section className="content-section split-story scroll-reveal" data-scroll-reveal>
          <div className="section-heading scroll-reveal" data-scroll-reveal>
            <div className="divider left"></div>
            <h2>{copy.experienceTitle}</h2>
            <p>{copy.description}</p>
          </div>

          <div className="feature-image-grid">
            <div className="image-card scroll-reveal" data-scroll-reveal>
              <img src={spaImg} alt={copy.imageLabels[0]} />
              <div className="image-overlay">{copy.imageLabels[0]}</div>
            </div>
            <div className="image-card scroll-reveal delay-1" data-scroll-reveal>
              <img src={roomImg} alt={copy.imageLabels[1]} />
              <div className="image-overlay">{copy.imageLabels[1]}</div>
            </div>
          </div>
        </section>

        <section className="content-section scroll-reveal" data-scroll-reveal>
          <div className="section-heading center scroll-reveal" data-scroll-reveal>
            <div className="divider"></div>
            <h2>{copy.highlightsTitle}</h2>
          </div>

          <div className="promo-grid">
            {[po1, po2, po3].map((image, index) => (
              <div className={`promo-card scroll-reveal delay-${index}`} data-scroll-reveal key={image}>
                <img src={image} alt={`${copy.highlightsTitle} ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="content-section scroll-reveal" data-scroll-reveal>
          <div className="section-heading center scroll-reveal" data-scroll-reveal>
            <div className="divider"></div>
            <h2>{copy.amenitiesTitle}</h2>
          </div>

          <div className="feature-grid three-column">
            {copy.amenities.map((item, index) => (
              <article className={`feature-card scroll-reveal delay-${index}`} data-scroll-reveal key={item.title}>
                <div className="icon">{amenityIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
