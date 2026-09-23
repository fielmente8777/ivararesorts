import { NearByPlacesSliderPropsTypes } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";

const NearByPlacesCard: FC<NearByPlacesSliderPropsTypes["cards"][0]> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-[12px] overflow-hidden border border-[#E3D9CD] bg-[#FAF7F1] shadow-sm hover:shadow-md transition-all group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1 text-left">
        <h3 className="text-2xl md:text-[26px] font-primary text-tertiary leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-base font-manrope text-tertiary/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NearByPlacesCard;
