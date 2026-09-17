import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface GettingHereSectionProps {
  title: string;
  options: {
    title: string;
    img: string;
    description: string;
  }[];
}

const GettingHereSection: React.FC<GettingHereSectionProps> = ({
  title,
  options,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-image bg-left-bottom bg-w-small">
      <div className="md:space-y-14 space-y-10">
        <SectionHeading title={title} textCenter titleClassName="capitalize" />
        <div className="flex flex-wrap justify-center lg:justify-between gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 w-70 bg-secondary rounded-2xl lg:rounded-4xl shadow-xl p-6"
            >
              <div className="w-20 aspect-square relative">
                <Image
                  src={option.img}
                  alt={option.title}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-white md:text-[28px] text-2xl text-center font-primary">
                  {option.title}
                </h3>
                <p className="text-white text-center">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GettingHereSection;
