import { contact } from "@/utils/constent";

export const contactPageData = {
  heroSection: {
    title: "Contact Us",
    image: "/new-website/resturant4.webp",

  },
  contactInfo: {
    title: "Contact Details!",
    address: contact.address,
    email: `mailto:${contact.email}`,
    phone: `tel:${contact.phone[0]}`,
    mapEmbedUrl: contact.mapUrl,
  },
};
