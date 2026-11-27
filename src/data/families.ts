export const TESTIMONIALS = [
  {
    quote:
      "TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.",
    author: "Sarah M., Dubai, UAE",
  },
] as const;

export type FamilyPhoto = {
  id: string;
  image: string;
  alt: string;
  caption?: string;
};

const ALL_FAMILY_MEDIA_PATHS: string[] = [
  "/images/families/family-01.jpeg",
  "/images/families/family-02.jpeg",
  "/images/families/family-03.jpeg",
  "/images/families/family-04.jpeg",
  "/images/families/family-05.jpeg",
  "/images/families/family-06.jpeg",
  "/images/families/family-07.jpg",
  "/images/families/family-08.jpg",
  "/images/families/family-09.jpg",
  "/images/families/family-10.jpg",
  "/images/families/family-11.jpg",
  "/images/families/family-12.jpg",
  "/images/families/family-13.jpg",
  "/images/families/family-14.jpg",
  "/images/families/family-15.jpg",
  "/images/families/family-16.jpg",
  "/images/families/family-17.jpg",
  "/images/families/family-18.jpg",
  "/images/families/family-19.jpg",
  "/images/families/family-20.jpg",
  "/images/families/family-21.jpeg",
  "/images/families/family-22.jpg",
  "/images/families/family-23.jpg",
  "/images/families/family-24.jpg",
  "/images/families/family-25.jpg",
  "/images/families/family-26.jpg",
  "/images/families/family-27.jpg",
  "/images/families/family-28.jpg",
  "/images/families/family-29.jpeg",
  "/images/families/family-30.jpeg",
  "/images/families/family-31.jpeg",
  "/images/families/family-32.jpg",
  "/images/families/family-33.jpg",
  "/images/families/family-34.jpg",
  "/images/families/family-35.jpg",
  "/images/families/family-36.jpg",
  "/images/families/family-37.jpg",
  "/images/families/family-38.jpg",
  "/images/families/family-39.jpg",
  "/images/families/family-40.jpg",
  "/images/families/family-41.jpg",
  "/images/families/family-42.jpeg",
  "/images/families/family-43.jpeg",
  "/images/families/family-44.jpg",
  "/images/families/family-45.jpg",
  "/images/families/family-46.jpg",
  "/images/families/family-47.jpg",
  "/images/families/family-48.jpg",
  "/images/families/family-49.jpg",
  "/images/families/family-50.jpg",
  "/images/families/family-51.jpg",
  "/images/families/family-52.jpg",
  "/images/families/family-53.avif",
  "/images/families/family-54.jpg",
  "/images/families/family-55.jpg",
  "/images/families/family-56.jpg",
  "/images/families/family-57.jpg",
  "/images/families/family-58.jpg",
  "/images/families/family-59.jpg",
  "/images/families/family-60.jpg",
  "/images/families/family-61.avif",
  "/images/families/family-62.png",
  "/images/families/family-63.jpg",
  "/images/families/family-64.avif",
];

const FEATURED_CAPTIONS: Record<number, string> = {
  45: "Lulu 🧸 with her new mummy ❤️",
  46: "Adorable Maltipoo baby 🧸❤️",
  47: "My new teddy puppy 🥰🧸",
  48: "Our new puppies 🧸🥰🤗",
  49: "New puppy 🧸😍",
  50: "Gang of 3 😍🧸",
  51: "So happy 😍😍",
  58: "New pup 🤗💫",
};

export const FAMILY_PHOTOS: FamilyPhoto[] = ALL_FAMILY_MEDIA_PATHS.map(
  (image, i) => ({
    id: `family-${i + 1}`,
    image,
    alt: "A happy TeddyPups family with their new puppy",
    caption: FEATURED_CAPTIONS[i],
  })
);

export const HOME_WALL_PHOTOS: FamilyPhoto[] = [
  { ...FAMILY_PHOTOS[45], id: "wall-1" },
  { ...FAMILY_PHOTOS[46], id: "wall-2" },
  { ...FAMILY_PHOTOS[47], id: "wall-3" },
  { ...FAMILY_PHOTOS[48], id: "wall-4" },
  { ...FAMILY_PHOTOS[49], id: "wall-5" },
  { ...FAMILY_PHOTOS[50], id: "wall-6" },
  { ...FAMILY_PHOTOS[51], id: "wall-7" },
  { ...FAMILY_PHOTOS[58], id: "wall-8" },
];
