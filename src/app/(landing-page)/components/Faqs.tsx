"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { IoAdd, IoRemove } from "react-icons/io5";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqsProps {
  title: string;
  questions: FaqItem[];
}

export default function Faqs({ title, questions }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section className="relative bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA] overflow-hidden">
      {/* Background Mask Overlay */}
      <div
        className="absolute top-0 left-0 right-0 w-full h-[180px] pointer-events-none opacity-15 z-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Image
          src="/maske-image.png"
          alt="Mask Overlay"
          fill
          className="object-cover -rotate-180"
        />
      </div>
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <SectionHeading
            title={title}
            titleClassName="text-3xl md:text-5xl font-primary text-primary text-center"
          />

          <div className="divide-y divide-[#E3D9CD] border-y border-[#E3D9CD]">
            {questions.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 transition-all">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-primary text-lg md:text-xl text-[#3A3632] hover:text-[#8B6E52] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-[#8B6E52]">
                      {isOpen ? <IoRemove /> : <IoAdd />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-sm md:text-base text-[#615C56] font-body leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
