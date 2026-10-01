"use client";

import Image from "next/image";
import { SectionWithContainer } from "@/components/sectionComponants";
import { useState, useMemo } from "react";
import { GalleryItem } from "./pageData";

export interface GalleryImage {
  image?: string;
  src?: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  galleryImages?: GalleryImage[];
}

const CATEGORY_ORDER = [
  "All Images",
  "Experience",
  "Exterior",
  "Location",
  "Reception",
  "Restaurant",
  "Rooms",
  "Washroom",
];

export default function Gallery({ images, galleryImages }: GalleryGridProps) {
  const allImages = useMemo(() => {
    const rawList = images || galleryImages || [];
    return rawList.map((item) => ({
      image: item.image || item.src || "",
      alt: item.alt || "Gallery Image",
      category: item.category || "General",
    }));
  }, [images, galleryImages]);

  // Ensure category order matches the requested sequence
  const categories = useMemo(() => {
    const foundCategories = Array.from(
      new Set(allImages.map((img) => img.category).filter(Boolean))
    );
    
    // Sort based on CATEGORY_ORDER
    const ordered = CATEGORY_ORDER.filter(
      (cat) => cat === "All Images" || foundCategories.some((c) => c.toLowerCase() === cat.toLowerCase())
    );
    
    // Append any extra category if not in predefined list
    foundCategories.forEach((fc) => {
      if (!ordered.some((o) => o.toLowerCase() === fc.toLowerCase())) {
        ordered.push(fc);
      }
    });

    return ordered;
  }, [allImages]);

  const [selectedCategory, setSelectedCategory] = useState<string>("All Images");

  // Filtering Logic
  const filteredImages = useMemo(() => {
    if (selectedCategory === "All Images") {
      return allImages;
    }
    return allImages.filter(
      (item) => item.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory, allImages]);

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-background py-10 md:py-16"
    >
      {/* FILTER TABS */}
      <div className="mb-8 md:mb-10 w-full overflow-x-auto hide-scroll px-4">
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap sm:flex-wrap justify-start sm:justify-center min-w-max sm:min-w-0 mx-auto w-fit py-1">
          {categories.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm font-primary text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer border border-primary shrink-0 whitespace-nowrap shadow-xs ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-md scale-105"
                    : "bg-white text-secondary border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <div
            key={`${item.image}-${index}`}
            className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-md border border-[#E3D9CD] group bg-white"
          >
            <Image
              src={item.image}
              alt={item.alt || `IVARA Gallery ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary font-primary text-base">
            No images available in this category yet.
          </p>
        </div>
      )}
    </SectionWithContainer>
  );
}
