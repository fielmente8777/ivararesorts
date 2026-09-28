import { contact } from "@/utils/constent";
import { AdjacentIcon } from "@/utils/landingIcon";

export const RoomsPageData = {
  heroSection: {
    title: "Refined Living <i>Spaces</i>",
    image: "/private-cottage1.jpg",
  },
  aboutUsSection: {
    title: `<span class='text-primary'>सर्वं खल्विदं ब्रह्म </span><br/> <i class='text-primary mr-2'>“Consciousness</i> is all there is. All is One, One is All!”`,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris aliquet lacinia nunc, ut efficitur risus tristique eu. Nullam cursus tellus id sapien gravida, at facilisis tellus ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis eu libero vulputate dignissim. Morbi efficitur risus vel justo feugiat, ac molestie nunc facilisis. Phasellus sit amet lacus id ligula convallis facilisis.",
    ],
  },
  roomsSection: {
    cards: [
      {
        title: "Private Cottages",
        subtitle: "Uncompromised Comfort",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod nunc ac turpis convallis, ut fermentum odio convallis.",
        ],
        images: [
          "/private-cottage1.jpg",
          "/private-cottage2.jpg",
          "/private-cottage3.jpg",
          "/private-cottage4.jpg",
          "/private-cottage5.jpg",
          "/private-cottage6.jpg",
          "/private-cottage9.jpg",
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
      // {
      //   title: "Machan / माचान",
      //   subtitle: "Perch Among The Clouds",
      //   description: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.",
      //   ],
      //   images: [
      //     "/rooms/Room-1/_DSC0749.webp",
      //     "/rooms/Room-1/_DSC0770.webp",
      //     "/rooms/Room-1/_DSC1083.webp",
      //     "/rooms/Room-1/_DSC0791.webp",
      //     "/rooms/Room-1/_DSC0866.webp",
      //     "/rooms/Room-1/_DSC0869.webp",
      //   ],
      //   slidingText: [
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Up to 2 Guests, extra bedding on request.",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "24 SQM of personal space",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Panoramic Valley View Room",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Top floor room with balcony",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "King-size bed",
      //     },
      //   ],
      //   buttons: [
      //     {
      //       label: "CALL NOW",
      //       href: contact.callCta,
      //     },
      //     {
      //       label: "BOOK YOUR STAY",
      //       href: contact.WhatsappCta,
      //     },
      //   ],
      //   // amenities: [
      //   //   {
      //   //     title: "Custom toiletry essentials",
      //   //     image: "/rooms/toiletries.png",
      //   //   },
      //   //   {
      //   //     title: "Wardrobe Facility",
      //   //     image: "/rooms/closet.png",
      //   //   },
      //   //   {
      //   //     title: "Sustainably sourced coffee and tea-making facility",
      //   //     image: "/rooms/coffee-cup.png",
      //   //   },
      //   //   {
      //   //     title: "Writing Desk",
      //   //     image: "/rooms/table.png",
      //   //   },
      //   //   {
      //   //     title: "Free High-Speed Wifi",
      //   //     image: "/rooms/internet.png",
      //   //   },
      //   // ],
      // },
      // {
      //   title: "Kaphal / काफल",
      //   subtitle: "An Earthly Refuge",
      //   description: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, justo ut pellentesque venenatis, purus velit lacinia sem, sed tempor est odio sit amet lectus.",
      //   ],
      //   images: [
      //     "/rooms/Room-3/_DSC0924.webp",
      //     "/rooms/Room-3/_DSC0936.webp",
      //     "/rooms/Room-3/_DSC0947.webp",
      //     "/rooms/Room-3/_DSC0965.webp",
      //     "/rooms/Room-3/_DSC0956.webp",
      //     "/rooms/Room-3/_DSC0962.webp",
      //     "/rooms/Room-3/_DSC0970.webp",
      //     "/rooms/Room-3/_DSC0980.webp",
      //     "/rooms/Room-3/_DSC0983.webp",
      //   ],
      //   // slidingText: [
      //   //   "Up to 2 Guests, extra bedding on request.",
      //   //   "24 SQM of personal space",
      //   //   "Panoramic Valley View Room",
      //   //   "Top floor room with balcony",
      //   //   "King-size bed",
      //   // ],
      //   slidingText: [
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Up to 2 Guests, extra bedding on request.",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "24 SQM of personal space",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Panoramic Valley View Room",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Top floor room with balcony",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "King-size bed",
      //     },
      //   ],
      //   buttons: [
      //     {
      //       label: "CALL NOW",
      //       href: contact.callCta,
      //     },
      //     {
      //       label: "BOOK YOUR STAY",
      //       href: contact.WhatsappCta,
      //     },
      //   ],
      //   // amenities: [
      //   //   {
      //   //     title: "Custom toiletry essentials",
      //   //     image: "/rooms/toiletries.png",
      //   //   },
      //   //   {
      //   //     title: "Wardrobe Facility",
      //   //     image: "/rooms/closet.png",
      //   //   },
      //   //   {
      //   //     title: "Sustainably sourced coffee and tea-making facility",
      //   //     image: "/rooms/coffee-cup.png",
      //   //   },
      //   //   {
      //   //     title: "Writing Desk",
      //   //     image: "/rooms/table.png",
      //   //   },
      //   //   {
      //   //     title: "Free High-Speed Wifi",
      //   //     image: "/rooms/internet.png",
      //   //   },
      //   // ],
      // },
      // {
      //   title: "Kaphal 2 & Kaphal 3",
      //   subtitle: "An Earthly Refuge",
      //   description: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel sapien non nibh vehicula luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, nunc vitae placerat elementum, erat lectus lobortis arcu, nec porta eros magna eu orci.",
      //   ],
      //   images: [
      //     "/rooms/Room-4/_DSC0992.webp",
      //     "/rooms/Room-4/_DSC0998.webp",
      //     "/rooms/Room-4/_DSC1001.webp",
      //     "/rooms/Room-4/_DSC1007.webp",
      //     "/rooms/Room-4/_DSC0992.webp",
      //     "/rooms/Room-4/_DSC0998.webp",
      //     "/rooms/Room-4/_DSC1001.webp",
      //     "/rooms/Room-4/_DSC1007.webp",
      //   ],
      //   // slidingText: [
      //   //   "Up to 2 Guests, extra bedding on request.",
      //   //   "24 SQM of personal space",
      //   //   "Panoramic Valley View Room",
      //   //   "Top floor room with balcony",
      //   //   "King-size bed",
      //   // ],
      //   slidingText: [
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Up to 2 Guests, extra bedding on request.",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "24 SQM of personal space",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Panoramic Valley View Room",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "Top floor room with balcony",
      //     },
      //     {
      //       icon: <AdjacentIcon />,
      //       title: "King-size bed",
      //     },
      //   ],
      //   buttons: [
      //     {
      //       label: "CALL NOW",
      //       href: contact.callCta,
      //     },
      //     {
      //       label: "BOOK YOUR STAY",
      //       href: contact.WhatsappCta,
      //     },
      //   ],
      //   // amenities: [
      //   //   {
      //   //     title: "Custom toiletry essentials",
      //   //     image: "/rooms/toiletries.png",
      //   //   },
      //   //   {
      //   //     title: "Wardrobe Facility",
      //   //     image: "/rooms/closet.png",
      //   //   },
      //   //   {
      //   //     title: "Sustainably sourced coffee and tea-making facility",
      //   //     image: "/rooms/coffee-cup.png",
      //   //   },
      //   //   {
      //   //     title: "Writing Desk",
      //   //     image: "/rooms/table.png",
      //   //   },
      //   //   {
      //   //     title: "Free High-Speed Wifi",
      //   //     image: "/rooms/internet.png",
      //   //   },
      //   // ],
      // },
    ],
  },
};
