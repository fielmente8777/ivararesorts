import React from "react";
import IntroSection from "./components/IntroSection";
import { experiencePageData } from "./pageData";
import BannerSection from "./components/BannerSection";
import ExperiencesSection from "./components/ExperienceSection";
import VideoBanner from "@/components/banners/VideoBanner";
import { SectionWithContainer } from "@/components/sectionComponants";
import Form1 from "@/components/forms/Form1";
import { Metadata } from "next";
import Video from "@/components/banners/Video";


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
      <Video {...experiencePageData?.heroSection} />
      <IntroSection {...experiencePageData?.introSection} />
      <BannerSection {...experiencePageData?.bannerSection} />
      <ExperiencesSection {...experiencePageData?.experiencesSection} />
       <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-background lg:py-12 py-6"
        containerClassName="md:py-3"
      >
        <div className="bg-secondary rounded-2xl p-4">
          <Form1 />
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
