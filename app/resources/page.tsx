export default function ResourcesPage() {
  const posts = [
    { title: "The 2026 Exhibitor Playbook: How to get ROI from trade shows", date: "12 Sep 2026", tag: "Guide" },
    { title: "Floor plan psychology: why stall position changes lead quality", date: "28 Aug 2026", tag: "Insights" },
    { title: "From enquiry to confirmed: the exhibitor onboarding timeline", date: "15 Aug 2026", tag: "Operations" },
    { title: "Lead capture that actually converts — QR, forms and follow-up", date: "02 Aug 2026", tag: "Product" },
  ];
  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
      <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">RESOURCES / INSIGHTS</div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Guides for exhibitors.</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map(p=>(
          <div key={p.title} className="bg-white border border-[#E8E0D6] p-6">
            <div className="text-[11px] tracking-widest font-bold text-[#FF3D00]">{p.tag} · {p.date}</div>
            <div className="text-lg font-bold leading-tight mt-2">{p.title}</div>
            <div className="text-sm text-[#6B6B6B] mt-2">Practical guidance from the Konnect 360 team on getting the most from your exhibition investment.</div>
            <div className="mt-4 text-sm font-bold">Read →</div>
          </div>
        ))}
      </div>
    </div>
  );
}
