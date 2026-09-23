import React from "react";
import ContactSection from "./components/ContactSection";
import { contactPageData } from "./contactPageData";
import ImageBanner from "@/components/banners/ImageBanner";
import { Metadata } from "next";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { homePageData } from "@/components/home-components/pageData";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivararesorts.com"),
  title: "Contact Us | IVARA Resorts Khajuraho – Plan Your Stay Today",
  description:
    "Have questions or need assistance? Contact IVARA Resorts to book your luxury stay in Khajuraho.",

  alternates: {
    canonical: "https://ivararesorts.com/website/contact-us/",
  },

  openGraph: {
    title: "Contact Us | IVARA Resorts Khajuraho – Plan Your Stay Today",
    description:
      "Have questions or need assistance? Contact IVARA Resorts to book your luxury stay in Khajuraho.",
    url: "https://ivararesorts.com/website/contact-us/",
    siteName: "IVARA Resorts",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <main className="bg-[#F9FCEE]">
      {/* <Image {...contactPageData?.heroSection} /> */}
      <ImageBanner
        title="Contact Us"
        images={[contactPageData.heroSection.image]}
        centeredTitle={true}
        showForm={false}
      />
      <SlidingTitle items={homePageData.slidingText} />
      <ContactSection contactInfo={contactPageData?.contactInfo} />
    </main>
  );
};

export default page;
