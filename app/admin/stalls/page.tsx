"use client";
import { exhibitions } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useState } from "react";
export default function StallsAdmin() {
  const { stalls, updateStall } = useStore();
  const [ex, setEx] = useState(exhibitions[0].slug);
  const list = stalls[ex] || [];
  const counts = {
    available: list.filter(s=>s.status==="available").length,
    premium: list.filter(s=>s.status==="premium").length,
    reserved: list.filter(s=>s.status==="reserved").length,
    booked: list.filter(s=>s.status==="booked").length,
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Stall management</h1>
      <div className="mt-4 flex gap-2 flex-wrap">
        {exhibitions.map(e=>(
          <button key={e.slug} onClick={()=>setEx(e.slug)} className={`px-3 py-2 text-xs font-bold border ${ex===e.slug?"bg-[#0F0F0F] text-white border-[#0F0F0F]":"bg-white border-[#E8E0D6]"}`}>{e.name.slice(0,22)}</button>
        ))}
      </div>
      <div className="mt-4 flex gap-3 text-xs">
        <span className="bg-white border border-[#E8E0D6] px-3 py-1.5 font-bold">Available: {counts.available}</span>
        <span className="bg-[#FFF7D6] border border-[#E6C200] px-3 py-1.5 font-bold">Premium: {counts.premium}</span>
        <span className="bg-[#FFF0E6] border border-[#FFB088] px-3 py-1.5 font-bold">Reserved: {counts.reserved}</span>
        <span className="bg-[#0F0F0F] text-white px-3 py-1.5 font-bold">Booked: {counts.booked}</span>
      </div>
      <div className="mt-4 bg-white border border-[#E8E0D6] p-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {list.map(s=>(
            <div key={s.id} className={`border-2 p-2 text-center ${s.status==="booked"?"bg-[#0F0F0F] text-white border-[#0F0F0F]": s.status==="reserved"?"bg-[#FFF0E6] border-[#FFB088]": s.status==="premium"?"bg-[#FFF7D6] border-[#E6C200]":"bg-white border-[#E8E0D6]"}`}>
              <div className="text-xs font-bold">{s.id}</div>
              <div className="text-[10px]">{s.size}</div>
              <select value={s.status} onChange={e=>updateStall(ex, s.id, e.target.value as any)} className="mt-1 w-full text-[10px] border border-black/10 px-1 py-0.5 bg-white text-[#0F0F0F]">
                <option value="available">available</option>
                <option value="premium">premium</option>
                <option value="reserved">reserved</option>
                <option value="booked">booked</option>
                <option value="held">held</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
