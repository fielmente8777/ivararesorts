import ImageBanner from "@/components/banners/ImageBanner";
import Gallery from "./components/gallery";
import { galleryPageData } from "./components/pageData";

export default function Page() {
  return (
    <main>
      {/* <ImageBanner {...galleryPageData?.bannerData} /> */}
      <ImageBanner
        title={galleryPageData.bannerData.title}
        tag="Gallery"
        images={[galleryPageData.bannerData.image]}
        benefits="Explore our gallery and discover the beauty of our resort."
      />
      {/* <GalleryBanner title={galleryPageData.bannerData.title} /> */}

      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}
