import { SectionWithContainer } from "../sectionComponants";
import LazyLoadedMap from "./LazyLoadedMap";

const Map = ({
  src = "https://maps.google.com/maps?q=Next+to+Dulhadeva+Temple,+Khudar+Bridge,+Khajuraho,+Madhya+Pradesh+471606&t=&z=15&ie=UTF8&iwloc=&output=embed",
}: {
  src?: string;
}) => {
  return (
    <SectionWithContainer>
      <div className="relative aspect-square md:aspect-[4/1.35] border-2 border-[#29422C] w-screen max-w-[1224px] lg:mx-auto max-md:w-full">
        <LazyLoadedMap src={src} />
      </div>
      {/* <div className="flex flex-col items-center justify-center mt-4">
        <Button
          label="Get Directions"
          href="https://maps.app.goo.gl/3JkEJeHHYXydK9Nq8"
          newTabe
          className="w-fit"
        />
      </div> */}
    </SectionWithContainer>
  );
};

export default Map;
