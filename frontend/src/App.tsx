import React, { useState } from "react";
import { Check } from "lucide-react";
import "./App.css";

import dashboardLogo from "./assets/Dashboard.png";
import {
  appCopy,
  getRoomTypes,
  type RoomType
} from "./data/translations";
import BookRoomPage from "./pages/BookRoomPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

type PageView = "home" | "services" | "book" | "contact";
type DisplayLanguageCode =
  | "en"
  | "th"
  | "zh"
  | "fr"
  | "hi"
  | "ja"
  | "ko"
  | "de"
  | "ru"
  | "id";

type DisplayLanguage = {
  code: DisplayLanguageCode;
  label: string;
  flag: string;
  suggested?: boolean;
};

const displayLanguages: DisplayLanguage[] = [
  { code: "en", label: "English (US)", flag: "us", suggested: true },
  { code: "th", label: "ภาษาไทย", flag: "th", suggested: true },
  { code: "zh", label: "简体中文", flag: "cn", suggested: true },
  { code: "fr", label: "Français", flag: "fr", suggested: true },
  { code: "hi", label: "हिन्दी", flag: "in", suggested: true },
  { code: "ja", label: "日本語", flag: "jp" },
  { code: "ko", label: "한국어", flag: "kr" },
  { code: "de", label: "Deutsch", flag: "de" },
  { code: "ru", label: "Русский", flag: "ru" },
  { code: "id", label: "Bahasa Indonesia", flag: "id" }
];

const App: React.FC = () => {
  const [language, setLanguage] = useState<DisplayLanguageCode>("en");
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const currentLanguage = displayLanguages.find((option) => option.code === language) ?? displayLanguages[0];
  const roomTypes = getRoomTypes(currentLanguage.code);
  const copy = appCopy[currentLanguage.code];
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(roomTypes[0]);

  const handleLanguageChange = (nextLanguage: DisplayLanguageCode) => {
    setLanguage(nextLanguage);
    setSelectedRoom(getRoomTypes(nextLanguage)[0]);
    setIsLanguageModalOpen(false);
  };

  const navItems: Array<{ key: PageView; label: string }> = [
    { key: "home", label: copy.nav.home },
    { key: "services", label: copy.nav.services },
    { key: "book", label: copy.nav.book },
    { key: "contact", label: copy.nav.contact }
  ];

  const suggestedLanguages = displayLanguages.filter((option) => option.suggested);

  const renderPage = () => {
    if (currentPage === "services") {
      return <ServicesPage copy={copy.services} roomTypes={roomTypes} />;
    }

    if (currentPage === "book") {
      return (
        <BookRoomPage
          copy={copy.booking}
          roomTypes={roomTypes}
          selectedRoom={selectedRoom}
          onSelectRoom={setSelectedRoom}
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
            <span className="brand-wordmark sr-only">{copy.brand.name}</span>
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

            <button
              className="language-switcher"
              aria-label={copy.nav.languageLabel}
              type="button"
              onClick={() => setIsLanguageModalOpen(true)}
            >
              <span className="language-flag" aria-hidden="true">
                <span className={`flag-image flag-${currentLanguage.flag}`} />
              </span>
            </button>

            <button className="nav-cta" onClick={() => setCurrentPage("book")} type="button">
              {copy.nav.book}
            </button>
          </div>
        </div>
      </header>

      <div className="page-transition" key={`${currentPage}-${language}`}>
        {renderPage()}
      </div>

      {isLanguageModalOpen && (
        <div className="language-modal-backdrop" role="presentation">
          <section className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-title">
            <div className="language-modal-header">
              <h2 id="language-title">Select your language</h2>
              <button type="button" onClick={() => setIsLanguageModalOpen(false)} aria-label="Close language menu">
                ×
              </button>
            </div>

            <div className="language-section">
              <h3>Suggested for you</h3>
              <div className="language-grid">
                {suggestedLanguages.map((option) => (
                  <button
                    className={language === option.code ? "language-option selected" : "language-option"}
                    key={option.code}
                    type="button"
                    onClick={() => handleLanguageChange(option.code)}
                  >
                    <span className="language-option-flag">
                      <span className={`flag-image flag-${option.flag}`} />
                    </span>
                    <span>{option.label}</span>
                    {language === option.code && <Check size={18} />}
                  </button>
                ))}
              </div>
            </div>

            <div className="language-section">
              <h3>All languages</h3>
              <div className="language-grid">
                {displayLanguages.map((option) => (
                  <button
                    className={language === option.code ? "language-option selected" : "language-option"}
                    key={option.code}
                    type="button"
                    onClick={() => handleLanguageChange(option.code)}
                  >
                    <span className="language-option-flag">
                      <span className={`flag-image flag-${option.flag}`} />
                    </span>
                    <span>{option.label}</span>
                    {language === option.code && <Check size={18} />}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

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
