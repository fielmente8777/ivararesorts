"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

// 🔹 Define types
type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  galleryImages: GalleryImage[];
};

export default function Gallery({ galleryImages }: Props) {
  // const [selected, setSelected] = useState<string>("All");

  // // 🔹 categories generate from data
  // const categories = useMemo<string[]>(
  //   () => ["All", ...new Set(galleryImages.map((img) => img.alt))],
  //   [galleryImages]
  // );

  // 🔹 filtering logic
  // const filtered: GalleryImage[] =
  //   selected === "All"
  //     ? galleryImages
  //     : galleryImages.filter((img) => img.alt === selected);

  return (
    <SectionWithContainer sectionClassName="bg-[#F9FCEE] py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group bg-white"
          >
            <Image
              src={img.src}
              alt={img.alt || `IVARA Gallery ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}
