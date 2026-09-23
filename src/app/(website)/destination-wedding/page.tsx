
import FullScreenCarousel from "@/components/sliders/FullScreenCarousel";

import { AboutWedding, Faq, WeddingServices } from "./components";
import { weddingPageData } from "./weddingPageData";
import { Addcard } from "@/components/cards";
import OfferSlider from "@/components/sliders/OfferSlider";

export const metadata = {
  title: "Destination Wedding in Manali  - Anand Vardhan Resorts",
  description:
    "Celebrate love with a magical destination wedding at Anand Vardhan Resorts. A perfect blend of tradition, nature, and unforgettable moments.",
};

const page = () => {
  return (
    <div>
      <FullScreenCarousel
        {...weddingPageData.bannerData}
      />
      <AboutWedding {...weddingPageData.aboutWeddingData} />
      <WeddingServices {...weddingPageData.weddingServices} />
      <OfferSlider {...weddingPageData.offer} />
      <Faq {...weddingPageData.faq} />
      <Addcard {...weddingPageData.addCardData} />
    </div>
  );
};

export default page;
