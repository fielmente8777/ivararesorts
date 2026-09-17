import { contact } from "@/utils/constent";

export const navData = {
  logo: "/logo.png",

  buttons: [
    // { label: "CALL NOW", href: contact.callCta },
    { label: "ENQUIRE NOW", href: "#form" },
  ],

  links: [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
  ],
};

export const WebsiteNavData = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us/" },
  ],
};

export const newNavData = {
  navLinks: [
    {
      label: "Home",
      href: "/website/",
    },
    {
      label: "Stay",
      href: "/website/refined-living-spaces/",
    },
    {
      label: "Experiences",
      href: "/website/experiences/",
    },
    {
      label: "Weddings & Events",
      href: "/website/destination-wedding/",
    },
    {
      label: "Explore Khajuraho",
      href: "/website/nearby-places/",
    },
    {
      label: "Gallery",
      href: "/website/gallery/",
    },
    {
      label: "Contact",
      href: "/website/contact-us/",
    },
  ],

  logo: {
    default: "/logo.png",
    scrolled: "/logo.png",
    alt: "IVARA Logo",
  },

  bookingButton: {
    label: "Book Stay",
    href: "#form",
  },
};
