import React from "react";
import { Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";

import {
  bookingHighlights,
  roomTypes,
  stayPolicies,
  type RoomType
} from "../data/bookingData";

type BookRoomPageProps = {
  selectedRoom: RoomType;
  onSelectRoom: (room: RoomType) => void;
};

const BookRoomPage: React.FC<BookRoomPageProps> = ({
  selectedRoom,
  onSelectRoom
}) => {
  return (
    <main className="booking-page">
      <section className="booking-hero booking-shell">
        <div className="booking-hero-copy">
          <p className="eyebrow booking-eyebrow">Reserve your stay</p>
          <h1>Book Your Room</h1>
          <p>
            Review room options, enter your guest information, and send your
            reservation request with a clean and comfortable booking flow.
          </p>

          <div className="booking-trust-row">
            <div className="trust-chip">
              <ShieldCheck size={16} />
              Secure reservation
            </div>
            <div className="trust-chip">
              <Clock3 size={16} />
              Fast confirmation flow
            </div>
            <div className="trust-chip">
              <Sparkles size={16} />
              Concierge-ready notes
            </div>
          </div>
        </div>

        <div className="booking-hero-card">
          <p className="booking-card-label">Selected accommodation</p>
          <h3>{selectedRoom.title}</h3>
          <p>{selectedRoom.details}</p>
          <div className="booking-card-price">
            <span>{selectedRoom.price}</span>
            <small>per night</small>
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
            <h2>Reservation Details</h2>
            <p>
              Complete the form below so our reservations team can prepare your
              stay details carefully before arrival.
            </p>
          </div>

          <form className="booking-form">
            <div className="form-section">
              <div className="form-section-header">
                <span>01</span>
                <div>
                  <h3>Guest Information</h3>
                  <p>Primary contact details for the booking confirmation.</p>
                </div>
              </div>

              <div className="form-grid">
                <label>
                  Full Name
                  <input type="text" placeholder="Enter guest name" />
                </label>

                <label>
                  Email Address
                  <input type="email" placeholder="guest@email.com" />
                </label>

                <label>
                  Phone Number
                  <input type="tel" placeholder="+95 9 xxx xxx xxx" />
                </label>

                <label>
                  Nationality
                  <input type="text" placeholder="Enter nationality" />
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form-section-header">
                <span>02</span>
                <div>
                  <h3>Stay Preferences</h3>
                  <p>Choose your room, dates, and arrival preferences.</p>
                </div>
              </div>

              <div className="form-grid">
                <label>
                  Room Type
                  <select
                    value={selectedRoom.title}
                    onChange={(event) => {
                      const room = roomTypes.find(
                        (item) => item.title === event.target.value
                      );

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
                  Guests
                  <select defaultValue="2 Adults">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>Family of 4</option>
                  </select>
                </label>

                <label>
                  Check-in Date
                  <input type="date" />
                </label>

                <label>
                  Check-out Date
                  <input type="date" />
                </label>

                <label>
                  Arrival Time
                  <select defaultValue="After 2:00 PM">
                    <option>After 2:00 PM</option>
                    <option>4:00 PM - 7:00 PM</option>
                    <option>After 7:00 PM</option>
                  </select>
                </label>

                <label>
                  Add-on Preference
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
                  <h3>Special Notes</h3>
                  <p>Share anything our team should prepare before arrival.</p>
                </div>
              </div>

              <label>
                Special Request
                <textarea
                  rows={5}
                  placeholder="Airport pickup details, dietary notes, celebration arrangement, or any room preference..."
                />
              </label>
            </div>

            <div className="form-footer">
              <div className="form-footer-copy">
                <h3>Need assistance before you book?</h3>
                <p>
                  Our front desk can help with room advice, airport transfer,
                  and special arrangements.
                </p>
              </div>

              <button type="submit" className="primary-button">
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>

        <aside className="booking-sidebar">
          <div className="section-heading">
            <div className="divider left"></div>
            <h2>Room Selection</h2>
            <p>Compare room styles and choose the stay that fits your trip.</p>
          </div>

          <div className="room-list">
            {roomTypes.map((room) => (
              <article
                className={
                  room.title === selectedRoom.title
                    ? "room-card room-card-selected"
                    : "room-card"
                }
                key={room.title}
              >
                <img src={room.image} alt={room.title} />
                <div className="room-card-body">
                  <div className="room-card-top">
                    <h3>{room.title}</h3>
                    <span>{room.price}/night</span>
                  </div>
                  <p>{room.details}</p>
                  <ul className="room-perks">
                    {room.perks.map((perk) => (
                      <li key={perk}>
                        <Check size={14} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => onSelectRoom(room)}
                  >
                    {room.title === selectedRoom.title ? "Selected" : "Choose Room"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="booking-summary-card">
            <div className="summary-header">
              <h3>Stay Policies</h3>
              <span>Important notes</span>
            </div>

            <ul className="policy-list">
              {stayPolicies.map((policy) => (
                <li key={policy}>
                  <Check size={14} />
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="booking-highlights booking-shell">
        {bookingHighlights.map((item) => (
          <div className="booking-highlight-card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BookRoomPage;
