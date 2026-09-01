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
  images?: string[];
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
        className={`w-full relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${index === active ? "md:aspect-[4/5.5]" : "md:aspect-[4/5.1] md:mt-5"
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

const ExperienceSlider: React.FC<{ cards: ExperienceCardProps[] }> = ({
  cards,
}) => {
  const displayCards = cards.length < 5 ? [...cards, ...cards] : cards;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      {/* Left Arrow Button (overlapping left side of slider) */}
      <button
        className="experience-prev absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
        aria-label="Previous Experience"
      >
        <ArrowSvg className="rotate-180 w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
      </button>

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

      {/* Right Arrow Button (overlapping right side of slider) */}
      <button
        className="experience-next absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
        aria-label="Next Experience"
      >
        <ArrowSvg className="w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
      </button>
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
    <Section className="relative bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA] overflow-hidden">
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
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold text-[#8B6E52] mb-2">
              {tagline}
            </p>
            <SectionHeading
              title={title}
              titleClassName="text-[22px] sm:text-3xl md:text-5xl font-primary text-tertiary leading-tight whitespace-normal"
            />
          </div>

          {/* Swiper Slider Section */}
          <ExperienceSlider cards={cards} />

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
                              w-full py-2.5 px-2 sm:px-4 uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest ${index === 0
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
