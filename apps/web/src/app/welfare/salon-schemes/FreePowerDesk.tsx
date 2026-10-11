"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, CheckCircle2, AlertTriangle, FileText, ExternalLink, ArrowRight } from "lucide-react";

export function FreePowerDesk() {
  const [units, setUnits] = useState<number>(210);
  const [discom, setDiscom] = useState<"TGSPDCL" | "TGNPDCL">("TGSPDCL");

  // Free electricity slab limit under G.O. Ms. No. 23
  const FREE_LIMIT = 250;
  const isFree = units <= FREE_LIMIT;
  const excessUnits = Math.max(0, units - FREE_LIMIT);

  // Commercial LT-II slab estimation for excess units (approx average ₹8.50 per unit + fixed charges)
  const estimatedCost = excessUnits * 8.5;
  const estimatedSavings = isFree
    ? Math.round(units * 8.5 + 150)
    : Math.round(FREE_LIMIT * 8.5 + 150);

  return (
    <div className="space-y-8">
      {/* 1. Header Overview Card */}
      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/30 bg-amber-100/80 px-3 py-1 text-xs font-bold text-amber-900 font-telugu mb-2">
              <Zap className="h-3.5 w-3.5 text-amber-600" />
              తెలంగాణ ప్రభుత్వం · జీవో నెం. 23 (G.O. Ms. No. 23)
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#781822] font-telugu">
              క్షౌరశాలలకు 250 యూనిట్ల ఉచిత విద్యుత్ పథకం
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 font-telugu">
              TGSPDCL (దక్షిణ తెలంగాణ) & TGNPDCL (ఉత్తర తెలంగాణ) పరిధిలోని నమోదిత క్షౌరశాలలకు ప్రతి నెలా 250 యూనిట్ల వరకు ఉచిత విద్యుత్ సౌకర్యం.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-center">
            <span className="block text-2xl font-extrabold text-emerald-700">250</span>
            <span className="text-xs font-bold text-emerald-800 font-telugu">యూనిట్లు / నెలకు ఉచితం</span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Tariff Simulator */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-700 font-telugu">
            ⚡ ప్రత్యక్ష విద్యుత్ లెక్కించే సాధనం
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 font-telugu">
            మీ సెలూన్ నెలవారీ విద్యుత్ ఆదా లెక్కించండి
          </h3>
          <p className="text-sm text-slate-500 font-telugu">
            నెలవారీ రీడింగ్ ఆధారంగా మీ బిల్లు సున్నా అవుతుందా లేదా అదనపు యూనిట్లకు ఎంత చెల్లించాలో తనిఖీ చేయండి.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <label htmlFor="discom-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-telugu mb-1.5">
                విద్యుత్ పంపిణీ సంస్థ (DISCOM)
              </label>
              <select
                id="discom-select"
                value={discom}
                onChange={(e) => setDiscom(e.target.value as "TGSPDCL" | "TGNPDCL")}
                className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:border-[#781822] focus:outline-none focus:ring-1 focus:ring-[#781822]"
              >
                <option value="TGSPDCL">TGSPDCL - దక్షిణ తెలంగాణ (హైదరాబాద్, రంగారెడ్డి, నల్గొండ, మహబూబ్‌నగర్, మెదక్)</option>
                <option value="TGNPDCL">TGNPDCL - ఉత్తర తెలంగాణ (వరంగల్, కరీంనగర్, నిజామాబాద్, ఖమ్మం, ఆదిలాబాద్)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="units-slider" className="text-xs font-bold uppercase tracking-wider text-slate-700 font-telugu">
                  నెలవారీ వినియోగ యూనిట్లు (Monthly Units)
                </label>
                <span className="font-extrabold text-lg text-[#781822]">
                  {units} <span className="text-xs font-normal text-slate-500">యూనిట్లు</span>
                </span>
              </div>
              <input
                id="units-slider"
                type="range"
                min="0"
                max="500"
                step="5"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#781822]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>0 యూనిట్లు</span>
                <span className="text-emerald-600 font-bold">250 (ఉచిత గరిష్ట పరిమితి)</span>
                <span>500 యూనిట్లు</span>
              </div>
            </div>
          </div>

          {/* Live Reactive Outcome Display */}
          <div className="rounded-xl border p-5 md:p-6 transition-all duration-300">
            {isFree ? (
              <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50/60 p-5 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-telugu">
                  పూర్తిగా ఉచితం (Zero Electricity Bill)
                </div>
                <div className="my-1 text-3xl font-black text-emerald-700">
                  మీ బిల్లు: ₹0/-
                </div>
                <p className="text-xs md:text-sm font-semibold text-emerald-800 font-telugu">
                  నెలవారీ ఆదా: సుమారు ₹{estimatedSavings.toLocaleString("en-IN")}/-
                </p>
                <p className="mt-2 text-xs text-slate-500 font-telugu">
                  మీ వినియోగం 250 యూనిట్ల లోపు ఉన్నందున G.O. Ms. No. 23 ప్రకారం మొత్తం విద్యుత్ ఖర్చు ప్రభుత్వమే భరిస్తుంది.
                </p>
              </div>
            ) : (
              <div className="rounded-xl border-2 border-amber-500 bg-amber-50/60 p-5 text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800 font-telugu">
                  పరిమితి మించిన వినియోగం ({excessUnits} యూనిట్లు అదనం)
                </div>
                <div className="my-1 text-2xl md:text-3xl font-black text-amber-900">
                  అంచనా బిల్లు: ₹{Math.round(estimatedCost).toLocaleString("en-IN")}/-
                </div>
                <p className="text-xs md:text-sm font-semibold text-emerald-700 font-telugu">
                  (250 యూనిట్లకు ₹{estimatedSavings.toLocaleString("en-IN")} రాయితీ లభించింది)
                </p>
                <p className="mt-2 text-xs text-slate-600 font-telugu">
                  250 యూనిట్లు ఉచితం కాగా, అదనపు {excessUnits} యూనిట్లకు మాత్రమే కమర్షియల్ LT-II టారిఫ్ ప్రకారం బిల్లు వస్తుంది.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Documentation Checklist */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-[#781822]" />
          <h3 className="text-lg md:text-xl font-bold text-slate-900 font-telugu">
            ఉచిత విద్యుత్ దరఖాస్తుకు అవసరమైన ధృవీకరణ పత్రాలు
          </h3>
        </div>
        <p className="text-sm text-slate-600 font-telugu mb-6">
          మీ సమీప విద్యుత్ సబ్-స్టేషన్ లేదా మీసేవ కేంద్రంలో సమర్పించడానికి ఈ క్రింది పత్రాలను సిద్ధం చేసుకోండి:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <span className="text-xl mb-1 block">📜</span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">కులం సర్టిఫికేట్</h4>
            <p className="text-xs text-slate-600 font-telugu">మీసేవ ద్వారా జారీ చేసిన నాయీ బ్రాహ్మణ BC-A కుల ధృవీకరణ పత్రం.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <span className="text-xl mb-1 block">🪪</span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">ఆధార్ కార్డు</h4>
            <p className="text-xs text-slate-600 font-telugu">సెలూన్ యజమాని ఆధార్ కార్డు జిరాక్స్ కాపీ.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <span className="text-xl mb-1 block">🏪</span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">ట్రేడ్ లైసెన్స్ / అనుమతి</h4>
            <p className="text-xs text-slate-600 font-telugu">గ్రామ పంచాయతీ లేదా మున్సిపాలిటీ సెలూన్ ట్రేడ్ లైసెన్స్ కాపీ.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <span className="text-xl mb-1 block">⚡</span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">విద్యుత్ సర్వీస్ కాపీ (USCNO)</h4>
            <p className="text-xs text-slate-600 font-telugu">సెలూన్ పేరుతో ఉన్న తాజా విద్యుత్ బిల్లు / కనెక్షన్ నంబర్ రసీదు.</p>
          </div>
        </div>
      </div>

      {/* 4. Grievance Gateway Card */}
      <div className="rounded-2xl border-2 border-red-200 bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-red-700 font-telugu">
              🚨 పరిష్కార వేదిక · Grievance Redressal
            </span>
            <h3 className="text-xl font-bold text-[#781822] font-telugu">
              మీ సెలూన్కు 250 యూనిట్ల ఉచిత విద్యుత్ వర్తించడం లేదా?
            </h3>
            <p className="text-sm text-slate-700 font-telugu">
              లైన్‌మెన్ నిరాకరించినా, ఏఈ ఆఫీసులో దరఖాస్తు పెండింగ్‌లో ఉన్నా, లేదా పూర్తి బిల్లు జారీ చేసినా వెంటనే అధికారిక వినతిపత్రం జనరేట్ చేసి కలెక్టర్ & డిస్కం అధికారులకు సమర్పించండి.
            </p>
          </div>
          <Link
            href="/representation?category=free-power-dispute"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#781822] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#5e121a] font-telugu"
          >
            వినతిపత్రం తయారుచేయండి (Generate Representation)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 5. External Official Gateways */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h4 className="text-sm font-bold text-slate-800 font-telugu uppercase tracking-wider mb-3">
          అధికారిక డిస్కం గేట్‌వేలు (Official Electricity Verification)
        </h4>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://tgsouthernpower.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-amber-500 hover:text-amber-800 transition"
          >
            TGSPDCL అధికారిక పోర్టల్ (దక్షిణ తెలంగాణ)
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
          <a
            href="https://tgnpdcl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-amber-500 hover:text-amber-800 transition"
          >
            TGNPDCL అధికారిక పోర్టల్ (ఉత్తర తెలంగాణ)
            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
