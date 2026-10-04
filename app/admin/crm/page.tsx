"use client";
import { exhibitorLeads } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useState } from "react";
const statuses = ["All","Lead","Contacted","Proposal","Reserved","Confirmed","Completed"] as const;
export default function CRMPage() {
  const { bookings } = useStore();
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const all = [
    ...exhibitorLeads.map(e=> ({ ...e, source:"seed" })),
    ...bookings.map(b=> ({ company: b.company, exhibition: b.exhibitionSlug, stall: b.stallId, status: b.status, payment:"Unpaid", leads:0, source:"live" })),
  ];
  const filtered = all.filter(r=> (filter==="All"|| r.status===filter) && (!q || r.company.toLowerCase().includes(q.toLowerCase())));
  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <h1 className="text-xl font-bold">Exhibitor CRM</h1>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search company..." className="border border-[#E8E0D6] bg-white px-3 py-2 text-sm w-[240px] outline-none focus:border-[#0F0F0F]"/>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {statuses.map(s=>(
          <button key={s} onClick={()=>setFilter(s)} className={`px-3 py-1.5 text-xs font-bold border ${filter===s?"bg-[#0F0F0F] text-white border-[#0F0F0F]":"bg-white border-[#E8E0D6]"}`}>{s.toUpperCase()}</button>
        ))}
      </div>
      <div className="mt-4 bg-white border border-[#E8E0D6] overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#F9F6F1] text-[11px] tracking-widest font-bold text-[#6B6B6B]">
            <tr><th className="text-left px-4 py-3">COMPANY</th><th className="text-left px-4 py-3">EXHIBITION</th><th className="text-left px-4 py-3">STALL</th><th className="text-left px-4 py-3">STATUS</th><th className="text-left px-4 py-3">PAYMENT</th><th className="text-left px-4 py-3">LEADS</th></tr>
          </thead>
          <tbody className="divide-y divide-[#E8E0D6]">
            {filtered.map((r,i)=>(
              <tr key={i} className="hover:bg-[#FFFBF5]">
                <td className="px-4 py-3 font-semibold">{r.company}</td>
                <td className="px-4 py-3 text-xs">{r.exhibition}</td>
                <td className="px-4 py-3 font-mono text-xs">{r.stall}</td>
                <td className="px-4 py-3"><span className={`text-[11px] font-bold px-2 py-1 ${r.status==="Confirmed"?"bg-[#0F4C3A] text-white": r.status==="Reserved"?"bg-[#FF3D00] text-white":"bg-[#F0EEEA]"}`}>{r.status.toUpperCase()}</span></td>
                <td className="px-4 py-3 text-xs">{r.payment}</td>
                <td className="px-4 py-3 font-bold">{r.leads}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length===0 && <div className="p-8 text-center text-sm text-[#6B6B6B]">No results. Try a different filter.</div>}
      </div>
      <div className="mt-2 text-xs text-[#6B6B6B]">{filtered.length} records · Lead → Contacted → Proposal → Reserved → Confirmed → Completed</div>
    </div>
  );
}
