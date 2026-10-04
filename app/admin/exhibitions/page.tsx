"use client";
import { exhibitions } from "@/lib/data";
import Link from "next/link";
export default function AdminExhibitions() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Exhibition management</h1>
        <button onClick={()=>alert("Create exhibition — demo")} className="bg-[#FF3D00] text-white px-4 py-2 text-sm font-bold">+ New Exhibition</button>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {exhibitions.map(ex=>(
          <div key={ex.slug} className="bg-white border border-[#E8E0D6] overflow-hidden">
            <div className="h-[140px] overflow-hidden"><img src={ex.image} alt={ex.name} className="w-full h-full object-cover"/></div>
            <div className="p-5">
              <div className="text-[11px] tracking-widest font-bold text-[#FF3D00]">{ex.industry} · {ex.city}</div>
              <div className="font-bold text-sm mt-1">{ex.name}</div>
              <div className="text-xs text-[#6B6B6B] mt-1">{ex.dates} · {ex.venue}</div>
              <div className="mt-3 flex gap-2">
                <Link href={`/exhibitions/${ex.slug}`} className="border border-[#E8E0D6] px-3 py-1.5 text-xs font-bold">View public page</Link>
                <button onClick={()=>alert("Edit — demo")} className="bg-[#0F0F0F] text-white px-3 py-1.5 text-xs font-bold">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
