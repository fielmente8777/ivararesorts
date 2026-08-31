"use client";

import React, { useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

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

export default function Accommodations({
  tag,
  title,
  caption,
  cards,
  cta,
}: AccommodationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
                {tag}
              </p>
              <SectionHeading
                title={title}
                titleClassName="text-3xl md:text-5xl font-primary text-primary"
              />
            </div>
            <div className="flex items-center gap-3">
              {cta.map((button, i) => (
                <LinkButton
                  key={i}
                  href={button.href}
                  label={button.label}
                  className={`rounded-lg py-2.5 px-6 uppercase text-xs tracking-widest ${
                    i === 0
                      ? "bg-transparent text-[#263725] border-[#263725] hover:bg-[#263725] hover:text-white"
                      : "bg-[#263725] text-white border-[#263725] hover:bg-[#1a2619]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <IoChevronBack size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#E3D9CD]"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-primary text-lg font-medium">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <IoChevronForward size={20} />
            </button>
          </div>

          <p className="font-primary italic text-center text-lg md:text-xl text-[#756250] max-w-2xl mx-auto">
            {caption}
          </p>
        </div>
      </Container>
    </Section>
  );
}
