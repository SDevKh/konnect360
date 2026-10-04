"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const tabs = [
  { label: "Overview", href: "/admin" },
  { label: "Exhibitions", href: "/admin/exhibitions" },
  { label: "Stalls", href: "/admin/stalls" },
  { label: "CRM", href: "/admin/crm" },
  { label: "Payments", href: "/admin/payments" },
];
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      <div className="bg-[#0F0F0F] text-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF3D00] text-white grid place-items-center text-[10px] font-bold">K<span className="text-white">360</span></div>
            <span className="text-sm font-bold">KONNECT 360</span>
            <span className="text-[11px] tracking-widest bg-white/10 px-2 py-1 ml-2 hidden md:inline">ADMIN</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/exhibitor" className="text-xs font-bold border border-white/20 px-3 py-1.5">Exhibitor view</Link>
            <div className="w-8 h-8 bg-white text-[#0F0F0F] grid place-items-center text-xs font-bold">AD</div>
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
