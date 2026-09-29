import { AboutWeddingPropsTypes } from "@/@types/types";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutWedding: FC<AboutWeddingPropsTypes> = ({
  src,
  title,
  subTitle,
  description,
  links,
}) => {
  return (
    <Section className="about-wedding">
      <div className="max-w-[1450px] mx-auto max-lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/4.1] lg:col-span-3 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4 text-center">
            {subTitle && (
              <p className="text-primary uppercase font-semibold text-xs sm:text-sm tracking-widest">
                {subTitle}
              </p>
            )}
            <h2 className="text-tertiary md:text-5xl/tight text-[2rem]/tight font-primary font-bold">
              {title}
            </h2>
            <p className="font-manrope text-base md:text-lg text-tertiary/80 leading-relaxed">
              {description}
            </p>
            {links?.[0] && (
              <div className="pt-2 flex justify-center">
                <Link
                  href={links[0].href}
                  className="text-tertiary hover:text-primary font-manrope font-semibold text-base sm:text-lg transition-colors"
                >
                  {links[0].label}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutWedding;
