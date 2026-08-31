"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form1 from "../forms/Form1";
import { contact } from "@/utils/constent";
import { CallIcon, MailIcon } from "@/utils/formIcons";
import { IoLocationOutline } from "react-icons/io5";

const LandingFooter = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <footer className="w-full bg-[#4A5A3E] text-white flex flex-col">
      {/* 1. Full-Width Form Bar (Color #4A5A3E) */}
      <div className="w-full bg-[#4A5A3E] py-8 px-4 md:px-14 border-t border-[#5b6e4d]" id="form">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-3">
          <Form1
            buttonText="Book Now"
            buttonBgClass="bg-[#B88B4A] hover:bg-[#a67c3f] text-white"
            showCalendarIcon={true}
          />
          <p className="text-xs text-[#D8C2A5] text-center tracking-widest uppercase font-medium mt-1">
            SAVE 15% WHEN YOU BOOK DIRECT · FREE CANCELLATION ON MOST DATES*
          </p>
        </div>
      </div>

      {/* 2. Middle Footer Content Section (Frame 1707480099: Width 1440px, Height 260px, Padding: Top/Bottom 56px, Left/Right 60px) */}
      <div className="w-full bg-[#4A5A3E] py-[56px] px-6 md:px-[60px] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto min-h-[260px] flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Column 1: Gold Logo Card Frame (Dev Mode Specs: 246px x 148px, Radius 8px, Padding: py-10px px-16px, Gap 16px) */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0">
            <div className="border border-[#C4A482]/40 rounded-[8px] py-[10px] px-[16px] bg-[#435237]/40 flex flex-col items-center justify-center gap-[16px] w-[246px] h-[148px] shadow-inner">
              <div className="relative w-36 h-14">
                <Image
                  src="/logo.png"
                  alt="IVARA Resorts Khajuraho"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[11px] tracking-[0.25em] text-[#C4A482] uppercase font-semibold text-center">
                RESORTS · KHAJURAHO
              </p>
            </div>
          </div>

          {/* Column 2: LOCATION (Gold Title, White Text & White Icon) */}
          <div className="flex flex-col gap-3 text-center md:text-left max-w-md">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              LOCATION
            </h3>
            <div className="flex items-start gap-3 text-sm text-white leading-relaxed">
              <IoLocationOutline size={20} className="text-white flex-shrink-0 mt-0.5" />
              <span>
                Next to Dulhadeva Temple, Khudar Bridge, Khajuraho, Madhya Pradesh, 471606. 7 min from Khajuraho Airport
              </span>
            </div>
          </div>

          {/* Column 3: CONTACT (Gold Title, White Text & White Icons) */}
          <div className="flex flex-col gap-3 text-center md:text-left flex-shrink-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              CONTACT
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-white">
              <Link
                href={contact.callCta}
                className="flex items-center gap-3 hover:text-[#D8C2A5] transition-colors"
              >
                <span className="text-white">
                  <CallIcon />
                </span>
                <span>{contact.phone[0]}</span>
              </Link>
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-[#D8C2A5] transition-colors"
              >
                <span className="text-white">
                  <MailIcon />
                </span>
                <span>{contact.email}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar (#1D261A) */}
      <div className="w-full bg-[#1D261A] py-4 px-6 md:px-[60px] border-t border-white/10 text-white/80 text-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Ivara Resorts. All rights reserved.</p>
          <p className="text-white/70">
            Luxury resort in Khajuraho · Destination wedding in Madhya Pradesh · Resort near Panna Tiger Reserve · Powered by{" "}
            <Link
              href="https://www.fielmente.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:underline"
            >
              Fielmente
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
