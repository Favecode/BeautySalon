const SERVICES = [
  { label: "Premium Facial", price: "₦15,000", desc: "Deep cleansing and hydration treatment for luminous skin.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80" },
  { label: "Hair Care", price: "₦8,000", desc: "Expert cuts, conditioning treatments and scalp care.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80" },
  { label: "Body Care", price: "₦12,000", desc: "Full-body scrubs and moisturising wraps for silky skin.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80" },
  { label: "Makeup", price: "₦20,000", desc: "Flawless event and everyday makeup by certified artists.", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80" },
  { label: "Henna Art", price: "₦6,000", desc: "Intricate traditional and contemporary henna designs.", img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80" },
  { label: "Bridal Package", price: "₦80,000", desc: "Complete bridal glam including hair, makeup and nails.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80" },
  { label: "Hair Removal", price: "₦9,500", desc: "Safe, gentle waxing and threading services.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80" },
  { label: "Spa Package", price: "₦35,000", desc: "Full-day relaxation combining massage, facial and body care.", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&q=80" },
];

const TEAM = [
  { name: "Sophia Laurent", role: "Makeup Artist", exp: "10 yrs", bio: "Bridal and editorial makeup specialist who believes every face tells a unique story.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" },
  { name: "Amara Osei", role: "Nails Artist", exp: "7 yrs", bio: "Creative nail technician passionate about intricate gel art and nail health.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
  { name: "Clara Reeves", role: "Skincare Specialist", exp: "9 yrs", bio: "Certified aesthetician dedicated to transforming skin through science and care.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Nadia Chen", role: "Hair Stylist", exp: "12 yrs", bio: "Expert colourist and stylist who transforms hair with precision and creativity.", img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=400&q=80" },
];

const BLOGS = [
  { title: "5 Skincare Tips to Glow Through Harmattan Season", excerpt: "Dry air strips moisture fast. Our experts share the routines that keep skin radiant no matter the weather.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80", date: "May 20, 2026", cat: "Skincare" },
  { title: "How to Choose the Right Foundation for Your Skin Tone", excerpt: "Matching foundation to your undertone changes everything. Our artists break down the process step by step.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", date: "May 12, 2026", cat: "Makeup" },
  { title: "The Ultimate Bridal Hair & Makeup Checklist", excerpt: "From your first trial to the big day touch-up kit — here is everything you need to prepare.", img: "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=600&q=80", date: "April 30, 2026", cat: "Bridal" },
];

const REVIEWS = [
  { name: "Fatima Bello", rating: 5, text: "The bridal package exceeded every expectation. Sophia made me feel like royalty on my wedding day. Professional, warm and incredibly talented.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80" },
  { name: "Adaeze Okonkwo", rating: 5, text: "Clara transformed my skin in just three sessions. My acne scars have faded significantly — I now leave the house without foundation!", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80" },
  { name: "Blessing Eze", rating: 5, text: "Nadia gave me the best haircut I've ever had. She listened carefully and delivered something that suited my face shape perfectly.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" },
];

const STORY_IMGS = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80",
  "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=500&q=80",
];

const NAV_PAGES = ["Home", "About Us", "Services", "Our Team", "Contact Us"];
const PAGE_KEYS = ["home", "about", "services", "team", "contact"];

export {
  SERVICES,
  TEAM,
  BLOGS,
  REVIEWS,
  STORY_IMGS,
  NAV_PAGES,
  PAGE_KEYS,
};