import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";
import { SectionHeading } from "../typography";

interface ExperienceSectionProps {
  title: string;
  items: {
    title: string;
    image: string;
  }[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  items,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-image bg-right-bottom bg-w-small bg-color">
      <SectionHeading title={title} textCenter />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center mt-6 md:mt-12 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-full aspect-4/4.5 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
            <p className="text-secondary text-xl font-medium font-primary capitalize text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default ExperienceSection;
