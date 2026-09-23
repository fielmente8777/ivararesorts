"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const ReviewsSlider: React.FC<{
  reviews: { author: string; review: string }[];
}> = ({ reviews }) => {
  return (
    <div>
      <SwiperCarousel
        data={reviews}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        renderSlide={(review) => (
          <div className="flex flex-col gap-4">
            {/* <p className="font-bold text-lg">{review.author}</p> */}
            <p className="text-tertiary/70 lg:text-lg">{review.review}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ReviewsSlider;
