import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import type { AppCopy } from "../data/translations";

type ContactPageProps = {
  copy: AppCopy["contact"];
};

const detailIcons = [
  <Phone size={20} key="phone" />,
  <Mail size={20} key="mail" />,
  <MapPin size={20} key="map" />
];

const ContactPage: React.FC<ContactPageProps> = ({ copy }) => {
  return (
    <main className="page-shell page-content">
      <section className="inner-hero">
        <div className="section-heading">
          <p className="eyebrow booking-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="content-section contact-panel">
          <div className="section-heading">
            <div className="divider left"></div>
            <h2>{copy.detailsTitle}</h2>
          </div>

          <div className="contact-list">
            {copy.details.map((item, index) => (
              <article className="contact-card" key={item.label}>
                <div className="icon">{detailIcons[index]}</div>
                <h3>{item.label}</h3>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="content-section contact-panel contact-aside">
          <div className="section-heading">
            <div className="divider left"></div>
            <h2>{copy.inquiryTitle}</h2>
            <p>{copy.inquiryText}</p>
          </div>

          <div className="contact-note">
            <h3>{copy.arrivalTitle}</h3>
            <p>{copy.arrivalText}</p>
          </div>

          <div className="contact-commitment">
            <span>{copy.responseCommitment}</span>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default ContactPage;
