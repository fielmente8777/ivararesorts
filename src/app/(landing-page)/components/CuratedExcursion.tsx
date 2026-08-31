import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { JSX } from "react";

interface CuratedExcursionCardItem {
  tagLin?: string;
  icon?: JSX.Element;
  title: string;
  description: string;
  image: string;
}

interface CuratedExcursionProps {
  tag?: string;
  title: string;
  description: string;
  cards: CuratedExcursionCardItem[];
  cta: {
    label: string;
    href: string;
  }[];
}

const CuratedExcursion: React.FC<CuratedExcursionProps> = ({
  tag = "CURATED EXCURSIONS",
  title,
  description,
  cards,
  cta,
}) => {
  return (
    <Section className="bg-[#263725] text-white py-16 lg:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C4A482] mb-2">
                {tag}
              </p>
              <SectionHeading
                title={title}
                titleClassName="text-3xl md:text-5xl font-primary text-white max-w-xl"
              />
            </div>
            <p className="text-sm md:text-base text-[#D4C9BD] max-w-md font-body">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#1F2D1F] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-primary text-xl text-white font-medium">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#B8AE9F] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {cta.map((button, i) => (
              <LinkButton
                key={i}
                href={button.href}
                label={button.label}
                className={`rounded-lg py-3 px-8 uppercase text-xs tracking-widest ${
                  i === 0
                    ? "bg-transparent text-white border-white hover:bg-white hover:text-[#263725]"
                    : "bg-[#C4A482] text-[#263725] border-[#C4A482] hover:bg-[#b08e6c]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CuratedExcursion;
