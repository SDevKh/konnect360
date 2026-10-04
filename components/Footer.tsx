"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  if (path.startsWith("/exhibitor") || path.startsWith("/admin")) return null;
  return (
    <footer className="bg-[#1A0A00] text-white mt-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white text-[#1A0A00] grid place-items-center text-[11px] font-bold tracking-widest rounded-xl">K<span className="text-[#E8500A]">360</span></div>
              <span className="font-bold tracking-tight text-sm">KONNECT 360</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">Exhibitions that connect industries with opportunity. We create focused trade platforms where brands meet their market.</p>
            <div className="mt-5 text-[11px] font-devanagari text-white/30 tracking-wide">कनेक्ट ३६० — उद्योग से अवसर तक</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-white/40 mb-4">NAVIGATION</div>
            <div className="space-y-2 text-sm text-white/60">
              <Link href="/exhibitions" className="block hover:text-white transition-colors">Exhibitions</Link>
              <Link href="/why-exhibit" className="block hover:text-white transition-colors">Why Exhibit</Link>
              <Link href="/past-exhibitions" className="block hover:text-white transition-colors">Past Events</Link>
              <Link href="/about" className="block hover:text-white transition-colors">About</Link>
              <Link href="/resources" className="block hover:text-white transition-colors">Resources</Link>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-white/40 mb-4">UPCOMING</div>
            <div className="space-y-2 text-sm text-white/60">
              <div>Automotive Components — Mumbai</div>
              <div>Textile & Apparel — New Delhi</div>
              <div>Building Materials — Bengaluru</div>
              <div>Food & Hospitality — Mumbai</div>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.16em] font-bold text-white/40 mb-4">CONNECT</div>
            <div className="space-y-2 text-sm text-white/60">
              <div>hello@konnect360.in</div>
              <div>+91 98XXX XXXXX</div>
              <div>Mumbai · New Delhi · Bengaluru</div>
            </div>
            <div className="mt-5 flex gap-2">
              <input placeholder="Your email" className="bg-white/8 border border-white/15 px-4 py-2.5 text-sm w-full placeholder:text-white/30 outline-none focus:border-[#E8500A] rounded-xl transition-colors" />
              <button className="bg-[#E8500A] hover:bg-[#C94008] px-4 py-2.5 text-sm font-bold rounded-xl transition-colors shrink-0">→</button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/30">
          <div>© 2026 Konnect 360 Exhibitions Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-6"><span>Privacy</span><span>Terms</span><span>Imprint</span></div>
        </div>
      </div>
    </footer>
  );
}
