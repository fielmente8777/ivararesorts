"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { contact, countries } from "@/utils/constent";
import {
  UserIcon,
  CallIcon,
  MailIcon,
  CalendarIcon,
  BookingCalenderIcon,
} from "@/utils/formIcons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuickForm } from "@/hooks/useQuickForm.ts";
import { IoIosArrowDown } from "react-icons/io";

interface HeroBannerProps {
  tag: string;
  title: string;
  image: string;
  benefits: string;
}

export default function HeroBanner({
  tag,
  title,
  image,
  benefits,
}: HeroBannerProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [countryCode, setCountryCode] = useState("+91");


  const {
    formData,
    errors,
    dateRange,
    isSubmitting,
    handleInputChange,
    handleDateChange,
    handleSubmit,
  } = useQuickForm({
    createdFrom: "new-lp-hero",
    onSubmitSuccess: () => {
      window.open("/thank-you", "_blank");
    },
  });

  const { startDate, endDate } = dateRange;

  return (
    <div className="w-full relative flex flex-col">
      {/* 1. Header Bar (Figma Specs: Logo Left, Book Now Button Right) */}
      <header className="w-full bg-[#FAF6F2] py-4 px-6 md:px-16 flex items-center justify-between border-b border-[#E8E0D5]">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 h-12">
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
          className="bg-[#4A5A3E] hover:bg-[#3d4b33] text-white px-6 py-2.5 rounded-md font-semibold text-xs tracking-widest uppercase flex items-center gap-2 transition-all shadow-sm"
        >
          <CalendarIcon />
          <span>BOOK NOW</span>
        </Link>
      </header>

      {/* 2. Hero Canvas (Full aerial resort image) */}
      <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />

        {/* Frame 1707480219 (Figma Specs: Fixed 1320px, space-between layout) */}
        <div className="absolute bottom-10 inset-x-0 z-20 px-6 md:px-12">
          <div className="max-w-[1320px] mx-auto flex items-end justify-between gap-6">
            {/* Left Title Box */}
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit bg-black/30 backdrop-blur-sm border border-white/20 px-3 py-1 rounded text-[11px] md:text-xs text-white/90 uppercase tracking-[0.2em] font-medium">
                {tag}
              </div>
              <h1 className="font-primary text-3xl md:text-5xl/tight text-white font-normal drop-shadow-md">
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
                className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#4A5A3E] flex items-center justify-center transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <IoChevronBack size={20} />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev === 1 ? 0 : 1))}
                className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#4A5A3E] flex items-center justify-center transition-all shadow-md"
                aria-label="Next Slide"
              >
                <IoChevronForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Form Section (Figma Specs: Color #4A5A3E, Fixed 1440px, Padding 24px, Gap 20px) */}
      <div className="w-full bg-[#4A5A3E] py-6 px-4 md:px-12 text-white border-t border-[#5b6e4d]">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-center w-full"
          >
            {/* Input 1: Full Name */}
            <div className="bg-[#FFFCF7] text-[#383838] px-3.5 py-3 rounded-lg flex items-center gap-2.5 shadow-sm">
              <label className="text-[#383838]">
                <UserIcon />
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none text-sm placeholder:text-[#888888]"
              />
              {errors.fullName && (
                <span className="text-red-500 text-[10px] absolute -bottom-4 left-0">{errors.fullName}</span>
              )}
            </div>

            {/* Input 2: Ph Number + Country Code */}
            <div className="bg-[#FFFCF7] text-[#383838] px-3.5 py-3 rounded-lg flex items-center gap-2 shadow-sm">
              <label className="text-[#383838]">
                <CallIcon />
              </label>
              <div className="relative flex items-center">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="ps-1 cursor-pointer appearance-none bg-transparent outline-none text-xs text-[#383838]"
                  style={{ width: `${countryCode.length * 1.8}ch` }}
                >
                  {countries.map((c, i) => (
                    <option key={i} value={c.code} className="bg-white text-black">
                      {c.code}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown className="text-xs pointer-events-none" />
              </div>
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Ph Number"
                value={formData.PhoneNumber}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none text-sm placeholder:text-[#888888]"
              />
            </div>

            {/* Input 3: Email ID */}
            <div className="bg-[#FFFCF7] text-[#383838] px-3.5 py-3 rounded-lg flex items-center gap-2.5 shadow-sm">
              <label className="text-[#383838]">
                <MailIcon />
              </label>
              <input
                type="email"
                name="EmailId"
                placeholder="Email ID"
                value={formData.EmailId}
                onChange={handleInputChange}
                className="w-full bg-transparent outline-none text-sm placeholder:text-[#888888]"
              />
            </div>

            {/* Input 4: Check-in & out */}
            <div className="bg-[#FFFCF7] text-[#383838] px-3.5 py-3 rounded-lg flex items-center gap-2.5 shadow-sm">
              <label className="text-[#383838]">
                <CalendarIcon />
              </label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={new Date()}
                placeholderText="Check-in & out"
                dateFormat="dd/MM/yyyy"
                calendarClassName="!z-[99999]"
                popperClassName="!z-[99999]"
                className="w-full bg-transparent outline-none text-sm placeholder:text-[#888888] cursor-pointer"
                wrapperClassName="w-full"
              />
            </div>

            {/* Button 5: Book Now */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#B88B4A] hover:bg-[#a67c3f] text-white font-semibold text-sm tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md uppercase disabled:opacity-60"
            >
              <BookingCalenderIcon />
              <span>{isSubmitting ? "Submitting..." : "Book Now"}</span>
            </button>
          </form>

          {/* Subtext below form */}
          <p className="text-xs text-[#D8C2A5] text-center tracking-wide font-normal">
            Save 15% when you book direct · Free cancellation on most dates*
          </p>
        </div>
      </div>
    </div>
  );
}
