import ImageBanner from "@/components/banners/ImageBanner";
import { landingPageData } from "./components/pageData";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Experiences from "./components/Experiences";
import CuratedExcursion from "./components/CuratedExcursion";
import DestinationWedding from "./components/DestinationWedding";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Form1 from "@/components/forms/Form1";

export default function Home() {
  return (
    <main>
      <ImageBanner {...landingPageData.banner} />
      <div
        className="bg-background py-6 px-1.5 flex flex-col gap-5 max-w-6xl w-full mx-auto"
        id="form"
      >
        <Form1 />
        <p
          className="text-sm text-light max-w-3xl text-center mx-auto"
          dangerouslySetInnerHTML={{ __html: landingPageData.banner.benefits }}
        />
      </div>
      <SlidingTitle items={landingPageData.milestones} />
      <Experiences {...landingPageData.experiences} />
      <SlidingTitle items={landingPageData.about} />
      <DestinationWedding {...landingPageData.destinationWedding} />
      <CuratedExcursion {...landingPageData.curatedExcursion} />
      <Gallery images={landingPageData.gallery} />
      <Testimonials {...landingPageData.testimonials} />
    </main>
  );
}
