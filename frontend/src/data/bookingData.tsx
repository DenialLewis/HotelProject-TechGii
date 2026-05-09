import React from "react";
import {
  CalendarDays,
  ShieldCheck,
  Sparkles,
  Stars
} from "lucide-react";

import heroImg from "../assets/H1.png";
import spaImg from "../assets/H2.png";
import roomImg from "../assets/H3.png";

export type RoomType = {
  title: string;
  details: string;
  price: string;
  image: string;
  perks: string[];
};

export type BookingHighlight = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export const roomTypes: RoomType[] = [
  {
    title: "Deluxe King Room",
    details: "1 king bed | city skyline view | breakfast included",
    price: "$120",
    image: roomImg,
    perks: ["42 m2 space", "Rain shower", "Smart TV + workspace"]
  },
  {
    title: "Premier Twin Suite",
    details: "2 twin beds | private balcony | airport transfer included",
    price: "$150",
    image: spaImg,
    perks: ["Lounge seating", "Garden-facing balcony", "Early check-in option"]
  },
  {
    title: "Tri Gong Signature Suite",
    details: "Lounge access | soaking tub | late checkout",
    price: "$220",
    image: heroImg,
    perks: ["Separate living area", "Evening turndown", "Private concierge support"]
  }
];

export const bookingHighlights: BookingHighlight[] = [
  {
    icon: <CalendarDays size={20} />,
    title: "Flexible Stay Planning",
    text: "Choose preferred dates and arrival timing with a layout that is easy to review."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Professional Reservation Flow",
    text: "Guest details, room preferences, and special requests are grouped clearly."
  },
  {
    icon: <Stars size={20} />,
    title: "Premium Guest Experience",
    text: "Showcase room quality, added benefits, and stay confidence before checkout."
  }
];

export const stayPolicies = [
  "Check-in from 2:00 PM and check-out before 12:00 PM",
  "Free cancellation available up to 48 hours before arrival",
  "Breakfast service starts daily from 6:30 AM",
  "Front desk and concierge support available 24/7"
];

export const bookingTrustItems = [
  {
    icon: <ShieldCheck size={16} />,
    label: "Secure reservation"
  },
  {
    icon: <Sparkles size={16} />,
    label: "Concierge-ready notes"
  }
];
