"use client";

import React, { useState } from "react";
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
    <Section className="bg-[#FAF6F2] py-16 lg:py-24 border-t border-[#EAE3DA]">
      <Container>
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
