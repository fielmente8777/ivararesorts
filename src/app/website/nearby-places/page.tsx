import { Addcard } from "@/components/cards";
import { nearByPlaces } from "./nearByPlacesData";
import { BannerWithOnlyText } from "@/components/banners";
import NearByPlacesSlider from "@/components/sliders/NearByPlacesSlider";


export default function NearByPlaces() {
  return (
    <main>
      <BannerWithOnlyText {...nearByPlaces.bannerData} />
      <NearByPlacesSlider cards={nearByPlaces.cards} />
      <Addcard {...nearByPlaces.addCardData} />
    </main>
  )
}