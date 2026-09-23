import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  quote?: string;
  cta: {
    label: string;
    href: string;
  };
}

interface ExperiencesSectionProps {
  items: ExperienceItem[];
}

const ExperiencesSection = ({ items }: ExperiencesSectionProps) => {
  return (
    <Section>
      <Container>
        <div className="md:space-y-24 space-y-12">
          {items.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:first-child]:text-right " : ""
                }`}
                id={item.title.toLowerCase().replace(/\s+/g, "-")}
              >
                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-secondary md:text-4xl text-2xl font-primary" dangerouslySetInnerHTML={{__html:item.title}}/>
                    
                  <div className="w-full relative aspect-4/3 lg:hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                  <p className="text-lg text-primary">{item.subtitle}</p>

                  {item.quote && (
                    <blockquote className="italic text-gray-600 mb-4">
                      {item.quote}
                    </blockquote>
                  )}

                  <div className="space-y-4">
                    {item.description &&
                      item.description.map((item, index) => (
                        <p key={index} className="text-gray-600 lg:text-lg">
                          {item}
                        </p>
                      ))}
                    <LinkButton
                      label={item.cta.label}
                      href={item.cta.href}
                      className={`bg-primary text-white capitalize font-primary ${reverse ? "lg:ml-auto" : ""}`}
                      arrowIcon={false}
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="w-full relative aspect-4/3 lg:block hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ExperiencesSection;
