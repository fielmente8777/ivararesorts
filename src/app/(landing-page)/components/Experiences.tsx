import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface ExperienceCard {
  image: string;
  title: string;
  description: string;
}

interface ExperiencesProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  }[];
  cards: ExperienceCard[];
}

const badgeLabels = ["GOLF", "CURATED DINING", "POOL"];

const Experiences: React.FC<ExperiencesProps> = ({
  tagline,
  title,
  cards,
  cta,
}) => {
  return (
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
              {tagline}
            </p>
            <SectionHeading
              title={title}
              titleClassName="text-3xl md:text-5xl font-primary text-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[#E3D9CD] group"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 inset-x-6 text-center text-white">
                  <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] tracking-widest uppercase py-1 px-3 rounded-full mb-2">
                    {badgeLabels[idx] || "EXPERIENCE"}
                  </span>
                  <h3 className="font-primary text-xl font-medium">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[400px] gap-4 mt-4">
            {cta.map((button, index) => (
              <LinkButton
                key={index}
                href={button.href}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`justify-center
                              rounded-md
                              w-full! py-2 px-7 uppercase text-xs tracking-widest ${
                                index === 0
                                  ? "bg-white text-[#4A5A3E] border-[#4A5A3E] hover:bg-[#4A5A3E] hover:text-white"
                                  : "bg-[#4A5A3E] text-white hover:bg-[#4A5A3E]/60"
                              }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experiences;
