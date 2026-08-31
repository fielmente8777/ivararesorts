"use client";

import React, { useState } from "react";
import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

export interface ExperienceCardProps {
  image: string;
  title: string;
  description?: string;
}

export interface ExperiencesProps {
  tagline: string;
  title: string;
  description?: string;
  image?: string;
  cards: ExperienceCardProps[];
  cta: {
    label: string;
    href: string;
  }[];
}

const ExperienceCardItem: React.FC<
  ExperienceCardProps & { active: number; index: number }
> = ({ image, title, index, active }) => {
  return (
    <div>
      <div
        className={`w-full relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
          index === active ? "md:aspect-[4/5.5]" : "md:aspect-[4/5.1] md:mt-5"
        }`}
      >
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute z-10 inset-2 border border-white rounded-lg pointer-events-none" />
        <div className="absolute bottom-2 inset-x-2 py-1.5 px-4 bg-black/50 rounded-b-lg z-20">
          <p className="text-center capitalize text-white md:text-lg text-nowrap font-medium">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSlider: React.FC<{ cards: ExperienceCardProps[] }> = ({
  cards,
}) => {
  const displayCards = cards.length < 5 ? [...cards, ...cards] : cards;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="relative md:aspect-[4/1.78] w-full">
        <SwiperCarousel
          data={displayCards}
          slidesPerView={1}
          spaceBetween={20}
          loop
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".experience-next",
            prevEl: ".experience-prev",
          }}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          swiperSlideClassName=""
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          renderSlide={(card, index) => (
            <ExperienceCardItem
              {...card}
              active={activeIndex}
              index={index || 0}
            />
          )}
        />
      </div>

      {/* Navigation Arrow Buttons Below Slider */}
      <div className="flex items-center justify-center gap-4 text-[#263725]">
        <button
          className="experience-prev text-2xl p-2 rounded-full border border-[#263725]/20 hover:bg-[#263725] hover:text-white transition-all cursor-pointer"
          aria-label="Previous Experience"
        >
          <GoArrowLeft />
        </button>
        <button
          className="experience-next text-2xl p-2 rounded-full border border-[#263725]/20 hover:bg-[#263725] hover:text-white transition-all cursor-pointer"
          aria-label="Next Experience"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

const Experiences: React.FC<ExperiencesProps> = ({
  tagline,
  title,
  cards,
  cta,
}) => {
  return (
    <Section className="bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA]">
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

          {/* Swiper Slider Section */}
          <ExperienceSlider cards={cards} />

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
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
};

export default Experiences;
