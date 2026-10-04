"use client";
import { Stall } from "@/lib/data";

const zoneColors: Record<string, { bg: string; border: string; label: string }> = {
  A: { bg: "bg-[#EEF6FF]", border: "border-[#93C5FD]", label: "ZONE A — ENTRANCE" },
  B: { bg: "bg-[#F0FDF4]", border: "border-[#86EFAC]", label: "ZONE B — CENTRAL" },
  C: { bg: "bg-[#FFFBEB]", border: "border-[#FCD34D]", label: "ZONE C — PREMIUM" },
  D: { bg: "bg-[#FDF4FF]", border: "border-[#D8B4FE]", label: "ZONE D — REAR" },
};

const statusStyle: Record<string, string> = {
  available: "bg-white border-[#CFC8BE] hover:border-[#FF3D00] hover:bg-[#FFF4EF] cursor-pointer",
  reserved: "bg-[#FFF0E6] border-[#FFB088] cursor-not-allowed",
  booked: "bg-[#0F0F0F] text-white border-[#0F0F0F] cursor-not-allowed",
  premium: "bg-[#FFFBEB] border-[#F59E0B] cursor-pointer hover:border-[#FF3D00] hover:bg-[#FFF4EF]",
  held: "bg-[#F0EEEA] border-[#D6D0C4] cursor-not-allowed opacity-50",
};

export function FloorPlan({
  stalls,
  selected,
  onSelect,
}: {
  stalls: Stall[];
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  const zones = ["A", "B", "C", "D"] as const;
  const getZone = (z: string) => stalls.filter((s) => s.zone === z);

  return (
    <div className="bg-[#F9F6F1] border border-[#E8E0D6] overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-[#E8E0D6] px-5 py-3 flex items-center justify-between">
        <div className="text-[11px] tracking-[0.14em] font-bold text-[#6B6B6B]">
          INTERACTIVE FLOOR PLAN — TAP TO SELECT
        </div>
        <div className="hidden md:flex gap-4 text-[11px] items-center">
          {[
            { color: "bg-white border border-[#CFC8BE]", label: "Available" },
            { color: "bg-[#FFFBEB] border border-[#F59E0B]", label: "Premium" },
            { color: "bg-[#0F0F0F]", label: "Booked" },
            { color: "bg-[#FFF0E6] border border-[#FFB088]", label: "Reserved" },
          ].map((l) => (
            <span key={l.label} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 inline-block ${l.color}`} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Entrance banner */}
      <div className="bg-[#0F0F0F] text-white text-center py-2.5 text-[11px] tracking-[0.2em] font-bold">
        ▼ &nbsp; MAIN ENTRANCE &nbsp; ▼
      </div>

      {/* Floor map */}
      <div className="p-4 space-y-3">
        {zones.map((zone) => {
          const zc = zoneColors[zone];
          const zoneStalls = getZone(zone);
          return (
            <div key={zone} className={`border ${zc.border} ${zc.bg} p-3`}>
              {/* Zone label */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className={`text-[10px] tracking-[0.18em] font-bold px-2 py-0.5 border ${zc.border} text-[#3A3A3A]`}>
                  {zc.label}
                </div>
                <div className="flex-1 h-px bg-current opacity-10" />
                <div className="text-[10px] text-[#6B6B6B] font-semibold">
                  {zoneStalls.filter((s) => s.status === "available" || s.status === "premium").length} available
                </div>
              </div>

              {/* Stalls grid */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5">
                {zoneStalls.map((s) => (
                  <button
                    key={s.id}
                    disabled={s.status === "booked" || s.status === "reserved" || s.status === "held"}
                    onClick={() => (s.status === "available" || s.status === "premium") && onSelect(s.id)}
                    className={`relative border-2 p-2 text-left transition-all min-h-[64px] flex flex-col justify-between
                      ${statusStyle[s.status]}
                      ${selected === s.id ? "!border-[#FF3D00] !bg-[#FFF4EF] ring-2 ring-[#FF3D00]/20 scale-[1.04]" : ""}
                    `}
                  >
                    <div className="flex justify-between items-start gap-0.5">
                      <span className="text-[12px] font-bold tracking-wide leading-none">{s.id}</span>
                      {s.corner && (
                        <span className="text-[8px] tracking-widest bg-[#FF3D00] text-white px-1 py-0.5 font-bold leading-none">C</span>
                      )}
                      {s.status === "premium" && !s.corner && (
                        <span className="text-[8px] tracking-widest bg-[#F59E0B] text-white px-1 py-0.5 font-bold leading-none">P</span>
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6B6B6B] leading-none">{s.size}</div>
                      <div className="text-[10px] font-bold leading-none mt-0.5">₹{(s.price / 1000).toFixed(0)}k</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Aisle divider */}
        <div className="flex items-center gap-3 py-1">
          <div className="flex-1 border-t-2 border-dashed border-[#D6D0C4]" />
          <div className="text-[10px] tracking-[0.16em] font-bold text-[#A0A0A0]">MAIN AISLE</div>
          <div className="flex-1 border-t-2 border-dashed border-[#D6D0C4]" />
        </div>

        {/* Stage */}
        <div className="bg-[#0F0F0F] text-white text-center py-4 text-[11px] tracking-[0.18em] font-bold">
          ◆ &nbsp; MAIN STAGE &amp; CONFERENCE AREA
        </div>
      </div>

      {/* Mobile legend */}
      <div className="md:hidden border-t border-[#E8E0D6] bg-white px-4 py-3 flex flex-wrap gap-3 text-[11px]">
        {[
          { color: "bg-white border border-[#CFC8BE]", label: "Available" },
          { color: "bg-[#FFFBEB] border border-[#F59E0B]", label: "Premium" },
          { color: "bg-[#0F0F0F]", label: "Booked" },
          { color: "bg-[#FFF0E6] border border-[#FFB088]", label: "Reserved" },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-1">
            <span className={`w-3 h-3 inline-block ${l.color}`} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StallDetail({
  stall,
  onReserve,
}: {
  stall: Stall | null;
  onReserve?: () => void;
}) {
  const zoneInfo: Record<string, string> = {
    A: "Entrance zone — highest footfall",
    B: "Central zone — strong visibility",
    C: "Premium zone — curated audience",
    D: "Rear zone — focused buyers",
  };

  if (!stall)
    return (
      <div className="bg-white border border-[#E8E0D6] p-6">
        <div className="border-2 border-dashed border-[#E8E0D6] p-8 text-center">
          <div className="text-3xl mb-3">📍</div>
          <div className="text-sm font-bold text-[#3A3A3A]">Select a stall</div>
          <div className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
            Tap any available or premium stall on the floor plan to view details and pricing.
          </div>
        </div>
        <div className="mt-4 space-y-2 text-xs text-[#6B6B6B]">
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#FF3D00] inline-block" /> Corner stalls = max visibility</div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[#F59E0B] inline-block" /> Premium = curated zone placement</div>
        </div>
      </div>
    );

  return (
    <div className="bg-white border border-[#E8E0D6] sticky top-[72px]">
      {/* Zone color bar */}
      <div
        className={`h-1.5 w-full ${
          stall.zone === "A" ? "bg-[#93C5FD]" :
          stall.zone === "B" ? "bg-[#86EFAC]" :
          stall.zone === "C" ? "bg-[#FCD34D]" : "bg-[#D8B4FE]"
        }`}
      />
      <div className="p-6">
        <div className="text-[11px] tracking-[0.14em] font-bold text-[#FF3D00] mb-1">SELECTED STALL</div>
        <div className="text-3xl font-bold tracking-tight">{stall.id}</div>
        <div className="text-sm text-[#6B6B6B] mt-1">{zoneInfo[stall.zone]}</div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-[#F9F6F1] border border-[#E8E0D6] p-3">
            <div className="text-[10px] tracking-widest font-bold text-[#6B6B6B]">SIZE</div>
            <div className="text-lg font-bold mt-0.5">{stall.size} m</div>
          </div>
          <div className="bg-[#F9F6F1] border border-[#E8E0D6] p-3">
            <div className="text-[10px] tracking-widest font-bold text-[#6B6B6B]">ZONE</div>
            <div className="text-lg font-bold mt-0.5">Zone {stall.zone}</div>
          </div>
        </div>

        <div className="mt-4 border border-[#E8E0D6] p-4">
          <div className="text-[10px] tracking-widest font-bold text-[#6B6B6B]">PRICE</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold">₹{stall.price.toLocaleString("en-IN")}</span>
            <span className="text-xs text-[#6B6B6B]">excl. GST</span>
          </div>
          {stall.corner && (
            <div className="mt-2 text-[11px] font-bold text-[#FF3D00]">↗ Corner location — premium visibility</div>
          )}
          {stall.status === "premium" && (
            <div className="mt-2 text-[11px] font-bold text-[#F59E0B]">★ Premium zone placement</div>
          )}
        </div>

        <div className="mt-3 text-xs text-[#6B6B6B] leading-relaxed">
          Includes shell scheme, fascia, 1 table, 2 chairs, lighting &amp; power. Upgrades available at checkout.
        </div>

        {(stall.status === "available" || stall.status === "premium") && (
          <button
            onClick={onReserve}
            className="mt-5 w-full bg-[#FF3D00] hover:bg-[#E63600] text-white font-bold py-3.5 text-sm tracking-wide transition-colors"
          >
            Reserve This Stall →
          </button>
        )}
      </div>
    </div>
  );
}
