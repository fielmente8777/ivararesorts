import { Section } from "@/components/sectionComponants";

interface BannerSectionProps {
  image: string;
}

const BannerSection = ({ image }: BannerSectionProps) => {
  return (
    <Section defaultPadding={false}>
      <div
        className="w-full aspect-video lg:aspect-16/7 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </Section>
  );
};

export default BannerSection;
