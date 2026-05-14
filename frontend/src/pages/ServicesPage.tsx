import React, { useEffect, useRef } from "react";
import {
  Ban,
  Bath,
  Check,
  Coffee,
  Droplets,
  KeyRound,
  MapPin,
  Monitor,
  Refrigerator,
  Shirt,
  Users,
  UserRound,
  Wifi,
  Wind
} from "lucide-react";

import {
  type AppCopy,
  type RoomType
} from "../data/translations";

type ServicesPageProps = {
  copy: AppCopy["services"];
  roomTypes: RoomType[];
};

const roomFacilities = [
  { icon: <Users size={30} />, title: "2+1 Guests", text: "2 Adults + 1 Child" },
  { icon: <Ban size={30} />, title: "Non-smoking", text: "Non-smoking room" },
  { icon: <Wifi size={30} />, title: "Wi-Fi", text: "Free internet access via Wi-Fi" },
  { icon: <Coffee size={30} />, title: "Instant coffee", text: "Free coffee & tea maker" },
  { icon: <Droplets size={30} />, title: "Drinking water", text: "Free 2 bottles per night" },
  { icon: <Monitor size={30} />, title: "Flat screen TV", text: "32 inch LED TV" },
  { icon: <Wind size={30} />, title: "Air-conditioning", text: "with individual control" },
  { icon: <Refrigerator size={30} />, title: "Refrigerator", text: "Size 5Q" },
  { icon: <UserRound size={30} />, title: "Dressing space", text: "Full body mirror" },
  { icon: <KeyRound size={30} />, title: "Desk", text: "A desk and a chair" },
  { icon: <Shirt size={30} />, title: "Wardrobe", text: "A wardrobe and hangers" },
  { icon: <Bath size={30} />, title: "Private bathroom", text: "Hot water & free amenities" }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ copy, roomTypes }) => {
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
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.16
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-shell page-content services-page" ref={pageRef}>
      <section className="simple-page-header service-reveal" data-scroll-reveal>
        <div className="section-heading">
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="content-section service-reveal" data-scroll-reveal>
        <div className="section-heading service-reveal" data-scroll-reveal>
          <div className="divider left"></div>
          <h2>{copy.facilitiesTitle}</h2>
        </div>

        <div className="service-room-list">
          {roomTypes.map((room, index) => (
            <article className={`service-room-card service-reveal delay-${index}`} data-scroll-reveal key={room.title}>
              <img src={room.image} alt={room.title} />
              <div className="service-room-body">
                <div className="room-card-top">
                  <h3>{room.title}</h3>
                  <span className="service-room-price">{room.price}</span>
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

      <section className="content-section service-reveal" data-scroll-reveal>
        <div className="section-heading center service-reveal" data-scroll-reveal>
          <div className="divider left"></div>
          <h2>{copy.pillarsTitle}</h2>
        </div>

        <div className="room-facility-grid">
          {roomFacilities.map((item, index) => (
            <article className={`room-facility-item service-reveal delay-${index % 4}`} data-scroll-reveal key={item.title}>
              <div className="room-facility-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section location-section service-reveal" data-scroll-reveal>
        <div className="section-heading">
          <div className="divider left"></div>
          <h2>Location</h2>
          <p>Chiang Mai Old City, Thailand - close to local temples, night markets, cafes, and cultural landmarks.</p>
        </div>

        <div className="location-panel">
          <div className="location-map">
            <MapPin size={42} />
            <span>Tri Gong Hotel</span>
          </div>
          <div className="location-details">
            <article>
              <h3>Address</h3>
              <p>Chiang Mai Old City, Chiang Mai, Thailand</p>
            </article>
            <article>
              <h3>Nearby</h3>
              <p>Old City temples, Sunday Walking Street, local restaurants, and shopping streets.</p>
            </article>
            <article>
              <h3>Transport</h3>
              <p>Easy access to taxi, airport transfer, and private transport arrangements.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section emphasis-panel service-reveal" data-scroll-reveal>
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
