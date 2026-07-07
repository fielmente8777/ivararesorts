import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

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



export const footerData: FooterData = {
  logo: "/logo.png",
  tagLine:"Resorts · Khajuraho",
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
      label: "BOOK NOW",
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
