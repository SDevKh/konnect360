export type Exhibition = {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  city: string;
  venue: string;
  dates: string;
  dateShort: string;
  month: string;
  year: string;
  exhibitors: number;
  visitors: string;
  countries: number;
  categories: number;
  status: "Open for Booking" | "Almost Sold Out" | "Selling Fast" | "Waitlist";
  priceFrom: number;
  image: string;
  color: string;
  description: string;
};

export const exhibitions: Exhibition[] = [
  {
    slug: "automotive-components-expo-2026",
    name: "AUTOMOTIVE COMPONENTS EXPO",
    tagline: "Where the automotive supply chain meets its buyers.",
    industry: "Automotive & Mobility",
    city: "Mumbai",
    venue: "Bombay Exhibition Centre, Goregaon",
    dates: "14 — 16 November 2026",
    dateShort: "14—16 NOV",
    month: "Nov",
    year: "2026",
    exhibitors: 150,
    visitors: "12,000+",
    countries: 25,
    categories: 40,
    status: "Selling Fast",
    priceFrom: 85000,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
    color: "#FF3D00",
    description: "India's definitive platform for automotive components, EV systems, and aftermarket. 150+ exhibitors, OEM sourcing teams, and Tier-1 procurement heads under one roof.",
  },
  {
    slug: "textile-apparel-sourcing-2027",
    name: "TEXTILE & APPAREL SOURCING SHOW",
    tagline: "From fibre to finished garment — all in one hall.",
    industry: "Textile & Apparel",
    city: "New Delhi",
    venue: "India Expo Mart, Greater Noida",
    dates: "22 — 24 January 2027",
    dateShort: "22—24 JAN",
    month: "Jan",
    year: "2027",
    exhibitors: 220,
    visitors: "18,000+",
    countries: 32,
    categories: 28,
    status: "Open for Booking",
    priceFrom: 65000,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
    color: "#0F4C3A",
    description: "Connect with buying houses, exporters, mills and garment manufacturers. The sourcing destination for domestic and international apparel brands.",
  },
  {
    slug: "building-materials-interiors-2027",
    name: "BUILDING MATERIALS & INTERIORS",
    tagline: "Materials, surfaces and systems shaping modern India.",
    industry: "Construction & Interiors",
    city: "Bengaluru",
    venue: "BIEC, Tumkur Road",
    dates: "08 — 10 March 2027",
    dateShort: "08—10 MAR",
    month: "Mar",
    year: "2027",
    exhibitors: 180,
    visitors: "15,000+",
    countries: 18,
    categories: 35,
    status: "Open for Booking",
    priceFrom: 72000,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    color: "#1A1A2E",
    description: "For architects, developers, contractors and interior specifiers. Showcase surfaces, fittings, lighting, and building systems.",
  },
  {
    slug: "food-hospitality-india-2027",
    name: "FOOD & HOSPITALITY INDIA",
    tagline: "Taste, source, scale — the hospitality supply chain.",
    industry: "Food & Hospitality",
    city: "Mumbai",
    venue: "Jio World Convention Centre, BKC",
    dates: "18 — 20 February 2027",
    dateShort: "18—20 FEB",
    month: "Feb",
    year: "2027",
    exhibitors: 200,
    visitors: "20,000+",
    countries: 22,
    categories: 45,
    status: "Almost Sold Out",
    priceFrom: 95000,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    color: "#8B3A00",
    description: "HORECA owners, F&B buyers and hospitality groups source ingredients, equipment and packaging at India's most curated food trade show.",
  },
  {
    slug: "plastics-packaging-expo-2027",
    name: "PLASTICS & PACKAGING EXPO",
    tagline: "Sustainable packaging and plastics innovation.",
    industry: "Plastics & Packaging",
    city: "Chennai",
    venue: "Chennai Trade Centre",
    dates: "12 — 14 April 2027",
    dateShort: "12—14 APR",
    month: "Apr",
    year: "2027",
    exhibitors: 130,
    visitors: "10,000+",
    countries: 16,
    categories: 30,
    status: "Open for Booking",
    priceFrom: 58000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    color: "#003049",
    description: "Raw materials, machinery, and next-gen sustainable packaging — for FMCG, pharma and industrial buyers.",
  },
  {
    slug: "electronics-components-2027",
    name: "ELECTRONICS & COMPONENTS",
    tagline: "Components, circuits, and the ideas that connect them.",
    industry: "Electronics",
    city: "Pune",
    venue: "Auto Cluster Exhibition Centre",
    dates: "05 — 07 May 2027",
    dateShort: "05—07 MAY",
    month: "May",
    year: "2027",
    exhibitors: 110,
    visitors: "9,000+",
    countries: 20,
    categories: 25,
    status: "Open for Booking",
    priceFrom: 78000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    color: "#2D1B69",
    description: "EMS providers, component manufacturers and OEM buyers converge for India's focused electronics sourcing show.",
  },
];

export type Stall = {
  id: string;
  size: string;
  price: number;
  status: "available" | "reserved" | "booked" | "premium" | "held";
  zone: string;
  corner?: boolean;
};

export function generateStalls(): Stall[] {
  const stalls: Stall[] = [];
  const zones = ["A", "B", "C", "D"];
  const sizes = ["3×3", "3×6", "6×6"];
  const prices: Record<string, number> = { "3×3": 85000, "3×6": 155000, "6×6": 285000 };
  let idx = 0;
  for (const z of zones) {
    for (let i = 1; i <= 8; i++) {
      const size = i % 5 === 0 ? "6×6" : i % 3 === 0 ? "3×6" : "3×3";
      const r = Math.random();
      let status: Stall["status"] = "available";
      if (r < 0.22) status = "booked";
      else if (r < 0.30) status = "reserved";
      else if (r < 0.36) status = "premium";
      else if (r < 0.40) status = "held";
      stalls.push({
        id: `${z}${String(i).padStart(2, "0")}`,
        size,
        price: prices[size],
        status,
        zone: z,
        corner: i === 1 || i === 8,
      });
      idx++;
    }
  }
  return stalls;
}

export const pastExhibitions = [
  {
    year: "2025",
    name: "AUTOMOTIVE EXPO 2025",
    city: "Mumbai",
    venue: "Bombay Exhibition Centre, Goregaon",
    exhibitors: 142,
    visitors: "11,200",
    meetings: "3,420",
    sqm: "9,800",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    ],
    testimonial: "We met 73 qualified prospects and signed three distributor conversations during the exhibition.",
    author: "R. Mehta, Business Head — AutoComp Pvt Ltd",
    industry: "Automotive & Mobility",
    highlight: "3 OEM sourcing teams flew in from Germany & Japan",
  },
  {
    year: "2025",
    name: "TEXTILE SOURCING 2025",
    city: "New Delhi",
    venue: "India Expo Mart, Greater Noida",
    exhibitors: 198,
    visitors: "16,400",
    meetings: "4,100",
    sqm: "14,200",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    ],
    testimonial: "Our order book for Q2 was filled entirely from leads generated at the show.",
    author: "S. Kapoor, Director — Fabtrend Mills",
    industry: "Textile & Apparel",
    highlight: "32 international buying houses attended from 14 countries",
  },
  {
    year: "2024",
    name: "BUILDCON INDIA 2024",
    city: "Bengaluru",
    venue: "BIEC, Tumkur Road",
    exhibitors: 165,
    visitors: "13,800",
    meetings: "2,950",
    sqm: "11,500",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    ],
    testimonial: "The quality of architects and developers in attendance was exceptional.",
    author: "A. Shah, Founder — Surface Studio",
    industry: "Construction & Interiors",
    highlight: "₹420 Cr worth of project enquiries logged on the show floor",
  },
  {
    year: "2024",
    name: "FOOD & HOSPITALITY INDIA 2024",
    city: "Mumbai",
    venue: "Jio World Convention Centre, BKC",
    exhibitors: 187,
    visitors: "19,200",
    meetings: "5,300",
    sqm: "16,000",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80",
    ],
    testimonial: "Konnect 360 brought the right HORECA buyers. We closed 4 hotel chain deals on Day 2.",
    author: "P. Nair, MD — Spice Route Foods",
    industry: "Food & Hospitality",
    highlight: "Top 5 hotel chains in India sent procurement teams",
  },
  {
    year: "2023",
    name: "PACKTECH INDIA 2023",
    city: "Chennai",
    venue: "Chennai Trade Centre, Nandambakkam",
    exhibitors: 124,
    visitors: "9,600",
    meetings: "2,100",
    sqm: "8,400",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    ],
    testimonial: "Best packaging sourcing event in South India. We found two new suppliers in one afternoon.",
    author: "V. Krishnan, Procurement Head — PackPro Solutions",
    industry: "Plastics & Packaging",
    highlight: "First edition in Chennai — sold out 3 weeks before show day",
  },
  {
    year: "2023",
    name: "ELECTRONICS COMPONENTS EXPO 2023",
    city: "Pune",
    venue: "Auto Cluster Exhibition Centre",
    exhibitors: 98,
    visitors: "8,100",
    meetings: "1,840",
    sqm: "6,200",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    ],
    testimonial: "The EMS and OEM buyer mix was exactly what we needed. Signed two NDA-stage partnerships.",
    author: "K. Patel, CEO — VoltEdge Systems",
    industry: "Electronics",
    highlight: "Inaugural Pune edition — 98% exhibitor re-booking rate",
  },
];

export const exhibitorLeads = [
  { company: "ABC Industries", exhibition: "AUTOMOTIVE EXPO", stall: "B14", status: "Confirmed", payment: "Paid", leads: 186, rep: "Rahul Verma" },
  { company: "Fabtrend Mills", exhibition: "TEXTILE SOURCING", stall: "A06", status: "Confirmed", payment: "75% Paid", leads: 94, rep: "Sneha Kapoor" },
  { company: "Surface Studio", exhibition: "BUILDCON", stall: "C22", status: "Reserved", payment: "50% Paid", leads: 0, rep: "Amit Shah" },
  { company: "PackPro Solutions", exhibition: "PLASTICS EXPO", stall: "D04", status: "Lead", payment: "Unpaid", leads: 0, rep: "Neha Gupta" },
  { company: "VoltEdge Systems", exhibition: "ELECTRONICS", stall: "A12", status: "Proposal", payment: "Unpaid", leads: 0, rep: "Karan Patel" },
  { company: "Spice Route Foods", exhibition: "FOOD & HOSPITALITY", stall: "B08", status: "Contacted", payment: "Unpaid", leads: 12, rep: "Priya Das" },
  { company: "DuroBuild Pvt Ltd", exhibition: "BUILDCON", stall: "C01", status: "Confirmed", payment: "Paid", leads: 203, rep: "Vikram Rao" },
  { company: "AutoComp Pvt Ltd", exhibition: "AUTOMOTIVE EXPO", stall: "A02", status: "Confirmed", payment: "Paid", leads: 73, rep: "R. Mehta" },
];

export const attendeeCategories = [
  { id: "buyers", label: "BUYERS", desc: "Procurement heads and sourcing managers actively looking to buy.", count: "4,200+" },
  { id: "distributors", label: "DISTRIBUTORS", desc: "Channel partners seeking new brands to represent.", count: "1,800+" },
  { id: "manufacturers", label: "MANUFACTURERS", desc: "Factory owners and production leaders.", count: "2,500+" },
  { id: "retailers", label: "RETAILERS", desc: "Modern trade and retail chain decision-makers.", count: "1,100+" },
  { id: "importers", label: "IMPORTERS", desc: "Cross-border sourcing specialists.", count: "900+" },
  { id: "investors", label: "INVESTORS", desc: "Funds and family offices scouting growth-stage brands.", count: "300+" },
];
