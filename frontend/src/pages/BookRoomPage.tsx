import React from "react";
import { Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";

import {
  type AppCopy,
  type BookingHighlight,
  type RoomType
} from "../data/translations";

type BookRoomPageProps = {
  bookingHighlights: BookingHighlight[];
  copy: AppCopy["booking"];
  roomTypes: RoomType[];
  selectedRoom: RoomType;
  onSelectRoom: (room: RoomType) => void;
  stayPolicies: string[];
};

const BookRoomPage: React.FC<BookRoomPageProps> = ({
  bookingHighlights,
  copy,
  roomTypes,
  selectedRoom,
  onSelectRoom,
  stayPolicies
}) => {
  return (
    <main className="booking-page page-shell">
      <section className="booking-hero booking-shell">
        <div className="booking-hero-copy">
          <p className="eyebrow booking-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>

          <div className="booking-trust-row">
            <div className="trust-chip">
              <ShieldCheck size={16} />
              {copy.trustChips[0]}
            </div>
            <div className="trust-chip">
              <Clock3 size={16} />
              {copy.trustChips[1]}
            </div>
            <div className="trust-chip">
              <Sparkles size={16} />
              {copy.trustChips[2]}
            </div>
          </div>
        </div>

        <div className="booking-hero-card">
          <p className="booking-card-label">{copy.selectedAccommodation}</p>
          <h3>{selectedRoom.title}</h3>
          <p>{selectedRoom.details}</p>
          <div className="booking-card-price">
            <span>{selectedRoom.price}</span>
            <small>{copy.perNight}</small>
          </div>
          <ul>
            {selectedRoom.perks.map((perk) => (
              <li key={perk}>
                <Check size={16} />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="booking-content booking-shell">
        <div className="booking-form-panel">
          <div className="section-heading">
            <div className="divider left"></div>
            <h2>{copy.reservationDetails}</h2>
            <p>{copy.reservationDescription}</p>
          </div>

          <form className="booking-form">
            <div className="form-section">
              <div className="form-section-header">
                <span>01</span>
                <div>
                  <h3>{copy.guestInfo}</h3>
                  <p>{copy.guestInfoNote}</p>
                </div>
              </div>

              <div className="form-grid">
                <label>
                  {copy.labels.fullName}
                  <input type="text" placeholder="Enter guest name" />
                </label>
                <label>
                  {copy.labels.email}
                  <input type="email" placeholder="guest@email.com" />
                </label>
                <label>
                  {copy.labels.phone}
                  <input type="tel" placeholder="+66 9 xxx xxx xxx" />
                </label>
                <label>
                  {copy.labels.nationality}
                  <input type="text" placeholder="Enter nationality" />
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form-section-header">
                <span>02</span>
                <div>
                  <h3>{copy.stayPreferences}</h3>
                  <p>{copy.stayPreferencesNote}</p>
                </div>
              </div>

              <div className="form-grid">
                <label>
                  {copy.labels.roomType}
                  <select
                    value={selectedRoom.title}
                    onChange={(event) => {
                      const room = roomTypes.find((item) => item.title === event.target.value);
                      if (room) {
                        onSelectRoom(room);
                      }
                    }}
                  >
                    {roomTypes.map((room) => (
                      <option key={room.title} value={room.title}>
                        {room.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {copy.labels.guests}
                  <select defaultValue="2 Adults">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>Family of 4</option>
                  </select>
                </label>
                <label>
                  {copy.labels.checkIn}
                  <input type="date" />
                </label>
                <label>
                  {copy.labels.checkOut}
                  <input type="date" />
                </label>
                <label>
                  {copy.labels.arrivalTime}
                  <select defaultValue="After 2:00 PM">
                    <option>After 2:00 PM</option>
                    <option>4:00 PM - 7:00 PM</option>
                    <option>After 7:00 PM</option>
                  </select>
                </label>
                <label>
                  {copy.labels.addOn}
                  <select defaultValue="Breakfast Included">
                    <option>Breakfast Included</option>
                    <option>Airport Pickup</option>
                    <option>Romantic Room Setup</option>
                    <option>Extra Bed Request</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form-section-header">
                <span>03</span>
                <div>
                  <h3>{copy.specialNotes}</h3>
                  <p>{copy.specialNotesNote}</p>
                </div>
              </div>

              <label>
                {copy.labels.specialRequest}
                <textarea
                  rows={5}
                  placeholder="Airport pickup details, dietary notes, celebration arrangement, or room preference..."
                />
              </label>
            </div>

            <div className="form-footer">
              <div className="form-footer-copy">
                <h3>{copy.assistanceTitle}</h3>
                <p>{copy.assistanceText}</p>
              </div>
              <button type="submit" className="primary-button">
                {copy.submit}
              </button>
            </div>
          </form>
        </div>

        <aside className="booking-sidebar">
          <div className="section-heading">
            <div className="divider left"></div>
            <h2>{copy.roomSelection}</h2>
          </div>

          <div className="room-list">
            {roomTypes.map((room) => (
              <button
                key={room.title}
                className={
                  selectedRoom.title === room.title ? "room-card room-card-selected" : "room-card"
                }
                type="button"
                onClick={() => onSelectRoom(room)}
              >
                <img src={room.image} alt={room.title} />
                <div className="room-card-body">
                  <div className="room-card-top">
                    <h3>{room.title}</h3>
                    <span>{room.price}</span>
                  </div>
                  <p>{room.details}</p>
                  <ul className="room-perks">
                    {room.perks.map((perk) => (
                      <li key={perk}>
                        <Check size={15} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>

          <div className="booking-summary-card">
            <div className="summary-header">
              <h3>{copy.policyTitle}</h3>
              <span>{selectedRoom.title}</span>
            </div>
            <ul className="policy-list">
              {stayPolicies.map((policy) => (
                <li key={policy}>
                  <Check size={15} />
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="booking-highlights">
        {bookingHighlights.map((item) => (
          <article className="booking-highlight-card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default BookRoomPage;
