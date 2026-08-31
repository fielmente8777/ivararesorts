import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
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
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
              EXPLORE GALLERY
            </p>
            <SectionHeading
              title="Step inside, Before <i class='text-secondary'>You Arrive.</i>"
              titleClassName="text-3xl md:text-5xl font-primary text-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
            {images.slice(0, 6).map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#E3D9CD] group"
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

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {ctaButtons.map((button, i) => (
              <LinkButton
                key={i}
                href={button.href}
                label={button.label}
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
