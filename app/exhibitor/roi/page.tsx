export default function ROIPage() {
  return (
    <div>
      <div className="bg-[#0F0F0F] text-white p-8">
        <div className="text-[11px] tracking-[0.16em] font-bold text-[#FF3D00]">POST-EVENT REPORT</div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">Your Exhibition Performance</h1>
        <p className="text-white/70 text-sm mt-2">ABC INDUSTRIES · AUTOMOTIVE COMPONENTS EXPO 2026 · Stall B14 · 14—16 Nov</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        {[
          { k:"842", l:"Booth visitors" },
          { k:"186", l:"Leads captured" },
          { k:"73", l:"Qualified leads" },
          { k:"21", l:"Meetings" },
          { k:"42", l:"Product enquiries" },
        ].map(s=>(
          <div key={s.l} className="bg-white border border-[#E8E0D6] p-5 text-center">
            <div className="text-3xl font-bold">{s.k}</div>
            <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B] mt-1">{s.l.toUpperCase()}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="text-sm font-bold">Your top-performing categories</div>
          <div className="mt-4 space-y-3">
            {[
              { label:"EV Components", v:78 },
              { label:"Aftermarket Parts", v:54 },
              { label:"OEM Sourcing", v:42 },
            ].map(r=>(
              <div key={r.label} className="flex items-center gap-3">
                <span className="text-xs w-[140px] font-semibold">{r.label}</span>
                <div className="flex-1 h-2 bg-[#F0EEEA]"><div className="h-full bg-[#FF3D00]" style={{width:`${r.v}%`}}/></div>
                <span className="text-xs font-bold">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="text-sm font-bold">What happened at your booth</div>
          <ul className="mt-4 space-y-2 text-sm text-[#3A3A3A] list-disc list-inside">
            <li>Peak traffic: Day 2, 11am—2pm (38% of total visits)</li>
            <li>61% of leads came from QR scans; 39% from manual entry</li>
            <li>Distribution interest was your #1 enquiry type</li>
            <li>3 meetings converted to follow-up calls within 48h</li>
          </ul>
          <div className="mt-4 bg-[#F9F6F1] border border-[#E8E0D6] p-3 text-xs leading-relaxed">
            <span className="font-bold">Insight:</span> Exhibitors who staffed 3+ team members captured 2.4× more qualified leads. Consider a larger team next year.
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[#FF3D00] text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold">Ready for the next one?</div>
          <div className="text-sm text-white/90">Exhibitors who rebook within 30 days get priority stall selection.</div>
        </div>
        <a href="/exhibitions" className="bg-white text-[#0F0F0F] px-6 py-3 text-sm font-bold shrink-0">Explore next year&apos;s exhibitions →</a>
      </div>
    </div>
  );
}
