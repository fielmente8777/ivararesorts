"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import { SectionWithContainer, Container } from "../sectionComponants";
import WebsiteNav from "../navbar/WebsiteNav";
import { CalendarIcon } from "@/utils/formIcons";
import { useWebContext } from "@/context-api/WebContext";

interface ImageBannerProps {
  tag?: string;
  title?: string;
  description?: string;
  images: string[];
  benefits?: string;
  showForm?: boolean;
  centeredTitle?: boolean;
  showText?: boolean;
  isLandingPage?: boolean;
}

const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  images,
  tag,
  benefits = "",
  showForm = true,
  centeredTitle = false,
  showText = true,
  isLandingPage = false,
}) => {
  const { setIsOpenFormPopUp } = useWebContext();

  return (
    <div className="w-full flex flex-col relative">
      {isLandingPage ? (
        <header className="w-full bg-[#FAF6F2] py-4 px-6 md:px-16 flex items-center justify-between border-b border-[#E8E0D5] z-30">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-12">
              <Image
                src="/logo.png"
                alt="IVARA Resorts Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setIsOpenFormPopUp(true)}
            type="button"
            className="flex items-center uppercase gap-2 rounded-lg bg-secondary text-white px-4 md:px-6 py-2 md:py-2.5 tracking-wider text-xs md:text-sm font-medium hover:bg-secondary/90 transition-all shadow-md cursor-pointer active:scale-95"
          >
            <CalendarIcon />
            <span>BOOK NOW</span>
          </button>
        </header>
      ) : (
        <div className="inset-x-0 absolute z-30 top-0">
          <WebsiteNav />
        </div>
      )}

      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="relative w-full overflow-hidden"
        containerClassName="!p-0 !max-w-none relative"
      >
        {images.length <= 1 ? (
          <div className="relative w-full h-[380px] min-[400px]:h-[420px] sm:h-[550px] md:h-[700px] lg:h-[800px]">
            <Image
              src={images[0] || "/landing-page/Weddings.png"}
              alt="ivara"
              fill
              priority
              className="object-cover"
            />
            {centeredTitle && (
              <div className="absolute inset-0 bg-black/35" />
            )}
          </div>
        ) : (
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".image-banner-next",
              prevEl: ".image-banner-prev",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={images.length > 1}
            speed={800}
            renderSlide={(image) => (
              <div className="relative w-full h-[380px] min-[400px]:h-[420px] sm:h-[550px] md:h-[700px] lg:h-[800px]">
                <Image
                  src={image}
                  alt="ivara"
                  fill
                  priority
                  className="object-cover"
                />
                {centeredTitle && (
                  <div className="absolute inset-0 bg-black/35" />
                )}
              </div>
            )}
          />
        )}

        {/* Hero Title: Centered Mode, Bottom-Left Mode, or Hidden */}
        {showText && (
          centeredTitle ? (
            <div className="absolute inset-0 z-20 flex items-center justify-center px-4 pointer-events-none">
              <h1 className="pointer-events-auto select-text cursor-text font-fraunces text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl font-bold tracking-normal text-white drop-shadow-md text-center">
                {title || "Contact Us"}
              </h1>
            </div>
          ) : (
            <div className="absolute bottom-5 sm:bottom-8 md:bottom-12 inset-x-0 z-20 px-4 sm:px-6 md:px-14">
              <div className="max-w-[1320px] mx-auto flex items-end justify-between gap-2 sm:gap-4 md:gap-6">
                {/* Left Title Box */}
                <div className="flex flex-col items-start text-left gap-2 sm:gap-3 max-w-full sm:max-w-3xl">
                  {tag && (
                    <div className="w-fit max-w-full rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[8.5px] min-[340px]:text-[9.5px] min-[380px]:text-[10.5px] sm:text-[11px] md:text-xs text-white/90 uppercase tracking-normal min-[360px]:tracking-wider md:tracking-[0.2em] font-medium leading-none whitespace-nowrap overflow-hidden">
                      {tag}
                    </div>
                  )}
                  <h1 className="flex flex-col max-w-full">
                    <span className="font-fraunces text-xl min-[360px]:text-2xl min-[440px]:text-3xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight sm:leading-snug lg:leading-[64px] tracking-normal text-white drop-shadow-md whitespace-nowrap">
                      Luxury Resort in
                    </span>
                    <span className="font-fraunces font-light text-base min-[360px]:text-lg min-[440px]:text-xl sm:text-3xl md:text-5xl lg:text-[56px] leading-tight sm:leading-snug lg:leading-[64px] tracking-normal text-white drop-shadow-md whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap">
                      <i className="italic !text-white" style={{ color: '#ffffff' }}>Khajuraho</i>, Anchored in Heritage
                    </span>
                  </h1>
                </div>

                {/* Right Navigation Arrows (Hidden on Mobile, Visible on Desktop) */}
                {images.length > 1 && (
                  <div className="hidden md:flex items-center gap-1 sm:gap-2 flex-shrink-0 z-30 pb-0.5">
                    <button
                      className="image-banner-prev w-[22px] h-[22px] sm:w-[40px] sm:h-[40px] rounded-full bg-white text-[#1F2523] shadow-md flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all cursor-pointer flex-shrink-0"
                      aria-label="Previous Slide"
                    >
                      <GoArrowLeft className="w-3 h-3 sm:w-5 sm:h-5 stroke-[0.5]" />
                    </button>
                    <button
                      className="image-banner-next w-[22px] h-[22px] sm:w-[40px] sm:h-[40px] rounded-full bg-white text-[#1F2523] shadow-md flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all cursor-pointer flex-shrink-0"
                      aria-label="Next Slide"
                    >
                      <GoArrowRight className="w-3 h-3 sm:w-5 sm:h-5 stroke-[0.5]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </SectionWithContainer>
    </div>
  );
};

export default ImageBanner;
