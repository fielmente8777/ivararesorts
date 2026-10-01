import { Section } from "@/components/sectionComponants";

interface BannerSectionProps {
  image: string;
}

const BannerSection = ({ image }: BannerSectionProps) => {
  return (
    <Section defaultPadding={false}>
      <div
        className="w-full min-h-[460px] sm:min-h-[580px] lg:min-h-[680px] bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center 30%",
        }}
      />
    </Section>
  );
};

export default BannerSection;
