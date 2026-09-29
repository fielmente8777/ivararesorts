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
    <div className="w-full">
      {cards.map((card, index) => (
        <CardsComponent key={index} {...card} />
      ))}
    </div>
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
    <div className="w-full">
      {/* 1. Private Cottages & Slider Section with Theme Background */}
      <div className="bg-background py-12 md:py-16 md:space-y-14 space-y-10">
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
      </div>

      {/* 2. Amenities Section with Clean White Background */}
      {amenities && (
        <SectionWithContainer sectionClassName="!py-10 md:!py-16 bg-white">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-14 w-full max-w-7xl mx-auto px-2 sm:px-0">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col text-white w-[calc(50%-6px)] sm:w-44 lg:w-50 text-center items-center justify-center gap-3 sm:gap-4 lg:gap-6 bg-secondary px-3 py-4 sm:px-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-sm"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 relative flex items-center justify-center">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm lg:text-xl font-medium leading-snug">
                  {amenity.title}
                </p>
              </div>
            ))}
          </div>
        </SectionWithContainer>
      )}
    </div>
  );
};
