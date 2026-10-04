"use client";
import { exhibitions, exhibitorLeads } from "@/lib/data";
import { useStore } from "@/lib/store";
import Link from "next/link";
export default function AdminOverview() {
  const { bookings, leads } = useStore();
  return (
    <div>
      <h1 className="text-xl font-bold">Admin overview</h1>
      <p className="text-sm text-[#6B6B6B]">Season 2026—2027 · live operations</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-5">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">UPCOMING EXHIBITIONS</div>
          <div className="text-3xl font-bold mt-1">{exhibitions.length}</div>
          <div className="text-xs text-[#0F4C3A] mt-1">● All on schedule</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">TOTAL EXHIBITORS</div>
          <div className="text-3xl font-bold mt-1">{428 + bookings.length}</div>
          <div className="text-xs text-[#6B6B6B] mt-1">+{bookings.length} this session</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">STALLS SOLD</div>
          <div className="text-3xl font-bold mt-1">82%</div>
          <div className="w-full h-1.5 bg-[#E8E0D6] mt-2"><div className="h-full bg-[#FF3D00] w-[82%]"/></div>
        </div>
        <div className="bg-[#0F0F0F] text-white p-5">
          <div className="text-[11px] tracking-widest font-bold text-white/60">REVENUE BOOKED</div>
          <div className="text-2xl font-bold mt-1">₹2.84 Cr</div>
          <div className="text-xs text-white/60 mt-1">₹42L outstanding</div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-2xl font-bold">{142 + leads.length}</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">NEW LEADS</div>
        </div>
        <div className="bg-[#FF3D00] text-white p-5 text-center">
          <div className="text-2xl font-bold">27</div><div className="text-[11px] tracking-widest font-bold">PENDING APPROVALS</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-2xl font-bold">18</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">PAYMENTS DUE</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-2xl font-bold">6</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">DOCUMENTS PENDING</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Recent bookings</h3>
            <Link href="/admin/crm" className="text-xs font-bold underline">View CRM →</Link>
          </div>
          <div className="mt-4 divide-y divide-[#E8E0D6] border-t border-[#E8E0D6]">
            {[...exhibitorLeads.slice(0,4), ...bookings.slice(0,2).map(b=>({ company:b.company, exhibition: b.exhibitionSlug.slice(0,18), stall: b.stallId, status: b.status, payment:"Unpaid", leads:0 }))].slice(0,5).map((r,i)=>(
              <div key={i} className="flex justify-between py-3 text-sm">
                <span className="font-semibold">{(r as any).company}</span>
                <span className="text-xs bg-[#F0EEEA] px-2 py-1 font-bold">{(r as any).status}</span>
              </div>
            ))}
            {bookings.length===0 && <div className="py-3 text-xs text-[#6B6B6B]">New bookings from this session will appear here.</div>}
          </div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-6">
          <h3 className="font-bold">Exhibitions — sales progress</h3>
          <div className="mt-4 space-y-3">
            {exhibitions.slice(0,4).map(ex=> {
              const pct = ex.status==="Almost Sold Out"? 92 : ex.status==="Selling Fast"? 78 : 54;
              return (
                <div key={ex.slug} className="flex items-center gap-3">
                  <span className="text-xs font-bold w-[180px] truncate">{ex.name}</span>
                  <div className="flex-1 h-2 bg-[#F0EEEA]"><div className="h-full bg-[#0F0F0F]" style={{width:`${pct}%`}}/></div>
                  <span className="text-xs font-bold w-10">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
