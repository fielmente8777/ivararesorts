"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";

import Link from "next/link";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";

interface TestimonialsSliderProps {
  cards: {
    title: string;
    description: string;
    href: string;
    author: string;
    image: string;
  }[];
  setCurrent: (value: number) => void;
}
const ReviewsSlider: FC<TestimonialsSliderProps> = ({
  cards,
  setCurrent,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex + 1)}
        // onSwiper={(swiper) => setTotal(swiper.slides.length)}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => (
          <Link href={card.href} className=" text-[#686868] space-y-4">
            <span className="block">{card.description}</span>
            <span className="capitalize text-xl block">{card.author}</span>
          </Link>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
