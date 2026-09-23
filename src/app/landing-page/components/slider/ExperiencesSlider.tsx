"use client";
import { ExperiencesProps } from "@/@types/landingPageTypes";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";

const ExperiencesSlider: React.FC<{ cards: ExperiencesProps["cards"] }> = ({
  cards,
}) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards}
        loop
        slidesPerView={1}
        spaceBetween={0}
        effect="creative"
        modules={[EffectCreative, Autoplay, Navigation]}

        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor
        creativeEffect={{
          limitProgress: 3,

          prev: {
            translate: [0, "-8%", -200],
            scale: 0.96,
            opacity: 0,
          },

          next: {
            translate: [0, "6%", -100],
            scale: 0.95,
          },
        }}

        renderSlide={(card) => <ExperiencesCard {...card} />}
      />
    </div>
  );
};

export default ExperiencesSlider;

export const ExperiencesCard: React.FC<ExperiencesProps["cards"][0]> = ({
  image,
  description,
  title,
}) => {
  return (
    <div className="w-full relative aspect-4/3 rounded-lg overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover " />
      <div className=" absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white space-y-2">
        <p className="text-3xl font-primary">{title}</p>
        <p className="">{description}</p>
      </div>
    </div>
  );
};
