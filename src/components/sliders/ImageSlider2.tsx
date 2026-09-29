"use client";
import SwiperCarousel from "./SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

export const ArrowSvg = ({ className = "" }: { className?: string }) => (
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

const ImageSlider2: React.FC<
  {
    images: string[];
  } & { title?: string }
> = ({ images, title }) => {
  images = images.length < 5 ? [...images, ...images] : images;

  const [activeIndex, setActiveIndex] = useState(0);

  const buttonNextClassName =
    (title && title.split(" ")[1].replace(/[^\\n\\w\\s-]/g, "")) + "next" ||
    "button-next";
  const buttonPrevClassName =
    (title && title.split(" ")[1].replace(/[^\\n\\w\\s-]/g, "")) + "prev" ||
    "button-prev";
  return (
    <div className="w-full aspect-[4/1.37] relative max-md:px-4">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={24}
        modules={[Autoplay, Navigation]}
        centeredSlides
        loop
        speed={1000}
        navigation={{
          nextEl: "." + buttonNextClassName,
          prevEl: "." + buttonPrevClassName,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.8,
          },
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        renderSlide={(image, index) => (
          <div
            className={`w-full relative lg:rounded-3xl rounded-2xl transition-all duration-300 ease-in-out overflow-hidden ${index === activeIndex ? "md:aspect-4/2.5 aspect-square" : "md:aspect-[4/2.15] aspect-square md:mt-8"}`}
          >
            <Image
              src={image}
              alt={"hero-image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full object-cover"
            />
          </div>
        )}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full md:max-w-228 flex items-center justify-between px-7 sm:px-8 md:px-4 pointer-events-none">
        <button
          aria-label="Previous Slide"
          className={`pointer-events-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 ${buttonPrevClassName}`}
        >
          <ArrowSvg className="rotate-180 w-9 h-9 md:w-11 md:h-11 drop-shadow-lg" />
        </button>
        <button
          aria-label="Next Slide"
          className={`pointer-events-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 ${buttonNextClassName}`}
        >
          <ArrowSvg className="w-9 h-9 md:w-11 md:h-11 drop-shadow-lg" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider2;
