"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/utils/constent";
import { CallIcon, LocationIcon, MailIcon } from "@/utils/formIcons";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { SectionWithContainer } from "../sectionComponants";

interface WebsiteFooterProps {
  className?: string;
}

const WebsiteFooter: React.FC<WebsiteFooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/website/" },
    { label: "About Us", href: "/website/#about" },
    { label: "Stay", href: "/website/refined-living-spaces/" },
    { label: "Experiences", href: "/website/experiences/" },
    { label: "Contact Us", href: "/website/contact-us/" },
  ];

  const exploreLinks = [
    { label: "Gallery", href: "/website/gallery/" },
    { label: "Destination Weddings", href: "/website/destination-wedding/" },
    { label: "Explore Khajuraho", href: "/website/nearby-places/" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className={`w-full bg-[#4A5A3E] text-white flex flex-col font-manrope ${className}`}>
      {/* 1. Top Section: Follow Us | Center Logo Card | Booking Action */}
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="w-full bg-[#4A5A3E] py-8 px-6 md:px-[60px] border-t border-white/10"
        containerClassName="max-w-[1440px] mx-auto !p-0"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Follow Us + Social Media Icons */}
          <div className="flex flex-col items-center md:items-start gap-3 flex-1 order-2 md:order-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-2.5">
              <Link
                href={contact.socialMedia.facebook || "https://www.facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-[8px] bg-[#435237]/60 border border-[#C4A482]/40 text-white flex items-center justify-center hover:bg-[#B88B4A] hover:border-[#B88B4A] transition-all shadow-inner"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href={contact.socialMedia.instagram || "https://www.instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[8px] bg-[#435237]/60 border border-[#C4A482]/40 text-white flex items-center justify-center hover:bg-[#B88B4A] hover:border-[#B88B4A] transition-all shadow-inner"
              >
                <FaInstagram size={15} />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-[8px] bg-[#435237]/60 border border-[#C4A482]/40 text-white flex items-center justify-center hover:bg-[#B88B4A] hover:border-[#B88B4A] transition-all shadow-inner"
              >
                <FaYoutube size={15} />
              </Link>
            </div>
          </div>

          {/* Center: Gold Logo Card Frame (Exact LandingFooter Specs: 246px x 148px, Gap 16px) */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 order-1 md:order-2">
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

          {/* Right: Booking Action */}
          <div className="flex flex-col items-center md:items-end gap-2.5 flex-1 order-3">
            <p className="text-xs text-[#D8C2A5] tracking-wider font-medium text-center md:text-right">
              Reserve your Khajuraho escape!
            </p>
            <Link
              href={contact.callCta}
              className="bg-[#B88B4A] hover:bg-[#a67c3f] text-white px-6 py-2.5 rounded-lg font-semibold text-xs tracking-widest uppercase flex items-center gap-2 transition-all shadow-sm"
            >
              <span>BOOK STAY</span>
              <GoArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </SectionWithContainer>

      {/* 2. Middle Navigation Section (Exact LandingFooter Theme & Specs: py-[56px]) */}
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="w-full bg-[#4A5A3E] py-[56px] px-6 md:px-[60px] border-t border-white/10"
        containerClassName="max-w-[1440px] mx-auto !p-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-3.5 items-start text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col items-start gap-2 text-sm text-white">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8C2A5] transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-3.5 items-start text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              EXPLORE
            </h3>
            <ul className="flex flex-col items-start gap-2 text-sm text-white">
              {exploreLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8C2A5] transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className="flex flex-col gap-3.5 items-start text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              POLICIES
            </h3>
            <ul className="flex flex-col items-start gap-2 text-sm text-white">
              {policyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8C2A5] transition-colors leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Exact Icons, Sizing & Typography from LandingFooter) */}
          <div className="flex flex-col gap-3 items-start text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4A482]">
              CONTACT
            </h3>
            <div className="flex flex-col items-start gap-2.5 text-sm text-white leading-relaxed">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="text-white flex-shrink-0 mt-1">
                  <LocationIcon />
                </span>
                <span className="leading-relaxed">
                  Next to Dulhadeva Temple, Khudar Bridge, Khajuraho, Madhya Pradesh, 471606. 7 min from Khajuraho Airport
                </span>
              </div>

              {/* Phone */}
              <Link
                href={contact.callCta}
                className="flex items-center gap-3 hover:text-[#D8C2A5] transition-colors"
              >
                <span className="text-white flex-shrink-0">
                  <CallIcon />
                </span>
                <span>{contact.phone[0]}</span>
              </Link>

              {/* Email */}
              <Link
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-[#D8C2A5] transition-colors"
              >
                <span className="text-white flex-shrink-0">
                  <MailIcon />
                </span>
                <span>{contact.email}</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWithContainer>

      {/* 3. Bottom Copyright Bar (#1D261A - Exact LandingFooter Specs) */}
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="w-full bg-[#1D261A] py-4 px-6 md:px-[60px] border-t border-white/10 text-white/80 text-xs"
        containerClassName="max-w-[1440px] mx-auto !p-0"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-left">
          <p>© {currentYear} Ivara Resorts. All rights reserved.</p>
          <p className="text-white/70 text-left">
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
      </SectionWithContainer>
    </footer>
  );
};

export default WebsiteFooter;
