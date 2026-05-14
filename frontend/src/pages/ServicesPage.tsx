import React from "react";
import { Check } from "lucide-react";

import {
  type AppCopy,
  type RoomType
} from "../data/translations";

type ServicesPageProps = {
  copy: AppCopy["services"];
  roomTypes: RoomType[];
};

const ServicesPage: React.FC<ServicesPageProps> = ({ copy, roomTypes }) => {
  return (
    <main className="page-shell page-content">
      <section className="simple-page-header">
        <div className="section-heading">
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>{copy.facilitiesTitle}</h2>
        </div>

        <div className="service-room-list">
          {roomTypes.map((room) => (
            <article className="service-room-card" key={room.title}>
              <img src={room.image} alt={room.title} />
              <div className="service-room-body">
                <div className="room-card-top">
                  <h3>{room.title}</h3>
                  <span>{room.price}</span>
                </div>
                <p>{room.details}</p>
                <ul className="policy-list room-perks">
                  {room.perks.map((perk) => (
                    <li key={perk}>
                      <Check size={15} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>{copy.pillarsTitle}</h2>
        </div>

        <div className="simple-facility-list">
          {[...copy.pillars, ...copy.facilities].map((item) => (
            <article className="simple-facility-item" key={item.title}>
              <Check size={17} />
              <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              </div>
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
