// components/EmbeddedMap.jsx
import React from "react";

const EmbeddedMap: React.FC<{ src: string }> = ({ src }) => {
  const mapSource =
    src ||
    "https://maps.google.com/maps?q=Next+to+Dulhadeva+Temple,+Khudar+Bridge,+Khajuraho,+Madhya+Pradesh+471606&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <iframe
      src={mapSource}
      className="w-full h-full overflow-hidden border-0"
      allowFullScreen={true}
      loading="lazy"
      title="IVARA Resorts Khajuraho Location Map"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default EmbeddedMap;
