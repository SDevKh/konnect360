import Link from "next/link";
import { attendeeCategories } from "@/lib/data";
export default function WhyExhibitPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
      <div className="max-w-[760px]">
        <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">WHY EXHIBIT</div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 leading-none">Exhibit where your<br /><span className="font-serif italic font-normal">industry gathers.</span></h1>
        <p className="text-[#3A3A3A] mt-4 leading-relaxed">Konnect 360 exhibitions are not generic footfall events. Each show is built around a single industry and the buyers who shape it — so every conversation has intent.</p>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="w-10 h-10 bg-[#FF3D00] text-white grid place-items-center font-bold">01</div>
          <div className="text-lg font-bold mt-4">Meet the people who matter.</div>
          <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Buyers, procurement teams, distributors, retailers, manufacturers and investors — curated by industry, not by chance.</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            <li>• Buying houses & procurement heads</li><li>• Distributors & channel partners</li><li>• Retail & modern trade</li><li>• Investors scouting growth</li>
          </ul>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="w-10 h-10 bg-[#0F0F0F] text-white grid place-items-center font-bold">02</div>
          <div className="text-lg font-bold mt-4">Launch in front of your market.</div>
          <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Introduce new products to qualified audiences who came to discover and buy — not scroll past an ad.</p>
          <div className="mt-4 bg-[#F9F6F1] border border-[#E8E0D6] p-4 text-sm italic">&ldquo;We met 73 qualified prospects and signed three distributor conversations during the exhibition.&rdquo; — AutoComp Pvt Ltd</div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="w-10 h-10 bg-[#0F0F0F] text-white grid place-items-center font-bold">03</div>
          <div className="text-lg font-bold mt-4">Build partnerships, not impressions.</div>
          <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">Create distributor, supplier and strategic partnerships that compound long after the show closes. We facilitate introductions before you arrive.</p>
          <Link href="/exhibitions" className="inline-block mt-4 text-sm font-bold border-b-2 border-[#0F0F0F] pb-1">Explore exhibitions →</Link>
        </div>
      </div>

      <div className="mt-10 bg-[#0F0F0F] text-white p-8 lg:p-10">
        <h3 className="text-xl font-bold">Who you&apos;ll meet</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {attendeeCategories.map(c=>(
            <div key={c.id} className="bg-white text-[#0F0F0F] p-4">
              <div className="text-[11px] font-bold tracking-widest text-[#FF3D00]">{c.count}</div>
              <div className="text-sm font-bold mt-1">{c.label}</div>
              <div className="text-xs text-[#6B6B6B] mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-white border border-[#E8E0D6] p-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Your next customer could be across the hall.</h3>
          <p className="text-sm text-[#6B6B6B] mt-3 leading-relaxed">From first enquiry to final lead — our platform handles stall selection, onboarding, documents, payments, lead capture, meetings and ROI reporting. You focus on your market; we handle the rest.</p>
          <Link href="/become-exhibitor" className="inline-block mt-6 bg-[#FF3D00] text-white px-6 py-3 text-sm font-bold">Become an Exhibitor →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { k: "980+", v: "Brands per year" },
            { k: "78k+", v: "Industry visitors" },
            { k: "12k+", v: "Meetings facilitated" },
            { k: "4.8/5", v: "Exhibitor satisfaction" },
          ].map(s=>(
            <div key={s.v} className="bg-[#F9F6F1] border border-[#E8E0D6] p-5 text-center">
              <div className="text-2xl font-bold">{s.k}</div>
              <div className="text-xs tracking-widest font-bold text-[#6B6B6B] mt-1">{s.v.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
