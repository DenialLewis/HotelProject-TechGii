import React from "react";
import "./App.css";

import heroImg from "./assets/H1.png";
import dashboardLogo from "./assets/Dashboard.png";
import spaImg from "./assets/H2.png";
import roomImg from "./assets/H3.png";

import po1 from "./assets/Po1.png";
import po2 from "./assets/Po2.png";
import po3 from "./assets/Po3.png";

import {
  Wifi,
  Waves,
  Sparkles,
  Utensils,
  Dumbbell,
  ConciergeBell
} from "lucide-react";

const App: React.FC = () => {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={dashboardLogo} alt="Tri Gong Hotel Logo" />
          </div>

          <nav>
            <a className="active">Home</a>
            <a>Book Room</a>
            <a>Order Food</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Tri Gong Hotel</h1>
            <p>
              Experience unparalleled luxury in Chiang Mai.
              Where comfort meets tradition.
            </p>
            <span className="location">📍 Chiang Mai, Thailand</span>
          </div>
        </div>
      </section>

      <main className="container">

        {/* LEGACY */}
        <section className="legacy">
          <div className="divider"></div>
          <h2>Our Experience</h2>

          <div className="legacy-images">
            <div className="image-card">
              <img src={spaImg} alt="Spa" />
              <div className="image-overlay">Relaxing Spa</div>
            </div>

            <div className="image-card">
              <img src={roomImg} alt="Room" />
              <div className="image-overlay">Comfort Rooms</div>
            </div>
          </div>
        </section>

        {/* 🔥 PROMOTION SECTION */}
        <section className="promotions">
          <div className="divider"></div>
          <h2>Special Offers & Highlights</h2>

          <div className="promo-grid">

            <div className="promo-card">
              <img src={po1} alt="Promotion" />
            </div>

            <div className="promo-card">
              <img src={po2} alt="Travel Guide" />
            </div>

            <div className="promo-card">
              <img src={po3} alt="Award" />
            </div>

          </div>
        </section>

        {/* AMENITIES */}
        <section className="amenities">
          <div className="divider"></div>
          <h2>Exclusive Amenities</h2>

          <div className="amenities-grid">

            <div className="amenity-card">
              <div className="icon"><Wifi size={22} /></div>
              <h3>High-Speed Wi-Fi</h3>
              <p>Complimentary throughout the hotel</p>
            </div>

            <div className="amenity-card">
              <div className="icon"><Waves size={22} /></div>
              <h3>Infinity Pool</h3>
              <p>Relax with panoramic views</p>
            </div>

            <div className="amenity-card">
              <div className="icon"><Sparkles size={22} /></div>
              <h3>Luxury Spa</h3>
              <p>Premium wellness experience</p>
            </div>

            <div className="amenity-card">
              <div className="icon"><Utensils size={22} /></div>
              <h3>Dining</h3>
              <p>Authentic Thai & international food</p>
            </div>

            <div className="amenity-card">
              <div className="icon"><Dumbbell size={22} /></div>
              <h3>Fitness</h3>
              <p>Fully equipped gym</p>
            </div>

            <div className="amenity-card">
              <div className="icon"><ConciergeBell size={22} /></div>
              <h3>Service</h3>
              <p>24/7 guest support</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default App;