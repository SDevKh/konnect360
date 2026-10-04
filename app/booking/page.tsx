"use client";
import { exhibitions } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function BookingInner() {
  const params = useSearchParams();
  const router = useRouter();
  const { stalls, addBooking, updateStall } = useStore();
  const initEx = params.get("exhibition") || exhibitions[0].slug;
  const initStall = params.get("stall") || "";
  const [step, setStep] = useState(initStall ? 2 : 1);
  const [exhibition, setExhibition] = useState(initEx);
  const [stallId, setStallId] = useState(initStall);
  const [form, setForm] = useState({ company:"", contact:"", email:"", phone:"", website:"", industry:"Automotive", gst:"", electricity:"Standard", furniture:"Standard", branding:"Standard", notes:"" });
  const [done, setDone] = useState(false);

  const ex = exhibitions.find(e=>e.slug===exhibition)!;
  const list = stalls[exhibition] || [];
  const stall = list.find(s=>s.id===stallId);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({ exhibitionSlug: exhibition, stallId, company: form.company, contact: form.contact, email: form.email, phone: form.phone, industry: form.industry, status:"Reserved" });
    if (stallId) updateStall(exhibition, stallId, "reserved");
    setDone(true);
  };

  if (done) return (
    <div className="max-w-[640px] mx-auto px-6 py-16">
      <div className="bg-white border border-[#E8E0D6] p-8 text-center">
        <div className="w-12 h-12 bg-[#0F4C3A] text-white grid place-items-center mx-auto">✓</div>
        <h2 className="text-2xl font-bold mt-4">Booking request received.</h2>
        <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Our exhibition team will contact you to confirm availability and payment. Your stall <span className="font-bold text-[#0F0F0F]">{stallId}</span> is held for 48 hours.</p>
        <div className="mt-6 bg-[#F9F6F1] border border-[#E8E0D6] p-4 text-left text-sm">
          <div className="font-bold">{ex.name}</div>
          <div className="text-[#6B6B6B]">{ex.dates} · {ex.venue}</div>
          <div className="mt-2 font-semibold">Stall {stallId} {stall ? `· ${stall.size} · ₹${stall.price.toLocaleString("en-IN")}` : ""}</div>
        </div>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={()=>router.push("/exhibitor")} className="bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold">Go to Exhibitor Dashboard →</button>
          <button onClick={()=>router.push("/exhibitions")} className="border border-[#E8E0D6] px-6 py-3 text-sm font-bold">Browse exhibitions</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-[960px] px-6 lg:px-8 py-10">
      <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">STALL BOOKING</div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">Book your stall</h1>
      <div className="mt-6 flex gap-2">
        {[1,2,3,4].map(n=>(
          <div key={n} className={`flex-1 h-1.5 ${step>=n?"bg-[#FF3D00]":"bg-[#E8E0D6]"}`}/>
        ))}
      </div>
      <div className="mt-2 flex gap-2 text-[11px] font-bold tracking-widest text-[#6B6B6B]">
        <span className={step===1?"text-[#0F0F0F]":""}>01 EXHIBITION</span>
        <span>·</span><span className={step===2?"text-[#0F0F0F]":""}>02 STALL</span>
        <span>·</span><span className={step===3?"text-[#0F0F0F]":""}>03 COMPANY</span>
        <span>·</span><span className={step===4?"text-[#0F0F0F]":""}>04 REVIEW</span>
      </div>

      <form onSubmit={submit} className="mt-8 bg-white border border-[#E8E0D6] p-6 lg:p-8">
        {step===1 && (
          <div>
            <h3 className="font-bold">Select exhibition</h3>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              {exhibitions.map(e=>(
                <label key={e.slug} className={`border-2 p-4 cursor-pointer flex gap-3 ${exhibition===e.slug?"border-[#FF3D00] bg-[#FFF4EF]":"border-[#E8E0D6] hover:border-[#0F0F0F]"}`}>
                  <input type="radio" name="ex" checked={exhibition===e.slug} onChange={()=>setExhibition(e.slug)} className="mt-1"/>
                  <div><div className="text-sm font-bold">{e.name}</div><div className="text-xs text-[#6B6B6B]">{e.city} · {e.dates}</div></div>
                </label>
              ))}
            </div>
            <button type="button" onClick={()=>setStep(2)} className="mt-6 bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold">Continue →</button>
          </div>
        )}
        {step===2 && (
          <div>
            <h3 className="font-bold">Select stall — {ex.name}</h3>
            <p className="text-sm text-[#6B6B6B] mt-1">{(stalls[exhibition]||[]).filter(s=>s.status==="available"||s.status==="premium").length} available · tap to select</p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-4 max-h-[420px] overflow-auto p-1">
              {(stalls[exhibition]||[]).map(s=>(
                <button key={s.id} type="button" disabled={s.status==="booked"||s.status==="reserved"||s.status==="held"} onClick={()=>setStallId(s.id)} className={`border-2 p-3 text-left ${stallId===s.id?"border-[#FF3D00] bg-[#FFF4EF]": s.status==="available"||s.status==="premium" ? "border-[#E8E0D6] bg-white hover:border-[#0F0F0F]" : "border-[#E8E0D6] bg-[#F0EEEA] opacity-60 cursor-not-allowed"}`}>
                  <div className="text-sm font-bold">{s.id}</div>
                  <div className="text-xs text-[#6B6B6B]">{s.size} · ₹{(s.price/1000).toFixed(0)}k</div>
                  <div className="text-[10px] tracking-widest font-bold">{s.status.toUpperCase()}</div>
                </button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={()=>setStep(1)} className="border border-[#E8E0D6] px-6 py-3 text-sm font-bold">Back</button>
              <button type="button" disabled={!stallId} onClick={()=>setStep(3)} className="bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold disabled:opacity-40">Continue →</button>
            </div>
          </div>
        )}
        {step===3 && (
          <div className="space-y-4">
            <h3 className="font-bold">Company details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="text-sm font-semibold">Company name<input required value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="ABC Industries"/></label>
              <label className="text-sm font-semibold">Contact person<input required value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Full name"/></label>
              <label className="text-sm font-semibold">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="you@company.com"/></label>
              <label className="text-sm font-semibold">Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="+91 ..."/></label>
              <label className="text-sm font-semibold">Website<input value={form.website} onChange={e=>setForm({...form,website:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="https://"/></label>
              <label className="text-sm font-semibold">Industry<select value={form.industry} onChange={e=>setForm({...form,industry:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm bg-white"><option>Automotive</option><option>Textile</option><option>Construction</option><option>Food & Hospitality</option><option>Electronics</option><option>Other</option></select></label>
              <label className="text-sm font-semibold">GST / Company ID<input value={form.gst} onChange={e=>setForm({...form,gst:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="GSTIN"/></label>
              <label className="text-sm font-semibold">Requirements<textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} rows={2} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Electricity, furniture, branding needs..."/></label>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={()=>setStep(2)} className="border border-[#E8E0D6] px-6 py-3 text-sm font-bold">Back</button>
              <button type="button" onClick={()=>setStep(4)} className="bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold">Review →</button>
            </div>
          </div>
        )}
        {step===4 && (
          <div>
            <h3 className="font-bold">Review & submit</h3>
            <div className="mt-4 bg-[#F9F6F1] border border-[#E8E0D6] p-5 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-[#6B6B6B]">Exhibition</span><span className="font-bold">{ex.name}</span></div>
              <div className="flex justify-between"><span className="text-[#6B6B6B]">Venue</span><span className="font-semibold">{ex.venue}</span></div>
              <div className="flex justify-between"><span className="text-[#6B6B6B]">Stall</span><span className="font-bold">{stallId} {stall?`· ${stall.size}`:""}</span></div>
              <div className="flex justify-between"><span className="text-[#6B6B6B]">Estimated amount</span><span className="font-bold text-lg">{stall?`₹${stall.price.toLocaleString("en-IN")}`:"—"} <span className="text-xs font-normal text-[#6B6B6B]">excl. GST</span></span></div>
              <div className="border-t border-[#E8E0D6] pt-3 space-y-1">
                <div className="font-semibold">{form.company} — {form.contact}</div>
                <div className="text-[#6B6B6B] text-xs">{form.email} · {form.phone} · {form.industry}</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-[#6B6B6B]">By submitting, you request a hold on this stall for 48 hours. Our team will confirm availability and share payment details. No payment is processed automatically.</div>
            <div className="mt-6 flex gap-3">
              <button type="button" onClick={()=>setStep(3)} className="border border-[#E8E0D6] px-6 py-3 text-sm font-bold">Back</button>
              <button type="submit" className="bg-[#FF3D00] hover:bg-[#E63600] text-white px-8 py-3 text-sm font-bold transition-colors">Submit Booking Request →</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
export default function BookingPage() {
  return <Suspense fallback={<div className="p-10 text-center text-sm text-[#6B6B6B]">Loading booking...</div>}><BookingInner/></Suspense>;
}
