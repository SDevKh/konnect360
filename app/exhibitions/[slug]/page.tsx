"use client";
import { exhibitions, attendeeCategories } from "@/lib/data";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { FloorPlan, StallDetail } from "@/components/FloorPlan";
import { useState } from "react";

export default function ExhibitionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const ex = exhibitions.find(e => e.slug === slug);
  const { stalls } = useStore();
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  if (!ex) return <div className="mx-auto max-w-[1280px] px-6 py-16">Exhibition not found. <Link href="/exhibitions" className="underline">Back to exhibitions</Link></div>;

  const list = stalls[slug] || [];
  const sel = list.find(s => s.id === selected) || null;
  const availableCount = list.filter(s => s.status==="available"||s.status==="premium").length;

  return (
    <div>
      {/* Hero */}
      <div className="bg-[#0F0F0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] font-bold text-[#FF3D00] border border-white/20 px-3 py-1.5">{ex.industry.toUpperCase()} · {ex.city.toUpperCase()} · {ex.dates}</div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-none mt-4">{ex.name}</h1>
            <p className="text-[#D0D0D0] mt-4 max-w-[560px] leading-relaxed">{ex.tagline} {ex.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => document.getElementById("floorplan")?.scrollIntoView({behavior:"smooth"})} className="bg-[#FF3D00] hover:bg-[#E63600] text-white px-7 py-3.5 text-sm font-bold tracking-wide transition-colors">Book Your Stall →</button>
              <button onClick={() => alert("Brochure download — demo. In production this would deliver the PDF.")} className="border border-white/30 px-7 py-3 text-sm font-bold tracking-wide hover:bg-white hover:text-[#0F0F0F] transition-colors">Download Brochure</button>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-xs">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF3D00] rounded-full"/> {ex.venue}</span>
              <span className="text-white/50">·</span>
              <span>{availableCount} stalls still available</span>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden bg-[#1A1A1A]">
            <img src={ex.image} alt={ex.name} className="w-full h-full object-cover opacity-90"/>
            <div className="absolute bottom-0 left-0 right-0 bg-white text-[#0F0F0F] p-4 flex justify-between">
              <div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">FROM</div><div className="text-xl font-bold">₹{ex.priceFrom.toLocaleString("en-IN")}</div></div>
              <div className="text-right"><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">STATUS</div><div className="text-sm font-bold">{ex.status}</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#E8E0D6]">
        {[
          { v: `${ex.exhibitors}+`, l: "EXHIBITORS" },
          { v: ex.visitors, l: "VISITORS" },
          { v: `${ex.countries}+`, l: "COUNTRIES" },
          { v: `${ex.categories}+`, l: "INDUSTRY CATEGORIES" },
        ].map(s=>(
          <div key={s.l} className="border-l-2 border-[#FF3D00] pl-5">
            <div className="text-3xl font-bold tracking-tight">{s.v}</div>
            <div className="text-[11px] tracking-[0.14em] font-bold text-[#6B6B6B] mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Why exhibit */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold tracking-tight">Why exhibit here?</h3>
          <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">A focused audience — not a generic footfall count. Every visitor is filtered by industry and buying intent.</p>
        </div>
        <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E8E0D6] p-5">
            <div className="text-sm font-bold">Meet the people who matter.</div>
            <div className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Connect with buyers, procurement teams, distributors and decision-makers actively sourcing.</div>
          </div>
          <div className="bg-white border border-[#E8E0D6] p-5">
            <div className="text-sm font-bold">Launch in front of your market.</div>
            <div className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Introduce new products directly to qualified industry audiences — not cold leads.</div>
          </div>
          <div className="bg-white border border-[#E8E0D6] p-5">
            <div className="text-sm font-bold">Build partnerships, not impressions.</div>
            <div className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Create distributor and strategic partnership opportunities that compound after the show.</div>
          </div>
        </div>
      </div>

      {/* Who attends */}
      <div className="bg-[#F9F6F1] border-y border-[#E8E0D6]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
          <h3 className="text-xl font-bold tracking-tight">Who attends</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {attendeeCategories.map(c=>(
              <div key={c.id} className="bg-white border border-[#E8E0D6] p-4">
                <div className="text-[11px] font-bold tracking-widest text-[#FF3D00]">{c.count}</div>
                <div className="text-sm font-bold mt-1">{c.label}</div>
                <div className="text-xs text-[#6B6B6B] mt-2 hidden md:block leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floor plan */}
      <div id="floorplan" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">INTERACTIVE FLOOR PLAN</div>
            <h3 className="text-2xl font-bold tracking-tight mt-1">Choose your space. Meet your market.</h3>
            <p className="text-sm text-[#6B6B6B] mt-2">Tap a stall to view size, position and pricing. Premium corners are highlighted.</p>
          </div>
          <div className="text-sm font-bold">From ₹{ex.priceFrom.toLocaleString("en-IN")} · {availableCount} available</div>
        </div>
        <div className="grid lg:grid-cols-[1.6fr_0.6fr] gap-6 items-start">
          <FloorPlan stalls={list} selected={selected} onSelect={setSelected} />
          <StallDetail stall={sel} onReserve={() => sel && router.push(`/booking?exhibition=${slug}&stall=${sel.id}`)} />
        </div>
      </div>

      {/* Pricing */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pb-10">
        <div className="bg-white border border-[#E8E0D6] grid md:grid-cols-3">
          {[
            { size: "3×3 m — Standard", price: "₹85,000", includes: "Shell scheme, fascia, table, 2 chairs, lights" },
            { size: "3×6 m — Premium", price: "₹1,55,000", includes: "Corner or aisle, enhanced fascia, furniture pack" },
            { size: "6×6 m — Showcase", price: "₹2,85,000", includes: "Island / premium island, max visibility, custom build option" },
          ].map(p=>(
            <div key={p.size} className="p-6 border-r last:border-r-0 border-[#E8E0D6]">
              <div className="text-sm font-bold">{p.size}</div>
              <div className="text-2xl font-bold mt-2">{p.price} <span className="text-xs font-normal text-[#6B6B6B]">excl. GST</span></div>
              <div className="text-xs text-[#6B6B6B] mt-2">{p.includes}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/booking?exhibition=${slug}`} className="bg-[#0F0F0F] text-white px-7 py-3 text-sm font-bold">Start Booking →</Link>
          <Link href="/become-exhibitor" className="border-2 border-[#0F0F0F] px-7 py-3 text-sm font-bold">Talk to our team</Link>
        </div>
      </div>
    </div>
  );
}
