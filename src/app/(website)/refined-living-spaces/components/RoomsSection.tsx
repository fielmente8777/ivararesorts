import LinkButton from "@/components/buttons/LinkButton";
import {
  Container,
  Section,
  SectionWithContainer,
} from "@/components/sectionComponants";
import ImageSlider2 from "@/components/sliders/ImageSlider2";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

export interface RoomsSectionProps {
  cards: {
    title: string;
    subtitle: string;
    description: string[];
    images: string[];
    // slidingText: string[];
    buttons: {
      label: string;
      href: string;
    }[];
    amenities?: {
      title: string;
      image: string;
    }[];
  }[];
}
const RoomsSection = ({ cards }: RoomsSectionProps) => {
  return (
    <Section className=" md:space-y-20 space-y-14 bg-right bg-w-small bg-color">
      {cards.map((card, index) => (
        <CardsComponent key={index} {...card} />
      ))}
    </Section>
  );
};

export default RoomsSection;

export const CardsComponent: React.FC<RoomsSectionProps["cards"][0]> = ({
  title,
  subtitle,
  description,
  images,
  buttons,
  amenities,
}) => {
  return (
    <div className="md:space-y-14 space-y-10 ">
      <Container className="text-center space-y-6">
        <p className="text-lg text-primary text-center">{subtitle}</p>
        <SectionHeading title={title} textCenter />
      </Container>
      <ImageSlider2 images={images} title={title} />
      {/* <SlidingTitle items={slidingText} /> */}
      <Container className="flex flex-col gap-2 text-center max-w-6xl!">
        {description.map((text, index) => (
          <p key={index} className=" md:text-lg ">
            {text}
          </p>
        ))}
        {/* BUTTONS */}
        <div className="flex max-md:flex-col justify-center md:gap-4 gap-3 items-center mt-6">
          {buttons.map((button, index) => (
            <LinkButton
              key={index}
              {...button}
              target="_blank"
              rel="noopener noreferrer"
              arrowIcon={index !== 0 && true}
              whatsAppIcon={index === 0 && true}
              className={`rounded-sm justify-center max-md:w-full gap-2! uppercase tracking-widest ${index === 0 ? "text-white bg-primary max-md:text-sm border-primary" : "text-primary bg-transparent border border-primary"}`}
            />
          ))}
        </div>
      </Container>
      {amenities && (
        <SectionWithContainer sectionClassName="">
          <div className="flex flex-wrap justify-center lg:gap-14 gap-8 w-full max-w-7xl mx-auto">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col text-white w-50 text-center items-center gap-6 bg-secondary px-4 py-6 rounded-2xl"
              >
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  width={48}
                  height={48}
                />
                <p className="lg:text-xl">{amenity.title}</p>
              </div>
            ))}
          </div>
        </SectionWithContainer>
      )}
    </div>
  );
};
