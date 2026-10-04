"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const nav = [
  { label: "EXHIBITIONS", href: "/exhibitions" },
  { label: "WHY EXHIBIT", href: "/why-exhibit" },
  { label: "PAST EVENTS", href: "/past-exhibitions" },
  { label: "ABOUT", href: "/about" },
];

export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (path.startsWith("/exhibitor") || path.startsWith("/admin")) return null;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FFFBF5]/95 backdrop-blur-md border-b border-[#E2D5C3] shadow-sm" : "bg-[#FFFBF5] border-b border-transparent"}`}>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A0A00] text-white grid place-items-center text-[11px] font-bold tracking-widest leading-none rounded-xl shadow-md">K<span className="text-[#FF9933]">360</span></div>
          <div className="leading-none">
            <div className="text-[15px] font-bold tracking-tight">KONNECT 360</div>
            <div className="text-[10px] tracking-[0.18em] text-[#6B5B4E] font-medium">EXHIBITIONS</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={`text-[12px] tracking-[0.1em] font-semibold px-4 py-2 rounded-full transition-colors ${path === n.href ? "bg-[#1A0A00] text-white" : "text-[#6B5B4E] hover:text-[#1A0A00] hover:bg-[#F0E8DC]"}`}>{n.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="text-[12px] tracking-[0.08em] font-semibold px-4 py-2 rounded-full hover:bg-[#F0E8DC] transition-colors">CONTACT</Link>
          <Link href="/become-exhibitor" className="bg-[#E8500A] hover:bg-[#C94008] text-white text-[12px] tracking-[0.08em] font-bold px-6 py-2.5 rounded-full transition-colors shadow-md">BECOME AN EXHIBITOR</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center border border-[#E2D5C3] bg-white rounded-xl shadow-sm">
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E2D5C3] bg-white/95 backdrop-blur-md px-6 py-6 space-y-2 shadow-lg">
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`block text-sm font-semibold tracking-widest px-4 py-3 rounded-xl transition-colors ${path === n.href ? "bg-[#1A0A00] text-white" : "hover:bg-[#F0E8DC]"}`}>{n.label}</Link>
          ))}
          <Link href="/become-exhibitor" onClick={() => setOpen(false)} className="block bg-[#E8500A] text-white text-center font-bold py-3 rounded-xl tracking-widest text-sm mt-2 shadow-md">BECOME AN EXHIBITOR</Link>
        </div>
      )}
    </header>
  );
}
