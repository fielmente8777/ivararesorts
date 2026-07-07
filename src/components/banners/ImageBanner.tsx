import Image from "next/image";
import LandingNavbar from "../navbar/LandingNavbar";
import { Container, Section } from "../sectionComponants";
import Form1 from "../forms/Form1";

interface ImageBannerProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  benefits: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  image,
  tag,
  description,
  benefits,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full lg:aspect-16/8 aspect-[4/7.2] overflow-hidden"
    >
      <div className="inset-x-0 absolute z-30 ">
        <LandingNavbar />
      </div>
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 z-10 bg-black/60 " />

      <div className="absolute inset-0  z-20 flex items-end pb-10 justify-center">
        <Container>
          <div className="flex flex-col gap-6 max-md:gap-30">
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-white w-fit uppercase tracking-widest">
                {tag}
              </p>
              <h1
                className="font-primary text-3xl md:text-6xl/tight text-white lg:max-w-6xl"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="text-[#FAF6F2A6] max-w-3xl mt-4">{description}</p>
            </div>
            <div
              className="bg-white/5 border max-lg:hidden border-white/10 backdrop-blur-xs py-6 px-1.5 rounded-[20px] mt-8 flex flex-col gap-5"
              id="form"
            >
              <Form1 />
              <p
                className="text-sm text-white tracking-widest text-center"
                dangerouslySetInnerHTML={{ __html: benefits }}
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ImageBanner;
