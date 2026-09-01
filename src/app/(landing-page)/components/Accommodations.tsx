"use client";

import React, { useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface CardItem {
  image: string;
  title: string;
}

interface AccommodationsProps {
  tag: string;
  title: string;
  caption: string;
  cards: CardItem[];
  cta: {
    label: string;
    href: string;
  }[];
}

const ArrowSvg = ({ className = "" }: { className?: string }) => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 19.5C2 22.9612 3.02636 26.3446 4.94928 29.2225C6.87221 32.1003 9.60533 34.3434 12.803 35.6679C16.0007 36.9924 19.5194 37.339 22.9141 36.6637C26.3087 35.9885 29.4269 34.3218 31.8744 31.8744C34.3218 29.4269 35.9885 26.3087 36.6637 22.9141C37.339 19.5194 36.9924 16.0007 35.6679 12.803C34.3434 9.60533 32.1003 6.87221 29.2225 4.94928C26.3446 3.02636 22.9612 2 19.5 2C14.8587 2 10.4075 3.84374 7.12563 7.12563C3.84374 10.4075 2 14.8587 2 19.5ZM9.5 18.25H24.6875L17.7125 11.2412L19.5 9.5L29.5 19.5L19.5 29.5L17.7125 27.7162L24.6875 20.75H9.5V18.25Z"
      fill="#4A5A3E"
    />
  </svg>
);

export default function Accommodations({
  tag,
  title,
  caption,
  cards,
  cta,
}: AccommodationsProps) {
  const [cardList, setCardList] = useState<CardItem[]>(cards);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCardList((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCardList((prev) => {
      if (prev.length <= 1) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Section className="bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col gap-10">
          {/* Header Row: Title on Left, CTAs centered vertically on Right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
                {tag}
              </p>
              <SectionHeading
                title={title}
                titleClassName="text-3xl md:text-5xl font-primary text-primary"
              />
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

          <div className="relative">
            {/* Left Arrow Button (50% overlapping image edge) */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="rotate-180 w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
            </button>

            {/* Image Cards Grid (Renders 3 visible sliding cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
              {cardList.slice(0, 3).map((card, idx) => (
                <div
                  key={`${card.image}-${idx}`}
                  className="relative w-full h-[352px] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group transition-all duration-300 animate-fadeIn"
                >
                  <Image
                    src={card.image}
                    alt={card.title || `Accommodation image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow Button (50% overlapping image edge) */}
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
            </button>
          </div>

          {/* Caption with line break after Privacy */}
          <p
            className="font-primary italic text-center text-lg md:text-xl text-[#756250] max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: caption }}
          />
        </div>
      </Container>
    </Section>
  );
}
