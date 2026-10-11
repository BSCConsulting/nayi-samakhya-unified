"use client";

import React from "react";
import { Wrench, Award, Banknote, ShieldCheck, ExternalLink, MapPin } from "lucide-react";

export function VishwakarmaDesk() {
  return (
    <div className="space-y-8">
      {/* 1. Overview Banner */}
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/40 p-6 md:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-600/30 bg-indigo-100/80 px-3 py-1 text-xs font-bold text-indigo-900 font-telugu mb-2">
              <Wrench className="h-3.5 w-3.5 text-indigo-600" />
              భారత ప్రభుత్వం · ఎంఎస్ఎంఈ మంత్రిత్వ శాఖ (Ministry of MSME)
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#781822] font-telugu">
              పీఎం విశ్వకర్మ యోజన (ట్రేడ్ 17: క్షౌరకుడు / బార్బర్)
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 font-telugu">
              నాయీ బ్రాహ్మణ క్షౌరక వృత్తి కళాకారులకు ఆధునిక పరికరాల కొనుగోలుకు ₹15,000 ఉచిత గ్రాంట్, శిక్షణ ఉపకార వేతనం మరియు 5% రాయితీ రుణాలు.
            </p>
          </div>
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-50 px-4 py-3 text-center">
            <span className="block text-2xl font-extrabold text-indigo-700">₹15,000</span>
            <span className="text-xs font-bold text-indigo-800 font-telugu">ఉచిత టూల్కిట్ గ్రాంట్</span>
          </div>
        </div>
      </div>

      {/* 2. Benefit Summary Matrix (4 Visual Cards) */}
      <div>
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-telugu">
            ప్రధాన ప్రయోజనాలు · Benefit Matrix
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 font-telugu">
            పీఎం విశ్వకర్మ కింద సెలూన్ యజమానులకు లభించే సదుపాయాలు
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Modern Toolkit */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                <Wrench className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-telugu mb-1">
                ఉచిత ఆధునిక టూల్కిట్ (₹15,000)
              </h4>
              <p className="text-xs md:text-sm text-slate-600 font-telugu leading-relaxed">
                ఆధునిక ప్రొఫెషనల్ క్లిప్పర్స్, స్టెరిలైజర్స్, డ్రైయర్స్, సెలూన్ కుర్చీలు మరియు హై-గ్రేడ్ కత్తెరల కొనుగోలుకు ₹15,000 డిజిటల్ e-RUPI వోచర్.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-700 font-telugu">
              ✓ డైరెక్ట్ డిజిటల్ ఇ-రూపీ వోచర్
            </div>
          </div>

          {/* Card 2: Skill Training & Stipend */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-telugu mb-1">
                నైపుణ్య శిక్షణ & స్టైపెండ్
              </h4>
              <p className="text-xs md:text-sm text-slate-600 font-telugu leading-relaxed">
                5-7 రోజుల ప్రాథమిక ఆధునిక స్టైలింగ్ శిక్షణ. శిక్షణ సమయంలో ప్రతి రోజుకు ₹500 చొప్పున బ్యాంక్ ఖాతాలో భత్యం (Stipend) జమ.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-700 font-telugu">
              ✓ ₹500 ప్రతి రోజు శిక్షణ భత్యం
            </div>
          </div>

          {/* Card 3: 5% Concessional Loan */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                <Banknote className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-telugu mb-1">
                5% రాయితీ వ్యాపార రుణం
              </h4>
              <p className="text-xs md:text-sm text-slate-600 font-telugu leading-relaxed">
                షూరిటీ లేకుండా రాయితీ రుణాలు. మొదటి విడతలో ₹1,00,000 (18 నెలలు), విజయవంతంగా తిరిగి చెల్లిస్తే రెండవ విడతలో ₹2,00,000 (30 నెలలు).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 font-telugu">
              ✓ గరిష్టంగా ₹3 లక్షల వరకు రుణం
            </div>
          </div>

          {/* Card 4: Official Identity */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 font-telugu mb-1">
                అధికారిక గుర్తింపు కార్డు
              </h4>
              <p className="text-xs md:text-sm text-slate-600 font-telugu leading-relaxed">
                ప్రధానమంత్రి విశ్వకర్మ డిజిటల్ ఐడీ కార్డ్ మరియు ధృవీకరణ పత్రం. కేంద్ర ప్రభుత్వ అధికారిక రికార్డులలో గుర్తింపు పొందిన కళాకారుని హోదా.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-purple-700 font-telugu">
              ✓ అధికారిక డిజిటల్ సర్టిఫికేట్
            </div>
          </div>
        </div>
      </div>

      {/* 3. Step-by-Step Biometric Enrollment Workflow */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 font-telugu">
            దరఖాస్తు విధానం · Registration Steps
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 font-telugu">
            పీఎం విశ్వకర్మ నమోదు చేసుకునే సులభమైన 3 దశలు
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 relative">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#781822] text-white font-bold text-sm mb-3">
              1
            </span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">
              దశ 1: CSC కేంద్రంలో బయోమెట్రిక్ నమోదు
            </h4>
            <p className="text-xs text-slate-600 font-telugu leading-relaxed">
              మీ సమీప కామన్ సర్వీస్ సెంటర్ (CSC) వద్దకు వెళ్లి ఆధార్ కార్డు, ఆధార్ లింక్ అయిన మొబైల్ నంబర్ మరియు బ్యాంక్ పాస్‌బుక్‌తో వేలిముద్ర (Biometric) నమోదు చేసుకోండి. ట్రేడ్: <strong>Barber (క్షురకుడు)</strong> ఎంచుకోవాలి.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 relative">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#781822] text-white font-bold text-sm mb-3">
              2
            </span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">
              దశ 2: గ్రామ పంచాయతీ / వార్డ్ నిర్ధారణ
            </h4>
            <p className="text-xs text-slate-600 font-telugu leading-relaxed">
              మీ గ్రామ సర్పంచ్ / పంచాయతీ కార్యదర్శి లేదా మున్సిపాలిటీ వార్డ్ కమిషనర్ మీ దరఖాస్తును పరిశీలించి మీరు నిజమైన సెలూన్ వృత్తిదారుడని ఆన్‌లైన్‌లో ఆమోదిస్తారు.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5 relative">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#781822] text-white font-bold text-sm mb-3">
              3
            </span>
            <h4 className="font-bold text-sm text-slate-900 font-telugu mb-1">
              దశ 3: జిల్లా కమిటీ ఆమోదం & వోచర్ విడుదల
            </h4>
            <p className="text-xs text-slate-600 font-telugu leading-relaxed">
              జిల్లా ఇంప్లిమెంటేషన్ కమిటీ తుది ఆమోదం తెలిపి ట్రైనింగ్ తేదీలను ప్రకటిస్తుంది. శిక్షణ పూర్తి కాగానే ₹15,000 e-RUPI టూల్కిట్ వోచర్ మీ మొబైల్‌కు ఎస్ఎంఎస్ రూపంలో వస్తుంది.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Official Gateways */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-slate-900 font-telugu text-base mb-1">
            కేంద్ర ప్రభుత్వ అధికారిక పోర్టల్ గేట్‌వే
          </h4>
          <p className="text-xs text-slate-600 font-telugu">
            PM విశ్వకర్మ అధికారిక పోర్టల్‌లో రిజిస్ట్రేషన్ స్టేటస్ మరియు CSC కేంద్రాలను శోధించండి.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://pmvishwakarma.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-indigo-800 transition font-telugu"
          >
            అధికారిక పోర్టల్ (Apply via CSC)
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://locator.csccloud.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:border-indigo-500 hover:text-indigo-800 transition font-telugu"
          >
            <MapPin className="h-4 w-4 text-slate-400" />
            మీ సమీప CSC కేంద్రాన్ని కనుగొనండి
          </a>
        </div>
      </div>
    </div>
  );
}
