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
    title: "A Place Where <i class='text-primary'>Time Slows</i> & <i class='text-primary'>Every Detail Belongs</i>",
    cards: [
      {
        title: "Rooted in the Nature",
        description:
          "A serene 14-acre setting shaped by open landscapes, riverfront views, and the quiet beauty of the natural world.",
      },
      {
        title: "Inspired by the Heritage",
        description:
          "An experience enriched by the extraordinary architecture, artistry, and cultural legacy of Khajuraho",
      },
    ],
    description: [
      "Set along the serene landscapes of Khajuraho, IVARA Resorts is an expression of thoughtful hospitality, where the natural beauty of Central India meets the richness of its cultural heritage.",
      "Spread across 14 acres of tranquil surroundings, the resort is designed to offer more than a place to stay. It is a space to pause, reconnect, and discover the luxury of unhurried living.",
      "From private riverfront cottages to curated experiences and personalised service, every element reflects a simple philosophy: true luxury is not about excess, but about how a place makes you feel.",
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
      Discover a world of understated luxury at IVARA Resorts, where tranquil riverfront landscapes, thoughtfully designed cottages, and the timeless heritage of Khajuraho come together. An invitation to slow down, reconnect, and experience the extraordinary in complete privacy.
    `,
  },

  beginYourJourney: {
    title: "Moments Made for <i class='text-primary'>Living Well</i>",
    button: {
      label: "Begin Your Journey",
      link: "/",
    },
    cards: [
      {
        id: "01",
        title: "Refined Stays",
        image: "/gallery1.jpg",
        href: "/refined-living-spaces/",
        description: [
          "Thoughtfully designed rooms and suites offer a peaceful retreat with contemporary comforts, elegant interiors, and everything you need for a relaxed and memorable stay.",
        ],
      },

      {
        id: "02",
        title: "Leisure & Recreation",
        image: "/gallery3.jpg",
        href: "/holistic-wellness/",
        description: [
          "Make the most of unhurried days with refreshing poolside moments, golf, and recreational experiences designed to bring relaxation, enjoyment, and a little adventure to your stay.",
        ],
      },
      {
        id: "03",
        title: "Wellness",
        image: "/gallery6.jpg",
        href: "/experiences/",
        description: [
          "Reconnect with yourself through mindful yoga, wellness experiences, and fitness facilities designed to help you restore your energy and feel your best throughout your stay.",
        ],
      },

      {
        id: "04",
        title: "Dining",
        image: "/gallery4.jpg",
        href: "/farm-to-table/",
        description: [
          "Savour thoughtfully curated dining experiences where delicious flavours, inviting settings, and warm hospitality come together to make every meal a memorable occasion.",
        ],
      },
    ],
  },

  gettingHereSection: {
    title: "Getting <i class='text-primary'>here</i>",

    options: [
      {
        title: "Road",
        img: "/home/car-icon.png?v=2",
        description: "3 hours drive from Rishikesh\n2.5 hours drive from Mussoorie.",
      },

      {
        title: "Train",
        img: "/home/train-icon.png?v=2",
        description: "4 hours drive from Haridwar & Dehradun Railway Station.",
      },

      {
        title: "Air",
        img: "/home/plane-icon.png?v=2",
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
      "Where Every <i>Moment</i> Finds Its Own <i>Rhythm!</i>",
    description: "Where Heritage Meets the Art of Slow Living offers a balance of luxury, destination identity, and emotional appeal without sounding overly promotional.",
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
