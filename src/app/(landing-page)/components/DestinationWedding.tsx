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
    <SectionWithContainer sectionClassName="bg-tertiary relative">
      <div className="absolute top-0 left-0 z-10">
        <div className="md:w-20 w-12 aspect-square relative">
          <Image src={"/bg-2.png"} alt="bg-image" fill className="object-cover" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <div className="md:w-15 w-8 aspect-4/4.5 relative">
          <Image src={"/bg-1.png"} alt="bg-image" fill className="object-cover" />
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
        <div className="lg:pr-4 space-y-2 text-white">
          <p className=" tracking-widest uppercase">{tag}</p>
          <SectionHeading title={title} titleColor="white" />
          <div className="w-full relative aspect-4/3.5 lg:hidden border border-white rounded-lg overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
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
        <div className="w-full relative aspect-4/3.5 lg:block hidden border border-white rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default DestinationWedding;
