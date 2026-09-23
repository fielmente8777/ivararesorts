"use client";

import { SectionWithContainer } from "@/components/sectionComponants";

type Props = {
  title: string;
};

export default function GalleryBanner({ title }: Props) {
  return (
    <SectionWithContainer
      sectionClassName="gallery-banner bg-background"
      containerClassName="text-center"
    >
      {/* <div className="content-column">
        <h2>{title}</h2>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="mb-8 flex items-center gap-2 text-secondary">
          <span className="h-px w-10 bg-current" />

          <p className="text-[11px] tracking-[3px] uppercase font-body">
            Gallery
          </p>

          <span className="h-px w-10 bg-current" />
        </div>
        <h2 className="text-4xl md:text-5xl font-medium font-primary">
          Explore our <span className="italic text-secondary">Himalayan</span>{" "}
          Resort
        </h2>
      </div>
    </SectionWithContainer>
  );
}
