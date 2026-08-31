import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
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
    <Section className="bg-[#4A5A3E] text-white py-20 px-6 md:px-14">
      <Container>
        {/* Frame 1707480098 Specs: Max Width 1320px, Gap 56px */}
        <div className="max-w-[1320px] mx-auto flex flex-col gap-[56px]">
          {/* Header Row: Title Left, Description Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C4A482] mb-2">
                {tag}
              </p>
              <h2
                className="text-3xl md:text-5xl font-primary text-white leading-tight max-w-xl"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <p
              className="text-sm md:text-base text-[#E4DDD1] max-w-md font-body leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* 3 Excursion Cards (Light Cream #FAF7F1 Background inside Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F1] text-[#1F2523] rounded-[8px] overflow-hidden flex flex-col shadow-xl group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2.5 bg-[#FAF7F1] flex-1">
                  <h3 className="font-primary text-xl text-[#1F2523] font-medium">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#55524E] leading-relaxed font-body">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs at Bottom */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {cta.map((button, i) => (
              <LinkButton
                key={i}
                href={button.href}
                label={button.label}
                whatsAppIcon={i === 0}
                calendarIcon={i === 1}
                className={`rounded-lg py-3 px-8 uppercase text-xs tracking-widest ${
                  i === 0
                    ? "bg-white text-[#4A5A3E] border-white hover:bg-white/90"
                    : "bg-transparent text-white border border-white hover:bg-white/10"
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
