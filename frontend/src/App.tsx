import React, { useState } from "react";
import "./App.css";

import dashboardLogo from "./assets/Dashboard.png";
import {
  appCopy,
  getBookingHighlights,
  getRoomTypes,
  getStayPolicies,
  languageOptions,
  type Language,
  type RoomType
} from "./data/translations";
import BookRoomPage from "./pages/BookRoomPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

type PageView = "home" | "services" | "book" | "contact";

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const roomTypes = getRoomTypes(language);
  const copy = appCopy[language];
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(roomTypes[0]);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setSelectedRoom(getRoomTypes(nextLanguage)[0]);
  };

  const navItems: Array<{ key: PageView; label: string }> = [
    { key: "home", label: copy.nav.home },
    { key: "services", label: copy.nav.services },
    { key: "book", label: copy.nav.book },
    { key: "contact", label: copy.nav.contact }
  ];

  const currentLanguage = languageOptions.find((option) => option.code === language);

  const renderPage = () => {
    if (currentPage === "services") {
      return <ServicesPage copy={copy.services} />;
    }

    if (currentPage === "book") {
      return (
        <BookRoomPage
          bookingHighlights={getBookingHighlights(language)}
          copy={copy.booking}
          roomTypes={roomTypes}
          selectedRoom={selectedRoom}
          onSelectRoom={setSelectedRoom}
          stayPolicies={getStayPolicies(language)}
        />
      );
    }

    if (currentPage === "contact") {
      return <ContactPage copy={copy.contact} />;
    }

    return <HomePage copy={copy.home} onNavigate={setCurrentPage} />;
  };

  return (
    <div className="app-shell">
      <header className={currentPage === "home" ? "navbar navbar-home" : "navbar navbar-elevated"}>
        <div className="header-top">
          <div className="header-top-inner">
            <span>Chiang Mai Old City, Thailand</span>
            <span>+66 53 000 888</span>
            <span>stay@trigonghotel.com</span>
          </div>
        </div>

        <div className="nav-container">
          <button className="logo-button" onClick={() => setCurrentPage("home")} type="button">
            <span className="logo">
              <img src={dashboardLogo} alt={`${copy.brand.name} logo`} />
            </span>
            <span className="brand-wordmark">{copy.brand.name}</span>
          </button>

          <div className="nav-actions">
            <nav className="site-nav" aria-label="Primary navigation">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className={currentPage === item.key ? "nav-link active" : "nav-link"}
                  onClick={() => setCurrentPage(item.key)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <label className="language-switcher" aria-label={copy.nav.languageLabel}>
              <span className="language-flag" aria-hidden="true">
                {currentLanguage?.flag}
              </span>
              <span className="sr-only">{copy.nav.languageLabel}</span>
              <select
                value={language}
                onChange={(event) => handleLanguageChange(event.target.value as Language)}
                aria-label={copy.nav.languageLabel}
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <button className="nav-cta" onClick={() => setCurrentPage("book")} type="button">
              {copy.nav.book}
            </button>
          </div>
        </div>
      </header>

      {renderPage()}

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand">
            <h2>{copy.brand.name}</h2>
            <p>{copy.brand.tagline}</p>
          </div>

          <div className="footer-column">
            <span className="footer-label">Explore</span>
            {navItems.map((item) => (
              <button
                key={item.key}
                className="footer-link"
                type="button"
                onClick={() => setCurrentPage(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">Contact</span>
            <span className="footer-text">+66 53 000 888</span>
            <span className="footer-text">stay@trigonghotel.com</span>
            <span className="footer-text">Chiang Mai Old City, Thailand</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
