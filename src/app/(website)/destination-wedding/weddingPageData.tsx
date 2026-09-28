import { contact } from "@/utils/constent";

export const weddingPageData = {
  bannerData: {
    title: "Destination Wedding",
    images: ["/landing-page/Weddings.png"],
  },
  aboutWeddingData: {
    src: "/wedding1.png",
    title: "WE CREATE . YOU CELEBRATE",
    subTitle: "Your Forever Starts Here",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.`,
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
        src: "/wedding1.png",
        alt: "Pre-Wedding Events",
      },
      {
        src: "/wedding2.png",
        alt: "Haldi Ceremony",
      },
      {
        src: "/wedding3.jpg",
        alt: "Mehendi Ceremony",
      },
      {
        src: "/wedding4.jpg",
        alt: "Engagement",
      },
      {
        src: "/wedding5.jpg",
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
    title: "Discover the best of Himachal Pradesh tourism from Ivara Resort",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: {
      href: contact.WhatsappCta,
      label: "Book Now",
    },
  },
};
