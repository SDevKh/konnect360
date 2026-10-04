"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";
export default function ContactPage() {
  const { addLead } = useStore();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", message:"" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({ name: form.name, company: form.company, email: form.email, phone: form.phone, interests: [form.message], date: new Date().toISOString().slice(0,10) });
    setDone(true);
  };
  if (done) return (
    <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
      <div className="bg-white border border-[#E8E0D6] p-10">
        <div className="w-12 h-12 bg-[#0F4C3A] text-white grid place-items-center mx-auto text-xl">✓</div>
        <h2 className="text-2xl font-bold mt-4">Message received.</h2>
        <p className="text-sm text-[#6B6B6B] mt-2">Our exhibition team will get back to you within one business day.</p>
        <a href="/" className="inline-block mt-6 bg-[#0F0F0F] text-white px-6 py-3 text-sm font-bold">Back to home</a>
      </div>
    </div>
  );
  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
      <div>
        <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">CONTACT</div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Talk to our exhibition team.</h1>
        <p className="text-[#6B6B6B] mt-3 leading-relaxed">Whether you&apos;re exploring your first exhibition or planning your next five — we&apos;ll help you choose the right show and the right space.</p>
        <div className="mt-8 space-y-4 text-sm">
          <div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">EMAIL</div><div className="font-semibold">hello@konnect360.in</div></div>
          <div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">PHONE</div><div className="font-semibold">+91 98XXX XXXXX</div></div>
          <div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">OFFICES</div><div className="font-semibold">Mumbai · New Delhi · Bengaluru</div></div>
        </div>
      </div>
      <form onSubmit={submit} className="bg-white border border-[#E8E0D6] p-6 lg:p-8 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="text-sm font-semibold">Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Your name"/></label>
          <label className="text-sm font-semibold">Company<input required value={form.company} onChange={e=>setForm({...form,company:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Company"/></label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="text-sm font-semibold">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="you@company.com"/></label>
          <label className="text-sm font-semibold">Phone<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="+91 ..."/></label>
        </div>
        <label className="text-sm font-semibold block">Message<textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={4} className="mt-1 w-full border border-[#E8E0D6] px-3 py-2.5 text-sm outline-none focus:border-[#0F0F0F]" placeholder="Tell us about your exhibition goals..."/></label>
        <button className="w-full bg-[#FF3D00] hover:bg-[#E63600] text-white font-bold py-3 text-sm tracking-wide transition-colors">Send Message →</button>
      </form>
    </div>
  );
}
