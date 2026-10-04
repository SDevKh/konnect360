"use client";
import Link from "next/link";
import { exhibitions } from "@/lib/data";
import { useState } from "react";

export default function ExhibitionsPage() {
  const [industry, setIndustry] = useState("All");
  const industries = ["All", ...Array.from(new Set(exhibitions.map(e => e.industry)))];
  const filtered = industry==="All" ? exhibitions : exhibitions.filter(e=>e.industry===industry);

  // matching tool state
  const [obj, setObj] = useState<string[]>([]);
  const [budget, setBudget] = useState("Any");
  const [companySize, setCompanySize] = useState("Any");
  const toggleObj = (v:string)=> setObj(prev=> prev.includes(v)? prev.filter(x=>x!==v): [...prev, v]);

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">SEASON 2026—2027</div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Exhibitions</h1>
          <p className="text-[#6B6B6B] mt-3 max-w-[560px]">Six focused trade exhibitions. Each built around a single industry and the buyers who shape it.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {industries.map(ind=>(
            <button key={ind} onClick={()=>setIndustry(ind)} className={`px-4 py-2 text-xs font-bold tracking-widest border ${industry===ind?"bg-[#0F0F0F] text-white border-[#0F0F0F]":"bg-white border-[#E8E0D6] hover:border-[#0F0F0F]"}`}>{ind.toUpperCase()}</button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map(ex=>(
          <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="group bg-white border border-[#E8E0D6] overflow-hidden hover:border-[#0F0F0F] transition-colors flex flex-col">
            <div className="h-[200px] overflow-hidden relative">
              <img src={ex.image} alt={ex.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"/>
              <div className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[11px] font-bold tracking-widest">{ex.dateShort} · {ex.city.toUpperCase()}</div>
              <div className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white ${ex.status==="Almost Sold Out"?"bg-[#FF3D00]":ex.status==="Selling Fast"?"bg-[#0F0F0F]":"bg-[#0F4C3A]"}`}>{ex.status.toUpperCase()}</div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-[11px] tracking-[0.12em] font-bold text-[#FF3D00]">{ex.industry.toUpperCase()}</div>
              <div className="text-[15px] font-bold leading-tight mt-1">{ex.name}</div>
              <div className="text-sm text-[#6B6B6B] mt-2 line-clamp-2">{ex.description}</div>
              <div className="mt-4 flex gap-4 text-xs">
                <span className="font-bold">{ex.exhibitors}+ exhibitors</span><span className="text-[#D6D0C4]">·</span><span className="font-bold">{ex.visitors} visitors</span>
                <span className="ml-auto text-[#6B6B6B]">From ₹{(ex.priceFrom/1000).toFixed(0)}k</span>
              </div>
              <div className="mt-3 text-sm font-bold">Explore Exhibition →</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Matching tool */}
      <div className="mt-12 bg-[#0F0F0F] text-white grid lg:grid-cols-[1.1fr_0.9fr] overflow-hidden border border-[#0F0F0F]">
        <div className="p-8 lg:p-10">
          <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">EXHIBITOR MATCHING</div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">Find the right exhibition for your business.</h3>
          <div className="mt-6 space-y-5">
            <div>
              <div className="text-[11px] tracking-widest font-bold text-[#A0A0A0]">WHAT DO YOU WANT TO ACHIEVE?</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Find buyers","Find distributors","Launch products","Generate leads","Build partnerships","Brand visibility"].map(o=>(
                  <button key={o} onClick={()=>toggleObj(o)} className={`px-3 py-2 text-xs font-bold border ${obj.includes(o)?"bg-[#FF3D00] border-[#FF3D00] text-white":"bg-white/10 border-white/20 text-white hover:bg-white/20"}`}>{o}</button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[11px] tracking-widest font-bold text-[#A0A0A0]">COMPANY SIZE</div>
                <select value={companySize} onChange={e=>setCompanySize(e.target.value)} className="mt-2 w-full bg-white text-[#0F0F0F] px-3 py-2.5 text-sm border border-white">
                  <option>Any</option><option>Startup</option><option>SME</option><option>Enterprise</option>
                </select>
              </div>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-[#A0A0A0]">BUDGET</div>
                <select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-2 w-full bg-white text-[#0F0F0F] px-3 py-2.5 text-sm border border-white">
                  <option>Any</option><option>Under ₹75k</option><option>₹75k — ₹1.5L</option><option>₹1.5L+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F9F6F1] text-[#0F0F0F] p-8 lg:p-10">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">RECOMMENDED FOR YOU</div>
          <div className="mt-4 space-y-3">
            {exhibitions.slice(0,3).map((ex,i)=>{
              const match = [94,82,71][i];
              return (
                <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="block bg-white border border-[#E8E0D6] p-4 hover:border-[#0F0F0F] transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="text-[11px] font-bold tracking-widest text-[#FF3D00]">{match}% MATCH</div>
                    <div className="text-xs font-bold">→</div>
                  </div>
                  <div className="font-bold text-sm mt-1">{ex.name}</div>
                  <div className="text-xs text-[#6B6B6B] mt-1">{ex.city} · {ex.dates} · {ex.industry}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] bg-[#F0EEEA] px-2 py-1 font-semibold">✓ Industry fit</span>
                    <span className="text-[10px] bg-[#F0EEEA] px-2 py-1 font-semibold">✓ Relevant buyers</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 text-xs text-[#6B6B6B]">Matching is indicative. Our team will confirm the best fit after your enquiry.</div>
        </div>
      </div>
    </div>
  );
}
