import React from "react";
import {
  CalendarDays,
  ConciergeBell,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Stars,
  Utensils,
  Waves,
  Wifi
} from "lucide-react";

import heroImg from "../assets/H1.png";
import spaImg from "../assets/H2.png";
import roomImg from "../assets/H3.png";

export type Language = "en" | "th" | "zh";

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

export type AppCopy = {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    services: string;
    book: string;
    contact: string;
    languageLabel: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    primaryAction: string;
    secondaryAction: string;
    experienceTitle: string;
    imageLabels: string[];
    highlightsTitle: string;
    amenitiesTitle: string;
    amenities: Array<{ title: string; text: string }>;
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    trustChips: string[];
    selectedAccommodation: string;
    perNight: string;
    reservationDetails: string;
    reservationDescription: string;
    guestInfo: string;
    guestInfoNote: string;
    stayPreferences: string;
    stayPreferencesNote: string;
    specialNotes: string;
    specialNotesNote: string;
    roomSelection: string;
    policyTitle: string;
    assistanceTitle: string;
    assistanceText: string;
    submit: string;
    labels: {
      fullName: string;
      email: string;
      phone: string;
      nationality: string;
      roomType: string;
      guests: string;
      checkIn: string;
      checkOut: string;
      arrivalTime: string;
      addOn: string;
      specialRequest: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    pillarsTitle: string;
    pillars: Array<{ title: string; text: string }>;
    facilitiesTitle: string;
    facilities: Array<{ title: string; text: string }>;
    standardsTitle: string;
    standards: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    detailsTitle: string;
    details: Array<{ label: string; value: string; note: string }>;
    inquiryTitle: string;
    inquiryText: string;
    arrivalTitle: string;
    arrivalText: string;
    responseCommitment: string;
  };
};

export const languageOptions = [
  { code: "en" as const, flag: "🇬🇧", label: "English" },
  { code: "th" as const, flag: "🇹🇭", label: "ไทย" },
  { code: "zh" as const, flag: "🇨🇳", label: "中文" }
];

const roomContent: Record<Language, RoomType[]> = {
  en: [
    {
      title: "Deluxe King Room",
      details: "King bed | refined city outlook | signature breakfast",
      price: "$120",
      image: roomImg,
      perks: ["42 m2 calm living space", "Rain shower", "Executive desk"]
    },
    {
      title: "Premier Twin Suite",
      details: "Twin beds | private balcony | airport transfer",
      price: "$150",
      image: spaImg,
      perks: ["Garden-facing balcony", "Lounge seating", "Priority check-in"]
    },
    {
      title: "Tri Gong Signature Suite",
      details: "Lounge access | soaking tub | private concierge",
      price: "$220",
      image: heroImg,
      perks: ["Separate living room", "Evening turndown", "Late checkout"]
    }
  ],
  th: [
    {
      title: "ห้องดีลักซ์คิง",
      details: "เตียงคิงไซซ์ | วิวเมือง | อาหารเช้าซิกเนเจอร์",
      price: "$120",
      image: roomImg,
      perks: ["พื้นที่พักผ่อน 42 ตร.ม.", "เรนชาวเวอร์", "โต๊ะทำงานระดับผู้บริหาร"]
    },
    {
      title: "พรีเมียร์ทวินสวีท",
      details: "เตียงคู่ | ระเบียงส่วนตัว | รถรับส่งสนามบิน",
      price: "$150",
      image: spaImg,
      perks: ["ระเบียงวิวสวน", "มุมนั่งเล่น", "เช็กอินแบบ Priority"]
    },
    {
      title: "Tri Gong Signature Suite",
      details: "สิทธิ์เข้าเลานจ์ | อ่างแช่ตัว | คอนเซียร์จส่วนตัว",
      price: "$220",
      image: heroImg,
      perks: ["ห้องนั่งเล่นแยกส่วน", "บริการจัดเตียงยามเย็น", "เช็กเอาต์ล่วงเวลา"]
    }
  ],
  zh: [
    {
      title: "豪华大床房",
      details: "大床 | 城市景观 | 招牌早餐",
      price: "$120",
      image: roomImg,
      perks: ["42 平方米雅致空间", "雨淋花洒", "行政书桌"]
    },
    {
      title: "尊贵双床套房",
      details: "双床 | 私人阳台 | 机场接送",
      price: "$150",
      image: spaImg,
      perks: ["花园景阳台", "休闲客厅区", "优先入住"]
    },
    {
      title: "Tri Gong 签名套房",
      details: "行政酒廊 | 浸泡浴缸 | 私人礼宾",
      price: "$220",
      image: heroImg,
      perks: ["独立起居室", "夜床服务", "延迟退房"]
    }
  ]
};

export const appCopy: Record<Language, AppCopy> = {
  en: {
    brand: {
      name: "Tri Gong Hotel",
      tagline: "A distinguished address for graceful leisure and business travel"
    },
    nav: {
      home: "Home",
      services: "Services & Facilities",
      book: "Book Room",
      contact: "Contact",
      languageLabel: "Language"
    },
    home: {
      eyebrow: "Luxury hospitality in Chiang Mai",
      title: "A polished sanctuary shaped for modern travellers",
      description:
        "Tri Gong Hotel blends timeless Thai warmth, quiet sophistication, and business-ready comfort for guests who expect thoughtful service at every touchpoint.",
      location: "Chiang Mai, Thailand",
      primaryAction: "Book a Stay",
      secondaryAction: "Explore Services",
      experienceTitle: "Composed stays with a graceful sense of place",
      imageLabels: ["Wellness rituals", "Refined guest rooms"],
      highlightsTitle: "Signature offers and curated moments",
      amenitiesTitle: "Exclusive Amenities",
      amenities: [
        { title: "High-Speed Wi-Fi", text: "Reliable connectivity throughout the hotel." },
        { title: "Infinity Pool", text: "A calm pool setting for elevated downtime." },
        { title: "Luxury Spa", text: "Restorative treatments prepared with care." },
        { title: "Dining", text: "Thai and international cuisine with refined service." },
        { title: "Fitness", text: "A considered gym and wellness area for daily balance." },
        { title: "Concierge", text: "Attentive assistance for arrivals, dining, and excursions." }
      ]
    },
    booking: {
      eyebrow: "Reserve your stay",
      title: "Book Your Room",
      description:
        "Select your preferred accommodation and share the details our reservations team needs to prepare a seamless arrival.",
      trustChips: ["Secure reservation", "Prompt confirmation", "Concierge-ready notes"],
      selectedAccommodation: "Selected accommodation",
      perNight: "per night",
      reservationDetails: "Reservation Details",
      reservationDescription:
        "Complete the form below and our team will review your request with personal attention.",
      guestInfo: "Guest Information",
      guestInfoNote: "Primary contact details for confirmation.",
      stayPreferences: "Stay Preferences",
      stayPreferencesNote: "Choose your room, dates, and arrival preferences.",
      specialNotes: "Special Notes",
      specialNotesNote: "Share anything our team should prepare before arrival.",
      roomSelection: "Room Selection",
      policyTitle: "Stay Policies",
      assistanceTitle: "Need assistance before you book?",
      assistanceText:
        "Our front desk can help with room advice, airport transfer, and special arrangements.",
      submit: "Submit Booking Request",
      labels: {
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        nationality: "Nationality",
        roomType: "Room Type",
        guests: "Guests",
        checkIn: "Check-in Date",
        checkOut: "Check-out Date",
        arrivalTime: "Arrival Time",
        addOn: "Add-on Preference",
        specialRequest: "Special Request"
      }
    },
    services: {
      eyebrow: "Services and facilities",
      title: "Designed for ease, privacy, and polished hospitality",
      description:
        "Every guest service is arranged to feel discreet, efficient, and naturally elevated from arrival through departure.",
      pillarsTitle: "Guest Services",
      pillars: [
        { title: "Private Concierge", text: "Reservations, transport, and local arrangements handled with precision." },
        { title: "Business Support", text: "Quiet work-friendly spaces, reliable Wi-Fi, and practical guest assistance." },
        { title: "Wellness Coordination", text: "Spa appointments, fitness access, and recovery-focused stay planning." }
      ],
      facilitiesTitle: "Hotel Facilities",
      facilities: [
        { title: "Signature Dining", text: "Composed Thai and international menus for relaxed, refined dining." },
        { title: "Wellness Spa", text: "Calming treatments and thoughtful rituals for restorative downtime." },
        { title: "Pool and Fitness", text: "Leisure and movement spaces designed for balanced travel days." }
      ],
      standardsTitle: "Service Standards",
      standards: [
        "24-hour front desk and arrival assistance",
        "Daily housekeeping with evening turndown on selected suites",
        "Airport transfer and private transport coordination",
        "Multilingual guest support for international travellers"
      ]
    },
    contact: {
      eyebrow: "Contact Tri Gong",
      title: "Speak with our reservations and guest relations team",
      description:
        "For room advice, group enquiries, airport transfers, or special arrangements, our team is ready to assist with care.",
      detailsTitle: "Contact Details",
      details: [
        { label: "Telephone", value: "+66 53 000 888", note: "Reservations and guest assistance." },
        { label: "Email", value: "stay@trigonghotel.com", note: "Best for detailed itinerary requests." },
        { label: "Location", value: "Chiang Mai Old City, Thailand", note: "A calm address near cultural landmarks." }
      ],
      inquiryTitle: "Guest Enquiries",
      inquiryText: "Tell us your preferred dates, room style, and any arrival details you would like us to prepare.",
      arrivalTitle: "Arrival Support",
      arrivalText: "Airport transfer, early arrival guidance, and special celebration setup can be arranged in advance.",
      responseCommitment: "Our team responds to priority enquiries within one business day."
    }
  },
  th: {
    brand: {
      name: "Tri Gong Hotel",
      tagline: "ที่พักหรูสำหรับการพักผ่อนและการเดินทางธุรกิจอย่างมีระดับ"
    },
    nav: {
      home: "หน้าแรก",
      services: "บริการและสิ่งอำนวยฯ",
      book: "จองห้องพัก",
      contact: "ติดต่อเรา",
      languageLabel: "ภาษา"
    },
    home: {
      eyebrow: "การต้อนรับระดับลักชัวรีในเชียงใหม่",
      title: "ที่พักสง่างามสำหรับนักเดินทางยุคใหม่",
      description:
        "Tri Gong Hotel ผสานความอบอุ่นแบบไทย ความเรียบหรูร่วมสมัย และความสะดวกสำหรับการเดินทางธุรกิจไว้ในประสบการณ์เดียวกัน",
      location: "เชียงใหม่ ประเทศไทย",
      primaryAction: "จองการเข้าพัก",
      secondaryAction: "ดูบริการ",
      experienceTitle: "การพักผ่อนที่ละเมียดละไมและมีเอกลักษณ์",
      imageLabels: ["พิธีกรรมแห่งเวลเนส", "ห้องพักระดับพรีเมียม"],
      highlightsTitle: "ข้อเสนอพิเศษและช่วงเวลาที่คัดสรร",
      amenitiesTitle: "สิ่งอำนวยความสะดวกพิเศษ",
      amenities: [
        { title: "Wi-Fi ความเร็วสูง", text: "เชื่อมต่อได้อย่างมั่นใจทั่วทั้งโรงแรม" },
        { title: "สระว่ายน้ำอินฟินิตี้", text: "พื้นที่พักผ่อนสงบพร้อมบรรยากาศเหนือระดับ" },
        { title: "ลักชัวรีสปา", text: "ทรีตเมนต์เพื่อการฟื้นฟูที่จัดเตรียมอย่างพิถีพิถัน" },
        { title: "ห้องอาหาร", text: "อาหารไทยและนานาชาติพร้อมบริการอย่างมีระดับ" },
        { title: "ฟิตเนส", text: "พื้นที่ออกกำลังกายสำหรับสมดุลในทุกวันเดินทาง" },
        { title: "คอนเซียร์จ", text: "ดูแลการเดินทาง ร้านอาหาร และกิจกรรมในเมือง" }
      ]
    },
    booking: {
      eyebrow: "สำรองการเข้าพัก",
      title: "จองห้องพัก",
      description: "เลือกห้องพักที่ต้องการและแจ้งรายละเอียดเพื่อให้ทีมสำรองห้องพักจัดเตรียมการมาถึงอย่างราบรื่น",
      trustChips: ["การจองปลอดภัย", "ยืนยันรวดเร็ว", "บันทึกถึงคอนเซียร์จ"],
      selectedAccommodation: "ห้องพักที่เลือก",
      perNight: "ต่อคืน",
      reservationDetails: "รายละเอียดการจอง",
      reservationDescription: "กรอกแบบฟอร์มด้านล่าง แล้วทีมของเราจะดูแลคำขอของคุณอย่างพิถีพิถัน",
      guestInfo: "ข้อมูลผู้เข้าพัก",
      guestInfoNote: "รายละเอียดติดต่อหลักสำหรับการยืนยัน",
      stayPreferences: "ความต้องการในการเข้าพัก",
      stayPreferencesNote: "เลือกห้อง วันที่ และเวลามาถึง",
      specialNotes: "คำขอพิเศษ",
      specialNotesNote: "แจ้งสิ่งที่ต้องการให้ทีมเตรียมก่อนมาถึง",
      roomSelection: "เลือกห้องพัก",
      policyTitle: "นโยบายการเข้าพัก",
      assistanceTitle: "ต้องการความช่วยเหลือก่อนจอง?",
      assistanceText: "ทีมต้อนรับของเราช่วยแนะนำห้องพัก รถรับส่งสนามบิน และการจัดเตรียมพิเศษได้",
      submit: "ส่งคำขอจอง",
      labels: {
        fullName: "ชื่อ-นามสกุล",
        email: "อีเมล",
        phone: "เบอร์โทรศัพท์",
        nationality: "สัญชาติ",
        roomType: "ประเภทห้อง",
        guests: "จำนวนผู้เข้าพัก",
        checkIn: "วันที่เช็กอิน",
        checkOut: "วันที่เช็กเอาต์",
        arrivalTime: "เวลามาถึง",
        addOn: "บริการเสริม",
        specialRequest: "คำขอพิเศษ"
      }
    },
    services: {
      eyebrow: "บริการและสิ่งอำนวยความสะดวก",
      title: "ออกแบบเพื่อความสะดวก ความเป็นส่วนตัว และบริการระดับมืออาชีพ",
      description: "ทุกบริการถูกจัดวางให้เรียบร้อย รวดเร็ว และให้ความรู้สึกพรีเมียมตั้งแต่มาถึงจนออกเดินทาง",
      pillarsTitle: "บริการสำหรับผู้เข้าพัก",
      pillars: [
        { title: "คอนเซียร์จส่วนตัว", text: "ดูแลการจอง การเดินทาง และคำแนะนำในพื้นที่อย่างแม่นยำ" },
        { title: "สนับสนุนธุรกิจ", text: "พื้นที่ทำงานเงียบ Wi-Fi เสถียร และความช่วยเหลือที่ใช้งานได้จริง" },
        { title: "ดูแลเวลเนส", text: "ประสานงานสปา ฟิตเนส และแผนการพักผ่อนที่ช่วยฟื้นฟู" }
      ],
      facilitiesTitle: "สิ่งอำนวยความสะดวกของโรงแรม",
      facilities: [
        { title: "ห้องอาหารซิกเนเจอร์", text: "เมนูไทยและนานาชาติในบรรยากาศเรียบหรู" },
        { title: "เวลเนสสปา", text: "ทรีตเมนต์ผ่อนคลายเพื่อช่วงเวลาพักที่มีคุณภาพ" },
        { title: "สระว่ายน้ำและฟิตเนส", text: "พื้นที่พักผ่อนและออกกำลังกายสำหรับวันเดินทางที่สมดุล" }
      ],
      standardsTitle: "มาตรฐานการบริการ",
      standards: [
        "แผนกต้อนรับและช่วยเหลือการมาถึงตลอด 24 ชั่วโมง",
        "ทำความสะอาดรายวันและบริการจัดเตียงสำหรับบางประเภทห้อง",
        "ประสานงานรถรับส่งสนามบินและการเดินทางส่วนตัว",
        "บริการหลายภาษาเพื่อรองรับแขกต่างชาติ"
      ]
    },
    contact: {
      eyebrow: "ติดต่อ Tri Gong",
      title: "พูดคุยกับทีมสำรองห้องพักและดูแลผู้เข้าพัก",
      description: "สำหรับคำแนะนำห้องพัก การจองแบบกลุ่ม รถรับส่งสนามบิน หรือการจัดเตรียมพิเศษ ทีมของเราพร้อมช่วยเหลือ",
      detailsTitle: "รายละเอียดการติดต่อ",
      details: [
        { label: "โทรศัพท์", value: "+66 53 000 888", note: "สำหรับการจองและความช่วยเหลือผู้เข้าพัก" },
        { label: "อีเมล", value: "stay@trigonghotel.com", note: "เหมาะสำหรับคำขอที่มีรายละเอียด" },
        { label: "ที่ตั้ง", value: "เมืองเก่าเชียงใหม่ ประเทศไทย", note: "ทำเลสงบใกล้แหล่งวัฒนธรรม" }
      ],
      inquiryTitle: "สอบถามข้อมูล",
      inquiryText: "แจ้งวันที่ต้องการ รูปแบบห้อง และรายละเอียดการมาถึงที่ต้องการให้เราเตรียม",
      arrivalTitle: "บริการก่อนมาถึง",
      arrivalText: "สามารถจัดรถรับส่งสนามบิน คำแนะนำการมาถึงก่อนเวลา และการจัดห้องสำหรับโอกาสพิเศษได้",
      responseCommitment: "ทีมของเราตอบกลับคำถามสำคัญภายในหนึ่งวันทำการ"
    }
  },
  zh: {
    brand: {
      name: "Tri Gong Hotel",
      tagline: "为优雅休闲与商务旅程而设的精致下榻之所"
    },
    nav: {
      home: "首页",
      services: "服务与设施",
      book: "预订客房",
      contact: "联系我们",
      languageLabel: "语言"
    },
    home: {
      eyebrow: "清迈奢雅 hospitality",
      title: "为现代旅人打造的雅致静居",
      description:
        "Tri Gong Hotel 融合泰式温度、当代优雅与商务便利，为重视细节的宾客呈现从容而体面的入住体验。",
      location: "泰国清迈",
      primaryAction: "预订入住",
      secondaryAction: "探索服务",
      experienceTitle: "从容有序的入住体验",
      imageLabels: ["身心疗愈仪式", "精致客房"],
      highlightsTitle: "精选礼遇与专属时刻",
      amenitiesTitle: "专属设施",
      amenities: [
        { title: "高速 Wi-Fi", text: "全酒店稳定连接，适合商务与休闲。" },
        { title: "无边泳池", text: "安静而开阔的高品质休憩空间。" },
        { title: "奢华水疗", text: "细致安排的修复护理体验。" },
        { title: "餐饮", text: "泰式与国际菜单，搭配优雅服务。" },
        { title: "健身", text: "为旅途日常保持平衡的运动空间。" },
        { title: "礼宾服务", text: "协助抵达、餐饮预订与城市行程。" }
      ]
    },
    booking: {
      eyebrow: "预订入住",
      title: "预订客房",
      description: "选择偏好的房型并提交入住细节，我们的预订团队将为您安排顺畅抵达。",
      trustChips: ["安全预订", "快速确认", "礼宾备注"],
      selectedAccommodation: "已选客房",
      perNight: "每晚",
      reservationDetails: "预订信息",
      reservationDescription: "填写下方表格，我们将细致审核并跟进您的入住请求。",
      guestInfo: "宾客信息",
      guestInfoNote: "用于确认预订的主要联系方式。",
      stayPreferences: "入住偏好",
      stayPreferencesNote: "选择房型、日期与抵达安排。",
      specialNotes: "特别备注",
      specialNotesNote: "告诉我们抵达前需要准备的事项。",
      roomSelection: "房型选择",
      policyTitle: "入住政策",
      assistanceTitle: "预订前需要协助？",
      assistanceText: "前台团队可协助房型建议、机场接送与特别布置。",
      submit: "提交预订请求",
      labels: {
        fullName: "姓名",
        email: "电子邮箱",
        phone: "电话号码",
        nationality: "国籍",
        roomType: "房型",
        guests: "入住人数",
        checkIn: "入住日期",
        checkOut: "退房日期",
        arrivalTime: "抵达时间",
        addOn: "附加服务",
        specialRequest: "特别需求"
      }
    },
    services: {
      eyebrow: "服务与设施",
      title: "为效率、私密与精致服务而设计",
      description: "每一项服务都以低调、流畅、专业为原则，让入住从抵达到离店都自然从容。",
      pillarsTitle: "宾客服务",
      pillars: [
        { title: "私人礼宾", text: "精准处理预订、交通与本地行程安排。" },
        { title: "商务支持", text: "安静办公环境、稳定 Wi-Fi 与实用宾客协助。" },
        { title: "健康协调", text: "协助安排水疗、健身与恢复型入住计划。" }
      ],
      facilitiesTitle: "酒店设施",
      facilities: [
        { title: "招牌餐饮", text: "优雅呈现泰式与国际菜单。" },
        { title: "康养水疗", text: "安静护理与细致仪式，适合旅途中修复身心。" },
        { title: "泳池与健身", text: "让旅行日程保持平衡的休闲与运动空间。" }
      ],
      standardsTitle: "服务标准",
      standards: [
        "24 小时前台与抵达协助",
        "每日客房清洁，指定套房提供夜床服务",
        "机场接送与私人交通协调",
        "为国际宾客提供多语言支持"
      ]
    },
    contact: {
      eyebrow: "联系 Tri Gong",
      title: "联系预订与宾客关系团队",
      description: "无论是房型建议、团队咨询、机场接送或特别安排，我们的团队都将细致协助。",
      detailsTitle: "联系方式",
      details: [
        { label: "电话", value: "+66 53 000 888", note: "用于预订与宾客协助。" },
        { label: "邮箱", value: "stay@trigonghotel.com", note: "适合详细行程需求。" },
        { label: "地址", value: "泰国清迈古城", note: "靠近文化地标的静雅地址。" }
      ],
      inquiryTitle: "宾客咨询",
      inquiryText: "请告诉我们您的日期、房型偏好与希望提前准备的抵达细节。",
      arrivalTitle: "抵达支持",
      arrivalText: "可提前安排机场接送、早到建议与庆祝布置。",
      responseCommitment: "重要咨询将在一个工作日内回复。"
    }
  }
};

export const amenityIcons = [
  <Wifi size={22} key="wifi" />,
  <Waves size={22} key="waves" />,
  <Sparkles size={22} key="sparkles" />,
  <Utensils size={22} key="utensils" />,
  <Dumbbell size={22} key="dumbbell" />,
  <ConciergeBell size={22} key="concierge" />
];

export const servicePillarIcons = [
  <ConciergeBell size={22} key="concierge" />,
  <ShieldCheck size={22} key="business" />,
  <Sparkles size={22} key="wellness" />
];

export const facilityIcons = [
  <Utensils size={22} key="dining" />,
  <Sparkles size={22} key="spa" />,
  <Dumbbell size={22} key="fitness" />
];

export const getRoomTypes = (language: Language) => roomContent[language];

export const getBookingHighlights = (language: Language): BookingHighlight[] => [
  {
    icon: <CalendarDays size={20} />,
    title:
      language === "th"
        ? "วางแผนการพักอย่างยืดหยุ่น"
        : language === "zh"
          ? "灵活入住规划"
          : "Flexible Stay Planning",
    text:
      language === "th"
        ? "เลือกวันที่และเวลามาถึงได้อย่างชัดเจน"
        : language === "zh"
          ? "清晰选择日期与抵达时间。"
          : "Choose preferred dates and arrival timing with clarity."
  },
  {
    icon: <ShieldCheck size={20} />,
    title:
      language === "th"
        ? "ขั้นตอนการจองมืออาชีพ"
        : language === "zh"
          ? "专业预订流程"
          : "Professional Reservation Flow",
    text:
      language === "th"
        ? "ข้อมูลผู้เข้าพัก ห้องพัก และคำขอพิเศษถูกจัดเป็นสัดส่วน"
        : language === "zh"
          ? "宾客信息、房型偏好与特别需求清晰分组。"
          : "Guest details, room preferences, and special requests are grouped clearly."
  },
  {
    icon: <Stars size={20} />,
    title:
      language === "th"
        ? "ประสบการณ์แขกระดับพรีเมียม"
        : language === "zh"
          ? "高级宾客体验"
          : "Premium Guest Experience",
    text:
      language === "th"
        ? "นำเสนอคุณภาพห้องพักและความมั่นใจก่อนเข้าพัก"
        : language === "zh"
          ? "在预订前展示房间品质、礼遇与入住信心。"
          : "Showcase room quality, benefits, and stay confidence before arrival."
  }
];

export const getStayPolicies = (language: Language) => {
  if (language === "th") {
    return [
      "เช็กอินตั้งแต่ 14:00 น. และเช็กเอาต์ก่อน 12:00 น.",
      "ยกเลิกฟรีได้ถึง 48 ชั่วโมงก่อนวันเข้าพัก",
      "บริการอาหารเช้าเริ่มทุกวันเวลา 06:30 น.",
      "แผนกต้อนรับและคอนเซียร์จพร้อมให้บริการ 24 ชั่วโมง"
    ];
  }

  if (language === "zh") {
    return [
      "下午 2:00 后入住，中午 12:00 前退房",
      "入住前 48 小时可免费取消",
      "早餐每日 6:30 开始供应",
      "前台与礼宾服务 24 小时开放"
    ];
  }

  return [
    "Check-in from 2:00 PM and check-out before 12:00 PM",
    "Free cancellation available up to 48 hours before arrival",
    "Breakfast service starts daily from 6:30 AM",
    "Front desk and concierge support available 24/7"
  ];
};
