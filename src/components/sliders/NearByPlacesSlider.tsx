"use client";
import { NearByPlacesSliderPropsTypes } from "@/@types/types";
import { FC } from "react";
import { NearByPlacesCard } from "../cards";
import { SectionWithContainer } from "../sectionComponants";

const NearByPlacesSlider: FC<NearByPlacesSliderPropsTypes> = ({ cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FCEE] py-12 md:py-16">
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
        {cards.map((card, i) => (
          <NearByPlacesCard key={i} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default NearByPlacesSlider;
