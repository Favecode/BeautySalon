const SERVICES = [
  { label: "Signature Facial", price: "NGN 15,000", desc: "Deep cleansing, exfoliation, and hydration for calm luminous skin.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80" },
  { label: "Hair Care", price: "NGN 8,000", desc: "Cuts, conditioning treatments, silk press styling, and scalp care.", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80" },
  { label: "Body Polish", price: "NGN 12,000", desc: "Full-body exfoliation and rich moisture wraps for soft, glowing skin.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80" },
  { label: "Makeup Artistry", price: "NGN 20,000", desc: "Fresh everyday glam, evening looks, and camera-ready event makeup.", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80" },
  { label: "Henna Detail", price: "NGN 6,000", desc: "Traditional and modern henna designs finished with elegant detail.", img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=700&q=80" },
  { label: "Bridal Package", price: "NGN 80,000", desc: "Hair, makeup, skin prep, and touch-up care for your wedding day.", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80" },
  { label: "Waxing & Threading", price: "NGN 9,500", desc: "Gentle hair removal services focused on comfort and smooth results.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80" },
  { label: "Spa Escape", price: "NGN 35,000", desc: "A full-day reset with massage, facial, body care, and quiet recovery.", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&q=80" },
];

const TEAM = [
  { name: "Sophia Laurent", role: "Lead Makeup Artist", exp: "10 yrs", bio: "Bridal and editorial specialist known for soft glam and polished skin.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80" },
  { name: "Amara Osei", role: "Nail Artist", exp: "7 yrs", bio: "Gel design expert who balances statement looks with healthy nails.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80" },
  { name: "Clara Reeves", role: "Skincare Specialist", exp: "9 yrs", bio: "Aesthetician focused on restorative routines and long-term skin clarity.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80" },
  { name: "Nadia Chen", role: "Hair Stylist", exp: "12 yrs", bio: "Colourist and stylist who creates movement, shape, and healthy shine.", img: "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=500&q=80" },
];

const BLOGS = [
  { title: "5 Skincare Tips to Glow Through Harmattan Season", excerpt: "Our estheticians share routines that keep skin hydrated when the air turns dry.", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80", date: "May 20, 2026", cat: "Skincare" },
  { title: "Choosing Foundation for Your Undertone", excerpt: "A simple studio guide to shade matching that looks natural in real light.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80", date: "May 12, 2026", cat: "Makeup" },
  { title: "The Bridal Hair and Makeup Checklist", excerpt: "From trial appointments to final touch-up kits, here is how to prepare.", img: "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=700&q=80", date: "April 30, 2026", cat: "Bridal" },
];

const REVIEWS = [
  { name: "Fatima Bello", rating: 5, text: "The bridal package exceeded every expectation. Sophia made me feel calm, radiant, and completely cared for.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80" },
  { name: "Adaeze Okonkwo", rating: 5, text: "Clara transformed my skin in just three sessions. The service felt personal from start to finish.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80" },
  { name: "Blessing Eze", rating: 5, text: "Nadia listened carefully and gave me the best haircut I have ever had. I left feeling brand new.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80" },
];

const STORY_IMGS = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80",
  "https://images.unsplash.com/photo-1560066984-138daaa0a74d?w=700&q=80",
];

const NAV_PAGES = ["Home", "About", "Services", "Team", "Contact"];
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
