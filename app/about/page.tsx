export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">ABOUT KONNECT 360</div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 leading-none">We create the room where <span className="font-serif italic font-normal">industries meet.</span></h1>
          <p className="text-[#3A3A3A] mt-5 leading-relaxed">Konnect 360 is an exhibition and trade-show organizer operating across Mumbai, New Delhi, Bengaluru, Chennai and Pune. For over a decade we have built focused B2B platforms where manufacturers, brands, suppliers and buyers do real business.</p>
          <p className="text-[#6B6B6B] mt-4 leading-relaxed">We are not a generic event company. Each exhibition is curated — by industry, by buyer profile, and by the outcomes exhibitors need: distribution, sourcing, partnerships and qualified demand.</p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-[#E8E0D6] pt-6">
            <div><div className="text-2xl font-bold">12+</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">YEARS</div></div>
            <div><div className="text-2xl font-bold">45+</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">EXHIBITIONS</div></div>
            <div><div className="text-2xl font-bold">6</div><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">CITIES</div></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-[300px] overflow-hidden bg-[#0F0F0F]"><img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80" alt="Team" className="w-full h-full object-cover opacity-90"/></div>
          <div className="bg-white border border-[#E8E0D6] p-6">
            <div className="text-sm font-bold">How we work</div>
            <ol className="mt-3 space-y-2 text-sm text-[#3A3A3A] list-decimal list-inside">
              <li>We choose industries with real sourcing demand.</li>
              <li>We invite buyers — not just visitors.</li>
              <li>We design floor plans around flow and discovery.</li>
              <li>We give exhibitors a platform to capture and prove ROI.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
