import React from "react";
import ContactSection from "./components/ContactSection";
import { contactPageData } from "./contactPageData";
import ImageBanner from "@/components/banners/ImageBanner";
import { Metadata } from "next";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { homePageData } from "@/components/home-components/pageData";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Contact Us | The Rudraksh Retreat – Plan Your Stay Today",
  description:
    "Have questions or need assistance? Contact The Rudraksh Retreat to book your stay and experience the best resort in Tehri Garhwal.",

  alternates: {
    canonical: "https://therudrakshretreat.com/contact-us/",
  },

  openGraph: {
    title: "Contact Us | The Rudraksh Retreat – Plan Your Stay Today",
    description:
      "Have questions or need assistance? Contact The Rudraksh Retreat to book your stay and experience the best resort in Tehri Garhwal.",
    url: "https://therudrakshretreat.com/contact-us/",
    siteName: "The Rudraksh Retreat",
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
    <main>
      {/* <ImageBanner {...contactPageData?.heroSection} /> */}
      <ImageBanner
        title={contactPageData.heroSection.title}
        tag="Luxury Resort"
        images={[contactPageData.heroSection.image]}
        benefits="Book directly with us for the best available rate."
      />
      <SlidingTitle items={homePageData.slidingText} />
      <ContactSection contactInfo={contactPageData?.contactInfo} />
    </main>
  );
};

export default page;
