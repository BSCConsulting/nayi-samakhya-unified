"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { CivicEngineMap } from "@/components/CivicEngineMap";
import { CivicStalwarts } from "@/components/CivicStalwarts";
import { CivicTimeline } from "@/components/CivicTimeline";
import { CivicMetricsTicker } from "@/components/home/CivicMetricsTicker";
import { HeritageTriadRibbon } from "@/components/home/HeritageTriadRibbon";
import { HeroArtisanShowcase } from "@/components/home/HeroArtisanShowcase";
import { HomeJumpNav } from "@/components/home/HomeJumpNav";
import { HomeMobileHeader } from "@/components/home/HomeMobileHeader";
import { PersonaSwitcher } from "@/components/home/PersonaSwitcher";
import { QuickGrievanceWidget } from "@/components/home/QuickGrievanceWidget";
import { ServiceActionCards } from "@/components/home/ServiceActionCards";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { language, t } = useLanguage();
  const isTe = language === "te";

  return (
    <div className="overflow-x-hidden bg-civic-paper text-civic-ink antialiased selection:bg-civic-bronze selection:text-white">
      <div className="border-b border-slate-700/50 bg-civic-navy px-4 py-1.5 text-center text-[11px] text-slate-200 sm:px-6 lg:px-8">
        <span className={cn(isTe ? "font-telugu" : "font-sans")}>
          {t("heroBanner")}
        </span>
      </div>

      <HomeMobileHeader />

      {/* Dignified artisanal hero — stacked on mobile, 2-col on desktop */}
      <section
        id="home-hero"
        className="relative scroll-mt-20 overflow-visible border-b border-civic-border bg-gradient-to-b from-white via-[#FBFBFA] to-[#FBFBFA] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,_rgb(180_83_9_/0.08),_transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 text-center lg:text-left">
            {/* Live sovereign badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/90 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
              <span className={`text-[11px] font-bold tracking-wide text-amber-900 ${isTe ? "font-telugu" : "font-sans"}`}>
                {t("heroEyebrow")}
              </span>
            </div>

            {/* Inspiring, bullet-free headline */}
            <div>
              <h1 className="tracking-tight text-center lg:text-left">
                <span
                  className={cn(
                    "block text-2xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl",
                    isTe ? "font-display-te" : "font-sans font-extrabold tracking-tight",
                  )}
                >
                  {t("heroH1Primary")}
                </span>
                <span
                  className={cn(
                    "mt-2 block bg-gradient-to-r from-[#B45309] via-[#C2410C] to-[#D97706] bg-clip-text text-transparent text-xl font-bold sm:text-3xl lg:text-4xl",
                    isTe ? "font-display-te" : "font-sans font-extrabold",
                  )}
                >
                  {t("heroH1Secondary")}
                </span>
              </h1>
            </div>

            {/* Clear, readable mission statement */}
            <p
              className={cn(
                "mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0 lg:text-lg",
                isTe ? "font-telugu leading-telugu" : "font-sans",
              )}
            >
              {t("heroMissionLead")}
            </p>

            {/* 3 High-Impact Civic Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-left">
              <div className="group rounded-xl border border-amber-200/80 bg-white/95 p-3 shadow-2xs transition-all hover:border-amber-400 hover:shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 transition group-hover:bg-amber-600 group-hover:text-white">
                    <Zap className="h-4 w-4" />
                  </span>
                  <span className={`font-bold text-xs text-slate-900 ${isTe ? "font-telugu" : "font-sans"}`}>
                    {isTe ? "250U ఉచిత విద్యుత్" : "250U Free Power"}
                  </span>
                </div>
                <p className={`mt-1.5 text-[11px] text-slate-500 leading-snug ${isTe ? "font-telugu" : "font-sans"}`}>
                  {isTe ? "జీవో 23 కేటగిరి మార్పు & సబ్సిడీ హక్కు" : "G.O. 23 power benefit & meter status"}
                </p>
              </div>

              <div className="group rounded-xl border border-amber-200/80 bg-white/95 p-3 shadow-2xs transition-all hover:border-amber-400 hover:shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 transition group-hover:bg-amber-600 group-hover:text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <span className={`font-bold text-xs text-slate-900 ${isTe ? "font-telugu" : "font-sans"}`}>
                    {isTe ? "చట్టబద్ధ వినతి డాకెట్" : "Civic Petition Docket"}
                  </span>
                </div>
                <p className={`mt-1.5 text-[11px] text-slate-500 leading-snug ${isTe ? "font-telugu" : "font-sans"}`}>
                  {isTe ? "MRO, కలెక్టరేట్ అధికారిక అర్జీలు" : "Print-ready A4 dockets for MRO"}
                </p>
              </div>

              <div className="group rounded-xl border border-amber-200/80 bg-white/95 p-3 shadow-2xs transition-all hover:border-amber-400 hover:shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 transition group-hover:bg-amber-600 group-hover:text-white">
                    <Users className="h-4 w-4" />
                  </span>
                  <span className={`font-bold text-xs text-slate-900 ${isTe ? "font-telugu" : "font-sans"}`}>
                    {isTe ? "సమగ్ర సంక్షేమ వేదిక" : "Welfare & Matrimony"}
                  </span>
                </div>
                <p className={`mt-1.5 text-[11px] text-slate-500 leading-snug ${isTe ? "font-telugu" : "font-sans"}`}>
                  {isTe ? "వివాహ సంబంధాలు & కల్యాణ లక్ష్మి గైడ్" : "Community alliances & welfare schemes"}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center lg:justify-start">
              <Link
                href="/representation"
                className={cn(
                  "civic-focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B45309] via-[#C2410C] to-[#D97706] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgb(180_83_9_/0.25)] transition-all duration-300 hover:brightness-110 active:scale-95",
                  isTe ? "font-telugu" : "font-sans",
                )}
              >
                <FileText className="h-4 w-4 shrink-0" aria-hidden />
                {t("navCtaPetition")}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <a
                href="https://wa.me/919032654111?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%20%E0%B0%A8%E0%B0%BE%E0%B0%AF%E0%B0%BF%20%E0%B0%B8%E0%B0%AE%E0%B0%BE%E0%B0%96%E0%B1%8D%E0%B0%AF%20%E0%B0%A1%E0%B1%86%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B1%8D"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "civic-focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50/50 px-5 py-3.5 text-sm font-bold text-emerald-800 shadow-2xs transition hover:bg-emerald-100/70 active:scale-95",
                  isTe ? "font-telugu" : "font-sans",
                )}
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                {t("navCtaWhatsapp")}
              </a>
            </div>

            {/* Live coverage trust badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-500 font-medium">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{isTe ? "రాష్ట్రవ్యాప్త 33 జిల్లాలు & 589 మండలాలు కవరేజ్ • 100% ఉచిత ప్రజా సేవ" : "Covering all 33 Districts & 589 Mandals • 100% Free Public Service"}</span>
            </div>
          </div>

          {/* Artisan photo stacked below headline on mobile */}
          <div className="relative mx-auto w-full max-w-md overflow-visible pb-6 lg:max-w-none lg:pb-6">
            <HeroArtisanShowcase />
          </div>
        </div>
      </section>

      <CivicMetricsTicker />

      <CivicEngineMap />

      <HomeJumpNav />

      <div id="heritage-triad" className="scroll-mt-24">
        <HeritageTriadRibbon />
      </div>

      <div id="persona-section" className="scroll-mt-24">
        <PersonaSwitcher />
      </div>

      <div id="civic-timeline" className="scroll-mt-24">
        <CivicTimeline />
      </div>

      <div id="three-click" className="scroll-mt-24">
        <ServiceActionCards />
      </div>

      <div id="grievance-desk" className="scroll-mt-24">
        <QuickGrievanceWidget />
      </div>

      <div id="stalwarts" className="scroll-mt-24">
        <CivicStalwarts />
      </div>
    </div>
  );
}
