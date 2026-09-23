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
    <SectionWithContainer
      sectionClassName=" bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-4/3 overflow-hidden"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
}
