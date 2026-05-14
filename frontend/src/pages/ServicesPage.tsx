import React from "react";
import { Check } from "lucide-react";

import {
  facilityIcons,
  servicePillarIcons,
  type AppCopy
} from "../data/translations";

type ServicesPageProps = {
  copy: AppCopy["services"];
};

const ServicesPage: React.FC<ServicesPageProps> = ({ copy }) => {
  return (
    <main className="page-shell page-content">
      <section className="inner-hero">
        <div className="section-heading">
          <p className="eyebrow booking-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>{copy.pillarsTitle}</h2>
        </div>

        <div className="feature-grid three-column">
          {copy.pillars.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <div className="icon">{servicePillarIcons[index]}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>{copy.facilitiesTitle}</h2>
        </div>

        <div className="feature-grid three-column">
          {copy.facilities.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <div className="icon">{facilityIcons[index]}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section emphasis-panel">
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>{copy.standardsTitle}</h2>
        </div>

        <ul className="policy-list standards-list">
          {copy.standards.map((item) => (
            <li key={item}>
              <Check size={15} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ServicesPage;
