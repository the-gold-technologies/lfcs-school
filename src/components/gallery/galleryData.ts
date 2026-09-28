export const galleryCategories = [
  "Campus & Facilities",
  "Classrooms",
  "Science Labs",
  "Early Years",
  "Sports & Fitness",
  "Arts & Culture",
  "Events & Achievements",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryImage = {
  src: string;
  caption: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  // Campus & Facilities
  { src: "/schools/Nizamuddinpura-Mau.webp", caption: "LFCS Nizamuddinpura, Mau", category: "Campus & Facilities" },
  { src: "/about/journey-lfis-mau.webp", caption: "LFIS, Mau", category: "Campus & Facilities" },
  { src: "/schools/Ghosi.webp", caption: "LFCS Ghosi campus and school transport", category: "Campus & Facilities" },
  { src: "/schools/Kasimabad.webp", caption: "LFCS Kasimabad campus", category: "Campus & Facilities" },
  { src: "/schools/Khalispur-Balia.webp", caption: "LFCS Kiriharapur, Ballia", category: "Campus & Facilities" },
  { src: "/schools/Sikatia-Mau.webp", caption: "LFCS Sikatiya, Mau", category: "Campus & Facilities" },
  { src: "/academics/facility/library.webp", caption: "Reading session in the school library", category: "Campus & Facilities" },
  { src: "/academics/facility/computer-lab.webp", caption: "Computer lab", category: "Campus & Facilities" },
  { src: "/experience/sports1.webp", caption: "Outdoor fitness area", category: "Campus & Facilities" },

  // Classrooms
  { src: "/home-page/skills1.webp", caption: "Smart classroom with interactive display", category: "Classrooms" },
  { src: "/academics/facility/digital-classroom.webp", caption: "Digital learning in the classroom", category: "Classrooms" },
  { src: "/home-page/Experience6.webp", caption: "Senior secondary classroom", category: "Classrooms" },
  { src: "/home-page/skills6.webp", caption: "Students on campus", category: "Campus & Facilities" },

  // Science Labs
  { src: "/academics/collabrative.webp", caption: "Physics practical session", category: "Science Labs" },
  { src: "/home-page/Experience2.webp", caption: "Biology lab", category: "Science Labs" },
  { src: "/home-page/Experience3.webp", caption: "Titration in the chemistry lab", category: "Science Labs" },
  { src: "/home-page/Experience5.webp", caption: "Observing slides under the microscope", category: "Science Labs" },
  { src: "/academics/practical.webp", caption: "Microscope practical", category: "Science Labs" },
  { src: "/home-page/skills2.webp", caption: "Physics experiment", category: "Science Labs" },
  { src: "/home-page/skills5.webp", caption: "Chemistry practical", category: "Science Labs" },
  { src: "/academics/independent.webp", caption: "Hands-on chemistry experiment", category: "Science Labs" },

  // Early Years
  { src: "/home-page/Experience1.webp", caption: "Tricycle time for our youngest learners", category: "Early Years" },
  { src: "/home-page/Experience4.webp", caption: "Play and activity room", category: "Early Years" },
  { src: "/home-page/Experience7.webp", caption: "Pre-primary classroom", category: "Early Years" },
  { src: "/academics/activity.webp", caption: "Activity-based learning in pre-primary", category: "Early Years" },
  { src: "/experience/art1.webp", caption: "Summer pool party", category: "Early Years" },

  // Sports & Fitness
  { src: "/home-page/skills3.webp", caption: "Kabaddi match", category: "Sports & Fitness" },
  { src: "/experience/sports2.webp", caption: "International Yoga Day", category: "Sports & Fitness" },

  // Arts & Culture
  { src: "/home-page/skills4.webp", caption: "Traditional dance performance", category: "Arts & Culture" },
  { src: "/experience/art2.webp", caption: "Cultural performance in costume", category: "Arts & Culture" },
  { src: "/experience/life1.webp", caption: "Rangoli made by students", category: "Arts & Culture" },
  { src: "/experience/life2.webp", caption: "Students' food festival", category: "Arts & Culture" },

  // Events & Achievements
  { src: "/home-page/Experience8.webp", caption: "Morning assembly", category: "Events & Achievements" },
  { src: "/home-page/Experience9.webp", caption: "Celebrating a competition win", category: "Events & Achievements" },
];
