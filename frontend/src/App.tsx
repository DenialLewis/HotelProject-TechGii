import React, { useState } from "react";
import "./App.css";

import dashboardLogo from "./assets/Dashboard.png";
import { roomTypes, type RoomType } from "./data/bookingData";
import BookRoomPage from "./pages/BookRoomPage";
import HomePage from "./pages/HomePage";

type PageView = "home" | "book";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [selectedRoom, setSelectedRoom] = useState<RoomType>(roomTypes[0]);

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <button className="logo-button" onClick={() => setCurrentPage("home")}>
            <div className="logo">
              <img src={dashboardLogo} alt="Tri Gong Hotel Logo" />
            </div>
          </button>

          <nav>
            <button
              className={currentPage === "home" ? "nav-link active" : "nav-link"}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </button>
            <button
              className={currentPage === "book" ? "nav-link active" : "nav-link"}
              onClick={() => setCurrentPage("book")}
            >
              Book Room
            </button>
            <button className="nav-link muted" type="button">
              Order Food
            </button>
          </nav>
        </div>
      </header>

      {currentPage === "home" ? (
        <HomePage />
      ) : (
        <BookRoomPage
          selectedRoom={selectedRoom}
          onSelectRoom={setSelectedRoom}
        />
      )}
    </div>
  );
};

export default App;
