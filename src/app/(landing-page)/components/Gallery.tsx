"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";

const Gallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Section defaultPadding={false} className="demo">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={2}
        speed={5000}
        loop={true}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}

        renderSlide={(image) => (
          <div className="w-full relative aspect-4/3">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        )}
      />
    </Section>
  );
};

export default Gallery;
