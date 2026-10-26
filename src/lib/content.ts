// All site copy and portfolio data lives here — edit to replace placeholders.
import hero from "@/assets/hero.jpg";
import fashion from "@/assets/p-fashion.jpg";
import documentary from "@/assets/p-documentary.jpg";
import portrait from "@/assets/p-portrait.jpg";
import wedding from "@/assets/p-wedding.jpg";
import travel from "@/assets/p-travel.jpg";
import commercial from "@/assets/p-commercial.jpg";
import photographer from "@/assets/photographer.jpg";

export const site = {
  name: "Ketiyeron Solomon",
  descriptor: "Photographer & Cinematographer",
  location: "Addis Ababa, Asko",
  email: "ketiyeron@gmail.com",
  phone: "0991670751",
  phoneHref: "tel:+251991670751",
  instagram: "https://instagram.com/",
  instagramHandle: "",
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
  { slug: "portraits", name: "Portraits", description: "Quiet, honest studies of people.", image: portrait },
  { slug: "fashion", name: "Fashion & Editorial", description: "Light, form and movement for the page.", image: fashion },
  { slug: "weddings", name: "Weddings & Celebrations", description: "The unposed hours of a day that matters.", image: wedding },
  { slug: "documentary", name: "Documentary", description: "Everyday life, observed patiently.", image: documentary },
  { slug: "travel", name: "Travel & Landscape", description: "Places at the edge of the map.", image: travel },
  { slug: "commercial", name: "Commercial & Brand", description: "Imagery with a point of view.", image: commercial },
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
    slug: "rust-and-stone",
    title: "Rust & Stone",
    category: "fashion",
    year: 2026,
    location: "Lalibela",
    cover: fashion,
    ratio: "portrait",
    summary: "An editorial built on hard noon light and a single colour.",
    story: [
      "We worked only between eleven and one, when the sun sits directly overhead and shadows become graphic shapes rather than soft gradients.",
      "The wardrobe was reduced to a single rust tone so that the stone, the fabric and the light could carry the entire story.",
    ],
    gallery: [fashion, commercial, portrait],
  },
  {
    slug: "the-morning-market",
    title: "The Morning Market",
    category: "documentary",
    year: 2025,
    location: "Simien Highlands",
    cover: documentary,
    ratio: "landscape",
    summary: "Three dawns spent among traders arriving before the mist lifts.",
    story: [
      "The market begins in darkness. By the time the first light reaches the valley floor, most of the day's trade is already done.",
      "I returned on three consecutive mornings, so that by the third, nobody was looking at the camera anymore.",
    ],
    gallery: [documentary, travel, portrait],
  },
  {
    slug: "window-light",
    title: "Window Light",
    category: "portraits",
    year: 2025,
    location: "Addis Ababa",
    cover: portrait,
    ratio: "portrait",
    summary: "A series of portraits made with a single window and no flash.",
    story: [
      "Each sitting lasted as long as a cup of coffee. One window, one chair, and a conversation that slowly forgot the camera.",
    ],
    gallery: [portrait, photographer, fashion],
  },
  {
    slug: "under-the-lights",
    title: "Under the Lights",
    category: "weddings",
    year: 2024,
    location: "Bishoftu",
    cover: wedding,
    ratio: "landscape",
    summary: "A garden wedding that only truly began after sunset.",
    story: [
      "The ceremony was beautiful, but the story was on the lawn after dark, when the string lights came on and nobody was performing anymore.",
    ],
    gallery: [wedding, documentary, commercial],
  },
  {
    slug: "salt-roads",
    title: "Salt Roads",
    category: "travel",
    year: 2024,
    location: "Danakil Depression",
    cover: travel,
    ratio: "portrait",
    summary: "Following a caravan across one of the hottest places on earth.",
    story: [
      "We walked with the caravan before dawn, when the salt is still cool and the sky turns the colour of the inside of a shell.",
    ],
    gallery: [travel, documentary, hero],
  },
  {
    slug: "the-ceremony",
    title: "The Ceremony",
    category: "commercial",
    year: 2023,
    location: "Studio, Addis Ababa",
    cover: commercial,
    ratio: "square",
    summary: "A campaign built around the ritual of coffee.",
    story: [
      "The brief asked for warmth and patience. We built a set from a single table and let the steam do the rest.",
    ],
    gallery: [commercial, fashion, portrait],
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
    slug: "a-cup-of-coffee-long",
    title: "A portrait session the length of a cup of coffee",
    date: "2026-08-14",
    cover: portrait,
    excerpt: "Why I keep portrait sittings short, quiet and unhurried.",
    body: [
      "Most of the portraits I care about were made in the last five minutes of a session, after everyone had relaxed.",
      "So I started designing sessions around that moment: one window, one chair, and no more time than it takes to finish a coffee together.",
      "The constraint does something useful. Nobody has time to perform, and so they stop trying.",
    ],
  },
  {
    slug: "notes-from-the-salt-flats",
    title: "Notes from the salt flats",
    date: "2026-03-02",
    cover: travel,
    excerpt: "A short diary from four days walking with a salt caravan.",
    body: [
      "Day one: the heat arrives before the sun does. We start walking at three in the morning.",
      "Day three: I have stopped trying to photograph the landscape. It is too big. I photograph the rope between two camels instead.",
    ],
  },
  {
    slug: "working-with-hard-light",
    title: "Learning to love hard light",
    date: "2025-11-20",
    cover: fashion,
    excerpt: "Notes on shooting at noon, and why I stopped waiting for golden hour.",
    body: [
      "Hard light is honest. It shows texture, makes shapes, and refuses to flatter.",
      "On Rust & Stone, we leaned into it entirely — and the shadows became part of the wardrobe.",
    ],
  },
];

export const readingTime = (a: Article) =>
  Math.max(1, Math.round(a.body.join(" ").split(/\s+/).length / 200));

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export const socialGallery = [documentary, fashion, portrait, travel, wedding, commercial];
