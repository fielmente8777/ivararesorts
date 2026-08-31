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

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[400px] gap-4 mt-4">
            {ctaButtons.map((button, index) => (
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
      </Container>
    </Section>
  );
};

export default Gallery;
