import type { Product } from "./cart";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import perfume6 from "@/assets/perfume-6.jpg";
import perfume7 from "@/assets/perfume-7.jpg";
import perfume8 from "@/assets/perfume-8.jpg";
import perfume9 from "@/assets/perfume-9.jpg";
import perfume10 from "@/assets/perfume-10.jpg";
import perfume11 from "@/assets/perfume-11.jpg";
import perfume12 from "@/assets/perfume-12.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Amber Elixir",
    brand: "Clutch & Co.",
    price: 4500,
    description: "A warm, intoxicating blend of amber, vanilla, and sandalwood.",
    image: perfume1,
    category: "Woody / Amber",
    stock: 12,
  },
  {
    id: "2",
    name: "Noir Velvet",
    brand: "Clutch & Co.",
    price: 5800,
    description: "Deep oud and smoky leather with a hint of dark rose.",
    image: perfume2,
    category: "Woody / Oud",
    stock: 8,
  },
  {
    id: "3",
    name: "Rose Pétale",
    brand: "Clutch & Co.",
    price: 3900,
    description: "Delicate Bulgarian rose, peony, and soft musk.",
    image: perfume3,
    category: "Floral",
    stock: 15,
  },
  {
    id: "4",
    name: "Aqua Celeste",
    brand: "Clutch & Co.",
    price: 3200,
    description: "Fresh ocean breeze, bergamot, and white cedar.",
    image: perfume4,
    category: "Fresh / Aquatic",
    stock: 0,
  },
  {
    id: "5",
    name: "Oud Royal",
    brand: "Clutch & Co.",
    price: 8500,
    description: "Rare oud, saffron, and 24k gold-infused amber.",
    image: perfume5,
    category: "Oriental / Oud",
    stock: 5,
  },
  {
    id: "6",
    name: "Citrus Garden",
    brand: "Clutch & Co.",
    price: 2800,
    description: "Vibrant lemon, green tea, and aromatic herbs.",
    image: perfume6,
    category: "Fresh / Citrus",
    stock: 20,
  },
  {
    id: "7",
    name: "Lavande Royale",
    brand: "Clutch & Co.",
    price: 4200,
    description: "French lavender, iris root, and warm cashmere wood.",
    image: perfume7,
    category: "Aromatic / Floral",
    stock: 10,
  },
  {
    id: "8",
    name: "Blanc Absolu",
    brand: "Clutch & Co.",
    price: 3600,
    description: "Clean white musk, lily of the valley, and sheer cotton.",
    image: perfume8,
    category: "Fresh / Musk",
    stock: 18,
  },
  {
    id: "9",
    name: "Sultan's Gold",
    brand: "Clutch & Co.",
    price: 12000,
    description: "Opulent Arabian oud, rose attar, and golden amber resin.",
    image: perfume9,
    category: "Oriental / Luxury",
    stock: 3,
  },
  {
    id: "10",
    name: "Crimson Passion",
    brand: "Clutch & Co.",
    price: 5200,
    description: "Fiery saffron, red pepper, and smoky incense.",
    image: perfume10,
    category: "Spicy / Oriental",
    stock: 7,
  },
  {
    id: "11",
    name: "Vanille Dorée",
    brand: "Clutch & Co.",
    price: 3400,
    description: "Madagascar vanilla, tonka bean, and caramel praline.",
    image: perfume11,
    category: "Gourmand / Sweet",
    stock: 14,
  },
  {
    id: "12",
    name: "Tobacco & Leather",
    brand: "Clutch & Co.",
    price: 6800,
    description: "Rich tobacco leaf, supple leather, and aged whiskey.",
    image: perfume12,
    category: "Woody / Leather",
    stock: 6,
  },
];
