import React from "react";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface AboutSectionProps {
  tag: string;
  title: string;
  paragraphs: string[];
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  }[];
}

export default function AboutSection({
  tag,
  title,
  paragraphs,
  subtitle,
  cta,
}: AboutSectionProps) {
  return (
    <Section className="bg-[#FAF7F1] py-16 lg:py-24 text-center border-t border-[#EAE3DA]">
      <Container>
        {/* Frame 1707480220: Width 948px, Vertical Flow, Gap 24px */}
        <div className="max-w-[948px] mx-auto flex flex-col items-center gap-[24px]">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52]">
            {tag}
          </p>
          <SectionHeading
            title={title}
            titleClassName="text-3xl md:text-5xl font-primary text-primary"
          />
          <div className="flex flex-col gap-4 text-base md:text-lg text-[#55524E] font-body leading-relaxed max-w-[948px]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {subtitle && (
            <p className="font-primary italic text-xl md:text-2xl text-[#8B6E52]">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            {cta.map((button, i) => (
              <LinkButton
                key={i}
                href={button.href}
                label={button.label}
                className={`rounded-lg py-3 px-8 uppercase text-xs tracking-widest ${
                  i === 0
                    ? "bg-transparent text-[#263725] border-[#263725] hover:bg-[#263725] hover:text-white"
                    : "bg-[#263725] text-white border-[#263725] hover:bg-[#1a2619]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
