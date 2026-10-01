import React from "react";
import IntroSection from "./components/IntroSection";
import { experiencePageData } from "./pageData";
import BannerSection from "./components/BannerSection";
import ExperiencesSection from "./components/ExperienceSection";
import ImageBanner from "@/components/banners/ImageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Unique Experiences | Adventure & Wellness at Rudraksh Retreat",
  description:
    "From yoga and meditation to nature walks and adventure, The Rudraksh Retreat offers unforgettable experiences in the heart of Uttarakhand.",

  alternates: {
    canonical: "https://therudrakshretreat.com/experiences/",
  },

  openGraph: {
    title: "Unique Experiences | Adventure & Wellness at Rudraksh Retreat",
    description:
      "From yoga and meditation to nature walks and adventure, The Rudraksh Retreat offers unforgettable experiences in the heart of Uttarakhand.",
    url: "https://therudrakshretreat.com/experiences/",
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
      <ImageBanner
        title="Experiences"
        images={experiencePageData.heroSection.images}
        centeredTitle={true}
        showForm={false}
      />
      <IntroSection {...experiencePageData?.introSection} />
      <BannerSection {...experiencePageData?.bannerSection} />
      <ExperiencesSection {...experiencePageData?.experiencesSection} />
    </main>
  );
};

export default page;
