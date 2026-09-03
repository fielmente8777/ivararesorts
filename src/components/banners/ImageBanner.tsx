"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form1 from "../forms/Form1";
import { contact } from "@/utils/constent";
import { CalendarIcon } from "@/utils/formIcons";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";

interface ImageBannerProps {
  tag: string;
  title: string;
  description?: string;
  images: string[];
  benefits: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  images,
  tag,
  benefits,
}) => {

  return (
    <div className="w-full flex flex-col">
      {/* 1. Header Bar (Figma Specs: Height 144px, Light Cream Background #FAF6F2) */}
      <header className="w-full bg-[#FAF6F2] py-4 px-6 md:px-14 flex items-center justify-between border-b border-[#E8E0D5] z-30 min-h-[80px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 md:w-36 h-12">
            <Image
              src="/logo.png"
              alt="IVARA Resorts"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <Link
          href={contact.callCta}
          className="bg-[#4A5A3E] hover:bg-[#3d4b33] text-white px-6 py-3 rounded-md font-semibold text-xs tracking-widest uppercase flex items-center gap-2 transition-all shadow-sm"
        >
          <CalendarIcon />
          <span>BOOK NOW</span>
        </Link>
      </header>

      <div className="relative w-full overflow-hidden">
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
          loop={true}
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
            </div>
          )}
        />
        {/* <div className="absolute inset-0 bg-black/35" /> */}

        {/* Hero Title & Arrows Bar (Mobile: Prominent text, clean spacing, 28px buttons | Desktop: 100% Original) */}
        <div className="absolute bottom-5 sm:bottom-8 md:bottom-12 inset-x-0 z-20 px-4 sm:px-6 md:px-14">
          <div className="max-w-[1320px] mx-auto flex items-end justify-between gap-2 sm:gap-4 md:gap-6">
            {/* Left Title Box (Increased font sizes & vertical gap on mobile) */}
            <div className="flex flex-col items-start text-left gap-2 sm:gap-3 max-w-[calc(100%-70px)] sm:max-w-3xl">
              <div className="w-fit max-w-full rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[8.5px] min-[340px]:text-[9.5px] min-[380px]:text-[10.5px] sm:text-[11px] md:text-xs text-white/90 uppercase tracking-normal min-[360px]:tracking-wider md:tracking-[0.2em] font-medium leading-none whitespace-nowrap overflow-hidden">
                {tag}
              </div>
              <h1 className="flex flex-col max-w-full">
                <span className="font-fraunces text-xl min-[360px]:text-2xl min-[440px]:text-3xl sm:text-3xl md:text-5xl lg:text-[56px] font-bold leading-tight sm:leading-snug lg:leading-[64px] tracking-normal text-white drop-shadow-md whitespace-nowrap">
                  Luxury Resort in
                </span>
                <span className="font-fraunces font-light text-base min-[360px]:text-lg min-[440px]:text-xl sm:text-3xl md:text-5xl lg:text-[56px] leading-tight sm:leading-snug lg:leading-[64px] tracking-normal text-white drop-shadow-md whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap">
                  <i className="italic">Khajuraho</i>, Anchored in Heritage
                </span>
              </h1>
            </div>

            {/* Right Navigation Arrows (Compact 22px buttons on bottom-right of mobile image) */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 z-30 pb-0.5">
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
          </div>
        </div>
      </div>

      {/* 3. Form Section (Figma Specs: Color #4A5A3E, Width 1440px, Height 120px) */}
      <div
        className="hidden lg:block w-full bg-[#4A5A3E] py-6 px-4 md:px-14 text-white border-t border-[#5b6e4d]"
        id="form"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col gap-3">
          <Form1
            buttonText="Book Now"
            buttonBgClass="bg-[#B88B4A] hover:bg-[#a67c3f] text-white"
            showCalendarIcon={true}
          />
          <p className="text-xs text-[#D8C2A5] text-center tracking-wide font-normal mt-1">
            {benefits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
