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
    <main className="page-shell page-content simple-contact-page">
      <section className="simple-page-header">
        <div className="section-heading">
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="simple-contact-list" aria-label={copy.detailsTitle}>
        {copy.details.map((item, index) => (
          <article className="simple-contact-item" key={item.label}>
            <div className="icon">{detailIcons[index]}</div>
            <div>
              <h2>{item.label}</h2>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="simple-contact-note">
        <h2>{copy.inquiryTitle}</h2>
        <p>{copy.inquiryText}</p>
        <span>{copy.responseCommitment}</span>
      </section>
    </main>
  );
};

export default ContactPage;
