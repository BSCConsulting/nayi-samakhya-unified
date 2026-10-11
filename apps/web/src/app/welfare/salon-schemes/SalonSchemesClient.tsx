"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FreePowerDesk } from "./FreePowerDesk";
import { VishwakarmaDesk } from "./VishwakarmaDesk";
import { MessageSquare, MapPin, Zap, Wrench } from "lucide-react";

function SalonSchemesContent() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") === "pm-vishwakarma" ? "pm-vishwakarma" : "free-power";

  const waHelpUrl =
    "https://wa.me/919032654111?text=" +
    encodeURIComponent("సెలూన్ సంక్షేమ పథకాల సహాయం కావాలి (250 యూనిట్ల విద్యుత్ / PM విశ్వకర్మ)");

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 pb-20">
      {/* 1. Hero Banner */}
      <div className="border-b border-amber-500/20 bg-gradient-to-b from-[#781822] via-[#65141c] to-[#500f16] text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-amber-200/80 font-telugu">
              <Link href="/" className="hover:text-white transition">హోమ్</Link>
              <span>/</span>
              <span className="text-white">సంక్షేమ పథకాలు</span>
              <span>/</span>
              <span className="text-amber-300">సెలూన్ సంక్షేమ కేంద్రం</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300 font-telugu mb-3">
              <span>💈</span>
              నాయీ బ్రాహ్మణ సెలూన్ వ్యవస్థాపకుల సాధికారిత వేదిక
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-telugu text-white leading-tight">
              సెలూన్ సంక్షేమ & ఆధునికీకరణ కేంద్రం
            </h1>

            <p className="mt-3 text-sm sm:text-base text-amber-100/90 leading-relaxed font-telugu">
              తెలంగాణ రాష్ట్ర ప్రభుత్వ జీవో 23 ప్రకారం <strong>250 యూనిట్ల ఉచిత విద్యుత్</strong> మరియు కేంద్ర ప్రభుత్వ 
              <strong> పీఎం విశ్వకర్మ యోజన</strong> ద్వారా ₹15,000 ఉచిత ఆధునిక టూల్కిట్ గ్రాంట్, 5% రాయితీ రుణాల సమగ్ర మార్గదర్శి.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Sticky Segmented Tab Bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 sm:gap-4 py-2.5 overflow-x-auto no-scrollbar">
            <Link
              href="/welfare/salon-schemes?tab=free-power"
              replace
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition font-telugu ${
                currentTab === "free-power"
                  ? "bg-[#781822] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Zap className="h-4 w-4 text-amber-400" />
              ⚡ 250 యూనిట్ల ఉచిత విద్యుత్ (G.O. Ms. 23)
            </Link>

            <Link
              href="/welfare/salon-schemes?tab=pm-vishwakarma"
              replace
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition font-telugu ${
                currentTab === "pm-vishwakarma"
                  ? "bg-[#781822] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Wrench className="h-4 w-4 text-amber-400" />
              🛠️ PM విశ్వకర్మ యోజన (రూ. 15,000 టూల్కిట్ & లోన్)
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Main Views Area */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        {currentTab === "free-power" ? <FreePowerDesk /> : <VishwakarmaDesk />}

        {/* 4. Community Assistance Drawer */}
        <section className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 font-telugu">
                🤝 మండల & గ్రామస్థాయి సమన్వయం · Grassroots Desk
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#781822] font-telugu">
                దరఖాస్తులో సహాయం లేదా ప్రత్యక్ష పరిశీలన కావాలా?
              </h3>
              <p className="text-sm text-slate-600 font-telugu max-w-2xl">
                మీ సెలూన్ విద్యుత్ కనెక్షన్ మార్పులో ఏమైనా సమస్యలు ఉన్నా, లేదా పీఎం విశ్వకర్మ బయోమెట్రిక్ వెరిఫికేషన్‌లో ఇబ్బందులు ఎదురైనా మన 589 మండల సమన్వయకర్తలు మీకు అండగా ఉంటారు.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={waHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition font-telugu"
              >
                <MessageSquare className="h-4 w-4" />
                💬 వాట్సాప్ సహాయం (+91 9032654111)
              </a>

              <Link
                href="/mandals"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-xs hover:border-[#781822] hover:text-[#781822] transition font-telugu"
              >
                <MapPin className="h-4 w-4 text-[#781822]" />
                మండలాల డైరెక్టరీ (589 Mandals) →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function SalonSchemesClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBF7] p-12 text-center text-slate-500 font-telugu">లోడ్ అవుతోంది...</div>}>
      <SalonSchemesContent />
    </Suspense>
  );
}
