import g1 from "@/assets/gallery/g1.jpg"
import g2 from "@/assets/gallery/g2.jpg"
import g3 from "@/assets/gallery/g3.jpg"
import g4 from "@/assets/gallery/g4.jpg"
import g5 from "@/assets/gallery/g5.jpg"
import g6 from "@/assets/gallery/g6.jpg"
import g7 from "@/assets/gallery/g7.jpg"
import g8 from "@/assets/gallery/g8.jpg"
import g9 from "@/assets/gallery/g9.jpg"

// All site copy and portfolio data lives here — edit to replace placeholders.
import hero from "@/assets/hero.jpg";
import fashion from "@/assets/p-fashion.jpg";
import documentary from "@/assets/p-documentary.jpg";
import portrait from "@/assets/p-portrait.jpg";
import wedding from "@/assets/p-wedding.jpg";
import travel from "@/assets/p-travel.jpg";
import commercial from "@/assets/p-commercial.jpg";
import photographer from "@/assets/photographer.jpg";
import photographer2 from "@/assets/p-commercial2.jpg";
import photographer3 from "@/assets/p-commercial3.jpg";
import photographer4 from "@/assets/p-commercial4.jpg";
import photographer5 from "@/assets/p-commercial5.jpg";
import photographer6 from "@/assets/p-commercial6.jpg";
import photographer7 from "@/assets/p-commercial7.jpg";
import photographer8 from "@/assets/p-commercial8.jpg";
import photographer9 from "@/assets/p-commercial9.jpg";
import photographer_1 from "@/assets/p-commercial_1.jpg";
import portrait1 from "@/assets/portrait1.jpg";
import portrait2 from "@/assets/portrait2.jpg";
import portrait3 from "@/assets/portrait3.jpg";
import portrait4 from "@/assets/portrait4.jpg";
import portrait5 from "@/assets/portrait5.jpg";
import portrait6 from "@/assets/portrait6.jpg";
import portrait7 from "@/assets/portrait7.jpg";
import portrait8 from "@/assets/portrait8.jpg";
import portrait9 from "@/assets/portrait9.jpg";
import morning1 from "@/assets/p-travel.jpg";
import morning2 from "@/assets/morning.jpg";
import morning3 from "@/assets/morning1.jpg";
import morning4 from "@/assets/morning3.jpg";
import morning5 from "@/assets/morning5.jpg";
import morning6 from "@/assets/morning6.jpg";
import melat1 from "@/assets/melat.jpg"
import melat2 from "@/assets/melat2.jpg"
import melat3 from "@/assets/melat3.jpg"
import melat4 from "@/assets/melat4.jpg"
import melat5 from "@/assets/melat5.jpg"
import melat6 from "@/assets/melat6.jpg"
import melat7 from "@/assets/melat7.jpg"
import melat8 from "@/assets/melat8.jpg"
import melat9 from "@/assets/melat9.jpg"
import melat10 from "@/assets/melat10.jpg"
import melat11 from "@/assets/melat11.jpg"
import melat12 from "@/assets/melat12.jpg"
import g91 from "@/assets/g9.jpg"
import video from "@/assets/Matiwos & Melat 1.mp4"

// I skipped the imports but all the necessary imports are there.
export const site = {
  name: "Ketiyeron Solomon",
  descriptor: "Photographer & Cinematographer",
  location: "Addis Ababa, Asko",
  email: "ketiyeron@gmail.com",
  phone: "0991670751",
  phoneHref: "tel:+251991670751",
  instagram: "https://instagram.com/keti40058",
  instagramHandle: "",
  Telegram : "https://t.me/lionproduction1000",
  TelegramHandle: "Lion Production",
  availability: "Available for selected projects",
  intro: "A photographer and cinematographer with experience across podcasts, short films, music videos and weddings — proficient in camera operation, gimbal movement and editing, and dedicated to creating visually compelling stories.",
  creativity: "A visionary storyteller who uses cinematography to translate abstract concepts into unforgettable visual experiences — through innovative lighting schemes and dynamic framing, where every shot pushes the boundaries of emotional impact and narrative depth.",
  education: [{ years: "2022–2023", school: "TOM Film School" }],
  skills: ["Camera operation", "Gimbal movement", "Editing", "Photography", "Problem solving", "Copywriting", "Digital marketing"],
};

export const images = { hero, photographer };

export type Category =
  | "portraits"
  | "fashion"
  | "weddings"
  | "documentary"
  | "travel"
  | "commercial";

export const categories: { slug: Category; name: string; description: string; image: string }[] = [
  { slug: "portraits", name: "Portraits", description: "Quiet, honest studies of people.", image: portrait4 },
  { slug: "fashion", name: "Fashion & Editorial", description: "Light, form and movement for the page.", image: fashion },
  { slug: "weddings", name: "Weddings & Celebrations", description: "The unposed hours of a day that matters.", image: wedding }
];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: number;
  location: string;
  cover: string;
  ratio: "portrait" | "landscape" | "square";
  summary: string;
  story: string[];
  gallery: string[];
};


export const projects: Project[] = [
  {
    slug: "chruch-shoots",
    title: "Church Shoots",
    category: "portraits",
    year: 2025,
    location: "Addis Ababa",
    cover: portrait,
    ratio: "portrait",
    summary:
      "Sacred moments of worship, prayer, and devotion captured during live church programs.",
    story: [
      "Amid prayers, hymns, and raised hands, each frame reflects the quiet faith and spiritual devotion woven into Ethiopian church life.",
    ],
    gallery: [
      portrait,
      portrait7,
      portrait4,
      portrait1,
      portrait3,
      g91,
      portrait2,
      portrait5,
      portrait6,
      portrait7,
      portrait8,
      portrait9,
    ],
  },
  {
    slug: "T&M-wedding",
    title: "T & M Wedding",
    category: "weddings",
    year: 2026,
    location: "Ashewa Meda",
    cover: wedding,
    ratio: "landscape",
    summary:
      "An Ethiopian wedding filled with blessings, family, tradition, and a love celebrated beneath the evening lights.",
    story: [
      "From heartfelt blessings to joyful dancing, every moment carried the warmth of family, the beauty of tradition, and the promise of a shared life.",
    ],
    gallery: [
      wedding,
      documentary,
      photographer9,
      commercial,
      photographer2,
      photographer3,
      photographer4,
      photographer5,
      photographer6,
      photographer7,
      photographer_1,
    ],
  },
  {
    slug: "wedding-memories",
    title: "Wedding Frames",
    category: "weddings",
    year: 2025,
    location: "Addis Abeba",
    cover: travel,
    ratio: "landscape",
    summary:
      "A summer wedding celebrating enduring love, family blessings, and the joyful spirit of Ethiopian tradition.",
    story: [
      "Surrounded by loved ones, the couple began their journey with prayers, embraces, and the vibrant celebration of two families becoming one.",
      "From tender glances to joyful dancing, every photograph preserves the warmth, faith, and memories of their special day.",
    ],
    gallery: [morning1, morning2, morning6, morning4, morning5, morning3,travel],
  },
  {
    slug: "M&M-wedding",
    title: "Melat & Mati's Wedding",
    category: "fashion",
    year: 2025,
    location: "Jemo Micheal",
    cover: melat7,
    ratio: "portrait",
    summary:
      "Melat and Matiyas celebrate a sacred union shaped by love, family blessings, and Ethiopian wedding traditions.",
    story: [
      "Their day brought together two families in a celebration of devotion, tradition, and the blessing of a life shared together.",
      "Through quiet glances, heartfelt embraces, and joyful celebration, each frame preserves the beauty and meaning of their beginning.",
    ],
    gallery: [
      
      melat7,
      melat2,
      melat3,
      melat7,
      melat5,
      melat6,
      melat7,
      melat8,
      melat9,
      melat10,
      melat11,
      melat12,
    ],
  },
];

export const services = [
  { name: "Weddings", description: "Photo and film coverage of weddings and celebrations.", expect: "Unobtrusive coverage, smooth gimbal footage, and a carefully edited final story." },
  { name: "Music Videos", description: "Cinematography for artists, from concept to final cut.", expect: "Creative lighting, dynamic framing and camera movement built around the song." },
  { name: "Short Films", description: "Camera operation and cinematography for narrative short films.", expect: "Shots designed for emotional impact and narrative depth." },
  { name: "Podcasts", description: "Multi-camera podcast filming and editing.", expect: "Clean, well-lit setups and an edit ready to publish." },
  { name: "Photography", description: "Portrait, event and brand photography.", expect: "Considered direction and a curated edit of finished images." },
];

export const process = [
  { n: "01", title: "Discover", text: "Understand your goals, ideas and visual direction." },
  { n: "02", title: "Plan", text: "Agree on the concept, location, schedule and practical details." },
  { n: "03", title: "Create", text: "Capture the photographs with care and attention to the story." },
  { n: "04", title: "Deliver", text: "Edit and deliver the final images according to the agreed scope." },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  body: string[];
};


export const articles: Article[] = [
  {
    slug: "Faith in Every Frame",
    title: "Faith in Every Frame",
    date: "2026-08-14",
    cover: portrait4,
    excerpt:
      "Finding the beauty of faith in Ethiopian worship, quiet prayers, and sacred moments.",
    body: [
      "Some of the most meaningful moments happen between prayers, when the church grows quiet and faith speaks without words.",
      "Through the camera, I began to notice the details: hands lifted in worship, faces filled with devotion, and the gentle light falling across a place of prayer.",
      "Photography became more than documenting a moment. It became a way to preserve the faith, hope, and spiritual beauty woven into everyday Ethiopian church life.",
    ],
  },
  {
    slug: "Where Tradition Meets Blessing",
    title: "Where Tradition Meets Blessing",
    date: "2026-03-02",
    cover: travel,
    excerpt:
      "A reflection on Ethiopian wedding traditions, family blessings, and the beginning of a shared life.",
    body: [
      "Every Ethiopian wedding carries a story beyond the couple: the prayers of parents, the gathering of families, and traditions passed from one generation to the next.",
      "Through every embrace, blessing, and joyful dance, I found more than beautiful photographs. I found the meaning of belonging, faith, and a love celebrated by an entire community.",
    ],
  },
  {
    slug: "The Beauty of Sacred Light",
    title: "The Beauty of Sacred Light",
    date: "2025-11-20",
    cover: fashion,
    excerpt:
      "Discovering how light, shadow, and stillness can reveal the beauty of a moment.",
    body: [
      "Light has a language of its own. It falls across faces, reveals quiet details, and turns ordinary moments into something unforgettable.",
      "In Ethiopian churches and celebrations, I learned to embrace the light as it comes, allowing every shadow and ray to tell its own story of faith, culture, and human connection.",
    ],
  },
];

export const readingTime = (a: Article) =>
  Math.max(1, Math.round(a.body.join(" ").split(/\s+/).length / 200));

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// export const socialGallery = [g1, g2, g3, g4, g5, g6, g7, g8, g9]
export const socialGallery = [
  "src/assets/gallery/g10.jpg",

  "src/assets/gallery/g2.jpg",
  "src/assets/gallery/g3.jpg",
  "src/assets/gallery/g4.jpg",
  "src/assets/gallery/g5.jpg",
  "src/assets/gallery/g6.jpg",
  "src/assets/gallery/g7.jpg",
  "src/assets/gallery/g8.jpg",
  "src/assets/gallery/g9.jpg",
  "src/assets/gallery/g1.jpg",

];