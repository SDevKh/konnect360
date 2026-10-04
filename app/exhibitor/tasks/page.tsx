"use client";
import { useState } from "react";
export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id:1, label:"Company details", done:true, due:"—" },
    { id:2, label:"Logo upload (min 1000px)", done:true, due:"—" },
    { id:3, label:"GST & invoicing details", done:true, due:"—" },
    { id:4, label:"Upload stall branding artwork", done:false, due:"Due 28 Oct" },
    { id:5, label:"Submit staff details (names, badges)", done:false, due:"Due 02 Nov" },
    { id:6, label:"Confirm electricity & power load", done:false, due:"Due 05 Nov" },
    { id:7, label:"Furniture & fixture confirmation", done:false, due:"Due 05 Nov" },
    { id:8, label:"Product catalogue upload", done:false, due:"Due 08 Nov" },
  ]);
  const toggle = (id:number)=> setTasks(prev=> prev.map(t=> t.id===id?{...t, done:!t.done}:t));
  return (
    <div>
      <h1 className="text-xl font-bold">Tasks & deadlines</h1>
      <p className="text-sm text-[#6B6B6B] mt-1">Complete these before the show to avoid last-minute issues. Your account manager is notified automatically.</p>
      <div className="mt-6 bg-white border border-[#E8E0D6] divide-y divide-[#E8E0D6]">
        {tasks.map(t=>(
          <label key={t.id} className={`flex items-center justify-between p-4 cursor-pointer ${t.done?"bg-[#F0F7F4]":"hover:bg-[#FFFBF5]"}`}>
            <span className="flex items-center gap-3">
              <input type="checkbox" checked={t.done} onChange={()=>toggle(t.id)} className="w-5 h-5 accent-[#0F0F0F]"/>
              <span className={`text-sm font-semibold ${t.done?"line-through text-[#6B6B6B]":""}`}>{t.label}</span>
            </span>
            <span className={`text-xs font-bold px-2 py-1 ${t.done?"bg-[#0F4C3A] text-white":"bg-[#FF3D00] text-white"}`}>{t.done?"Done":t.due}</span>
          </label>
        ))}
      </div>
      <div className="mt-4 text-sm text-[#6B6B6B]">{tasks.filter(t=>t.done).length} / {tasks.length} completed · {Math.round(tasks.filter(t=>t.done).length/tasks.length*100)}%</div>
    </div>
  );
}
