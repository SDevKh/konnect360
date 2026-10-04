"use client";
import { exhibitions } from "@/lib/data";
import { useStore } from "@/lib/store";
import { useState } from "react";
export default function BecomeExhibitorPage() {
  const { addLead } = useStore();
  const [form, setForm] = useState({ company:"", contact:"", email:"", phone:"", industry:"", exhibition: exhibitions[0].slug, reps:"2-5", objectives:"", budget:"₹75k — ₹1.5L", timeline:"This quarter", message:"" });
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ name: form.contact, company: form.company, email: form.email, phone: form.phone, interests: [form.objectives, form.exhibition], date: new Date().toISOString().slice(0,10) });
    setDone(true);
  };
  if (done) return (
    <div className="mx-auto max-w-[640px] px-6 py-16">
      <div className="bg-white border border-[#E8E0D6] p-10 text-center">
        <div className="w-12 h-12 bg-[#0F4C3A] text-white grid place-items-center mx-auto">✓</div>
        <h2 className="text-2xl font-bold mt-4">Your request has been received.</h2>
        <p className="text-sm text-[#6B6B6B] mt-2">Our exhibition team will review your requirements and contact you within one business day.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/exhibitor" className="bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold">Go to dashboard →</a>
          <a href="/exhibitions" className="border border-[#E8E0D6] px-6 py-3 text-sm font-bold">Explore exhibitions</a>
        </div>
      </div>
    </div>
  );
  return (
    <div className="mx-auto max-w-[960px] px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div>
          <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">BECOME AN EXHIBITOR</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 leading-none">Let&apos;s put your<br /><span className="font-serif italic font-normal">brand in the room.</span></h1>
          <p className="text-[#6B6B6B] mt-4 leading-relaxed">Tell us about your business and goals. We&apos;ll match you with the right exhibition and the right space — and handle the rest from enquiry to ROI report.</p>
          <div className="mt-8 bg-[#0F0F0F] text-white p-6">
            <div className="text-sm font-bold">What happens next?</div>
            <ol className="mt-3 space-y-2 text-sm text-white/80 list-decimal list-inside">
              <li>We review your requirements</li>
              <li>We recommend exhibitions & stalls</li>
              <li>You confirm & complete onboarding</li>
              <li>We handle documents, payments & lead capture</li>
              <li>You meet your market — and measure ROI</li>
            </ol>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white border border-[#E8E0D6] p-6 lg:p-8 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="text-sm font-semibold">Company<input required value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Company"/></label>
            <label className="text-sm font-semibold">Contact person<input required value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Full name"/></label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="text-sm font-semibold">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="you@company.com"/></label>
            <label className="text-sm font-semibold">Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="+91 ..."/></label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="text-sm font-semibold">Industry<input required value={form.industry} onChange={e=>setForm({...form,industry:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="e.g. Automotive, Textile"/></label>
            <label className="text-sm font-semibold">Exhibition interested in<select value={form.exhibition} onChange={e=>setForm({...form,exhibition:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm bg-white">{exhibitions.map(e=><option key={e.slug} value={e.slug}>{e.name}</option>)}</select></label>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="text-sm font-semibold">Representatives<select value={form.reps} onChange={e=>setForm({...form,reps:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm bg-white"><option>1</option><option>2-5</option><option>6-10</option><option>10+</option></select></label>
            <label className="text-sm font-semibold">Budget<select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm bg-white"><option>Under ₹75k</option><option>₹75k — ₹1.5L</option><option>₹1.5L — ₹3L</option><option>₹3L+</option></select></label>
            <label className="text-sm font-semibold">Timeline<select value={form.timeline} onChange={e=>setForm({...form,timeline:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm bg-white"><option>This quarter</option><option>Next quarter</option><option>Next season</option><option>Flexible</option></select></label>
          </div>
          <label className="text-sm font-semibold block">Objectives<input value={form.objectives} onChange={e=>setForm({...form,objectives:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Find buyers, launch products, distribution..."/></label>
          <label className="text-sm font-semibold block">Additional requirements<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={3} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Stall size, branding, power, furniture needs..."/></label>
          <button className="w-full bg-[#FF3D00] hover:bg-[#E63600] text-white font-bold py-3 text-sm tracking-wide transition-colors">Submit Enquiry →</button>
          <div className="text-xs text-center text-[#6B6B6B]">Or <a href="/contact" className="underline font-semibold">book a consultation</a> with our team.</div>
        </form>
      </div>
    </div>
  );
}
