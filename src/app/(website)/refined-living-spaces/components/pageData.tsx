import { contact } from "@/utils/constent";
import { AdjacentIcon } from "@/utils/landingIcon";

export const RoomsPageData = {
  heroSection: {
    title: "Refined Living <i>Spaces</i>",
    image: "/rooms/bnr-new.webp",
  },
  aboutUsSection: {
    title: `<span class='text-primary'>सर्वं खल्विदं ब्रह्म </span><br/> <i class='text-p22 mr-2'>“Consciousness</i> is all there is. All is One, One is All!”`,
    description: [
      "‘Sarvam Khalu Idam Brahma’, is the belief that all existence is interconnected and divine. At Rudraksh Retreat, every corner resonates with this profound wisdom, where our 8 crafted villas are thoughtfully designed to immerse you in the serenity of nature. Here, you are not just a guest but part of the retreat's living spirit, where the calmness of nature and the warmth of our spaces inspire a deeper connection with your inner self.",
      "Our two exclusive stays are Angan and Machan, where our rooms are named after Uttarakhand's sacred blooms: Buransh, Shiuli, Fyonli, and Tesu, embracing a minimalist, nature-inspired elegance that reflects the natural beauty of the region.",
    ],
  },
  roomsSection: {
    cards: [
      {
        title: "Angan / आँगन ",
        subtitle: "An Earthly Refuge",
        description: [
          "The Angan brings you closer to the Earth’s nurturing energy.It offers a spacious and airy ambiance, blending indoor comfort with outdoors beauty, gathering your experiences around a shared garden courtyard. ",
          "Designed to enhance freedom, these rooms invite natural light and provide open views of the surrounding landscape.",
        ],
        images: [
          "/rooms/room-2/_DSC0803.webp",
          "/rooms/room-2/_DSC0821.webp",
          "/rooms/room-2/_DSC0833.webp",
          "/rooms/room-2/_DSC1070.webp",
          "/rooms/room-2/_DSC0836.webp",
          "/rooms/room-2/_DSC0875.webp",
          "/rooms/room-2/_DSC0884.webp",
        ],
        // slidingText: [
        //   "Up to 2 Guests, extra bedding on request.",
        //   "24 SQM of personal space",
        //   "Ground floor of the villa with shared garden access.",
        //   "Garden View Room with Partial view of Bhagirathi River.",
        //   "King-size bed",
        // ],
        slidingText: [
          {
            icon: <AdjacentIcon />,
            title: "Up to 2 Guests, extra bedding on request.",
          },
          {
            icon: <AdjacentIcon />,
            title: "24 SQM of personal space",
          },
          {
            icon: <AdjacentIcon />,
            title: "Panoramic Valley View Room",
          },
          {
            icon: <AdjacentIcon />,
            title: "Top floor room with balcony",
          },
          {
            icon: <AdjacentIcon />,
            title: "King-size bed",
          },
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.WhatsappCta,
          },
        ],
        amenities: [
          {
            title: "Custom toiletry essentials",
            image: "/rooms/toiletries.png",
          },
          {
            title: "Wardrobe facility",
            image: "/rooms/closet.png",
          },

          {
            title: "Writing desk",
            image: "/rooms/table.png",
          },
          {
            title: "Free high-speed wifi",
            image: "/rooms/internet.png",
          },
          {
            title: "Coffee & tea-making facility",
            image: "/rooms/coffee-cup.png",
          },
        ],
      },
      {
        title: "Machan / माचान",
        subtitle: "Perch Among The Clouds",
        description: [
          "The Machan rooms immerse you in nature’s panoramic views. These rooms elevate into the treetops, they provide a unique connection with the surrounding wilderness. With their open layouts and balconies, these rooms invite natural light and showcase scenic views of the Himalayas and the Bhagirathi River, blending comfort with privacy.",
          "Suspended above ground, the Machan rooms offers a secluded, peaceful retreat where luxury meets nature. Ideal for those seeking solitude and inspiration, the Machan rooms provide quiet reflection amid breathtaking views.",
        ],
        images: [
          "/rooms/Room-1/_DSC0749.webp",
          "/rooms/Room-1/_DSC0770.webp",
          "/rooms/Room-1/_DSC1083.webp",
          "/rooms/Room-1/_DSC0791.webp",
          "/rooms/Room-1/_DSC0866.webp",
          "/rooms/Room-1/_DSC0869.webp",
        ],
        slidingText: [
          {
            icon: <AdjacentIcon />,
            title: "Up to 2 Guests, extra bedding on request.",
          },
          {
            icon: <AdjacentIcon />,
            title: "24 SQM of personal space",
          },
          {
            icon: <AdjacentIcon />,
            title: "Panoramic Valley View Room",
          },
          {
            icon: <AdjacentIcon />,
            title: "Top floor room with balcony",
          },
          {
            icon: <AdjacentIcon />,
            title: "King-size bed",
          },
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.WhatsappCta,
          },
        ],
        // amenities: [
        //   {
        //     title: "Custom toiletry essentials",
        //     image: "/rooms/toiletries.png",
        //   },
        //   {
        //     title: "Wardrobe Facility",
        //     image: "/rooms/closet.png",
        //   },
        //   {
        //     title: "Sustainably sourced coffee and tea-making facility",
        //     image: "/rooms/coffee-cup.png",
        //   },
        //   {
        //     title: "Writing Desk",
        //     image: "/rooms/table.png",
        //   },
        //   {
        //     title: "Free High-Speed Wifi",
        //     image: "/rooms/internet.png",
        //   },
        // ],
      },
      {
        title: "Kaphal / काफल",
        subtitle: "An Earthly Refuge",
        description: [
          "Named after the beloved Himalayan Bayberry, Kaphal is a fruit deeply rooted in the traditions of Uttarakhand, admired for its natural sweetness and connection to the mountains. Just like its namesake, Kaphal 1 offers an authentic Himalayan stay—warm, peaceful, and immersed in nature.",
          "Ideal for solo travellers or couples, this thoughtfully designed room combines comfort with simplicity. Located on the lower level of the retreat, it provides easier accessibility while opening towards breathtaking east-facing Himalayan views. Step onto the spacious shared deck, enjoy the fresh mountain air, and wake to the first rays of sunlight illuminating the valley.",
        ],
        images: [
          "/rooms/Room-3/_DSC0924.webp",
          "/rooms/Room-3/_DSC0936.webp",
          "/rooms/Room-3/_DSC0947.webp",
          "/rooms/Room-3/_DSC0965.webp",
          "/rooms/Room-3/_DSC0956.webp",
          "/rooms/Room-3/_DSC0962.webp",
          "/rooms/Room-3/_DSC0970.webp",
          "/rooms/Room-3/_DSC0980.webp",
          "/rooms/Room-3/_DSC0983.webp",
        ],
        // slidingText: [
        //   "Up to 2 Guests, extra bedding on request.",
        //   "24 SQM of personal space",
        //   "Panoramic Valley View Room",
        //   "Top floor room with balcony",
        //   "King-size bed",
        // ],
        slidingText: [
          {
            icon: <AdjacentIcon />,
            title: "Up to 2 Guests, extra bedding on request.",
          },
          {
            icon: <AdjacentIcon />,
            title: "24 SQM of personal space",
          },
          {
            icon: <AdjacentIcon />,
            title: "Panoramic Valley View Room",
          },
          {
            icon: <AdjacentIcon />,
            title: "Top floor room with balcony",
          },
          {
            icon: <AdjacentIcon />,
            title: "King-size bed",
          },
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.WhatsappCta,
          },
        ],
        // amenities: [
        //   {
        //     title: "Custom toiletry essentials",
        //     image: "/rooms/toiletries.png",
        //   },
        //   {
        //     title: "Wardrobe Facility",
        //     image: "/rooms/closet.png",
        //   },
        //   {
        //     title: "Sustainably sourced coffee and tea-making facility",
        //     image: "/rooms/coffee-cup.png",
        //   },
        //   {
        //     title: "Writing Desk",
        //     image: "/rooms/table.png",
        //   },
        //   {
        //     title: "Free High-Speed Wifi",
        //     image: "/rooms/internet.png",
        //   },
        // ],
      },
      {
        title: "Kaphal 2 & Kaphal 3",
        subtitle: "An Earthly Refuge",
        description: [
          "Designed for families, friends, and small groups, Kaphal 2 & Kaphal 3 create a flexible retreat that balances togetherness with privacy. These interconnected rooms can be enjoyed individually or combined, offering generous living space while maintaining the warmth and intimacy of a Himalayan home.",
          "Positioned on the lower level, both rooms feature easier accessibility and open towards the same spectacular east-facing mountain vistas. Gather on the expansive shared deck, enjoy quiet mornings overlooking the Himalayas, and experience the calm rhythm of mountain life surrounded by nature.",
        ],
        images: [
          "/rooms/Room-4/_DSC0992.webp",
          "/rooms/Room-4/_DSC0998.webp",
          "/rooms/Room-4/_DSC1001.webp",
          "/rooms/Room-4/_DSC1007.webp",
          "/rooms/Room-4/_DSC0992.webp",
          "/rooms/Room-4/_DSC0998.webp",
          "/rooms/Room-4/_DSC1001.webp",
          "/rooms/Room-4/_DSC1007.webp",
        ],
        // slidingText: [
        //   "Up to 2 Guests, extra bedding on request.",
        //   "24 SQM of personal space",
        //   "Panoramic Valley View Room",
        //   "Top floor room with balcony",
        //   "King-size bed",
        // ],
        slidingText: [
          {
            icon: <AdjacentIcon />,
            title: "Up to 2 Guests, extra bedding on request.",
          },
          {
            icon: <AdjacentIcon />,
            title: "24 SQM of personal space",
          },
          {
            icon: <AdjacentIcon />,
            title: "Panoramic Valley View Room",
          },
          {
            icon: <AdjacentIcon />,
            title: "Top floor room with balcony",
          },
          {
            icon: <AdjacentIcon />,
            title: "King-size bed",
          },
        ],
        buttons: [
          {
            label: "CALL NOW",
            href: contact.callCta,
          },
          {
            label: "BOOK YOUR STAY",
            href: contact.WhatsappCta,
          },
        ],
        // amenities: [
        //   {
        //     title: "Custom toiletry essentials",
        //     image: "/rooms/toiletries.png",
        //   },
        //   {
        //     title: "Wardrobe Facility",
        //     image: "/rooms/closet.png",
        //   },
        //   {
        //     title: "Sustainably sourced coffee and tea-making facility",
        //     image: "/rooms/coffee-cup.png",
        //   },
        //   {
        //     title: "Writing Desk",
        //     image: "/rooms/table.png",
        //   },
        //   {
        //     title: "Free High-Speed Wifi",
        //     image: "/rooms/internet.png",
        //   },
        // ],
      },
    ],
  },
};
