import { CuratedExcursionProps } from "@/@types/landingPageTypes";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import CuratedExcursionCard from "./cards/CuratedExcursionCard";



const CuratedExcursion: React.FC<CuratedExcursionProps> = ({
  tag,
  title,
  description,
  cards,
  cta,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-14" sectionClassName="bg-image">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-8 items-end">
        <div className="">
          <p className="uppercase tracking-widest text-sm text-secondary">{tag}</p>
          <SectionHeading title={title} wrapperClassName="max-w-md w-full" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-tertiary/70 lg:text-lg">{description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {cards.map((card, i) => (
          <CuratedExcursionCard {...card} key={i} />
        ))}
      </div>
      <ul className="flex flex-wrap lg:gap-4 lg:justify-center gap-2 w-full items-center">
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
    </SectionWithContainer>
  );
};

export default CuratedExcursion;
