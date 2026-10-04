"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";
export default function LeadsPage() {
  const { exhibitorLeads, addExhibitorLead } = useStore();
  const [form, setForm] = useState({ name:"", company:"", designation:"", email:"", phone:"", interests: [] as string[] });
  const [captured, setCaptured] = useState(false);
  const toggleInterest = (v:string)=> setForm(f=> ({...f, interests: f.interests.includes(v)? f.interests.filter(x=>x!==v): [...f.interests, v]}));
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addExhibitorLead({ name: form.name, company: form.company, email: form.email, phone: form.phone, interests: form.interests, date: new Date().toISOString().slice(0,10) });
    setCaptured(true);
    setTimeout(()=>setCaptured(false), 2500);
    setForm({ name:"", company:"", designation:"", email:"", phone:"", interests: [] });
  };
  return (
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
      <div>
        <h1 className="text-xl font-bold">Lead capture</h1>
        <p className="text-sm text-[#6B6B6B] mt-1">Show this QR to visitors. When they scan, this form opens on their phone.</p>

        <div className="mt-6 bg-white border border-[#E8E0D6] p-6 text-center">
          <div className="w-[200px] h-[200px] mx-auto bg-[#0F0F0F] text-white grid place-items-center text-xs tracking-widest font-bold p-4">
            <div>
              <div className="text-4xl mb-2">▦</div>
              QR CODE<br/>
              <span className="text-[10px] text-white/60">ABC INDUSTRIES — B14<br/>konnect360.in/l/abc-b14</span>
              <div className="mt-3 bg-white text-[#0F0F0F] text-[10px] px-2 py-1 font-bold">SCAN TO CONNECT</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2 justify-center">
            <button onClick={()=>alert("QR downloaded — demo")} className="border border-[#E8E0D6] px-4 py-2 text-xs font-bold">Download QR</button>
            <button onClick={()=>alert("Link copied")} className="bg-[#0F0F0F] text-white px-4 py-2 text-xs font-bold">Copy Link</button>
          </div>
          {captured && <div className="mt-3 bg-[#0F4C3A] text-white text-sm font-bold py-2">✓ Lead captured!</div>}
        </div>

        <div className="mt-6 bg-[#F9F6F1] border border-[#E8E0D6] p-5">
          <div className="text-sm font-bold">How it works</div>
          <ol className="mt-2 text-sm text-[#3A3A3A] list-decimal list-inside space-y-1">
            <li>Print or display the QR at your stall</li>
            <li>Visitor scans → form opens on their phone</li>
            <li>They submit interest → lead appears below instantly</li>
          </ol>
        </div>
      </div>

      <div>
        {/* Visitor form preview */}
        <div className="bg-white border-2 border-[#0F0F0F] p-6">
          <div className="text-[11px] tracking-widest font-bold text-[#FF3D00]">VISITOR FORM — ABC INDUSTRIES · STALL B14</div>
          <h3 className="font-bold text-lg mt-2">Interested in ABC Industries?</h3>
          <p className="text-xs text-[#6B6B6B]">Leave your details — the team will follow up after the show.</p>
          <form onSubmit={submit} className="mt-4 space-y-3">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]"/>
            <div className="grid grid-cols-2 gap-3">
              <input required value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Company" className="border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]"/>
              <input value={form.designation} onChange={e=>setForm({...form, designation:e.target.value})} placeholder="Designation" className="border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]"/>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]"/>
              <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]"/>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-[#6B6B6B] mb-2">I&apos;M INTERESTED IN</div>
              <div className="flex flex-wrap gap-2">
                {["Product demo","Pricing","Distribution","Partnership","More information"].map(o=>(
                  <label key={o} className={`px-3 py-2 text-xs font-bold border cursor-pointer ${form.interests.includes(o)?"bg-[#0F0F0F] text-white border-[#0F0F0F]":"bg-white border-[#E8E0D6]"}`}>
                    <input type="checkbox" checked={form.interests.includes(o)} onChange={()=>toggleInterest(o)} className="hidden"/>{o}
                  </label>
                ))}
              </div>
            </div>
            <button className="w-full bg-[#FF3D00] hover:bg-[#E63600] text-white font-bold py-3 text-sm">Submit →</button>
          </form>
        </div>

        {/* Leads list */}
        <div className="mt-6 bg-white border border-[#E8E0D6] p-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Captured leads — {exhibitorLeads.length + 184} total</h3>
            <span className="text-xs font-bold bg-[#0F0F0F] text-white px-2 py-1">{exhibitorLeads.length} today</span>
          </div>
          <div className="mt-3 flex gap-2 text-xs">
            <span className="bg-[#0F4C3A] text-white px-2 py-1 font-bold">73 qualified</span>
            <span className="bg-[#F0EEEA] px-2 py-1 font-bold">21 meetings</span>
          </div>
          <div className="mt-4 divide-y divide-[#E8E0D6] border-t border-[#E8E0D6]">
            {exhibitorLeads.map((l,i)=>(
              <div key={i} className="py-3 flex justify-between">
                <div><div className="text-sm font-bold">{l.name}</div><div className="text-xs text-[#6B6B6B]">{l.company} · {l.email}</div><div className="text-[11px] text-[#FF3D00] font-bold mt-1">{l.interests.join(" · ")}</div></div>
                <div className="text-xs text-[#6B6B6B]">{l.date}</div>
              </div>
            ))}
            <div className="py-3 text-xs text-[#6B6B6B]">+ 184 more leads · export CSV to see all</div>
          </div>
          <button onClick={()=>alert("CSV exported — demo")} className="mt-4 w-full border border-[#0F0F0F] py-2.5 text-sm font-bold hover:bg-[#0F0F0F] hover:text-white transition-colors">Export CSV ↓</button>
        </div>
      </div>
    </div>
  );
}
