import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface IntroSectionProps {
  title: string;
  subTitle: string;
  description: string;
}

const IntroSection = ({ title, subTitle, description }: IntroSectionProps) => {
  return (
    <Section className="space-y-6 text-center" defaultPadding={false}>
      <div className="bg-secondary p-8">
        <div className="max-w-85 w-full mx-auto">
          <h1 className="md:text-4xl/snug text-white text-2xl">{title}</h1>
        </div>
      </div>
      <SectionWithContainer>
        <div className="space-y-6">
          <h2 className="md:text-3xl text-xl text-center text-primary">{subTitle}</h2>
          <p className="text-center lg:text-lg text-gray-600">{description}</p>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default IntroSection;
