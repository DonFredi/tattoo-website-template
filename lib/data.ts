// ─── Design tokens (mirrored from Tailwind for runtime use) ───────────────────
export const colors = {
  bone: "#F0ECE4",
  void: "#0A0806",
  void2: "#13100D",
  void3: "#1C1714",
  gold: "#C9A96E",
  ember: "#8B3A2A",
  ash: "#9B9590",
} as const;

// ─── Site data ────────────────────────────────────────────────────────────────
export const SITE = {
  name: "Nova Ink",
  tagline: "Fine line and illustrative tattoo studio. London, by appointment.",
  artist: "Elara Nova",
  location: "Studio 14, Kimathi St, Nairobi City",
  email: "hello@novaink.studio",
  waitTime: "6–8 weeks",
  instagram: "https://instagram.com/novaink",
  twitter: "https://x.com/novaink",
} as const;

export const NAV_LINKS = [
  { label: "Studio", href: "#about" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
] as const;

export const SERVICES = [
  {
    numeral: "I",
    name: "Fine Line & Botanical",
    description:
      "Delicate, high-precision work rendered in single-needle or fine groupings. Florals, botanicals, landscapes at a smaller scale — things that whisper rather than shout.",
    price: "From Kshs 5000",
    priceSub: "Half-day sessions · 3–4 hours",
  },
  {
    numeral: "II",
    name: "Geometric & Blackwork",
    description:
      "Architectural precision meets organic intuition. Sacred geometry, mandala-derived forms, and high-contrast blackwork for clients who want presence and permanence.",
    price: "From Kshs 7500",
    priceSub: "Full-day sessions · 6–8 hours",
  },
  {
    numeral: "III",
    name: "Large-Scale Illustrative",
    description:
      "Full sleeves, back pieces, and statement bodywork. Long-term collaboration to develop a coherent, personal visual language across multiple sessions.",
    price: "From Kshs 10000 / session",
    priceSub: "Multi-session projects · Custom quote",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Enquiry",
    text: "Submit a request with your concept, placement, and approximate size. I respond within 72 hours with availability and a rough estimate.",
  },
  {
    step: "02",
    title: "Consultation",
    text: "A 45-minute conversation — in studio or via video — to dig into references, meaning, and how the piece will live on your body over time.",
  },
  {
    step: "03",
    title: "Design",
    text: "I develop the artwork and share a draft for feedback. Revisions are part of the process. We don't book a session until you love it on paper.",
  },
  {
    step: "04",
    title: "Session Day",
    text: "The studio is calm and private. I work slowly and intentionally. Aftercare guidance is provided in writing along with a healed-piece check-in at 8 weeks.",
  },
] as const;

export const TESTIMONIALS = [
  {
    text: "Elara didn't just tattoo what I asked for — she understood why I needed it. The piece honours my mother in a way I couldn't have articulated myself. That's the rarest thing.",
    name: "Imogen K.",
    piece: "Botanical memorial · Left forearm",
  },
  {
    text: "I've been collecting for 14 years across three continents. Elara is in a different category. The geometric piece she designed flows with my body in a way that took my breath away.",
    name: "Marcus T.",
    piece: "Sacred geometry · Full rib panel",
  },
  {
    text: "Three sessions into my sleeve and I can already see she's building something that will only get better. The patience, the communication, the absolute refusal to rush — this is craft.",
    name: "Rue S.",
    piece: "Illustrative sleeve · In progress",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Do you do walk-ins?",
    a: "No. Every piece I do is custom and requires a consultation first. This isn't gatekeeping — it's the only way to make something worth keeping.",
  },
  {
    q: "What's your deposit policy?",
    a: "A non-refundable deposit of 30% secures your booking date and covers design time. It's deducted from your final session cost.",
  },
  {
    q: "Do you tattoo cover-ups?",
    a: "Selectively. I take on cover-up work where the new design can fully honour what's beneath it. Send photos with your inquiry and I'll be honest about what's possible.",
  },
  {
    q: "Can I bring my own reference?",
    a: "Absolutely — references are essential. Bring anything that captures the feeling you're after. I'll translate it into something original rather than reproduce it directly.",
  },
  {
    q: "How do I prepare for my session?",
    a: "Eat a full meal beforehand, stay hydrated, wear clothing that gives easy access to the placement area, and arrive rested. Full prep notes are sent with your booking confirmation.",
  },
  {
    q: "What styles don't you work in?",
    a: "I don't do traditional American, Japanese Tebori, or colour realism. My work lives in fine line, illustrative, botanical, and blackwork — and I do those exceptionally well.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    title: "The Thistle & Moon",
    tag: "Fine Line · Botanical",
    layout: "tall-left",
    image: "/images/fine_line_botanical.jpg",
  },
  {
    title: "Sacred Geometry",
    tag: "Geometric · Blackwork",
    layout: "mid-center",
    image: "/images/geometric_blackwork.jpg",
  },
  {
    title: "The Moth Study",
    tag: "Illustrative · Fine Line",
    layout: "square-right",
    image: "/images/illustrative_fineline.jpg",
  },
  {
    title: "Compass Rose",
    tag: "Minimalist · Blackwork",
    layout: "square-left",
    image: "/images/minimalist.jpg",
  },
  {
    title: "Wave Study III",
    tag: "Fine Line · Abstract",
    layout: "wide-center",
    image: "/images/fine_line_abstract.jpg",
  },
  {
    title: "The Heart, Exposed",
    tag: "Illustrative · Anatomical",
    layout: "tall-right",
    image: "/images/illustrative_atomical.jpg",
  },
] as const;

export const MARQUEE_ITEMS = [
  "Fine Line",
  "Blackwork",
  "Neo-Traditional",
  "Botanical",
  "Geometric",
  "Portraiture",
  "Illustrative",
  "Minimalist",
  "Custom Design",
] as const;
