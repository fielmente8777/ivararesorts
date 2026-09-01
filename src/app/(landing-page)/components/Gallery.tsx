"use client";

import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { contact } from "@/utils/constent";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";

interface GalleryProps {
  images: string[];
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

const ctaButtons = [
  {
    label: "ENQUIRE NOW",
    href: contact.WhatsappCta,
  },
  {
    label: "BOOK NOW",
    href: contact.callCta,
  },
];

const Gallery: React.FC<GalleryProps> = ({ images }) => {
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
        {/* Frame 1707480227 Specs: Max Width 1264px, Gap 40px */}
        <div className="max-w-[1264px] mx-auto flex flex-col items-center gap-[40px] text-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold text-[#8B6E52] mb-2">
              EXPLORE GALLERY
            </p>
            <h2 className="text-[22px] sm:text-3xl md:text-5xl font-primary text-tertiary leading-tight">
              Step inside, Before <br />
              <i className="text-secondary">You Arrive.</i>
            </h2>
          </div>

          {/* Mobile View Only: Swiper Slider with Navigation Buttons */}
          <div className="block md:hidden relative w-full px-2">
            <button
              aria-label="Previous Slide"
              className="gallery-prev absolute -left-2 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="rotate-180 w-8 h-8 drop-shadow-md" />
            </button>

            <SwiperCarousel
              data={images}
              slidesPerView={1}
              spaceBetween={16}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".gallery-next",
                prevEl: ".gallery-prev",
              }}
              renderSlide={(img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] w-full"
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${(idx ?? 0) + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            />

            <button
              aria-label="Next Slide"
              className="gallery-next absolute -right-2 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 cursor-pointer"
            >
              <ArrowSvg className="w-8 h-8 drop-shadow-md" />
            </button>
          </div>

          {/* Desktop View Only: 3-Column Grid (100% UNTOUCHED) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 max-w-[400px] w-full gap-3 sm:gap-4 mt-4 mx-auto">
            {ctaButtons.map((button, index) => (
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
};

export default Gallery;
