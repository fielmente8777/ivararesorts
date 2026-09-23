import { SectionWithContainer } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";
import LandingNavbar from "../navbar/LandingNavbar";
import Form1 from "../forms/Form1";

interface VideoBannerProps {
  video: {
    src: string;
    poster: string;
  };
  benefit: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ video, benefit }) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="relative w-full lg:aspect-[16/7.7] aspect-[4/3.7] overflow-hidden"
      containerClassName="relative h-full flex flex-col justify-between"
    >
      <div className="inset-x-0 absolute z-30 top-0 left-0 right-0">
        <LandingNavbar />
      </div>
      <LazyLoadedVideo src={video.src} poster={video.poster} />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 to-black/10 pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 z-20 md:flex items-end pb-10 justify-center hidden">
        <div
          className="bg-background/80 py-6 px-1.5 rounded-[20px] flex flex-col gap-5 max-w-6xl w-full mx-auto"
          id="form"
        >
          <Form1 />
          <p
            className="text-sm text-light max-w-3xl text-center mx-auto"
            dangerouslySetInnerHTML={{ __html: benefit }}
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default VideoBanner;
