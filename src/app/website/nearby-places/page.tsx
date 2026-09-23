import { Addcard } from "@/components/cards";
import { nearByPlaces } from "./nearByPlacesData";
import ImageBanner from "@/components/banners/ImageBanner";
import NearByPlacesSlider from "@/components/sliders/NearByPlacesSlider";

export default function NearByPlaces() {
  return (
    <main className="bg-[#F9FCEE]">
      <ImageBanner
        title={nearByPlaces.bannerData.title}
        images={[nearByPlaces.bannerData.image]}
        centeredTitle={true}
        showForm={false}
      />
      <NearByPlacesSlider cards={nearByPlaces.cards} />
      <Addcard {...nearByPlaces.addCardData} />
    </main>
  );
}