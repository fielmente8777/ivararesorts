export interface GalleryItem {
  image: string;
  alt: string;
  category: "Experience" | "Exterior" | "Location" | "Reception" | "Restaurant" | "Rooms" | "Washroom" | string;
}

export const galleryPageData = {
  bannerData: {
    title: "Gallery",
    image: "/new-website/exterior4.webp",
  },
  title: {
    heading: "Gallery",
    subHeading: "A Visual Journey",
  },
  description:
    "A glimpse of the comfort, beauty, and memories that await. Every photo tells the story of your perfect stay at IVARA Resorts.",

  gallerySection: {
    title: "Stay above the clouds",
    link: {
      label: "Check Availability",
      href: "#",
    },
    galleryImages: [
      // Experience (14 images)
      { image: "/new-website/experience1.webp", alt: "Experience 1", category: "Experience" },
      { image: "/new-website/experience2.webp", alt: "Experience 2", category: "Experience" },
      { image: "/new-website/experience3.webp", alt: "Experience 3", category: "Experience" },
      { image: "/new-website/experience4.webp", alt: "Experience 4", category: "Experience" },
      // { image: "/new-website/experience5.webp", alt: "Experience 5", category: "Experience" },
      // { image: "/new-website/experience6.webp", alt: "Experience 6", category: "Experience" },
      // { image: "/new-website/experience7.webp", alt: "Experience 7", category: "Experience" },
      // { image: "/new-website/experience8.webp", alt: "Experience 8", category: "Experience" },
      // { image: "/new-website/experience9.webp", alt: "Experience 9", category: "Experience" },
      { image: "/new-website/experience10.webp", alt: "Experience 10", category: "Experience" },
      // { image: "/new-website/experience11.webp", alt: "Experience 11", category: "Experience" },
      // { image: "/new-website/experience12.webp", alt: "Experience 12", category: "Experience" },
      // { image: "/new-website/experience13.webp", alt: "Experience 13", category: "Experience" },
      // { image: "/new-website/experience14.webp", alt: "Experience 14", category: "Experience" },

      // Exterior (5 images)
      { image: "/new-website/exterior1.webp", alt: "Exterior 1", category: "Exterior" },
      { image: "/new-website/exterior2.webp", alt: "Exterior 2", category: "Exterior" },
      { image: "/new-website/exterior3.webp", alt: "Exterior 3", category: "Exterior" },
      // { image: "/new-website/exterior4.webp", alt: "Exterior 4", category: "Exterior" },
      { image: "/new-website/exterior5.webp", alt: "Exterior 5", category: "Exterior" },

      // Location (2 images)
      { image: "/new-website/location1.webp", alt: "Location 1", category: "Location" },
      { image: "/new-website/location2.webp", alt: "Location 2", category: "Location" },

      // Reception (2 images)
      // { image: "/new-website/reception1.webp", alt: "Reception 1", category: "Reception" },
      { image: "/new-website/reception2.webp", alt: "Reception 2", category: "Reception" },

      // Restaurant (3 images)
      { image: "/new-website/resturant2.webp", alt: "Restaurant 2", category: "Restaurant" },
      { image: "/new-website/resturant3.webp", alt: "Restaurant 3", category: "Restaurant" },
      { image: "/new-website/resturant4.webp", alt: "Restaurant 4", category: "Restaurant" },

      // Rooms (6 images)
      // { image: "/new-website/room1.webp", alt: "Room 1", category: "Rooms" },
      { image: "/new-website/room2.webp", alt: "Room 2", category: "Rooms" },
      { image: "/new-website/room3.webp", alt: "Room 3", category: "Rooms" },
      // { image: "/new-website/room4.webp", alt: "Room 4", category: "Rooms" },
      { image: "/new-website/room5.webp", alt: "Room 5", category: "Rooms" },
      { image: "/new-website/room6.webp", alt: "Room 6", category: "Rooms" },

      // Washroom (2 images)
      { image: "/new-website/washroom1.webp", alt: "Washroom 1", category: "Washroom" },
      { image: "/new-website/washroom2.webp", alt: "Washroom 2", category: "Washroom" },
    ] as GalleryItem[],
  },
};
