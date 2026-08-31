import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import Form1 from "@/components/forms/Form1";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

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
  benefits?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  tag = "TESTIMONIALS",
  title,
  images,
  cta,
  reviews,
  benefits = "Save 15% when you book direct · Free cancellation on most dates*",
}) => {
  const currentReview = reviews[0]?.review || "";

  return (
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E3D9CD]">
              <Image
                src={images}
                alt="Guest experience"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Review */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
                  {tag}
                </p>
                <SectionHeading
                  title={title}
                  titleClassName="text-3xl md:text-5xl font-primary text-primary"
                />
              </div>

              <blockquote className="font-body text-base md:text-lg text-[#55524E] leading-relaxed italic border-l-2 border-[#8B6E52] pl-4">
                &ldquo;{currentReview}&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 max-w-[400px] gap-4 mt-4">
                {cta.map((button, index) => (
                  <LinkButton
                    key={index}
                    href={button.href}
                    label={button.label}
                    whatsAppIcon={index === 0}
                    calendarIcon={index === 1}
                    className={`justify-center
                                           rounded-md
                                           w-full! py-2 px-7 uppercase text-xs tracking-widest ${
                                             index === 0
                                               ? "bg-white text-[#4A5A3E] border-[#4A5A3E] hover:bg-[#4A5A3E] hover:text-white"
                                               : "bg-[#4A5A3E] text-white hover:bg-[#4A5A3E]/60"
                                           }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Form Bar */}
          {/* <div className="bg-[#4A5A3E] border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col gap-5 text-white shadow-2xl">
            <Form1
              buttonText="Book Now"
              buttonBgClass="bg-[#B88B4A] hover:bg-[#a67c3f] text-white"
              showCalendarIcon={true}
            />
            <p className="text-xs text-[#D8C2A5] text-center tracking-widest uppercase">
              {benefits}
            </p>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
