import { ExperiencesProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import ExperiencesSlider from "./slider/ExperiencesSlider";

const Experiences: React.FC<ExperiencesProps> = ({
  tagline,
  title,
  description,
  cta,
  cards,
  image,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-background">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex flex-col gap-4">
          <p className="uppercase tracking-widest text-tertiary">{tagline}</p>
          <SectionHeading title={title} />
          <ul className="lg:flex hidden flex-wrap lg:gap-4 gap-2 w-full items-center">
            {cta.map((button, i) => (
              <li key={i} className="max-md:w-full">
                <LinkButton
                  {...button}
                  target={i !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={` max-md:w-full justify-center rounded-lg py-3 px-6! uppercase ${
                    i === 0
                      ? "text-white bg-primary border-primary"
                      : "text-primary"
                  }`}
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                />
              </li>
            ))}
          </ul>
          <div className="w-[179px] relative mt-auto aspect-4/3.25">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p>{description}</p>
          <div className="w-full h-px bg-background-2" />
          <ExperiencesSlider cards={cards} />

          <ul className="lg:hidden flex  flex-wrap lg:gap-4 gap-2 w-full items-center">
            {cta.map((button, i) => (
              <li key={i} className="max-md:w-full">
                <LinkButton
                  {...button}
                  target={i !== 2 ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={` max-md:w-full justify-center rounded-lg py-3 px-6! uppercase ${
                    i === 0
                      ? "text-white bg-primary border-primary"
                      : "text-primary"
                  }`}
                  whatsAppIcon={i === 1}
                  callIcon={i === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Experiences;
