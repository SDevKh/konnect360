export function StatBlock({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="border-l-2 border-[#FF3D00] pl-5 py-1">
      <div className="text-3xl md:text-4xl font-bold tracking-tight leading-none">{value}</div>
      <div className="text-[11px] tracking-[0.14em] font-bold text-[#6B6B6B] mt-1">{label}</div>
      {sub && <div className="text-xs text-[#A0A0A0] mt-1">{sub}</div>}
    </div>
  );
}
export function InlineStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-[11px] tracking-[0.12em] font-semibold text-[#6B6B6B]">{label}</div>
    </div>
  );
}
