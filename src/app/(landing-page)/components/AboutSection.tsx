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
            <p className="font-primary italic text-xl md:text-[32px] text-[#CA9D4C] mt-2">
              {subtitle}
            </p>
          )}

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
}
