import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface DestinationWeddingProps {
  tag: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  cta: {
    label: string;
    href: string;
  }[];
  list: string[];
}

const DestinationWedding: React.FC<DestinationWeddingProps> = ({
  tag,
  title,
  description,
  image,
  images = ["/landing-page/Weddings.png", "/landing-page/Rectangle-34624269.png"],
  cta,
  list,
}) => {
  const displayImages = images.length >= 2 ? images : [image || "/landing-page/Weddings.png", "/landing-page/Rectangle-34624269.png"];

  return (
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        <div className="flex flex-col gap-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
              {tag}
            </p>
            <SectionHeading
              title={title}
              titleClassName="text-3xl md:text-5xl font-primary text-primary max-w-3xl"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Box with 2 Side-by-Side Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E3D9CD] shadow-md"
                >
                  <Image
                    src={img}
                    alt={`Wedding venue ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Bullet Details */}
            <div className="flex flex-col gap-6">
              <ul className="space-y-3">
                {list?.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-base text-[#4A453F] font-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8B6E52] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="font-primary italic text-lg md:text-xl text-[#756250]">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                {cta.map((button, i) => (
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
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DestinationWedding;
