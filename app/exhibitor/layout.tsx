"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const tabs = [
  { label: "Overview", href: "/exhibitor" },
  { label: "Tasks", href: "/exhibitor/tasks" },
  { label: "Documents", href: "/exhibitor/documents" },
  { label: "Leads", href: "/exhibitor/leads" },
  { label: "Networking", href: "/exhibitor/networking" },
  { label: "Analytics", href: "/exhibitor/analytics" },
  { label: "ROI Report", href: "/exhibitor/roi" },
];
export default function ExhibitorLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      <div className="bg-[#0F0F0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#0F0F0F] grid place-items-center text-[10px] font-bold">K<span className="text-[#FF3D00]">360</span></div>
            <span className="text-sm font-bold tracking-tight">KONNECT 360</span>
            <span className="text-[11px] tracking-widest text-white/50 ml-2 hidden md:inline">EXHIBITOR PORTAL</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/exhibitions" className="text-xs font-bold border border-white/20 px-3 py-1.5 hidden md:inline">Browse Exhibitions</Link>
            <div className="w-8 h-8 bg-[#FF3D00] rounded-full grid place-items-center text-xs font-bold">AB</div>
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex gap-1 overflow-auto border-t border-white/10">
          {tabs.map(t=>(
            <Link key={t.href} href={t.href} className={`whitespace-nowrap px-4 py-3 text-xs font-bold tracking-widest border-b-2 ${path===t.href?"border-[#FF3D00] text-white":"border-transparent text-white/60 hover:text-white"}`}>{t.label.toUpperCase()}</Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-8">{children}</div>
    </div>
  );
}
