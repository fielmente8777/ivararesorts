import { contact } from "@/utils/constent";
import {
  AcreRiverfrontIcon,
  AdjacentIcon,
  AirportIcon,
  AIStarIcon,
} from "@/utils/landingIcon";

export const homePageData = {
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
    images: ["/new-img/home/_DSC0475.webp", "/wellness/_DSC0395.webp"],
    subTitle: "Our STORY",
    title: "Named after the <i class='text-p22'>divine tears</i> of Shiva.",
    note: "Discover the Art of Slow Living in the Himalayas",
    cards: [
      {
        title: "Rooted in the Himalayas",
        description:
          "Every corner of Rudraksh reflects the mountains—from locally crafted spaces to organic gardens and timeless Garhwali hospitality.",
      },
      {
        title: "Made for Inner Quiet",
        description:
          "Wake to birdsong, practice yoga at sunrise, walk through forests, and embrace the rare luxury of genuine stillness.",
      },
    ],
    description: [
      "Perched above Tehri Lake, The Rudraksh is a boutique Himalayan sanctuary for those seeking genuine time in nature, restorative silence, and holistic wellbeing.",
      "Named after the sacred Rudraksh bead, a timeless symbol of clarity, protection, and inner balance, the retreat embraces a philosophy of mindful living where mountain landscapes, thoughtful hospitality, and moments of stillness come together in harmony.",
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

      {
        label: "Know More About Us",
        href: "/about-us",
      },
    ],
  },

  wisdom: {
    logo: "/home/logo.png",
    image: "/home/Gemini.png",
    description: `
      Your retreat begins even before check-in. A serene 300-meter walk through a canopy of Silver Oak and Rhododendron trees leads you to The Rudraksh Retreat, inviting you to slow down, unwind, and connect with the natural beauty that surrounds you.
    `,
  },

  beginYourJourney: {
    title: "Escape into <i class='text-p22'>Stillness</i>",
    button: {
      label: "Begin Your Journey",
      link: "/",
    },
    cards: [
      {
        id: "01",
        title: "Refined Living Spaces",
        image: "/new-img/home/dji_141926.webp",
        href: "/refined-living-spaces/",
        description: [
          "A serene escape with eight crafted guestrooms, set against the Himalayas and overlooking peaceful Tehri Lake. Rudraksh Retreat is a space to unwind, rejuvenate, and restore inner balance.",
        ],
      },

      {
        id: "02",
        title: "Holistic Wellness",
        image: "/new-img/home/_DSC1190-Edit.webp",
        href: "/holistic-wellness/",
        description: [
          "Sat-cit-ānanda / सच्चिदानन्द",
          "sat (सत्): Being, Existence",
          "cit (चित्): Consciousness or Spirit",
          "ānanda (आनन्द): Happiness, Joy, Bliss",
          "Experience Sat-cit-ānanda with our curated offerings. Designed to detox, de-stress, and rejuvenate, our spa treatment, guided yoga sessions, and mindful nature walks.",
        ],
      },
      {
        id: "03",
        title: "Mindful Trekking Retreats",
        image: "/home/lftrgt-im.jpg",
        href: "/experiences/",
        description: [
          "Pause, and reconnect with the natural world at The Rudraksh.",
          " Perched on a hill, away from the city’s hustle, embark on hikes through lush forests, explore local villages, capture Himalayan biodiversity, or camp under the clear, starry skies.",
        ],
      },

      {
        id: "04",
        title: "Farm To Table",
        image: "/home/lftrgt-img4.jpg",
        href: "/farm-to-table/",
        description: [
          "अन्नं ब्रह्म रसो विष्णुः",
          "भोक्ता देवो महेश्वरः",
          " Creative energy in the food is Brahma. Nourishing energy in the body is Vishnu. Transformation of food into pure consciousness is Shiva.",
          "Experience farm-to-table dining with fresh, organic, locally sourced ingredients straight from our garden to your plate. Enjoy a vegetarian-inspired menu that celebrates the natural flavors of the earth.",
        ],
      },
    ],
  },

  gettingHereSection: {
    title: "Getting <i class='text-p22'>here</i>",

    options: [
      {
        title: "Road",
        img: "/home/car-icon.png",
        description: `
          3 hours drive from Rishikesh
          2.5 hours drive from Mussoorie.
        `,
      },

      {
        title: "Train",
        img: "/home/train-icon.png",
        description: `
          4 hours drive from Haridwar & Dehradun Railway Station.
        `,
      },

      {
        title: "Air",
        img: "/home/plane-icon.png",
        description: `
          3 hours drive from Dehradun Airport.
        `,
      },
    ],
  },
  experienceSection: {
    title: "Explore Our <i class='text-p22'>Experiences</i>",
    items: [
      {
        title: "Mindfull trekking retreats",
        image: "/blogs/service2-prlx.jpg",
      },

      {
        title: "Ayurvedic cooking classes",
        image: "/blogs/WhatsApp-Image-2025-05-13-at-2.03.56-PM-scaled.jpeg",
      },
      {
        title: "Sustainability and local support",
        image: "/blogs/1-e1747165008992.png",
      },
    ],
  },
  storiesSection: {
    title: "Stories Of <i class='text-primary'>Satisfaction</i>",
    reviews: [
      {
        title: "Heaven on earth.",
        description:
          "Rudraksh is a place that can only be described one way. Magic. This place has all the amenities one can imagine, but what makes it so good are its owners. Mahesh, Roopali and Shubhang make you feel at home and like one of their family. The food is simply spectacular. Fresh, organic and delicious. The rooms are very comfortable and have an amazing mountain view. I recommend this place for those who want to know a piece of heaven on earth.",

        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Luis Felipe F",
        image: "/home/review1.jpg",
      },
      {
        title: "Deep in the Himalayas: A Remote and Authentic Retreat",
        description: `
         Experience the Himalayas in their purest form. This secluded sanctuary provides a genuine mountain escape, complete with stunning lake vistas, organic meals, and a dedicated staff. The quiet, clean atmosphere and remote location create an unforgettable, immersive experience.A multi-day stay is highly recommended.
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "SK Singh",
        image: "/home/review2.jpeg",
      },
      {
        title: "An incredible experience",
        description: `
          An incredible experience! The hotel itself is already wonderful, but the warmth and care from Mahesh and his family made us feel truly welcomed. Every detail was carefully thought out. I will carry these memories in my heart! Amaizing!!!!
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Priscila Z",
        image: "/home/review3.jpeg",
      },
      {
        title: "Don't hesitate. Just book a room!",
        description: `
          Go! Just go. It was the highlight of my month-long first time trip to India. These 2 reviews give a wonderfully detailed and accurate description of the place, that I don't need to repeat. (Anjita Shroff wrote a review Feb 2024) (Kim Sands wrote a review Jan 2024). I'll add that the owners have made a real commitment to being a responsible part of the community, hiring local people, helping teach the local people about products they can grow and helping them to find a market for them, partnering with the schools, etc. My favorite part of the stay was the quiet (hearing the chant of morning puja from the valley as the sun rose), and the joy watching some young schoolgirls do a folk dance. Again, just go!
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "Erin R",
        image: "/home/review4.jpeg",
      },
      {
        title: "🌸 The Best Retreat Experience 🌸",
        description: `
          Rudraksha Retreat is a peaceful, nature-filled escape surrounded by mountains. The cozy cottages, beautiful gardens, and tranquil atmosphere make it perfect for yoga, meditation, and relaxation. The food is homely and delicious. The host and staff were exceptionally friendly and the warm hospitality made us feel truly at home. 🥰❤️Thank you 🙏🏻Mahesh ji and Roopali ji, for your kindness and care!
          SHRI ❤️ GANESH
        `,
        href: "https://www.tripadvisor.in/Hotel_Review-g25181975-d25136174-Reviews-The_Rudraksh_A_Himalayan_Retreat-Selur_Tehri_Garhwal_District_Uttarakhand.html",
        author: "645shrir",
        image: "/home/review5.jpeg",
      },
    ],

    button: {
      label: "Book Your Stay",
      link: "https://bookings.therudrakshretreat.com/?propertyId=8699",
    },
  },

  blogsSection: {
    blogs: [
      {
        title: "Best Winter Locations in Uttarakhand",

        description: `
          Best Winter Locations in Uttarakhand – The Rudraksh Retreat Nestled amidst the Himalayan foothills, The Rudraksh Retreat is among the best winter locations in Uttarakhand for travelers seeking a perfect blend of luxury, tranquility, and nature.
        `,

        button: {
          label: "Read More",
          link: "https://therudrakshretreat.com/news/best-winter-locations-in-uttarakhand/",
        },
      },

      {
        title: "Best offbeat Resort in india",

        description: `
          Offbeat Resort in India for Peaceful and Luxury Travel Choosing an offbeat resort in India is the perfect way to escape crowded tourist destinations and experience nature in its purest form.
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
          Nestled in the peaceful Himalayan foothills of Uttarakhand, The Rudraksh Retreat stands out as one of the best yoga retreats in India.
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
    description: "A place to pause, reconnect, and simply be",
    image: "/new-img/home/dji_20260624.webp",
    // image: "/G48095455.png",
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
