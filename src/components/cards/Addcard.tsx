import { AddCardDataPropsTypes } from "@/@types/types";

import Link from "next/link";
import { FC } from "react";
import { SectionWithContainer } from "../sectionComponants";
import { GoArrowUpRight } from "react-icons/go";

const Addcard: FC<AddCardDataPropsTypes> = ({ title, description, link }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FCEE] pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto bg-[#FAF7F1] border border-[#E3D9CD] rounded-2xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-6 p-8 md:p-12">
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-primary text-tertiary leading-tight">
              {title}
            </h2>
            <p className="font-manrope text-sm md:text-base text-tertiary/80 mt-3 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-[#b88c3f] rounded-lg font-manrope font-semibold text-xs sm:text-sm uppercase tracking-widest text-white py-3.5 px-6 shadow-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>{link.label}</span>
              <GoArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Addcard;
