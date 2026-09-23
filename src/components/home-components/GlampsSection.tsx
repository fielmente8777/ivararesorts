"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  button: {
    label: string;
    link: string;
  };
  cards: {
    id: string;
    title: string;
    image: string;
    href: string;
    description: string[];
  }[];
}

const GlampsSection: React.FC<Props> = ({
  title,
  button,
  cards: accommodations,
}) => {
  const [selectRoom, setSelectRoom] = useState(accommodations[0].title);
  const [animateImage, setAnimateImage] = useState(false);

  const filtered = accommodations.filter((acc) => acc.title === selectRoom);

  // auto change room only on lg screen
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (!mediaQuery.matches) return;

    const interval = setInterval(() => {
      const index = accommodations.findIndex((acc) => acc.title === selectRoom);

      setAnimateImage(true);

      setTimeout(() => {
        if (index === accommodations.length - 1) {
          setSelectRoom(accommodations[0].title);
        } else {
          setSelectRoom(accommodations[index + 1].title);
        }

        setAnimateImage(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectRoom, accommodations]);

  const handleRoomChange = (title: string) => {
    setAnimateImage(true);

    setTimeout(() => {
      setSelectRoom(title);
      setAnimateImage(false);
    }, 300);
  };

  return (
    <SectionWithContainer sectionClassName="bg-image bg-right-bottom bg-w-small bg-color">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-8 gap-6">
        <div className="md:space-y-6 space-y-4">
          <SectionHeading title={title} />

          <div className="lg:flex hidden flex-col mt-6 gap-2 divide-y divide-[#CACACA] border-y border-[#CACACA]">
            {accommodations.map((acc) => (
              <button
                type="button"
                onClick={() => handleRoomChange(acc.title)}
                key={acc.id}
                className={`w-full py-3 text-2xl font-semibold flex items-center gap-4 transition-all duration-300 ${
                  acc.title === selectRoom ? "text-primary" : "text-[#28361980]"
                }`}
              >
                <span className="text-sm text-secondary">{acc.id}</span>
                {acc.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {filtered[0].description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {/* Desktop Image */}
          <Link
            href={filtered[0].href}
            className="w-full relative aspect-4/3 overflow-hidden hidden lg:block"
          >
            <Image
              key={filtered[0].image}
              src={filtered[0].image}
              alt="Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover rounded-2xl transition-all duration-500 ease-in-out ${
                animateImage ? "scale-110 opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </Link>

          {/* Mobile */}
          <div className="lg:hidden space-y-10">
            {accommodations.map((acc) => (
              <div
                className="flex flex-col gap-4 sticky top-0 bg-background"
                key={acc.id}
              >
                <p className="text-xl font-semibold text-primary flex items-center gap-4">
                  <span className="text-sm text-secondary">{acc.id}</span>
                  {acc.title}
                </p>

                <div className="w-full relative aspect-4/2.75 overflow-hidden">
                  <Image
                    src={acc.image}
                    alt="Image"
                    fill
                    sizes="100vw"
                    className="object-cover rounded-2xl"
                  />
                </div>

                {acc.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <Link href={acc.href} className="w-fit border-b border-primary">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GlampsSection;
