
import ImageBanner from "@/components/banners/ImageBanner";
import { AboutWedding, Faq, WeddingServices } from "./components";
import { weddingPageData } from "./weddingPageData";
import { Addcard } from "@/components/cards";
import OfferSlider from "@/components/sliders/OfferSlider";

export const metadata = {
  title: "Destination Wedding in Khajuraho - IVARA Resorts",
  description:
    "Celebrate love with a magical destination wedding at IVARA Resorts. A perfect blend of tradition, nature, and unforgettable moments.",
};

const page = () => {
  return (
    <div>
      <ImageBanner
        title="Weddings & Events"
        images={weddingPageData.bannerData.images}
        centeredTitle={true}
        showForm={false}
      />
      <AboutWedding {...weddingPageData.aboutWeddingData} />
      <WeddingServices {...weddingPageData.weddingServices} />
      <OfferSlider {...weddingPageData.offer} />
      <Faq {...weddingPageData.faq} />
      <Addcard
        {...weddingPageData.addCardData}
        sectionClassName="pt-8 md:pt-12 pb-16 md:pb-24"
      />
    </div>
  );
};

export default page;
