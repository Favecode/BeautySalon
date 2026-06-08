const NIGERIAN_IMAGES = {
  hero: "https://images.pexels.com/photos/29258125/pexels-photo-29258125.jpeg?auto=compress&cs=tinysrgb&w=1600",
  makeupSession: "https://images.pexels.com/photos/20444522/pexels-photo-20444522.jpeg?auto=compress&cs=tinysrgb&w=1200",
  traditionalMakeup: "https://images.pexels.com/photos/12177245/pexels-photo-12177245.jpeg?auto=compress&cs=tinysrgb&w=1200",
  lagosPortrait: "https://images.pexels.com/photos/32839776/pexels-photo-32839776.jpeg?auto=compress&cs=tinysrgb&w=1200",
  salonPortrait: "https://images.pexels.com/photos/18500476/pexels-photo-18500476.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const SERVICES = [
  { label: "Signature Facial", price: "NGN 15,000", desc: "Deep cleansing, exfoliation, and hydration for calm luminous skin.", img: NIGERIAN_IMAGES.salonPortrait },
  { label: "Hair Care", price: "NGN 8,000", desc: "Cuts, conditioning treatments, silk press styling, and scalp care.", img: NIGERIAN_IMAGES.lagosPortrait },
  { label: "Body Polish", price: "NGN 12,000", desc: "Full-body exfoliation and rich moisture wraps for soft, glowing skin.", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80" },
  { label: "Makeup Artistry", price: "NGN 20,000", desc: "Fresh everyday glam, evening looks, and camera-ready event makeup.", img: NIGERIAN_IMAGES.makeupSession },
  { label: "Henna Detail", price: "NGN 6,000", desc: "Traditional and modern henna designs finished with elegant detail.", img: NIGERIAN_IMAGES.traditionalMakeup },
  { label: "Bridal Package", price: "NGN 80,000", desc: "Hair, makeup, skin prep, and touch-up care for your wedding day.", img: NIGERIAN_IMAGES.hero },
  { label: "Waxing & Threading", price: "NGN 9,500", desc: "Gentle hair removal services focused on comfort and smooth results.", img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80" },
  { label: "Spa Escape", price: "NGN 35,000", desc: "A full-day reset with massage, facial, body care, and quiet recovery.", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=700&q=80" },
];

const TEAM = [
  { name: "Sophia Laurent", role: "Lead Makeup Artist", exp: "10 yrs", bio: "Bridal and editorial specialist known for soft glam and polished skin.", img: NIGERIAN_IMAGES.hero },
  { name: "Amara Osei", role: "Nail Artist", exp: "7 yrs", bio: "Gel design expert who balances statement looks with healthy nails.", img: NIGERIAN_IMAGES.lagosPortrait },
  { name: "Clara Reeves", role: "Skincare Specialist", exp: "9 yrs", bio: "Aesthetician focused on restorative routines and long-term skin clarity.", img: NIGERIAN_IMAGES.salonPortrait },
  { name: "Nadia Chen", role: "Hair Stylist", exp: "12 yrs", bio: "Colourist and stylist who creates movement, shape, and healthy shine.", img: NIGERIAN_IMAGES.makeupSession },
];

const BLOGS = [
  { title: "5 Skincare Tips to Glow Through Harmattan Season", excerpt: "Our estheticians share routines that keep skin hydrated when the air turns dry.", img: NIGERIAN_IMAGES.salonPortrait, date: "May 20, 2026", cat: "Skincare" },
  { title: "Choosing Foundation for Your Undertone", excerpt: "A simple studio guide to shade matching that looks natural in real light.", img: NIGERIAN_IMAGES.traditionalMakeup, date: "May 12, 2026", cat: "Makeup" },
  { title: "The Bridal Hair and Makeup Checklist", excerpt: "From trial appointments to final touch-up kits, here is how to prepare.", img: NIGERIAN_IMAGES.hero, date: "April 30, 2026", cat: "Bridal" },
];

const REVIEWS = [
  { name: "Fatima Bello", rating: 5, text: "The bridal package exceeded every expectation. Sophia made me feel calm, radiant, and completely cared for.", img: NIGERIAN_IMAGES.hero },
  { name: "Adaeze Okonkwo", rating: 5, text: "Clara transformed my skin in just three sessions. The service felt personal from start to finish.", img: NIGERIAN_IMAGES.salonPortrait },
  { name: "Blessing Eze", rating: 5, text: "Nadia listened carefully and gave me the best haircut I have ever had. I left feeling brand new.", img: NIGERIAN_IMAGES.lagosPortrait },
];

const STORY_IMGS = [
  NIGERIAN_IMAGES.makeupSession,
  NIGERIAN_IMAGES.traditionalMakeup,
  NIGERIAN_IMAGES.lagosPortrait,
  NIGERIAN_IMAGES.salonPortrait,
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
  NIGERIAN_IMAGES,
};
