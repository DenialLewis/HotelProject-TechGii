import React, { useState } from "react";
import { Check, ChevronDown, Minus, Plus, UserRound } from "lucide-react";

import { type AppCopy, type RoomType } from "../data/translations";

type BookRoomPageProps = {
  copy: AppCopy["booking"];
  roomTypes: RoomType[];
  selectedRoom: RoomType;
  onSelectRoom: (room: RoomType) => void;
};

const BookRoomPage: React.FC<BookRoomPageProps> = ({
  copy,
  roomTypes,
  selectedRoom,
  onSelectRoom
}) => {
  const [isGuestStep, setIsGuestStep] = useState(false);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState("2026-05-14");
  const [checkOutDate, setCheckOutDate] = useState("2026-05-16");
  const [guestCounts, setGuestCounts] = useState({
    adults: 2,
    children: 0,
    rooms: 1
  });
  const [travelOptions, setTravelOptions] = useState({
    work: false,
    pets: false
  });

  const guestSummary = `${guestCounts.adults} adults - ${guestCounts.children} children - ${guestCounts.rooms} room`;

  const updateGuestCount = (key: keyof typeof guestCounts, direction: -1 | 1) => {
    setGuestCounts((current) => {
      const minimum = key === "adults" || key === "rooms" ? 1 : 0;

      return {
        ...current,
        [key]: Math.max(minimum, current[key] + direction)
      };
    });
  };

  const handleChooseRoom = (room: RoomType) => {
    onSelectRoom(room);
    setIsGuestStep(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="booking-page page-shell travel-booking-page">
      <section className="simple-page-header">
        <div className="section-heading">
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      {!isGuestStep ? (
        <>
          <section className="booking-search-bar">
            <label>
              {copy.labels.checkIn}
              <input
                type="date"
                value={checkInDate}
                onChange={(event) => setCheckInDate(event.target.value)}
              />
            </label>
            <label>
              {copy.labels.checkOut}
              <input
                type="date"
                value={checkOutDate}
                onChange={(event) => setCheckOutDate(event.target.value)}
              />
            </label>
            <div className="guest-picker">
              <span className="guest-picker-label">{copy.labels.guests}</span>
              <button
                className="guest-picker-trigger"
                type="button"
                onClick={() => setIsGuestPickerOpen((isOpen) => !isOpen)}
                aria-expanded={isGuestPickerOpen}
              >
                <UserRound size={22} />
                <span>{guestSummary}</span>
                <ChevronDown size={18} />
              </button>

              {isGuestPickerOpen && (
                <div className="guest-picker-panel">
                  {(["adults", "children", "rooms"] as const).map((item) => (
                    <div className="guest-stepper-row" key={item}>
                      <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      <div className="guest-stepper">
                        <button type="button" onClick={() => updateGuestCount(item, -1)}>
                          <Minus size={16} />
                        </button>
                        <strong>{guestCounts[item]}</strong>
                        <button type="button" onClick={() => updateGuestCount(item, 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="guest-toggle-row">
                    <span>Traveling for work?</span>
                    <button
                      className={travelOptions.work ? "toggle-switch active" : "toggle-switch"}
                      type="button"
                      onClick={() => setTravelOptions((current) => ({ ...current, work: !current.work }))}
                      aria-pressed={travelOptions.work}
                    >
                      <span />
                    </button>
                  </div>

                  <div className="guest-toggle-row">
                    <span>Traveling with pets?</span>
                    <button
                      className={travelOptions.pets ? "toggle-switch active" : "toggle-switch"}
                      type="button"
                      onClick={() => setTravelOptions((current) => ({ ...current, pets: !current.pets }))}
                      aria-pressed={travelOptions.pets}
                    >
                      <span />
                    </button>
                  </div>

                  <p className="guest-helper">
                    Assistance animals aren't considered pets.
                    <a href="#book-room"> Read more about traveling with assistance animals</a>
                  </p>

                  <button
                    className="guest-done-button"
                    type="button"
                    onClick={() => setIsGuestPickerOpen(false)}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </section>

          <section className="room-choice-panel">
            <div className="booking-step-title">
              <span>1</span>
              <div>
                <h2>{copy.roomSelection}</h2>
                <p>Choose your room and rate to continue with guest details.</p>
              </div>
            </div>

            <div className="travel-room-list">
              {roomTypes.map((room) => (
                <article key={room.title} className="travel-room-card">
                  <img src={room.image} alt={room.title} />
                  <div className="travel-room-body">
                    <div className="room-card-top">
                      <h3>{room.title}</h3>
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
                    <div className="room-rate-note">
                      <Check size={15} />
                      Breakfast included - Free cancellation before check-in
                    </div>
                  </div>
                  <div className="travel-room-action">
                    <span>1 room, 2 nights</span>
                    <strong>{room.price}</strong>
                    <small>{copy.perNight}</small>
                    <button className="primary-button" type="button" onClick={() => handleChooseRoom(room)}>
                      Choose
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="booking-content booking-shell guest-booking-layout">
          <aside className="booking-details-sidebar">
            <div className="booking-details-card">
              <h3>Your booking details</h3>
              <dl>
                <div>
                  <dt>Check-in</dt>
                  <dd>{checkInDate}</dd>
                </div>
                <div>
                  <dt>Check-out</dt>
                  <dd>{checkOutDate}</dd>
                </div>
                <div>
                  <dt>Guests</dt>
                  <dd>{guestSummary}</dd>
                </div>
              </dl>
            </div>

            <div className="selected-room-summary">
              <img src={selectedRoom.image} alt={selectedRoom.title} />
              <div className="selected-room-summary-body">
                <p className="booking-card-label">{copy.selectedAccommodation}</p>
                <h2>{selectedRoom.title}</h2>
                <p>{selectedRoom.details}</p>
                <div className="selected-room-price">
                  <strong>{selectedRoom.price}</strong>
                  <span>{copy.perNight}</span>
                </div>
                <ul className="room-perks">
                  {selectedRoom.perks.map((perk) => (
                    <li key={perk}>
                      <Check size={15} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <button className="secondary-button" type="button" onClick={() => setIsGuestStep(false)}>
                  Change room
                </button>
              </div>
            </div>

            <div className="booking-details-card price-summary-card">
              <span>Total price</span>
              <strong>{selectedRoom.price}</strong>
              <small>Includes taxes and fees</small>
            </div>
          </aside>

          <div className="booking-form-panel">
            <div className="booking-step-title">
              <span>2</span>
              <div>
                <h2>Enter your details</h2>
                <p>{selectedRoom.title} - {selectedRoom.price} {copy.perNight}</p>
              </div>
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
                    First name
                    <input type="text" placeholder="First name" required />
                  </label>
                  <label>
                    Last name
                    <input type="text" placeholder="Last name" required />
                  </label>
                  <label>
                    {copy.labels.email}
                    <input type="email" placeholder="guest@email.com" required />
                  </label>
                  <label>
                    {copy.labels.phone}
                    <input type="tel" placeholder="+66 9 xxx xxx xxx" required />
                  </label>
                  <label>
                    Country/region
                    <select defaultValue="Thailand">
                      <option>Thailand</option>
                      <option>Myanmar</option>
                      <option>China</option>
                      <option>United States</option>
                    </select>
                  </label>
                  <label>
                    {copy.labels.arrivalTime}
                    <select defaultValue="After 2:00 PM">
                      <option>After 2:00 PM</option>
                      <option>4:00 PM - 7:00 PM</option>
                      <option>After 7:00 PM</option>
                    </select>
                  </label>
                </div>

                <div className="work-radio-group" aria-label="Traveling for work">
                  <span>Are you traveling for work?</span>
                  <label>
                    <input type="radio" name="work-trip" defaultChecked={!travelOptions.work} />
                    No
                  </label>
                  <label>
                    <input type="radio" name="work-trip" defaultChecked={travelOptions.work} />
                    Yes
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section-header">
                  <span>02</span>
                  <div>
                    <h3>{copy.specialNotes}</h3>
                    <p>{copy.specialNotesNote}</p>
                  </div>
                </div>

                <label>
                  {copy.labels.specialRequest}
                  <textarea
                    rows={4}
                    placeholder="Arrival time, airport pickup, or any room request..."
                  />
                </label>
              </div>

              <div className="form-footer">
                <button type="submit" className="primary-button">
                  {copy.submit}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default BookRoomPage;
