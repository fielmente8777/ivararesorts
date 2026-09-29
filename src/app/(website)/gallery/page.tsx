import ImageBanner from "@/components/banners/ImageBanner";
import Gallery from "./components/gallery";
import { galleryPageData } from "./components/pageData";

export default function Page() {
  return (
    <main>
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
