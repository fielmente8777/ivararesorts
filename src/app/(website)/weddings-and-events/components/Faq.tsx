"use client";
import { FaqData } from "@/@types/types";
import { Accordion } from "@/components/cards";
import { Section } from "@/components/sectionComponants";
import { WebsiteContext } from "@/context-api/WebsiteContext";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";

interface FaqProps {
  title: string;
  src: string;
  faqData?: {
    id: number;
    ques: string;
    ans: string;
  }[];
}

const Faq: FC<FaqProps> = ({ title, src, faqData = [] }) => {
  const { websiteData } = useContext(WebsiteContext);
  const [data, setData] = useState<any[]>(faqData);

  useEffect(() => {
    if (websiteData && websiteData.Faq && websiteData.Faq.length > 0) {
      setData(websiteData.Faq);
    } else if (faqData && faqData.length > 0) {
      setData(faqData);
    }
  }, [websiteData, faqData]);

  return (
    <Section defaultPadding={false} className="faq bg-background pt-5 md:pt-0">
      {/* Mobile Heading (Above Image) */}
      <div className="md:hidden text-center mb-6 px-4">
        <h2 className="font-primary text-tertiary text-2xl font-bold">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        {/* Image */}
        <div className="w-full relative md:aspect-[4/4.8] aspect-square">
          <Image src={src} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 m-4 border border-white/20"></div>
        </div>

        {/* Content & Accordion */}
        <div className="bg-background px-3 sm:px-4 md:px-6 py-6 md:py-10 w-full h-full flex flex-col gap-6 md:gap-10 justify-center">
          {/* Desktop Heading (Hidden on Mobile) */}
          <h2 className="hidden md:block font-primary text-tertiary md:text-4xl text-2xl font-bold text-center">
            {title}
          </h2>
          <div className="divide-y divide-[#1F2523]/15 border-y border-[#1F2523]/15">
            {data.map((card: any, index: number) => (
              <Accordion
                key={index}
                ques={card.ques || card.Question}
                ans={card.ans || card.Answer}
                id={card.id || card._id || index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
