import ImageBanner from "@/components/banners/ImageBanner";
import { RoomsPageData } from "./components/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsSection from "./components/RoomsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://therudrakshretreat.com"),
  title: "Refined Living Spaces | Luxury Stay at The Rudraksh Retreat",
  description:
    "Experience refined living at The Rudraksh Retreat. Stay in elegant, comfortable spaces surrounded by nature for a peaceful and rejuvenating getaway.",

  alternates: {
    canonical: "https://therudrakshretreat.com/refined-living-spaces/",
  },

  openGraph: {
    title: "Refined Living Spaces | Luxury Stay at The Rudraksh Retreat",
    description:
      "Experience refined living at The Rudraksh Retreat. Stay in elegant, comfortable spaces surrounded by nature for a peaceful and rejuvenating getaway.",
    url: "https://therudrakshretreat.com/refined-living-spaces/",
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

export default function RefinedLivingSpaces() {
  return (
    <main>
      {/* <ImageBanner {...RoomsPageData?.heroSection} /> */}
      <ImageBanner
        title={RoomsPageData.heroSection.title}
        tag="Stay"
        images={[RoomsPageData.heroSection.image]}
        benefits="Discover our refined Himalayan stays."
      />
      <SectionWithContainer sectionClassName="bg-image bg-left bg-w-small">
        <SectionHeading
          title={RoomsPageData?.aboutUsSection?.title}
          textCenter
        />
        <div className="space-y-4 mt-8 text-center max-w-6xl mx-auto">
          {RoomsPageData?.aboutUsSection?.description?.map((text, index) => (
            <p key={index} className="mb-4 text-lg text-gray-700">
              {text}
            </p>
          ))}
        </div>
      </SectionWithContainer>
      <RoomsSection {...RoomsPageData?.roomsSection} />
    </main>
  );
}
