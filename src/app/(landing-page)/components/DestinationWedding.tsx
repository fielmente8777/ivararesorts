import React from "react";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";

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
  images = ["/landing-page/Weddings.png", "/landing-page/Rectangle-34624269.png"],
  cta,
  list,
}) => {
  const img1 = images[0] || "/landing-page/Weddings.png";
  const img2 = images[1] || "/landing-page/Rectangle-34624269.png";

  return (
    <Section className="bg-[#FAF7F1] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
        {/* Frame 1707480220 Specs: Max Width 1320px, Gap 56px */}
        <div className="max-w-[1320px] mx-auto flex flex-col gap-[56px]">
          {/* Top 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Tag, Title, Image 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#8B6E52] mb-2">
                  {tag}
                </p>
                <h2
                  className="text-3xl md:text-5xl font-primary text-[#1F2523] leading-tight"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>

              {/* Image 1: Banquet Hall (Rounded 8px) */}
              <div className="relative w-full aspect-[16/10] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] mt-2">
                <Image
                  src={img1}
                  alt="Destination Wedding Banquet Hall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Image 2, Bullets List */}
            <div className="flex flex-col gap-6">
              {/* Image 2: Celebration Lawns (Rounded 8px) */}
              <div className="relative w-full aspect-[16/10] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD]">
                <Image
                  src={img2}
                  alt="Destination Wedding Celebration Lawns"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bullet Points List below Image 2 */}
              <ul className="space-y-3.5 mt-1">
                {list?.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm md:text-base text-[#4A453F] font-body"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4A5A3E] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Full-Width Section: Center-Aligned Description & CTAs */}
          <div className="flex flex-col items-center text-center gap-6 border-t border-[#E8DFC0]/40 pt-8">
            <p
              className="font-primary italic text-xl md:text-2xl text-[#8B6E52] leading-relaxed max-w-5xl lg:max-w-full text-center mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              {cta.map((button, i) => (
                <LinkButton
                  key={i}
                  href={button.href}
                  label={button.label}
                  className={`rounded-lg py-3 px-8 uppercase text-xs tracking-widest ${i === 0
                      ? "bg-transparent text-[#263725] border-[#263725] hover:bg-[#263725] hover:text-white"
                      : "bg-[#263725] text-white border-[#263725] hover:bg-[#1a2619]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DestinationWedding;
