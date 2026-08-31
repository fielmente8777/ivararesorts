import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";

interface TestimonialsProps {
  tag?: string;
  title: string;
  images: string;
  cta: {
    label: string;
    href: string;
  }[];
  reviews: {
    author?: string;
    review: string;
  }[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  tag = "TESTIMONIALS",
  title,
  images = "/landing-page/Rectangle-34624269.png",
  cta,
  reviews,
}) => {
  const currentReview =
    reviews[0]?.review ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    /* Frame 1381 Hug x 600 Hug Specs: 100% Full-Bleed Width, Joined cleanly with 0 gaps */
    <div className="w-full bg-[#FAF7F1] grid grid-cols-1 lg:grid-cols-2 items-stretch border-t border-[#EAE3DA]">
      {/* Left Column: Full-Bleed Image (Height 600px) */}
      <div className="relative w-full h-[380px] lg:h-[600px] overflow-hidden">
        <Image
          src={images || "/landing-page/Rectangle-34624269.png"}
          alt="Guest Experiences"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Column: Content Box (Zero gap from image on left) */}
      <div className="flex flex-col justify-center px-6 md:pl-8 md:pr-14 py-10 bg-[#FAF7F1] gap-5">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
            {tag}
          </p>
          <h2 className="text-3xl md:text-5xl font-primary text-[#1F2523] leading-tight">
            {title}
          </h2>
        </div>

        <p className="font-body text-sm md:text-base text-[#55524E] leading-relaxed max-w-xl">
          {currentReview}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-2">
          {cta.map((button, i) => (
            <LinkButton
              key={i}
              href={button.href}
              label={button.label}
              whatsAppIcon={i === 0}
              calendarIcon={i === 1}
              className={`rounded-lg py-3 px-8 uppercase text-xs tracking-widest ${
                i === 0
                  ? "bg-transparent text-[#263725] border-[#263725] hover:bg-[#263725] hover:text-white"
                  : "bg-[#263725] text-white border-[#263725] hover:bg-[#1a2619]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
