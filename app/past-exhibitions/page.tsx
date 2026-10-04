import { pastExhibitions } from "@/lib/data";
export default function PastExhibitionsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
      <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">PROOF, NOT PROMISES</div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Past exhibitions</h1>
      <p className="text-[#6B6B6B] mt-3 max-w-[560px]">Results from recent shows — exhibitor counts, visitor numbers, meetings and testimonials.</p>
      <div className="mt-8 space-y-8">
        {pastExhibitions.map(p=>(
          <div key={p.name} className="bg-white border border-[#E8E0D6] grid lg:grid-cols-[1.1fr_0.9fr] overflow-hidden">
            <div className="h-[280px] lg:h-auto overflow-hidden"><img src={p.image} alt={p.name} className="w-full h-full object-cover"/></div>
            <div className="p-6 lg:p-8">
              <div className="text-[11px] tracking-widest font-bold text-[#FF3D00]">{p.year} — {p.city.toUpperCase()}</div>
              <div className="text-2xl font-bold tracking-tight mt-2">{p.name}</div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div><div className="text-2xl font-bold">{p.exhibitors}</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">EXHIBITORS</div></div>
                <div><div className="text-2xl font-bold">{p.visitors}</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">VISITORS</div></div>
                <div><div className="text-2xl font-bold">{p.meetings}</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">MEETINGS</div></div>
              </div>
              <div className="mt-6 bg-[#F9F6F1] border border-[#E8E0D6] p-4">
                <div className="text-sm italic leading-relaxed">&ldquo;{p.testimonial}&rdquo;</div>
                <div className="text-xs text-[#6B6B6B] mt-2">— {p.author}</div>
              </div>
              <div className="mt-6 flex gap-2 text-xs font-bold">
                <span className="border border-[#E8E0D6] px-3 py-1.5">Floor plan</span>
                <span className="border border-[#E8E0D6] px-3 py-1.5">Exhibitor list</span>
                <span className="border border-[#E8E0D6] px-3 py-1.5">Gallery</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
