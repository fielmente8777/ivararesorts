import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";
import {
  FillFaceBookIcon,
  OutLineInstagramIcon,
  YouTube,
} from "@/utils/SocialIcon";
import { JSX } from "react/jsx-runtime";

interface FooterData {
  logo: string;
  tagLine: string;
  description: string;
  cta: {
    label: string;
    href: string;
  }[];
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

interface WebsiteFooterData {
  logo: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      icon?: JSX.Element;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  tagLine: "Resorts · Khajuraho",
  description:
    "A luxury riverfront resort in Khajuraho, Madhya Pradesh, set on 14 acres along the Khudar River, adjacent to the UNESCO-listed Khajuraho Group of Monuments.",
  cta: [
    {
      label: "CALL NOW",
      href: contact.callCta,
    },
    {
      label: "ENQUIRE NOW",
      href: contact.WhatsappCta,
    },
    {
      label: "Enquire now",
      href: "#form",
    },
  ],
  lists: [
    {
      title: "Contact",
      links: [
        {
          title: "Call: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },

        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },

        {
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
      ],
    },
  ],
};

export const websiteFooterData: WebsiteFooterData = {
  logo: "/logo.png",
  description: "Reserve Himalayan escape!",
  cta: {
    label: "Book stay",
    href: contact.WhatsappCta,
  },
  lists: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        // { label: "About us", href: "/about-us" },
        { label: "Stay", href: "/refined-living-spaces/" },
        { label: "Experiences", href: "/experiences" },
        { label: "Contact us", href: "/contact-us" },
      ],
    },
    {
      title: "Explore",
      links: [
        // { label: "Wellness", href: "/holistic-wellness" },
        // { label: "Dining", href: "/farm-to-table" },
        // { label: "Gallery", href: "/gallery" },
        // { label: "Host your retreat", href: "/host-your-retreat" },
        // { label: "Blogs", href: "/blogs" },
        { label: "Gallery", href: "/gallery/" },
        { label: "Destination Weddings", href: "/destination-wedding/" },
        { label: "Explore Khajuraho", href: "/nearby-places/" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          label: "Address: " + contact.address,
          href: contact.addressLink,
          icon: <FillLocationIcon />,
        },
        {
          label: "Call Us: " + contact.phone[0],
          href: "tel:" + contact.phone[0],
          icon: <FillCallIcon />,
        },
        {
          label: "Email: " + contact.email,
          href: "mailto:" + contact.email,
          icon: <FillMailIcon />,
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          label: "Facebook",
          href: contact.socialMedia.facebook,
          icon: <FillFaceBookIcon />,
        },
        {
          label: "instagram",
          href: contact.socialMedia.instagram,
          icon: <OutLineInstagramIcon />,
        },
        {
          label: "youtube",
          href: "",
          icon: <YouTube />,
        },
      ],
    },
  ],
};
