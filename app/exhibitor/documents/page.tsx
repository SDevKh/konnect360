"use client";
export default function DocumentsPage() {
  const docs = [
    { name:"Invoice — K360-2026-0842", meta:"Updated 2 days ago · PDF · ₹85,000", status:"Paid 75%" },
    { name:"Exhibitor Agreement", meta:"Signed 12 Oct 2026 · PDF", status:"Signed" },
    { name:"Exhibitor Manual", meta:"Updated 1 week ago · PDF · 24 pages", status:"—" },
    { name:"Floor Plan — Hall B Highlighted", meta:"PDF · 1 page", status:"—" },
    { name:"Branding & Artwork Guidelines", meta:"PDF · 8 pages", status:"—" },
    { name:"Venue & Safety Information", meta:"PDF", status:"—" },
  ];
  return (
    <div>
      <h1 className="text-xl font-bold">Document centre</h1>
      <p className="text-sm text-[#6B6B6B] mt-1">Invoices, agreements, floor plans and manuals — always the latest version.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {docs.map(d=>(
          <div key={d.name} className="bg-white border border-[#E8E0D6] p-5 flex justify-between items-start">
            <div>
              <div className="text-sm font-bold">{d.name}</div>
              <div className="text-xs text-[#6B6B6B] mt-1">{d.meta}</div>
              <div className="mt-2 text-[11px] font-bold tracking-widest bg-[#F0EEEA] inline-block px-2 py-1">{d.status}</div>
            </div>
            <button onClick={()=>alert("Download — demo")} className="text-xs font-bold border border-[#0F0F0F] px-3 py-2 hover:bg-[#0F0F0F] hover:text-white transition-colors">Download ↓</button>
          </div>
        ))}
      </div>
    </div>
  );
}
