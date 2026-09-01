import { contact } from "@/utils/constent";
import {
  AcreRiverfrontIcon,
  AdjacentIcon,
  AirportIcon,
  AIStarIcon,
  DiningIcon,
  FitnessCentreIcon,
  GardenIcon,
  PeopleIcon,
  TreeIcon,
} from "@/utils/landingIcon";

export const landingPageData = {
  offerTicker: {
    text: "LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS SEPTEMBER!",
  },

  banner: {
    tag: "A 14-Acre Riverfront Sanctuary · Khajuraho Nainital",
    title: "Luxury Resort in Khajuraho, Anchored in Heritage",
    description: "",
    images: ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"],
    benefits: "Save 15% when you book direct · Free cancellation on most dates*",
  },

  aboutResort: {
    tag: "ABOUT IVARA RESORT",
    title: "An Editorial Approach to Luxury, <br /><i class='text-secondary'>in the Heart of Khajuraho.</i>",
    paragraphs: [
      "Set amidst the timeless landscapes of Khajuraho, IVARA brings together refined hospitality, natural beauty, and the rich cultural heritage of Central India. Here, every space is designed to feel grand yet personal, elegant yet effortless.",
      "Whether you are planning a romantic escape, a family holiday, a celebration, or simply time away from the noise, IVARA offers something increasingly rare: the luxury of privacy, time, and complete stillness.",
    ],
    subtitle: "Your Private Escape Awaits",
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
  },

  milestones: [
    {
      icon: <AIStarIcon />,
      title: "5-Star Amenities",
    },
    {
      icon: <AcreRiverfrontIcon />,
      title: "14-Acre Riverfront",
    },
    {
      icon: <AirportIcon />,
      title: "7 Min · Khajuraho Airport",
    },
    {
      icon: <AdjacentIcon />,
      title: "Adjacent to UNESCO Site",
    },
  ],

  accommodations: {
    tag: "ACCOMMODATIONS",
    title: "Private Cottages. <br /><i class='text-secondary'>Uncompromised Comfort.</i>",
    caption: "22 Private Riverfront Cottages, thoughtfully Designed for Privacy, <br />Comfort and a Quiet Connection with Nature.",
    cards: [
      {
        image: "/private-cottage1.jpg",
        title: "Riverfront View Cottage",
      },
      {
        image: "/private-cottage2.jpg",
        title: "Luxury Suite",
      },
      {
        image: "/private-cottage3.jpg",
        title: "Garden Villa",
      },
      {
        image: "/private-cottage4.jpg",
        title: "Riverfront View Cottage",
      },
      {
        image: "/private-cottage5.jpg",
        title: "Luxury Suite",
      },
      {
        image: "/private-cottage6.jpg",
        title: "Garden Villa",
      },
    ],
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
  },

  about: [
    {
      icon: <DiningIcon />,
      title: "Curated Dining",
    },
    {
      icon: <FitnessCentreIcon />,
      title: "Fitness Centre",
    },
    {
      icon: <GardenIcon />,
      title: "Zen Garden",
    },
    {
      icon: <PeopleIcon />,
      title: "Grand Banquet · 400",
    },
    {
      icon: <AcreRiverfrontIcon />,
      title: "Poolside Deck",
    },
  ],

  destinationWedding: {
    tag: "DESTINATION WEDDINGS",
    title: "A wedding venue as <br /><i class='text-secondary'>unforgettable as the vows.</i>",
    description:
      "Ivara is a complete destination wedding venue in Madhya Pradesh, built for intimate ceremonies and grand <br />celebrations alike.",
    image: "/wedding2.png",
    images: ["/wedding1.png", "/wedding2.png"],
    images1: ["/wedding1.png", "/wedding3.jpg", "/wedding6.jpg",],
    images2: ["/wedding2.png", "/wedding4.jpg", "/wedding5.jpg",],
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
    list: [
      "400+ capacity grand banquet hall",
      "500+ guest riverfront celebration lawns",
      "22 private cottages for closest guests",
      "In-house planning, catering & curated experiences",
    ],
  },

  experiences: {
    tagline: "EXPERIENCES",
    title: "Moments Beyond <i class='text-secondary'>the Stay</i>",
    description: "",
    image: "/landing-page/avtar.png",
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
    cards: [
      {
        image: "/images/img5.jpg",
        title: "Golf",
        description: "",
      },
      {
        image: "/images/img8.jpg",
        title: "Curated Dining",
        description: "",
      },
      {
        image: "/images/img6.jpg",
        title: "Pool",
        description: "",
      },
      {
        image: "/images/img7.jpg",
        title: "Wellness & Yoga",
        description: "",
      },
      {
        image: "/images/img9.jpg",
        title: "Gym & Fitness",
        description: "",
      },
    ],
  },

  curatedExcursion: {
    tag: "CURATED EXCURSIONS",
    title: "Explore Khajuraho & <br /><i class='text-[#C4A482]'>the wilderness beyond.</i>",
    description:
      "From UNESCO-listed temples to Bengal tigers and dramatic granite canyons, <br />every excursion is arranged by our concierge.",
    cards: [
      {
        tagLin: "Khajuraho · MP",
        icon: <AdjacentIcon />,
        title: "Khajuraho UNESCO Monuments",
        description: "Adjacent to the historic Dulhadev Temple, a moment away from India's most extraordinary 10th-century temple heritage.",
        image: "/landing-page/Rectangle-34624272.png",
      },
      {
        tagLin: "Khajuraho · MP",
        icon: <TreeIcon />,
        title: "Panna Tiger Reserve",
        description: "A short journey to Bengal tiger safaris, ancient forests and the serene Ken River.",
        image: "/landing-page/Khajuraho-UNESCO-Monuments.png",
      },
      {
        tagLin: "Khajuraho · MP",
        icon: <AcreRiverfrontIcon />,
        title: "Raneh & Pandav Falls",
        description: "Canyons of red, pink and grey granite carved by the Ken River, a natural spectacle minutes away.",
        image: "/landing-page/Raneh-&-Pandav-Falls.png",
      },
    ],
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
  },

  gallery: [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
    "/gallery9.jpg",
    "/gallery10.jpg",
    "/gallery11.jpg",
    "/gallery12.jpg",
  ],

  faqs: {
    title: "FAQs",
    questions: [
      {
        question: "What are the check-in and check-out timings?",
        answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM.",
      },
      {
        question: "How can I book destination wedding?",
        answer: "You can enquire via our form or call our team directly for bespoke wedding packages.",
      },
      {
        question: "Is complimentary Wi-Fi available?",
        answer: "Yes, high-speed complimentary Wi-Fi is available across the resort property.",
      },
      {
        question: "Does the resort have a restaurant?",
        answer: "Yes, we feature multi-cuisine fine dining with organic locally sourced ingredients.",
      },
      {
        question: "Is parking available at the resort?",
        answer: "Yes, complimentary secure valet and self-parking is available for all guests.",
      },
      {
        question: "How can I make a reservation?",
        answer: "You can book directly using our website form or contact us via Call/WhatsApp.",
      },
    ],
  },

  testimonials: {
    tag: "TESTIMONIALS",
    title: "Guest Experiences",
    images: "/landing-page/banner.png",
    reviews: [
      {
        author: "Heaven on earth.",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    cta: [
      {
        label: "ENQUIRE NOW",
        href: contact.WhatsappCta,
      },
      {
        label: "BOOK NOW",
        href: contact.callCta,
      },
    ],
    benefits: "Save 15% when you book direct · Free cancellation on most dates*",
  },
};
