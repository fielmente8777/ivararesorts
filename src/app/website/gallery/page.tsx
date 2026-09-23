import ImageBanner from "@/components/banners/ImageBanner";
import Gallery from "./components/gallery";
import { galleryPageData } from "./components/pageData";

export default function Page() {
  return (
    <main className="bg-[#F9FCEE]">
      <ImageBanner
        title="Gallery"
        images={[galleryPageData.bannerData.image]}
        centeredTitle={true}
        showForm={false}
      />
      <Gallery galleryImages={galleryPageData.gallerySection.galleryImages} />
    </main>
  );
}
