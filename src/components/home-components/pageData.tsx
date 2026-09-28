import { contact } from "@/utils/constent";
import {
  AcreRiverfrontIcon,
  AdjacentIcon,
  AirportIcon,
  AIStarIcon,
} from "@/utils/landingIcon";

export const homePageData = {
  banner: {
    tag: "A 14-Acre Riverfront Sanctuary · Khajuraho",
    title: "Luxury Resort in Khajuraho, Anchored in Heritage",
    description: "",
    images: [
      "/images/img1.jpg",
      "/images/img2.jpg",
      "/images/img3.jpg",
      "/images/img4.jpg",
    ],
    benefits: "Save 15% when you book direct · Free cancellation on most dates*",
  },
  heroSection: {
    title: "A Journey <i>Awaits</i>",
    video: "/videos/heroSection.mp4",
    videoPoster: "/videos/heroSection.png",
  },
  slidingText: [
    {
      icon: <AIStarIcon />,
      title: "Himalayan Yoga",
    },
    {
      icon: <AcreRiverfrontIcon />,
      title: "Tehri Lake Panoramas",
    },
    {
      icon: <AirportIcon />,
      title: "Ayurvedic Healing",
    },
    {
      icon: <AdjacentIcon />,
      title: "Farm-to-Table Sattvic",
    },
    {
      icon: <AdjacentIcon />,
      title: "Zero-Pollution Stargazing",
    },
  ],
  about: {
    images: ["/website/new-image2.webp", "/website/new-image4.webp"],
    subTitle: "Our STORY",
    title: "Named after the <i class='text-primary'>divine tears</i> of Shiva.",
    note: "Discover the Art of Slow Living in the Himalayas",
    cards: [
      {
        title: "Rooted in the Himalayas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Made for Inner Quiet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      },
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nunc, ut efficitur risus tristique eu. Nullam cursus tellus id sapien gravida, at facilisis tellus ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel turpis eu libero vulputate dignissim. Morbi efficitur risus vel justo feugiat, ac molestie nunc facilisis.",
    ],
    listsText: [
      "Family Hosted",
      "Organic Vegetarian & Vegan Meals",
      "<span class='font-body'>11</span> Rooms",
      "Holistic Wellness",
    ],
    buttons: [
      {
        label: "CALL NOW",
        href: contact.callCta,
      },

      // {
      //   label: "Know More About Us",
      //   href: "/about-us",
      // },
    ],
  },

  wisdom: {
    logo: "/logo.png",
    image: "/landing-page/banner.png",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet lacus id ligula convallis facilisis. Sed ac nisi ut neque tempor ultrices non vel massa.
    `,
  },

  beginYourJourney: {
    title: "Escape into <i class='text-primary'>Stillness</i>",
    button: {
      label: "Begin Your Journey",
      link: "/",
    },
    cards: [
      {
        id: "01",
        title: "Refined Living Spaces",
        image: "/gallery1.jpg",
        href: "/refined-living-spaces/",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus euismod nunc ac turpis convallis, ut fermentum odio convallis.",
        ],
      },

      {
        id: "02",
        title: "Holistic Wellness",
        image: "/gallery3.jpg",
        href: "/holistic-wellness/",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, justo ut pellentesque venenatis, purus velit lacinia sem, sed tempor est odio sit amet lectus.",
        ],
      },
      {
        id: "03",
        title: "Mindful Trekking Retreats",
        image: "/gallery4.jpg",
        href: "/experiences/",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, nunc vitae placerat elementum, erat lectus lobortis arcu, nec porta eros magna eu orci.",
        ],
      },

      {
        id: "04",
        title: "Farm To Table",
        image: "/gallery6.jpg",
        href: "/farm-to-table/",
        description: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel sapien non nibh vehicula luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        ],
      },
    ],
  },

  gettingHereSection: {
    title: "Getting <i class='text-primary'>here</i>",

    options: [
      {
        title: "Road",
        img: "/home/car-icon.png",
        description: "3 hours drive from Rishikesh\n2.5 hours drive from Mussoorie.",
      },

      {
        title: "Train",
        img: "/home/train-icon.png",
        description: "4 hours drive from Haridwar & Dehradun Railway Station.",
      },

      {
        title: "Air",
        img: "/home/plane-icon.png",
        description: "3 hours drive from Dehradun Airport.",
      },
    ],
  },
  experienceSection: {
    title: "Explore Our <i class='text-primary'>Experiences</i>",
    items: [
      {
        title: "Mindfull trekking retreats",
        image: "/images/img5.jpg",
      },

      {
        title: "Ayurvedic cooking classes",
        image: "/images/img8.jpg",
      },
      {
        title: "Sustainability and local support",
        image: "/images/img7.jpg",
      },
    ],
  },
  storiesSection: {
    title: "Stories Of <i class='text-primary'>Satisfaction</i>",
    reviews: [
      {
        title: "Heaven on earth.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",

        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Luis Felipe F",
        image: "/images/img1.jpg",
      },
      {
        title: "Deep in the Himalayas: A Remote and Authentic Retreat",
        description: `
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "SK Singh",
        image: "/images/img2.jpg",
      },
      {
        title: "An incredible experience",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Priscila Z",
        image: "/images/img3.jpg",
      },
      {
        title: "Don't hesitate. Just book a room!",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Erin R",
        image: "/images/img4.jpg",
      },
      {
        title: "🌸 The Best Retreat Experience 🌸",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "645shrir",
        image: "/images/img5.jpg",
      },
    ],

    button: {
      label: "Book Your Stay",
      link: contact.WhatsappCta,
    },
  },

  blogsSection: {
    blogs: [
      {
        title: "Best Winter Locations in Uttarakhand",

        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/best-winter-locations-in-uttarakhand/",
        },
      },

      {
        title: "Best offbeat Resort in india",

        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/offbeat-resort-in-india/",
        },
      },

      {
        title:
          "Why The Rudraksh Retreat Is Among the Best Yoga Retreats in India",

        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/why-the-rudraksh-retreat-is-among-the-best-yoga-retreats-in-india/",
        },
      },
    ],
  },

  enquirySection: {
    title: "Limited Availability",
    subtitle:
      "In the <i>Himalayas</i>, doing less often means experiencing <i>more!</i>",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/gallery19.jpg",
    buttons: [
      {
        label: "Check Availability",
        href: contact.WhatsappCta,
      },

      {
        label: "Plan Your Stay",
        href: "/contact-us",
      },
    ],
  },
};
