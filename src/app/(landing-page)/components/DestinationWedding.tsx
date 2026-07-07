import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface DestinationWeddingProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  }[];
  list: string[];
}

const DestinationWedding: React.FC<DestinationWeddingProps> = ({
  tag,
  title,
  description,
  image,
  cta,
  list,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-tertiary">
      <div className=" grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
        <div className="lg:pr-4 space-y-2 text-white">
          <p className=" tracking-widest uppercase">{tag}</p>
          <SectionHeading title={title} titleColor="white" />
          <p>{description}</p>
          <ul className="space-y-2 mt-6">
            {list?.map((item, i) => (
              <li className="flex items-center gap-2 text-primary" key={i}>
                <span className="w-1.5 aspect-square bg-primary"></span> {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap mt-8 lg:gap-4 gap-2 w-full items-center">
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
        <div className="w-full relative aspect-4/3.5 border border-white rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DestinationWedding;
