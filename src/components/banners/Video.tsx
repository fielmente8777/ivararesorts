import { Container, Section } from "@/components/sectionComponants";
import { LazyLoadedVideo } from "@/components/Video";
import LandingNavbar from "../navbar/LandingNavbar";
import Form1 from "../forms/Form1";
import NewNav from "../navbar/NewNav";
import WebsiteNav from "../navbar/WebsiteNav";

// interface VideoProps {
//   video: {
//     src: string;
//     poster: string;
//   };
//   benefit?: string;
// }
interface VideoProps {
  title: string;
  video: string;
  videoPoster: string;
  benefit?: string;
}

const Video: React.FC<VideoProps> = ({
  title,
  video,
  videoPoster,
  benefit,
}) => {  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-[16/7.7] aspect-[4/3.7] overflow-hidden"
    >
      <div className="inset-x-0 absolute z-30 ">
        <WebsiteNav />
      </div>
      <LazyLoadedVideo src={video} poster={videoPoster} />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80  to-black/10" />

      <div className="absolute inset-0  z-20 md:flex items-end pb-10 justify-center  hidden">
        <Container>
          <div
            className="bg-background/80 py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5 max-w-6xl w-full mx-auto"
            id="form"
          >
            {/* <Form1 /> */}
            <p className="text-sm text-light max-w-3xl text-center mx-auto">
              {benefit}
            </p>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Video;
