import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import React from "react";
import SlidingTitle2 from "../sliders/SlidingTitle2";

interface AboutSectionProps {
  images: string[];
  subTitle: string;
  title: string;
  note: string;
  cards: {
    title: string;
    description: string;
  }[];
  description: string[];
  listsText: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}
const AboutSection: React.FC<AboutSectionProps> = ({
  images,
  subTitle,
  title,
  note,
  cards,
  description,
  listsText,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-image bg-left bg-w-small bg-color">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] lg:gap-18 gap-8">
        <div className="space-y-6 h-fit lg:sticky lg:top-24">
          <div className="space-y-2">
            <p className="text-p22 uppercase font-semibold">{subTitle}</p>
            <SectionHeading title={title} />
          </div>
          <ul className="lg:flex hidden max-md:flex-col gap-3.5  w-full">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  key={index}
                  {...button}
                  target={index === 0 ? "_blank" : "_self"}
                  rel={index === 0 ? "noopener noreferrer" : ""}
                  arrowIcon={index === 1}
                  whatsAppIcon={index === 0}
                  className={`rounded-sm justify-center gap-2! w-full text-nowrap uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary hover:bg-white hover:text-primary" : "text-primary bg-transparent border border-primary hover:bg-primary hover:text-white"}`}
                />
              </li>
            ))}
          </ul>
          <div className="lg:block hidden">
            <ul className="flex flex-wrap gap-4 items-center wrap-break-word font-primary mt-8">
              {listsText.slice(0, 2).map((text, index) => (
                <React.Fragment key={index}>
                  <li
                    className="text-xl text-tertiary"
                    style={{
                      wordBreak: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                  {index !== listsText.slice(0, 2).length - 1 && (
                    <span className="text-2xl text-primary font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-4 items-center wrap-break-word font-primary mt-3">
              {listsText.slice(2).map((text, index) => (
                <React.Fragment key={index}>
                  <li
                    className="text-xl text-tertiary"
                    style={{
                      wordBreak: "break-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                  {index !== listsText.slice(2).length - 1 && (
                    <span className="text-2xl text-primary font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="lg:hidden block space-y-6">
            <SlidingTitle2 items={listsText} />
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full aspect-4/4.5 relative ${index === 0 ? "" : "lg:mt-8"}`}
              >
                <Image
                  src={image}
                  alt="Image"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg md:text-2xl text-tertiary font-primary italic">
            {note}
          </p>
          <div className="bg-tertiary h-[0.5px] w-full my-4 md:mt-7 md:mb-5"></div>
          <div className="space-y-4">
            {description.map((desc, index) => (
              <p key={index} className="md:text-lg text-tertiary">
                {desc}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8">
            {cards.map((card, index) => (
              <div key={index}>
                <h3 className="italic text-2xl font-primary text-secondary">
                  {card.title}
                </h3>
                <p className="text-tertiary mt-2">{card.description}</p>
              </div>
            ))}
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full aspect-4/4.5 lg:block hidden relative ${index === 0 ? "" : "lg:mt-8"}`}
              >
                <Image
                  src={image}
                  alt="Image"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <ul className="lg:hidden flex mt-4 max-md:flex-col gap-3.5  w-full">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  key={index}
                  {...button}
                  target={index === 0 ? "_blank" : "_self"}
                  rel={index === 0 ? "noopener noreferrer" : ""}
                  arrowIcon={index === 1}
                  whatsAppIcon={index === 0}
                  className={`rounded-sm justify-center gap-2! w-full text-nowrap uppercase tracking-widest max-md:text-sm ${index === 0 ? "text-white bg-primary border-primary hover:bg-white hover:text-primary" : "text-primary bg-transparent border border-primary hover:bg-primary hover:text-white"}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
