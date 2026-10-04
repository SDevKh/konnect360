"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { generateStalls, Stall } from "./data";

type Booking = {
  exhibitionSlug: string;
  stallId: string;
  company: string;
  contact: string;
  email: string;
  phone: string;
  industry: string;
  status: string;
};

type LeadEntry = { name: string; company: string; email: string; phone: string; interests: string[]; date: string };

type Ctx = {
  stalls: Record<string, Stall[]>;
  bookings: Booking[];
  leads: LeadEntry[];
  exhibitorLeads: LeadEntry[];
  addBooking: (b: Booking) => void;
  updateStall: (slug: string, id: string, status: Stall["status"]) => void;
  addLead: (l: LeadEntry) => void;
  addExhibitorLead: (l: LeadEntry) => void;
};

const StoreCtx = createContext<Ctx>(null as any);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [stalls, setStalls] = useState<Record<string, Stall[]>>({});
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [leads, setLeads] = useState<LeadEntry[]>([]);
  const [exhibitorLeads, setExhibitorLeads] = useState<LeadEntry[]>([
    { name: "Ananya Rao", company: "Lifestyle Retail Co", email: "ananya@lrc.com", phone: "98XXXXX001", interests: ["Distribution", "Pricing"], date: "2026-11-15" },
    { name: "Vikram Seth", company: "AutoSource India", email: "vikram@autosource.in", phone: "98XXXXX002", interests: ["Product demo", "Partnership"], date: "2026-11-15" },
  ]);

  useEffect(() => {
    // generate per exhibition slug
    const slugs = ["automotive-components-expo-2026","textile-apparel-sourcing-2027","building-materials-interiors-2027","food-hospitality-india-2027","plastics-packaging-expo-2027","electronics-components-2027"];
    const map: Record<string, Stall[]> = {};
    slugs.forEach(slug => { map[slug] = generateStalls(); });
    setStalls(map);
  }, []);

  const addBooking = (b: Booking) => setBookings(prev => [...prev, b]);
  const updateStall = (slug: string, id: string, status: Stall["status"]) =>
    setStalls(prev => ({ ...prev, [slug]: (prev[slug] || []).map(s => s.id === id ? { ...s, status } : s) }));
  const addLead = (l: LeadEntry) => setLeads(prev => [...prev, l]);
  const addExhibitorLead = (l: LeadEntry) => setExhibitorLeads(prev => [...prev, l]);

  return <StoreCtx.Provider value={{ stalls, bookings, leads, exhibitorLeads, addBooking, updateStall, addLead, addExhibitorLead }}>{children}</StoreCtx.Provider>;
}
export const useStore = () => useContext(StoreCtx);
