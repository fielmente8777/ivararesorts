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
  banner: {
    tag: "A 14-Acre Riverfront Sanctuary · Khajuraho",
    title: "Luxury Resort in Khajuraho, anchored in heritage.",
    description:
      "22 private cottages along the Khudar River. A rare golf course. Restorative wellness. And a UNESCO World Heritage backdrop, just seven minutes from Khajuraho Airport.",
    image: "/landing-page/banner.png",
    benefits:
      "Save 15% when you book direct · No prepayment · Free cancellation",
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

  experiences: {
    image: "/landing-page/avtar.png",
    tagline: "The Ivara Experience",
    title:
      "An editorial approach to luxury, <i class='text-secondary'>in the heart of Khajuraho.</i>",
    description:
      "Built to endure, not to impress. Ivara is a rare intersection of riverfront landscapes, championship golf, restorative wellness and centuries-old cultural heritage, curated for a limited few.",
    cta: [
      {
        label: "Call Now",
        href: contact.callCta,
      },
      {
        label: "Enquiry Now",
        href: contact.WhatsappCta,
      },
    ],
    cards: [
      {
        image: "/landing-page/banner.png",
        title: "22 Riverfront Cottages",
        description: "Bespoke, low-density living along the Khudar River.",
      },
      {
        image: "/landing-page/Rectangle-34624269.png",
        title: "Golf & Leisure",
        description:
          "A signature golf course, rare in the region  with poolside lounges and landscaped grounds.",
      },
      {
        image: "/landing-page/Rectangle-34624284.png",
        title: "Spa & Wellness",
        description: "Zen gardens, yoga pavilions and restorative therapies.",
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
    tag: "Destination Weddings",
    title:
      "A wedding venue as <i class='text-primary'>unforgettable as the vows.</i>",
    description:
      "Ivara is a complete destination wedding venue in Madhya Pradesh, built for intimate ceremonies and grand celebrations alike. A 400-capacity banquet hall, riverfront ceremony lawns for 500+ guests, and 20 luxury cottages for your closest circle.",
    image: "/landing-page/Weddings.png",
    cta: [
      {
        label: "Call Now",
        href: contact.callCta,
      },
      {
        label: "Enquiry Now",
        href: contact.WhatsappCta,
      },
    ],
    list: [
      "400+ capacity grand banquet hall",
      "500+ guest riverfront celebration lawns",
      "22 private cottages for closest guests",
      "In-house planning, catering & curated experiences",
    ],
  },

  curatedExcursion: {
    tag: "Curated Excursions",
    title:
      "Explore Khajuraho & <i class='text-secondary'>the wilderness beyond.</i>",
    description:
      "From UNESCO-listed temples to Bengal tigers and dramatic granite canyons, every excursion is arranged by our concierge.",
    cards: [
      {
        tagLin: "Khajuraho · MP",
        icon: <AdjacentIcon />,
        title: "Khajuraho UNESCO Monuments",
        description:
          "Adjacent to the historic Dulhadev Temple, a moment away from India's most extraordinary 10th-century temple heritage.",
        image: "/landing-page/Rectangle-34624272.png",
      },
      {
        tagLin: "Khajuraho · MP",
        icon: <TreeIcon />,
        title: "Panna Tiger Reserve",
        description:
          "A short journey to Bengal tiger safaris, ancient forests and the serene Ken River.",
        image: "/landing-page/Khajuraho-UNESCO-Monuments.png",
      },
      {
        tagLin: "Khajuraho · MP",
        icon: <AcreRiverfrontIcon />,
        title: "Raneh & Pandav Falls",
        description:
          "Canyons of red, pink and grey granite carved by the Ken River, a natural spectacle minutes away.",
        image: "/landing-page/Raneh-&-Pandav-Falls.png",
      },
    ],
    cta: [
      {
        label: "Call Now",
        href: contact.callCta,
      },
      {
        label: "Enquiry Now",
        href: contact.WhatsappCta,
      },
    ],
  },

  gallery: [
    "/rooms/1.png",
    "/rooms/2.png",
    "/rooms/3.png",
    "/rooms/4.png",
    "/rooms/5.png",
  ],
  testimonials: {
    title: "Guest Experiences",
    images: "/Rectangle-34624274.png",
    cta: [
      {
        label: "Call Now",
        href: contact.callCta,
      },
      {
        label: "Enquiry Now",
        href: contact.WhatsappCta,
      },
    ],
    reviews: [
      {
        author: "Heaven on earth.",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ],
  },
};
