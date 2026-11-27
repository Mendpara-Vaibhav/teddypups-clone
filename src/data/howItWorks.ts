export const DUBAI_STEPS = [
  {
    step: "Step 1",
    title: "Explore our puppies",
    description:
      "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.",
  },
  {
    step: "Step 2",
    title: "Choose your puppy",
    description:
      "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions.",
  },
  {
    step: "Step 3",
    title: "Meet before you choose",
    description: "Spend time bonding before making your decision.",
  },
  {
    step: "Step 4",
    title: "Pick-up or delivery",
    description:
      "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably.",
  },
] as const;

export const IMPORTED_STEPS = [
  {
    step: "Step 1",
    title: "Reserve your puppy",
    description:
      "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences.",
  },
  {
    step: "Step 2",
    title: "Personalized consultation",
    description:
      "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey.",
  },
  {
    step: "Step 3",
    title: "Import and arrival",
    description:
      "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family.",
  },
  {
    step: "Step 4",
    title: "Welcome home",
    description:
      "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home.",
  },
] as const;

export const PROMISE_ITEMS = [
  {
    title: "Hand-selected breeders",
    description:
      "We work only with breeders who uphold the highest ethical and health standards.",
  },
  {
    title: "Full transparency",
    description:
      "Photos, videos, and health certificates are shared before your puppy travels.",
  },
  {
    title: "Safe, stress-free delivery",
    description:
      "We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.",
  },
] as const;

export const DELIVERY_CARDS = [
  {
    title: "Take your puppy home the same day",
    description:
      "Local puppies are available immediately — visit, fall in love, and go home together.",
  },
  {
    title: "Delivery within Dubai",
    description:
      "Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.",
  },
  {
    title: "Safe international cargo",
    description:
      "We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.",
  },
  {
    title: "Worldwide delivery",
    description:
      "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.",
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    title: "International cargo",
    description:
      "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance.",
  },
  {
    title: "Support 24/7",
    description:
      "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away.",
  },
  {
    title: "Health guarantee",
    description:
      "All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.",
  },
] as const;

export const HOW_IT_WORKS_TABS = {
  dubai: {
    tabLabel: "In Dubai — meet in person",
    title: "Meet your puppy in person",
    description:
      "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies so you can meet, play, and pick the companion that truly fits your family.",
    badges: ["Downtown Dubai · showroom", "Available same day"],
    primaryCta: { label: "Browse puppies in Dubai", href: "/puppies?origin=local" },
    secondaryCta: { label: "Message us on WhatsApp" },
    steps: [
      {
        num: "1",
        title: "Browse available puppies",
        description:
          "View photos, breed details, age, and health information for puppies ready to meet locally.",
      },
      {
        num: "2",
        title: "Book or drop by",
        description:
          "Reach out on WhatsApp or visit our Downtown Dubai showroom at a time that suits your family.",
      },
      {
        num: "3",
        title: "Bond face-to-face",
        description:
          "Spend relaxed, unhurried time meeting your puppy in person before making your decision.",
      },
      {
        num: "4",
        title: "Take your puppy home",
        description:
          "Head home the same day with full vet paperwork, or have your puppy delivered safely to your door in Dubai.",
      },
    ],
  },
  imported: {
    tabLabel: "Imported — order upon request",
    title: "Order upon request",
    description:
      "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.",
    badges: ["Korea & Europe · partner breeders", "End-to-end concierge"],
    primaryCta: {
      label: "View imported breeds",
      href: "/puppies?origin=imported",
    },
    secondaryCta: { label: "Request a breed on WhatsApp" },
    steps: [
      {
        num: "1",
        title: "Share your dream breed",
        description:
          "Browse our teacup collection or tell us your preferred breed, coat, and size so we can match you with trusted partner breeders.",
      },
      {
        num: "2",
        title: "Photos & health updates",
        description:
          "Receive verified photos, videos, and licensed vet health certificates before your puppy prepares for travel.",
      },
      {
        num: "3",
        title: "Safe, gentle travel",
        description:
          "We handle import permits, vaccinations, customs clearance, and comfortable arrival in Dubai or worldwide.",
      },
      {
        num: "4",
        title: "Ongoing 24/7 support",
        description:
          "Once your puppy arrives home, our team stays available 24/7 for feeding, settling-in, and care guidance.",
      },
    ],
  },
} as const;
