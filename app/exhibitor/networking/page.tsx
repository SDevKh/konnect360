"use client";
import { useState } from "react";
const people = [
  { company:"AutoSource India", looking:"Distributors — pan-India", person:"Vikram Seth, Sourcing Head", status:"available" },
  { company:"Fabtrend Mills", looking:"Retail partnerships", person:"Sneha Kapoor, Director", status:"available" },
  { company:"DuroBuild Pvt Ltd", looking:"Supplier — cement & steel", person:"Vikram Rao, Procurement", status:"requested" },
  { company:"VoltEdge Systems", looking:"EMS partners", person:"Karan Patel, VP Ops", status:"available" },
  { company:"Spice Route Foods", looking:"HORECA distributors", person:"Priya Das, Founder", status:"accepted" },
];
export default function NetworkingPage() {
  const [list, setList] = useState(people);
  const req = (i:number)=> setList(prev=> prev.map((p,idx)=> idx===i?{...p, status: p.status==="available"?"requested":"available"}:p));
  return (
    <div>
      <h1 className="text-xl font-bold">Meet the right people before you arrive.</h1>
      <p className="text-sm text-[#6B6B6B] mt-1">Discover exhibitors, buyers and distributors. Request meetings — we schedule them in the Meeting Zone.</p>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p,i)=>(
          <div key={p.company} className="bg-white border border-[#E8E0D6] p-5">
            <div className="text-sm font-bold">{p.company}</div>
            <div className="text-xs text-[#6B6B6B] mt-1">{p.person}</div>
            <div className="mt-3 text-xs"><span className="font-bold">Looking for:</span> {p.looking}</div>
            {p.status==="available" && <button onClick={()=>req(i)} className="mt-4 w-full bg-[#0F0F0F] text-white py-2.5 text-xs font-bold tracking-widest">REQUEST MEETING →</button>}
            {p.status==="requested" && <div className="mt-4 bg-[#FFF4EF] border border-[#FFD8CC] text-center py-2.5 text-xs font-bold text-[#FF3D00]">REQUEST SENT — AWAITING CONFIRMATION</div>}
            {p.status==="accepted" && <div className="mt-4 bg-[#0F4C3A] text-white text-center py-2.5 text-xs font-bold">✓ 15 NOV · 2:30 PM · MEETING ZONE B</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
