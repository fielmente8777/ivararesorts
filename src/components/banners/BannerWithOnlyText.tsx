import { BannerPropsTypes } from "@/@types/types";
import { FC } from "react";
import { SectionWithContainer } from "../sectionComponants";
import { LeftLinesIcon, RightLinesIcon } from "@/utils/icons";
import NewNav from "../navbar/NewNav";

const BannerWithOnlyText: FC<BannerPropsTypes> = ({ title }) => {
  return (
    <SectionWithContainer sectionClassName="bg-clr">
      <div className="inset-x-0 absolute z-30 ">
        <NewNav />
      </div>
      <div className="flex items-center justify-center text-white gap-4">
        <span>
          <LeftLinesIcon />
        </span>
        <h1 className="md:text-5xl text-3xl font-plus font-semibold ">
          {title}
        </h1>
        <span>
          <RightLinesIcon />
        </span>
      </div>
    </SectionWithContainer>
  );
};

export default BannerWithOnlyText;
