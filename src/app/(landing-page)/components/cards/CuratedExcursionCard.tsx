import { CuratedExcursionProps } from "@/@types/landingPageTypes";
import Image from "next/image";

const CuratedExcursionCard: React.FC<CuratedExcursionProps["cards"][0]> = ({
  icon,
  image,
  tagLin,
  title,
  description,
}) => {
  return (
    <div className="rounded-lg overflow-hidden border border-background-2 w-full">
      <div className="w-full relative aspect-4/2.75 ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 py-3 flex flex-col gap-4">
        <p className="flex items-center uppercase text-tertiary tracking-widest gap-1.5">
          <span>{icon}</span>
          {tagLin}
        </p>
        <p className="text-2xl font-primary text-tertiary">{title}</p>
        <p className="text-sm text-tertiary/70">{description}</p>
      </div>
    </div>
  );
};

export default CuratedExcursionCard;
