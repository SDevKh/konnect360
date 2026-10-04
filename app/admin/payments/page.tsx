"use client";
import { exhibitorLeads } from "@/lib/data";
export default function PaymentsPage() {
  const rows = exhibitorLeads.map(r=> ({
    ...r,
    total: r.status==="Confirmed"? 85000 : 85000,
    paid: r.payment==="Paid"? 85000 : r.payment==="75% Paid"? 63750 : r.payment==="50% Paid"? 42500 : 0,
  }));
  const totalValue = rows.reduce((a,r)=>a+r.total,0);
  const totalPaid = rows.reduce((a,r)=>a+r.paid,0);
  return (
    <div>
      <h1 className="text-xl font-bold">Payment tracking</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border border-[#E8E0D6] p-5"><div className="text-[11px] tracking-widest font-bold text-[#6B6B6B]">TOTAL BOOKING VALUE</div><div className="text-2xl font-bold mt-1">₹{(totalValue/100000).toFixed(2)} L</div></div>
        <div className="bg-[#0F4C3A] text-white p-5"><div className="text-[11px] tracking-widest font-bold text-white/60">AMOUNT RECEIVED</div><div className="text-2xl font-bold mt-1">₹{(totalPaid/100000).toFixed(2)} L</div></div>
        <div className="bg-[#FF3D00] text-white p-5"><div className="text-[11px] tracking-widest font-bold">OUTSTANDING</div><div className="text-2xl font-bold mt-1">₹{((totalValue-totalPaid)/100000).toFixed(2)} L</div></div>
      </div>
      <div className="mt-6 bg-white border border-[#E8E0D6] overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#F9F6F1] text-[11px] tracking-widest font-bold text-[#6B6B6B]">
            <tr><th className="text-left px-4 py-3">COMPANY</th><th className="text-left px-4 py-3">STALL</th><th className="text-left px-4 py-3">TOTAL</th><th className="text-left px-4 py-3">PAID</th><th className="text-left px-4 py-3">OUTSTANDING</th><th className="text-left px-4 py-3">STATUS</th></tr>
          </thead>
          <tbody className="divide-y divide-[#E8E0D6]">
            {rows.map((r,i)=>(
              <tr key={i}>
                <td className="px-4 py-3 font-semibold">{r.company}</td>
                <td className="px-4 py-3 font-mono text-xs">{r.stall}</td>
                <td className="px-4 py-3">₹{r.total.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3">₹{r.paid.toLocaleString("en-IN")}</td>
                <td className="px-4 py-3 font-bold">₹{(r.total-r.paid).toLocaleString("en-IN")}</td>
                <td className="px-4 py-3"><span className={`text-[11px] font-bold px-2 py-1 ${r.paid===r.total?"bg-[#0F4C3A] text-white": r.paid>0?"bg-[#FF3D00] text-white":"bg-[#F0EEEA]"}`}>{r.paid===r.total?"PAID": r.paid>0?"PARTIAL":"UNPAID"}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
