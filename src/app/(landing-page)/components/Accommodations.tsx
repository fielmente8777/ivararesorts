"use client";

import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";

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
  const displayCards = cards.length < 6 ? [...cards, ...cards] : cards;

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
        <div className="flex flex-col gap-10">
          {/* Header Row: Title on Left, CTAs centered vertically on Right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold text-[#8B6E52] mb-2">
                {tag}
              </p>
              <SectionHeading
                title={title}
                titleClassName="text-[26px] min-[390px]:text-[28px] sm:text-3xl md:text-5xl font-primary text-tertiary leading-tight whitespace-normal"
              />
            </div>
            {/* Desktop CTAs */}
            <div className="hidden md:grid md:grid-cols-2 max-w-[400px] gap-4">
              {cta.map((button, index) => (
                <LinkButton
                  key={index}
                  href={button.href}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`justify-center
                              rounded-md
                              w-full py-2 px-7 uppercase text-xs tracking-widest ${index === 0
                      ? "bg-white text-[#4A5A3E] border-[#4A5A3E] hover:bg-[#4A5A3E] hover:text-white"
                      : "bg-[#4A5A3E] text-white hover:bg-[#4A5A3E]/60"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="relative w-full">
            {/* Left Arrow Button (50% overlapping image edge) */}
            <button
              aria-label="Previous Slide"
              className="accommodations-prev absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="rotate-180 w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
            </button>

            {/* Swiper Cards Carousel */}
            <SwiperCarousel
              data={displayCards}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              speed={600}
              navigation={{
                nextEl: ".accommodations-next",
                prevEl: ".accommodations-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              renderSlide={(card, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-[352px] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group"
                >
                  <Image
                    src={card.image}
                    alt={card.title || `Accommodation image ${(idx ?? 0) + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            />

            {/* Right Arrow Button (50% overlapping image edge) */}
            <button
              aria-label="Next Slide"
              className="accommodations-next absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="w-9 h-9 md:w-10 md:h-10 drop-shadow-md" />
            </button>
          </div>

          {/* Caption with line break after Privacy */}
          <p
            className="font-primary italic text-center text-[17px] sm:text-xl md:text-[32px] text-[#4A5A3E] max-w-5xl mx-auto leading-snug"
            dangerouslySetInnerHTML={{
              __html: caption.replace(/<br\s*\/?>/gi, "<br class='hidden md:inline' />"),
            }}
          />

          {/* Mobile CTAs: Displayed below images and caption on mobile */}
          <div className="grid grid-cols-2 md:hidden max-w-[400px] w-full gap-3 mt-2 mx-auto">
            {cta.map((button, index) => (
              <LinkButton
                key={index}
                href={button.href}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`justify-center
                              rounded-md
                              w-full py-2.5 px-2 uppercase text-[10px] sm:text-xs tracking-wider ${index === 0
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
