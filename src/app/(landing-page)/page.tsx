import React from "react";
import ImageBanner from "@/components/banners/ImageBanner";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Form1 from "@/components/forms/Form1";

import { landingPageData } from "./components/pageData";
import OfferTicker from "./components/OfferTicker";
import AboutSection from "./components/AboutSection";
import Accommodations from "./components/Accommodations";
import DestinationWedding from "./components/DestinationWedding";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import CuratedExcursion from "./components/CuratedExcursion";
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] overflow-x-hidden">
      {/* 1. Top Offer Ticker */}
      <OfferTicker text={landingPageData.offerTicker.text} />

      {/* 2. Hero Banner */}
      <ImageBanner {...landingPageData.banner} />

      {/* Mobile Form View */}
      <div
        className="bg-[#4A5A3E] lg:hidden py-6 px-4 flex flex-col gap-4 max-w-6xl w-full mx-auto"
        id="form"
      >
        <Form1
          buttonText="Book Now"
          buttonBgClass="bg-[#B88B4A] hover:bg-[#a67c3f]"
          showCalendarIcon={true}
        />
        <p
          className="text-xs text-[#D8C2A5] tracking-widest text-center uppercase"
          dangerouslySetInnerHTML={{ __html: landingPageData.banner.benefits }}
        />
      </div>

      {/* 3. About Section */}
      <AboutSection {...landingPageData.aboutResort} />

      {/* 4. Milestones Ticker 1 */}
      <SlidingTitle items={landingPageData.milestones} />

      {/* 5. Accommodations Section */}
      <Accommodations {...landingPageData.accommodations} />

      {/* 6. Amenities Ticker */}
      <SlidingTitle bgColor="bg-[#1F2523]" textColor="text-white" iconColor="text-[#CA9D4C]" items={landingPageData.about} />

      {/* 7. Destination Weddings Section */}
      <DestinationWedding {...landingPageData.destinationWedding} />

      {/* 8. Milestones Ticker 2 */}
      <SlidingTitle items={landingPageData.milestones} />

      {/* 9. Experiences Section */}
      <Experiences {...landingPageData.experiences} />

      {/* 10. Offer Ticker */}
      <OfferTicker text={landingPageData.offerTicker.text} />

      {/* 11. Gallery Section */}
      <Gallery images={landingPageData.gallery} />

      {/* 12. Curated Excursions Section */}
      <CuratedExcursion {...landingPageData.curatedExcursion} />

      {/* 13. FAQs Accordion */}
      <Faqs {...landingPageData.faqs} />

      {/* 14. Offer Ticker */}
      <OfferTicker text={landingPageData.offerTicker.text} />

      {/* 15. Testimonials Section */}
      {/* <Testimonials {...landingPageData.testimonials} /> */}
    </main>
  );
}
