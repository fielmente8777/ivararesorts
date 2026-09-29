"use client";
import { WeddingServicesPropsTypes } from "@/@types/types";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";

import Image from "next/image";
import { FC } from "react";
import { Autoplay } from "swiper/modules";

const WeddingServices: FC<WeddingServicesPropsTypes> = ({ title, cards }) => {
  return (
    <Section className="wedding-services">
      <div className="flex flex-col md:gap-14 gap-6 max-w-[1400px] mx-auto">
        <h2 className="font-primary text-tertiary md:text-5xl/tight text-[2rem]/tight font-bold text-center">
          {title}
        </h2>
        <div className="md:flex hidden flex-wrap gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 space-y-6 rounded-2xl max-w-[256px] w-full bg-white shadow-sm border border-[#E8E0D5]/50 hover:shadow-md transition-shadow"
            >
              <div className="w-full max-w-20 mx-auto relative aspect-square">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="80px"
                  className="w-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-center text-tertiary font-primary font-semibold">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
        {/* slider */}
        <div className="md:hidden">
          <SwiperCarousel
            slidesPerView={1}
            spaceBetween={20}
            data={cards}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="!p-2"
            renderSlide={(card, index) => (
              <div
                key={index}
                className="p-6 space-y-6 rounded-2xl max-w-[256px] w-full bg-white shadow-sm border border-[#E8E0D5]/50 mx-auto"
              >
                <div className="w-full max-w-20 mx-auto relative aspect-square">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="80px"
                    className="w-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl text-center text-tertiary font-primary font-semibold">
                  {card.name}
                </h3>
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default WeddingServices;
