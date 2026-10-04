import Link from "next/link";
import { exhibitions, pastExhibitions, attendeeCategories } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-0">

      {/* HERO */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-10 pb-14">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-stretch text-[11px] tracking-[0.14em] font-bold border border-[#E2D5C3] rounded-lg overflow-hidden">
              <div className="flex items-center gap-1.5 bg-[#1A0A00] text-white px-3 py-2">
                <span className="w-1.5 h-1.5 bg-[#E8500A] rounded-full animate-pulse" />
                UPCOMING SEASON
              </div>
              <div className="flex items-center gap-3 bg-[#FBF6EE] text-[#3A2A1A] px-3 py-2">
                <span>6 EXHIBITIONS</span>
                <span className="text-[#D6C8B4] font-light">/</span>
                <span>3 CITIES</span>
              </div>
            </div>
            <h1 className="mt-6 text-[42px] md:text-[64px] font-bold tracking-[-0.04em] leading-[0.9]">
              Where <span className="font-serif italic font-normal">industries</span><br />
              meet opportunity.
            </h1>
            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-[#5A4A3A] max-w-[560px]">
              Konnect 360 creates industry-focused exhibitions where brands meet buyers, distributors, partners and the people shaping their market.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/exhibitions" className="bg-[#1A0A00] text-white px-7 py-3.5 text-sm font-bold tracking-wide rounded-xl hover:bg-[#2A1500] transition-colors shadow-md">Explore Exhibitions →</Link>
              <Link href="/become-exhibitor" className="border-2 border-[#1A0A00] px-7 py-3 text-sm font-bold tracking-wide rounded-xl hover:bg-[#1A0A00] hover:text-white transition-colors">Become an Exhibitor</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E2D5C3] pt-6 max-w-[520px]">
              <div><div className="text-2xl font-bold">980+</div><div className="text-[11px] tracking-[0.12em] font-bold text-[#6B5B4E]">EXHIBITORS / YEAR</div></div>
              <div><div className="text-2xl font-bold">78k+</div><div className="text-[11px] tracking-[0.12em] font-bold text-[#6B5B4E]">VISITORS</div></div>
              <div><div className="text-2xl font-bold">4.8/5</div><div className="text-[11px] tracking-[0.12em] font-bold text-[#6B5B4E]">EXHIBITOR RATING</div></div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#1A0A00] aspect-[4/3.2] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80" alt="Exhibition hall" className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex gap-3">
                <div className="bg-white/95 backdrop-blur px-4 py-3 flex-1 rounded-2xl">
                  <div className="text-[10px] tracking-[0.14em] font-bold text-[#E8500A]">NEXT UP</div>
                  <div className="text-sm font-bold leading-tight mt-1">AUTOMOTIVE COMPONENTS EXPO</div>
                  <div className="text-xs text-[#6B5B4E] mt-1">14—16 Nov · Bombay Exhibition Centre</div>
                </div>
                <div className="bg-[#E8500A] text-white px-4 py-3 flex flex-col justify-center text-center min-w-[92px] rounded-2xl">
                  <div className="text-[10px] tracking-widest font-bold">MUMBAI</div>
                  <div className="text-lg font-bold leading-none mt-1">14—16</div>
                  <div className="text-[11px] tracking-widest font-bold">NOV 2026</div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#6B5B4E]">
              <span className="w-8 h-px bg-[#E2D5C3]" /> Photography: Bombay Exhibition Centre, Mumbai — Automotive Expo 2025
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-y border-[#E2D5C3] bg-white/70">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-5 flex flex-wrap items-center gap-6 justify-between">
          <div className="text-[11px] tracking-[0.14em] font-bold text-[#A09080]">TRUSTED BY 900+ BRANDS INCLUDING</div>
          <div className="flex flex-wrap gap-6 text-[13px] font-bold tracking-wide text-[#6B5B4E]">
            <span>AUTOCOMP</span><span className="text-[#D6C8B4]">·</span><span>FABTREND</span><span className="text-[#D6C8B4]">·</span><span>SURFACE STUDIO</span><span className="text-[#D6C8B4]">·</span><span>VOLTEDGE</span><span className="text-[#D6C8B4]">·</span><span>PACKPRO</span><span className="text-[#D6C8B4]">·</span><span>DUROBUILD</span>
          </div>
        </div>
      </section>

      {/* UPCOMING EXHIBITIONS */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-[#E8500A]">SEASON 2026—2027</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Upcoming exhibitions</h2>
          </div>
          <Link href="/exhibitions" className="text-sm font-bold border-b-2 border-[#1A0A00] pb-1">View all exhibitions →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitions.map((ex) => (
            <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E2D5C3] hover:border-[#E8500A]/30 transition-all duration-300 flex flex-col">
              <div className="h-[200px] overflow-hidden relative">
                <img src={ex.image} alt={ex.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold tracking-widest rounded-full shadow-sm">{ex.dateShort} · {ex.city.toUpperCase()}</div>
                <div className={`absolute top-3 right-3 px-3 py-1 text-[10px] font-bold tracking-widest text-white rounded-full ${ex.status === "Almost Sold Out" ? "bg-[#E8500A]" : ex.status === "Selling Fast" ? "bg-[#1A0A00]" : "bg-[#0F4C3A]"}`}>{ex.status.toUpperCase()}</div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[11px] tracking-[0.12em] font-bold text-[#E8500A]">{ex.industry.toUpperCase()}</div>
                <div className="text-[15px] font-bold leading-tight mt-1 tracking-tight">{ex.name}</div>
                <div className="text-sm text-[#6B5B4E] mt-2 line-clamp-2 leading-relaxed">{ex.description}</div>
                <div className="mt-4 flex gap-4 text-xs">
                  <span className="font-bold">{ex.exhibitors}+ exhibitors</span>
                  <span className="text-[#D6C8B4]">·</span>
                  <span className="font-bold">{ex.visitors} visitors</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#E8500A]">
                  Explore Exhibition <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="bg-[#FBF6EE] border-y border-[#E2D5C3]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-[#E8500A]">VENUE LAYOUTS</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Exhibition floor plans</h2>
              <p className="text-sm text-[#6B5B4E] mt-2">Colour-coded zones, live availability, and stall-level pricing — before you even visit.</p>
            </div>
            <Link href="/booking" className="text-sm font-bold border-b-2 border-[#1A0A00] pb-1">Book a stall →</Link>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { color: "bg-[#93C5FD]", label: "Zone A — Entrance", desc: "Highest footfall" },
              { color: "bg-[#86EFAC]", label: "Zone B — Central", desc: "Strong visibility" },
              { color: "bg-[#FCD34D]", label: "Zone C — Premium", desc: "Curated audience" },
              { color: "bg-[#D8B4FE]", label: "Zone D — Rear", desc: "Focused buyers" },
            ].map((z) => (
              <div key={z.label} className="flex items-center gap-2 bg-white border border-[#E2D5C3] px-4 py-2 rounded-full shadow-sm">
                <span className={`w-3 h-3 rounded-full ${z.color}`} />
                <span className="text-[11px] font-bold tracking-wide">{z.label}</span>
                <span className="text-[11px] text-[#6B5B4E]">{z.desc}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "AUTOMOTIVE COMPONENTS EXPO", city: "Mumbai", venue: "Bombay Exhibition Centre", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", halls: "4 Halls · 12,000 sqm", stalls: 320, available: 87, slug: "automotive-components-expo-2026" },
              { label: "TEXTILE & APPAREL SOURCING", city: "Delhi", venue: "India Expo Mart", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", halls: "3 Halls · 9,500 sqm", stalls: 240, available: 142, slug: "textile-apparel-sourcing-2027" },
              { label: "BUILDING MATERIALS & INTERIORS", city: "Bengaluru", venue: "BIEC", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", halls: "2 Halls · 7,200 sqm", stalls: 180, available: 119, slug: "building-materials-interiors-2027" },
            ].map((fp) => (
              <Link key={fp.label} href={`/exhibitions/${fp.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E2D5C3] hover:border-[#E8500A]/30 transition-all duration-300 block">
                <div className="relative h-[180px] overflow-hidden">
                  <img src={fp.img} alt={fp.label} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 opacity-60" />
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1.5 p-3">
                    <div className="bg-[#93C5FD]/75 border border-[#93C5FD] flex items-center justify-center text-[10px] font-bold tracking-widest text-[#1E40AF] rounded-lg">A</div>
                    <div className="bg-[#86EFAC]/75 border border-[#86EFAC] flex items-center justify-center text-[10px] font-bold tracking-widest text-[#166534] rounded-lg">B</div>
                    <div className="bg-[#FCD34D]/75 border border-[#FCD34D] flex items-center justify-center text-[10px] font-bold tracking-widest text-[#92400E] rounded-lg">C</div>
                    <div className="bg-[#D8B4FE]/75 border border-[#D8B4FE] flex items-center justify-center text-[10px] font-bold tracking-widest text-[#6B21A8] rounded-lg">D</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-widest rounded-full shadow-sm">FLOOR PLAN</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1A0A00]/80 text-white text-[10px] tracking-[0.14em] font-bold py-2 px-3 rounded-b-none">
                    ▼ MAIN ENTRANCE
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.14em] font-bold text-[#E8500A]">{fp.city.toUpperCase()} · {fp.venue.toUpperCase()}</div>
                  <div className="text-sm font-bold mt-1 leading-tight">{fp.label}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-[#6B5B4E] font-semibold">
                      <span>{fp.halls}</span><span className="text-[#D6C8B4]">·</span><span>{fp.stalls} stalls</span>
                    </div>
                    <div className="text-[11px] font-bold text-[#0F4C3A] bg-green-50 px-2.5 py-1 rounded-full">{fp.available} available</div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-[#E8500A]">View floor plan →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EXHIBIT */}
      <section className="bg-[#1A0A00] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF9933]">WHY EXHIBIT WITH KONNECT 360</div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-none mt-3">Exhibit where your<br /><span className="font-serif italic font-normal text-[#FF9933]">industry gathers.</span></h2>
              <p className="text-white/70 mt-4 leading-relaxed">We don&apos;t sell stalls. We put your brand in the room with the people who can change your business.</p>
              <div className="mt-8 space-y-5">
                {[
                  { title: "Meet the people who matter.", desc: "Buyers, procurement teams, distributors, retailers, manufacturers and investors — under one roof, for three focused days.", active: true },
                  { title: "Launch in front of your market.", desc: "Introduce new products directly to qualified industry audiences who came to buy.", active: false },
                  { title: "Build partnerships, not just impressions.", desc: "Create distributor, supplier and strategic partnership opportunities that last beyond the show.", active: false },
                ].map((item) => (
                  <div key={item.title} className={`pl-5 rounded-r-xl py-3 ${item.active ? "border-l-2 border-[#FF9933] bg-white/5" : "border-l-2 border-white/15"}`}>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-white/60 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/why-exhibit" className="inline-block mt-8 border border-white/30 px-6 py-3 text-sm font-bold tracking-wide rounded-xl hover:bg-white hover:text-[#1A0A00] transition-colors">Why exhibit →</Link>
            </div>
            <div className="grid grid-cols-3 gap-3 content-start">
              {attendeeCategories.map(c => (
                <div key={c.id} className="bg-white/10 backdrop-blur text-white p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="text-[11px] tracking-[0.12em] font-bold text-[#FF9933]">{c.count}</div>
                  <div className="text-sm font-bold mt-1 leading-tight">{c.label}</div>
                  <div className="text-xs text-white/50 mt-2 leading-relaxed hidden md:block">{c.desc}</div>
                </div>
              ))}
              <div className="col-span-3 bg-[#E8500A] text-white p-5 rounded-2xl flex items-center justify-between">
                <div><div className="text-2xl font-bold">18,000+</div><div className="text-xs tracking-widest font-bold opacity-80">TOTAL INDUSTRY VISITORS ACROSS 2025</div></div>
                <div className="text-3xl">↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATCHING TOOL TEASER */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-[#E2D5C3] shadow-sm overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 lg:p-10">
            <div className="text-[11px] tracking-[0.16em] font-bold text-[#E8500A]">EXHIBITOR MATCHING</div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">Find the right exhibition for your business.</h3>
            <p className="text-sm text-[#6B5B4E] mt-3 leading-relaxed">Tell us your industry, objectives and budget. We&apos;ll recommend the exhibitions where your ideal customers gather.</p>
            <Link href="/exhibitions" className="inline-block mt-6 bg-[#1A0A00] text-white px-6 py-3 text-sm font-bold rounded-xl hover:bg-[#2A1500] transition-colors shadow-md">Find my exhibition →</Link>
          </div>
          <div className="bg-[#FBF6EE] p-8 lg:p-10 border-l border-[#E2D5C3]">
            <div className="space-y-4">
              <div>
                <div className="text-[11px] tracking-widest font-bold text-[#6B5B4E]">WHAT INDUSTRY ARE YOU IN?</div>
                <div className="mt-2 border border-[#E2D5C3] bg-white px-4 py-3 text-sm flex justify-between rounded-xl">Select industry <span>▾</span></div>
              </div>
              <div>
                <div className="text-[11px] tracking-widest font-bold text-[#6B5B4E]">OBJECTIVES</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Find buyers", "Find distributors", "Launch products", "Generate leads"].map(o => (
                    <span key={o} className="border border-[#E2D5C3] bg-white px-3 py-1.5 text-xs font-semibold rounded-full">{o}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1A0A00] text-white p-4 rounded-2xl flex items-center justify-between">
                <div><div className="text-xs tracking-widest font-bold text-[#FF9933]">94% MATCH</div><div className="font-bold">AUTOMOTIVE COMPONENTS EXPO</div></div>
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAST EXHIBITIONS */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pb-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-[#E8500A]">OUR PORTFOLIO</div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">Past exhibitions — proof, not promises.</h3>
          </div>
          <Link href="/past-exhibitions" className="text-sm font-bold border-b-2 border-[#1A0A00] pb-1 hidden md:inline">View all past events →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pastExhibitions.slice(0, 3).map(p => (
            <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-[#E2D5C3] transition-all duration-300 group">
              <div className="h-[180px] overflow-hidden relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest rounded-full">{p.year} · {p.city.toUpperCase()}</div>
              </div>
              <div className="p-5">
                <div className="text-[11px] tracking-widest font-bold text-[#E8500A]">{p.industry?.toUpperCase()}</div>
                <div className="font-bold text-sm mt-1">{p.name}</div>
                <div className="flex gap-3 mt-3">
                  <span className="bg-[#FBF6EE] border border-[#E2D5C3] text-xs font-bold px-3 py-1 rounded-full">{p.exhibitors} exhibitors</span>
                  <span className="bg-[#FBF6EE] border border-[#E2D5C3] text-xs font-bold px-3 py-1 rounded-full">{p.visitors} visitors</span>
                </div>
                <div className="mt-4 text-sm italic text-[#3A2A1A] leading-relaxed">&ldquo;{p.testimonial}&rdquo;</div>
                <div className="text-xs text-[#6B5B4E] mt-2">— {p.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-[#E8500A] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl md:text-3xl font-bold tracking-tight">Let&apos;s put your brand in the room.</div>
            <div className="text-sm mt-2 text-white/85">Join 900+ brands who exhibit with Konnect 360 every year.</div>
          </div>
          <Link href="/become-exhibitor" className="bg-white text-[#1A0A00] px-8 py-3.5 text-sm font-bold tracking-wide rounded-xl hover:bg-[#FBF6EE] transition-colors shadow-lg shrink-0">Become an Exhibitor →</Link>
        </div>
      </section>

    </div>
  );
}
