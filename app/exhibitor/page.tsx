"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
export default function ExhibitorOverview() {
  const { exhibitorLeads } = useStore();
  const tasks = [
    { label: "Company details", done: true },
    { label: "Logo upload", done: true },
    { label: "GST details", done: true },
    { label: "Upload stall branding", done: false, due: "Due in 5 days" },
    { label: "Submit staff details", done: false, due: "Due in 7 days" },
    { label: "Confirm electricity requirement", done: false, due: "Due in 10 days" },
  ];
  const completed = tasks.filter(t=>t.done).length;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Good morning, ABC Industries.</h1>
          <p className="text-sm text-[#6B6B6B] mt-1">Here&apos;s what needs your attention before the show.</p>
        </div>
        <Link href="/exhibitor/leads" className="bg-[#FF3D00] text-white px-5 py-2.5 text-sm font-bold">Capture Lead (QR) →</Link>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-5">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">YOUR EXHIBITION</div>
          <div className="font-bold mt-1">AUTOMOTIVE COMPONENTS EXPO 2026</div>
          <div className="text-xs text-[#6B6B6B] mt-1">14—16 Nov · Bombay Exhibition Centre</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">STALL</div>
          <div className="text-2xl font-bold mt-1">B14</div>
          <div className="text-xs text-[#0F4C3A] font-bold mt-1">● Confirmed</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">PAYMENT</div>
          <div className="text-2xl font-bold mt-1">75% Paid</div>
          <div className="w-full h-1.5 bg-[#E8E0D6] mt-2"><div className="h-full bg-[#FF3D00] w-[75%]"/></div>
          <div className="text-xs text-[#6B6B6B] mt-1">Balance ₹21,250 due 30 Oct</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-5 text-center">
          <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">PROFILE</div>
          <div className="text-2xl font-bold mt-1">80% Complete</div>
          <div className="w-full h-1.5 bg-[#E8E0D6] mt-2"><div className="h-full bg-[#0F0F0F] w-[80%]"/></div>
          <div className="text-xs text-[#6B6B6B] mt-1">{completed}/{tasks.length} tasks done</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">Important tasks</h3>
            <Link href="/exhibitor/tasks" className="text-xs font-bold underline">View all</Link>
          </div>
          <div className="mt-4 space-y-3">
            {tasks.map(t=>(
              <div key={t.label} className={`flex items-center justify-between border p-3 ${t.done?"bg-[#F0F7F4] border-[#C8E6D8]":"bg-[#FFFBF5] border-[#E8E0D6]"}`}>
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 grid place-items-center text-xs font-bold rounded-full ${t.done?"bg-[#0F4C3A] text-white":"bg-white border border-[#E8E0D6]"}`}>{t.done?"✓":"→"}</span>
                  <span className={`text-sm font-semibold ${t.done?"line-through text-[#6B6B6B]":""}`}>{t.label}</span>
                </div>
                {!t.done && <span className="text-xs font-bold text-[#FF3D00]">{t.due}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0F0F0F] text-white p-6">
            <div className="text-[11px] tracking-widest font-bold text-[#FF3D00]">LIVE AT THE SHOW</div>
            <div className="text-xl font-bold mt-2">Lead capture</div>
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="bg-white text-[#0F0F0F] p-3"><div className="text-xl font-bold">{exhibitorLeads.length + 184}</div><div className="text-[11px] font-bold tracking-widest">LEADS</div></div>
              <div className="bg-white text-[#0F0F0F] p-3"><div className="text-xl font-bold">73</div><div className="text-[11px] font-bold tracking-widest">QUALIFIED</div></div>
              <div className="bg-[#FF3D00] text-white p-3"><div className="text-xl font-bold">21</div><div className="text-[11px] font-bold tracking-widest">MEETINGS</div></div>
            </div>
            <Link href="/exhibitor/leads" className="block text-center mt-4 bg-white text-[#0F0F0F] py-2.5 text-sm font-bold">Open QR Lead Capture →</Link>
          </div>

          <div className="bg-white border border-[#E8E0D6] p-6">
            <h3 className="font-bold">Documents</h3>
            <div className="mt-3 space-y-2 text-sm">
              {["Invoice — ₹85,000","Exhibitor Manual (PDF)","Floor Plan — B14 highlighted","Branding Guidelines"].map(d=>(
                <div key={d} className="flex justify-between items-center border border-[#E8E0D6] px-3 py-2.5">
                  <span>{d}</span><span className="text-xs font-bold text-[#FF3D00]">Download ↓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
