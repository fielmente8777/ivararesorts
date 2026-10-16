import { contact } from "@/utils/constent";

export const weddingPageData = {
  bannerData: {
    title: "Destination Wedding",
    images: ["/new-website/wedding-new.jpeg"],
  },
  aboutWeddingData: {
    src: "/wedding1.png",
    title: "Create Moments Worth Remembering",
    subTitle: "Your Forever Starts Here",
    description: [
      "Some occasions deserve more than a venue. They deserve a setting that becomes part of the story.",
      "Surrounded by the natural beauty of Khajuraho, IVARA offers a distinctive destination for weddings, milestone celebrations, and unforgettable gatherings. From intimate ceremonies to grand festivities, every celebration is shaped around your vision and brought to life with thoughtful planning and personalised hospitality.",
    ],
    links: [
      {
        href: "tel:" + contact.phone,
        label: "Call:" + contact.phone,
      },
      {
        href: "/contact-us/",
        label: "Contact Us",
      },
    ],
  },
  weddingServices: {
    title: "Featured Wedding Services",
    cards: [
      {
        src: "/wedding/decoration.png",
        alt: "Decorations",
        name: "Decorations",
      },
      {
        src: "/wedding/hygine.png",
        alt: "Hospitality",
        name: "Hospitality",
      },
      {
        src: "/wedding/entertainment.png",
        alt: "Entertainment",
        name: "Entertainment",
      },
      {
        src: "/wedding/photography.png",
        alt: "Photography",
        name: "Photography",
      },
      {
        src: "/wedding/pure-veg-menu.png",
        alt: "Pure Veg Menu",
        name: "Pure Veg Menu",
      },
      {
        src: "/wedding/branding.png",
        alt: "Branding",
        name: "Branding",
      },
      {
        src: "/wedding/safety.png",
        alt: "Safety",
        name: "Safety",
      },
    ],
  },
  offer: {
    title: "What We Offer",
    cards: [
      {
        src: "/new-website/engagement.jpg",
        alt: "Engagement",
      },
      {
        src: "/new-website/haldi.webp",
        alt: "Haldi Ceremony",
      },
      {
        src: "/new-website/mehndi.jpg",
        alt: "Mehendi Ceremony",
      },
      {
        src: "/new-website/pre-wedding-new.jpg",
        alt: "Pre-Wedding Events",
      },
      {
        src: "/new-website/reception-new.jpg",
        alt: "Reception",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    src: "/wedding6.jpg",
    faqData: [
      {
        id: 1,
        ques: "What are the check-in and check-out timings?",
        ans: "Check-in is at 2:00 PM and check-out is at 11:00 AM.",
      },
      {
        id: 2,
        ques: "How can I book destination wedding?",
        ans: "You can enquire via our form or call our team directly for bespoke wedding packages.",
      },
      {
        id: 3,
        ques: "Is complimentary Wi-Fi available?",
        ans: "Yes, high-speed complimentary Wi-Fi is available across the resort property.",
      },
      {
        id: 4,
        ques: "Does the resort have a restaurant?",
        ans: "Yes, we feature multi-cuisine fine dining with organic locally sourced ingredients.",
      },
      {
        id: 5,
        ques: "Is parking available at the resort?",
        ans: "Yes, complimentary secure valet and self-parking is available for all guests.",
      },
      {
        id: 6,
        ques: "How can I make a reservation?",
        ans: "You can book directly using our website form or contact us via Call/WhatsApp.",
      },
    ],
  },
  addCardData: {
    title: "Discover the Best of Khajuraho & Madhya Pradesh from IVARA Resorts",
    description:
      "Explore ancient temples, rich heritage, scenic landscapes, and the wild beauty of Madhya Pradesh — all from the comfort of IVARA Resorts.",
    link: {
      href: contact.WhatsappCta,
      label: "Book Now",
    },
  },
};
