import React from "react";
import Image from "next/image";
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
    <Section className="relative bg-[#FAF7F1] py-16 lg:py-24 text-center border-t border-[#EAE3DA] overflow-hidden">
      {/* Background Mask Overlay */}
      <div
        className="absolute top-0 left-0 right-0 w-full h-[180px] pointer-events-none opacity-15 z-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Image
          src="/maske-image.png"
          alt="Mask Overlay"
          fill
          className="object-cover -rotate-180"
        />
      </div>
      <Container className="relative z-10">
        {/* Frame 1707480220: Width 948px, Vertical Flow, Gap 24px */}
        <div className="max-w-[948px] mx-auto flex flex-col items-center gap-[24px]">
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold text-[#8B6E52]">
            {tag}
          </p>
          <SectionHeading
            title={title}
            titleClassName="text-[26px] min-[390px]:text-[28px] sm:text-3xl md:text-5xl font-primary text-tertiary leading-tight whitespace-normal"
          />
          <div className="flex flex-col gap-4 text-[15px] md:text-lg text-[#55524E] font-body leading-relaxed max-w-[948px]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {subtitle && (
            <p className="font-primary italic text-[17px] sm:text-xl md:text-[32px] text-[#CA9D4C] mt-2">
              {subtitle}
            </p>
          )}

          <div className="grid grid-cols-2 max-w-[400px] w-full gap-3 sm:gap-4 mt-4 mx-auto">
            {cta.map((button, index) => (
              <LinkButton
                key={index}
                href={button.href}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`justify-center
                              rounded-md
                              w-full py-2.5 px-2 sm:px-4 uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest ${
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
