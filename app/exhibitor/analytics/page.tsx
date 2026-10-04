export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Event analytics</h1>
      <p className="text-sm text-[#6B6B6B] mt-1">Live performance during the show. Data updates as you capture leads and meetings.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {[
          { k:"842", l:"STALL VISITORS", sub:"+12% vs yesterday" },
          { k:"186", l:"LEADS", sub:"22% conversion" },
          { k:"73", l:"QUALIFIED LEADS", sub:"39% of leads" },
          { k:"21", l:"MEETINGS", sub:"8 scheduled tomorrow" },
        ].map(s=>(
          <div key={s.l} className="bg-white border border-[#E8E0D6] p-5">
            <div className="text-3xl font-bold">{s.k}</div>
            <div className="text-[11px] tracking-widest font-bold text-[#6B6B6B] mt-1">{s.l}</div>
            <div className="text-xs text-[#0F4C3A] mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="text-sm font-bold">Leads by day</div>
          <div className="mt-4 flex items-end gap-2 h-[120px]">
            {[32,48,62,74,58,91,42].map((h,i)=>(
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#FF3D00]" style={{height: `${h}%`}}/>
                <span className="text-[10px] font-bold text-[#6B6B6B]">D{i+1}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-[#E8E0D6] p-6">
          <div className="text-sm font-bold">Leads by interest</div>
          <div className="mt-4 space-y-3">
            {[
              { label:"Product demo", v:62 },
              { label:"Pricing", v:48 },
              { label:"Distribution", v:38 },
              { label:"Partnership", v:22 },
              { label:"More info", v:16 },
            ].map(r=>(
              <div key={r.label} className="flex items-center gap-3">
                <span className="text-xs w-[110px]">{r.label}</span>
                <div className="flex-1 h-2 bg-[#F0EEEA]"><div className="h-full bg-[#0F0F0F]" style={{width:`${r.v}%`}}/></div>
                <span className="text-xs font-bold w-8">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white border border-[#E8E0D6] p-6">
        <div className="text-sm font-bold">Visitor engagement — hourly</div>
        <div className="mt-4 flex items-end gap-1 h-[80px]">
          {Array.from({length:24},(_,i)=> 10+Math.round(Math.abs(Math.sin(i/3))*60)).map((h,i)=>(
            <div key={i} className="flex-1 bg-[#E8E0D6]" style={{height:`${h}%`, background: h>50? "#0F0F0F": "#E8E0D6"}}/>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-[#6B6B6B] mt-2"><span>09:00</span><span>13:00</span><span>18:00</span></div>
      </div>
    </div>
  );
}
