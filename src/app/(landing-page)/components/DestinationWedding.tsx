"use client";

import React, { useState } from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Controller } from "swiper/modules";

interface DestinationWeddingProps {
  tag: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  images1?: string[];
  images2?: string[];
  cta: {
    label: string;
    href: string;
  }[];
  list: string[];
}

const DestinationWedding: React.FC<DestinationWeddingProps> = ({
  tag,
  title,
  description,
  images = [
    "/landing-page/Weddings.png",
    "/landing-page/Rectangle-34624269.png",
  ],
  images1 = [
    "/wedding1.png",
    "/wedding3.jpg",
    "/wedding6.jpg",
  ],
  images2 = [
    "/wedding2.png",
    "/wedding4.jpg",
    "/wedding5.jpg",
  ],
  cta,
  list,
}) => {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  const listImages1 = images1.length > 0 ? images1 : [images[0] || "/landing-page/Weddings.png"];
  const listImages2 = images2.length > 0 ? images2 : [images[1] || "/landing-page/Rectangle-34624269.png"];

  return (
    <Section className="relative bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA] overflow-hidden">
      {/* Top Left Leaf Decoration (Mobile: 28x32px, Desktop: 43.6x50px) */}
      <div className="absolute top-0 left-0 w-[28px] h-[32px] sm:w-[43.6px] sm:h-[50px] pointer-events-none z-10">
        <Image
          src="/leaf-image.png"
          alt="Leaf Decoration"
          fill
          className="object-contain"
        />
      </div>
      <Container>
        {/* Frame 1707480220 Specs: Max Width 1320px, Gap 56px */}
        <div className="max-w-[1320px] mx-auto flex flex-col gap-6 lg:gap-[56px]">
          {/* Top 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Tag, Title, Image 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs font-semibold text-[#8B6E52] mb-2">
                  {tag}
                </p>
                <h2
                  className="text-[22px] sm:text-3xl md:text-5xl font-primary text-[#1F2523] leading-tight"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>

              {/* Image 1 Slider: Banquet Hall (Rounded 8px) */}
              <div className="relative w-full aspect-[16/10] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] mt-2">
                <SwiperCarousel
                  data={listImages1}
                  slidesPerView={1}
                  spaceBetween={0}
                  modules={[Autoplay, Controller]}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper && !secondSwiper.destroyed ? secondSwiper : null }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  speed={800}
                  className="w-full h-full"
                  renderSlide={(imgSrc, i) => (
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={imgSrc}
                        alt={`Banquet Hall Slide ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                />
              </div>
            </div>

            {/* Right Column: Image 2, Bullets List */}
            <div className="flex flex-col gap-6">
              {/* Image 2 Slider: Celebration Lawns (Rounded 8px) */}
              <div className="relative w-full aspect-[16/10] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD]">
                <SwiperCarousel
                  data={listImages2}
                  slidesPerView={1}
                  spaceBetween={0}
                  modules={[Autoplay, Controller]}
                  onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper && !firstSwiper.destroyed ? firstSwiper : null }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  speed={800}
                  className="w-full h-full"
                  renderSlide={(imgSrc, i) => (
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src={imgSrc}
                        alt={`Celebration Lawns Slide ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                />
              </div>

              {/* Bullet Points List below Image 2 */}
              <ul className="space-y-3.5 mt-1">
                {list?.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm md:text-base text-[#4A453F] font-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4A5A3E] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Full-Width Section: Center-Aligned Description & CTAs */}
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6 border-t border-[#E8DFC0]/40 pt-4 lg:pt-8">
            <p
              className="font-primary italic text-xs sm:text-sm md:text-2xl text-[#CA9D4C] leading-snug max-w-5xl lg:max-w-full text-center mx-auto"
              dangerouslySetInnerHTML={{
                __html: description.replace(/<br\s*\/?>/gi, "<br class='hidden md:inline' />"),
              }}
            />

            <div className="grid grid-cols-2 max-w-[400px] w-full gap-3 sm:gap-4 mt-2 sm:mt-4 mx-auto">
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
        </div>
      </Container>
    </Section>
  );
};

export default DestinationWedding;
