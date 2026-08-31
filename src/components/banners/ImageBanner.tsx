"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Form1 from "../forms/Form1";
import { contact } from "@/utils/constent";
import { CalendarIcon } from "@/utils/formIcons";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ImageBannerProps {
  tag: string;
  title: string;
  description?: string;
  image: string;
  benefits: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({
  title,
  image = "/landing-page/banner.png",
  tag,
  benefits,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

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

      {/* 2. Hero Canvas (Full-bleed Edge-to-Edge) */}
      <div className="relative w-full h-[550px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <Image
          src={image}
          alt="Luxury Resort in Khajuraho"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        {/* Hero Title & Arrows Bar (Frame 1707480219 layout - space-between) */}
        <div className="absolute bottom-12 inset-x-0 z-20 px-6 md:px-14">
          <div className="max-w-[1320px] mx-auto flex items-end justify-between gap-6">
            {/* Left Title Box */}
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit bg-black/35 backdrop-blur-sm border border-white/20 px-3 py-1 rounded text-[11px] md:text-xs text-white/90 uppercase tracking-[0.2em] font-medium">
                {tag}
              </div>
              <h1 className="font-primary text-3xl md:text-5xl lg:text-6xl/tight text-white font-normal drop-shadow-md">
                Luxury Resort in <br />
                <i className="font-serif italic font-normal text-[#F5EBE1]">
                  Khajuraho, Anchored in Heritage
                </i>
              </h1>
            </div>

            {/* Right Navigation Arrows (< >) */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#4A5A3E] flex items-center justify-center transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <IoChevronBack size={20} />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev === 1 ? 0 : 1))}
                className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#4A5A3E] flex items-center justify-center transition-all shadow-md"
                aria-label="Next Slide"
              >
                <IoChevronForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Form Section (Figma Specs: Color #4A5A3E, Width 1440px, Height 120px) */}
      <div className="w-full bg-[#4A5A3E] py-6 px-4 md:px-14 text-white border-t border-[#5b6e4d]" id="form">
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
