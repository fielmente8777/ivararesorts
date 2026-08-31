import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { contact } from "@/utils/constent";

interface GalleryProps {
  images: string[];
}

const ctaButtons = [
  {
    label: "ENQUIRE NOW",
    href: contact.WhatsappCta,
  },
  {
    label: "BOOK NOW",
    href: contact.callCta,
  },
];

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Section className="bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        {/* Frame 1707480227 Specs: Max Width 1264px, Gap 40px */}
        <div className="max-w-[1264px] mx-auto flex flex-col items-center gap-[40px] text-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
              EXPLORE GALLERY
            </p>
            <h2 className="text-3xl md:text-5xl font-primary text-[#1F2523] leading-tight">
              Step inside, Before <br />
              <i className="text-[#4A5A3E] font-serif italic">You Arrive.</i>
            </h2>
          </div>

          {/* 6 Grid Images (Rounded 8px matching Figma) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {images.slice(0, 6).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {ctaButtons.map((button, i) => (
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
      </Container>
    </Section>
  );
};

export default Gallery;
