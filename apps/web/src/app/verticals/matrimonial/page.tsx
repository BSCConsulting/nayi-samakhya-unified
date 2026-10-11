"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  BadgeIndianRupee,
  Users,
  Lock,
  FilePenLine,
  Search,
  CalendarDays,
  MapPin,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const trustPillars = [
  {
    icon: ShieldCheck,
    te: "100% సమాజ ధృవీకరణ ప్రొఫైల్స్",
    en: "100% Community Verified Profiles",
  },
  {
    icon: BadgeIndianRupee,
    te: "నమోదు రుసుము లేదు",
    en: "Zero Registration Fees",
  },
  {
    icon: Users,
    te: "నేరుగా కుటుంబ సమన్వయం",
    en: "Direct Family Coordination",
  },
  {
    icon: Lock,
    te: "డేటా గోప్యతా రక్షణ",
    en: "Data Privacy Protection",
  },
] as const;

const profiles = [
  {
    id: "sample-1",
    uniqueId: "NS-M1042",
    age: 27,
    height: { te: "5'9\"", en: "5'9\"" },
    education: { te: "బి.టెక్ (సిఎస్ఇ) · లీడ్ క్లౌడ్ ఆర్కిటెక్ట్", en: "B.Tech (CSE) · Lead Cloud Architect" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "హైదరాబాద్", en: "Hyderabad" },
    initials: "సాయి",
    photoUrl: "/matrimony/profiles/groom-1.jpg",
    gothra: { te: "కాశ్యప", en: "Kashyapa" },
    badge: { te: "ఎన్ఎస్-ఐడీ ధృవీకృతం", en: "NS-ID Verified" },
  },
  {
    id: "sample-2",
    uniqueId: "NS-F1043",
    age: 24,
    height: { te: "5'4\"", en: "5'4\"" },
    education: { te: "ఎం.ఎస్సీ, బి.ఎడ్ · ప్రభుత్వ ఉపాధ్యాయురాలు", en: "M.Sc, B.Ed · Govt High School Teacher" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "వరంగల్", en: "Warangal" },
    initials: "స్నేహ",
    photoUrl: "/matrimony/profiles/bride-1.jpg",
    gothra: { te: "భరద్వాజ", en: "Bharadwaja" },
    badge: { te: "మండల వంశ ధృవీకృతం", en: "Mandal Lineage Verified" },
  },
  {
    id: "sample-3",
    uniqueId: "NS-M1044",
    age: 29,
    height: { te: "5'8\"", en: "5'8\"" },
    education: { te: "బి.కామ్ · సెలూన్ వ్యవస్థాపకులు & వ్యాపారవేత్త", en: "B.Com · Salon Chain Founder & Entrepreneur" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "కరీంనగర్", en: "Karimnagar" },
    initials: "రవిం",
    photoUrl: "/matrimony/profiles/groom-2.jpg",
    gothra: { te: "గౌతమ", en: "Gautama" },
    badge: { te: "స్వయం ఉపాధి సాధకులు", en: "Enterprise Modernist" },
  },
  {
    id: "sample-4",
    uniqueId: "NS-F1045",
    age: 23,
    height: { te: "5'3\"", en: "5'3\"" },
    education: { te: "బి.ఫార్మ్, ఎంబీఏ · హెల్త్‌కేర్ ఎగ్జిక్యూటివ్", en: "B.Pharm, MBA · Healthcare Executive" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "నల్గొండ", en: "Nalgonda" },
    initials: "అనన్య",
    photoUrl: "/matrimony/profiles/bride-2.jpg",
    gothra: { te: "వశిష్ట", en: "Vashishta" },
    badge: { te: "ఎన్ఎస్-ఐడీ ధృవీకృతం", en: "NS-ID Verified" },
  },
  {
    id: "sample-5",
    uniqueId: "NS-M1046",
    age: 28,
    height: { te: "5'10\"", en: "5'10\"" },
    education: { te: "బి.టెక్ · సివిల్ కాంట్రాక్టర్ & ఇంటీరియర్ డిజైనర్", en: "B.Tech · Civil Contractor & Interior Designer" },
    wing: { te: "భజంత్రి / నాయీ", en: "Bajantri / Nayi" },
    district: { te: "ఖమ్మం", en: "Khammam" },
    initials: "మాధవ్",
    photoUrl: "/matrimony/profiles/groom-3.jpg",
    gothra: { te: "ఆత్రేయ", en: "Athreya" },
    badge: { te: "కమ్యూనిటీ వెరిఫైడ్", en: "Community Verified" },
  },
  {
    id: "sample-6",
    uniqueId: "NS-F1047",
    age: 25,
    height: { te: "5'5\"", en: "5'5\"" },
    education: { te: "ఎంసిఎ · సీనియర్ ఐటీ సిస్టమ్స్ అనలిస్ట్", en: "MCA · Senior IT Systems Analyst" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "విశాఖపట్నం", en: "Visakhapatnam" },
    initials: "దివ్య",
    photoUrl: "/matrimony/profiles/bride-3.jpg",
    gothra: { te: "శాండిల్య", en: "Sandilya" },
    badge: { te: "ఎన్ఎస్-ఐడీ ధృవీకృతం", en: "NS-ID Verified" },
  },
  {
    id: "sample-7",
    uniqueId: "NS-M1048",
    age: 30,
    height: { te: "5'11\"", en: "5'11\"" },
    education: { te: "ఎం.టెక్ · సీనియర్ డేటా సైంటిస్ట్", en: "M.Tech · Senior Data Scientist" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "రంగారెడ్డి", en: "Rangareddy" },
    initials: "వంశీ",
    photoUrl: "/matrimony/profiles/groom-4.jpg",
    gothra: { te: "కౌండిన్య", en: "Kaundinya" },
    badge: { te: "మండల వంశ ధృవీకృతం", en: "Mandal Lineage Verified" },
  },
  {
    id: "sample-8",
    uniqueId: "NS-F1049",
    age: 26,
    height: { te: "5'4\"", en: "5'4\"" },
    education: { te: "ఎంబీబీఎస్ · రెసిడెంట్ మెడికల్ ఆఫీసర్ (వైద్యురాలు)", en: "MBBS · Resident Medical Officer" },
    wing: { te: "నాయీ బ్రాహ్మణ", en: "Nayi Brahmin" },
    district: { te: "సిద్దిపేట", en: "Siddipet" },
    initials: "హరిత",
    photoUrl: "/matrimony/profiles/bride-4.jpg",
    gothra: { te: "విశ్వామిత్ర", en: "Vishwamitra" },
    badge: { te: "వైద్య రంగ ధృవీకృతం", en: "Doctor Verified" },
  },
] as const;

const events = [
  {
    id: "e1",
    title: {
      te: "ఖమ్మం ప్రాంతీయ పరిచయ వేదిక",
      en: "Khammam Regional Parichaya Vedika",
    },
    date: { te: "28 సెప్టెంబర్ 2026", en: "28 September 2026" },
    venue: {
      te: "మాతృమూర్తి కల్యాణ మండపం, ఖమ్మం",
      en: "Matrumoorthi Kalyana Mandapam, Khammam",
    },
    deadline: { te: "నమోదు చివరి తేదీ: 22 సెప్టెంబర్", en: "Registration deadline: 22 Sep" },
    phone: "+91 98765 43210",
  },
  {
    id: "e2",
    title: {
      te: "సూర్యాపేట జిల్లా పరిచయ సమ్మేళనం",
      en: "Suryapet District Introduction Meet",
    },
    date: { te: "12 అక్టోబర్ 2026", en: "12 October 2026" },
    venue: {
      te: "కోదాడ కమ్యూనిటీ హాల్",
      en: "Kodada Community Hall",
    },
    deadline: { te: "నమోదు చివరి తేదీ: 5 అక్టోబర్", en: "Registration deadline: 5 Oct" },
    phone: "+91 98765 43211",
  },
] as const;

export default function MatrimonialVerticalPage() {
  const { language } = useLanguage();
  const te = language === "te";

  return (
    <div className="bg-[#FBFBF9]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 rounded-xl border border-[#EBE8E0] bg-white/80 px-3 py-2 text-xs text-[#71717A] backdrop-blur-md"
        >
          <Link href="/" className="inline-flex items-center gap-1 hover:text-[#18181B]">
            <Home className="h-3.5 w-3.5" aria-hidden />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <Link href="/verticals/matrimonial" className="font-telugu hover:text-[#18181B]">
            వివాహ సేవ
          </Link>
          <span className="text-[#EBE8E0]">/</span>
          <span>Matrimonial</span>
        </nav>

        {/* Header & trust charter */}
        <header className="rounded-2xl border border-[#EBE8E0] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C2410C]">
            Samakhya Matrimonial Services
          </p>
          <h1
            className={`mt-2 text-2xl font-bold tracking-tight text-[#18181B] sm:text-3xl ${te ? "font-telugu leading-relaxed" : ""}`}
          >
            {te
              ? "నాయీ - భజంత్రి సమాఖ్య వివాహ వేదిక"
              : "Nayi–Bajantri Samakhya Matrimonial Portal"}
          </h1>
          <p className={`mt-1 text-base text-[#71717A] ${te ? "" : "font-telugu"}`}>
            {te
              ? "Samakhya Matrimonial Services"
              : "నాయీ - భజంత్రి సమాఖ్య వివాహ వేదిక"}
          </p>
          <p
            className={`mt-3 max-w-2xl text-sm leading-relaxed text-[#71717A] ${te ? "font-telugu" : ""}`}
          >
            {te
              ? "గౌరవప్రదమైన, సమాజ ధృవీకృత వివాహ సంబంధాల కోసం అధికారిక వేదిక — ఉచిత నమోదు, కుటుంబ సమన్వయం, గోప్యతా రక్షణ."
              : "An official hub for dignified, community-verified matrimonial connections — free registration, family coordination, and privacy protection."}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <li
                key={pillar.en}
                className="flex items-start gap-2.5 rounded-xl border border-[#EBE8E0] bg-[#FBFBF9] px-3 py-3"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C2410C]/10 text-[#C2410C]">
                  <pillar.icon className="h-4 w-4" aria-hidden />
                </span>
                <span className={`text-xs font-medium leading-snug text-[#18181B] ${te ? "font-telugu" : ""}`}>
                  {te ? pillar.te : pillar.en}
                </span>
              </li>
            ))}
          </ul>
        </header>

        {/* Action strip */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://wa.me/919032654111?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%2C%20%E0%B0%AC%E0%B0%AF%E0%B1%8B%E0%B0%A1%E0%B1%87%E0%B0%9F%E0%B0%BE%20%E0%B0%A8%E0%B0%AE%E0%B1%8B%E0%B0%A6%E0%B1%81%20%E0%B0%95%E0%B0%BE%E0%B0%B5%E0%B0%BE%E0%B0%B2%E0%B0%BF"
            target="_blank"
            rel="noreferrer"
            className={`tap inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C2410C] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#9A3412] ${te ? "font-telugu" : ""}`}
          >
            <FilePenLine className="h-4 w-4 shrink-0" aria-hidden />
            {te
              ? "నూతన బయోడేటా నమోదు చేయండి (Free Registration)"
              : "Register new biodata (Free Registration)"}
          </a>
          <a
            href="#profiles"
            className={`tap inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#EBE8E0] bg-white px-5 py-3.5 text-sm font-semibold text-[#18181B] hover:border-[#C2410C]/40 hover:bg-[#FFF7ED] ${te ? "font-telugu" : ""}`}
          >
            <Search className="h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden />
            {te
              ? "వివాహ సంబంధాల శోధన (Search Profiles)"
              : "Search matrimonial profiles"}
          </a>
        </div>

        {/* Featured profiles */}
        <section id="profiles" className="mt-10 scroll-mt-24" aria-labelledby="profiles-heading">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C2410C]">
            Verified previews
          </p>
          <h2
            id="profiles-heading"
            className={`mt-1 text-xl font-bold text-[#18181B] ${te ? "font-telugu" : ""}`}
          >
            {te ? "ధృవీకృత ప్రొఫైల్ మునుజూపు" : "Featured verified profile previews"}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EBE8E0] bg-white shadow-sm transition-all duration-300 hover:border-[#C2410C]/40 hover:shadow-md"
              >
                {/* Photo frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={p.photoUrl}
                    alt={p.uniqueId}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Top badges */}
                  <div className="absolute inset-x-2 top-2 flex items-center justify-between gap-1 text-[10px] font-bold">
                    <span className="rounded-md border border-amber-400/40 bg-black/60 px-2 py-0.5 font-mono text-amber-300 backdrop-blur-xs">
                      {p.uniqueId}
                    </span>
                    <span className="rounded-md border border-emerald-400/40 bg-emerald-950/80 px-2 py-0.5 text-emerald-200 backdrop-blur-xs">
                      {te ? p.badge.te : p.badge.en}
                    </span>
                  </div>

                  {/* Bottom overlay text */}
                  <div className="absolute inset-x-3 bottom-2 text-white">
                    <p className="text-base font-bold drop-shadow-md">
                      {p.age} {te ? "సంవత్సరాలు" : "Years"} · {te ? p.height.te : p.height.en}
                    </p>
                    <p className="text-xs text-amber-200/90 drop-shadow-sm">
                      {te ? p.gothra.te : p.gothra.en} గోత్రం · {te ? p.wing.te : p.wing.en}
                    </p>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-4">
                  <p className={`text-sm font-semibold text-[#18181B] ${te ? "font-telugu" : ""}`}>
                    {te ? p.education.te : p.education.en}
                  </p>
                  <p className={`mt-1.5 flex items-center gap-1 text-xs text-[#71717A] ${te ? "font-telugu" : ""}`}>
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C2410C]" aria-hidden />
                    {te ? "స్వస్థలం" : "Native"}: {te ? p.district.te : p.district.en}
                  </p>

                  <a
                    href={`https://wa.me/919032654111?text=${encodeURIComponent(`నమస్కారం, నాయీ సమాఖ్య కల్యాణ వేదికలో ప్రొఫైల్ ID: ${p.uniqueId} (${p.district.te}) సంబంధం వివరాల కోసం సంప్రదిస్తున్నాను.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`tap mt-auto pt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#EBE8E0] bg-[#FFF7ED] px-3 py-2.5 text-xs font-bold text-[#C2410C] transition hover:border-[#C2410C] hover:bg-[#C2410C] hover:text-white ${te ? "font-telugu" : ""}`}
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {te
                      ? "సంబంధం వివరాలు & జాతకం అడగండి"
                      : "Request horoscope & family details"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Upcoming Parichaya Vedika */}
        <section className="mt-10" aria-labelledby="events-heading">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C2410C]">
            Parichaya Vedika
          </p>
          <h2
            id="events-heading"
            className={`mt-1 text-xl font-bold text-[#18181B] ${te ? "font-telugu" : ""}`}
          >
            {te ? "రాబోయే ప్రాంతీయ సమ్మేళనాల వివరాలు" : "Upcoming regional introduction meets"}
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {events.map((ev) => (
              <article
                key={ev.id}
                className="rounded-2xl border border-[#EBE8E0] bg-white p-5 shadow-sm"
              >
                <h3
                  className={`text-base font-semibold text-[#18181B] ${te ? "font-telugu" : ""}`}
                >
                  {te ? ev.title.te : ev.title.en}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#71717A]">
                  <li className={`flex items-start gap-2 ${te ? "font-telugu" : ""}`}>
                    <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden />
                    {te ? ev.date.te : ev.date.en}
                  </li>
                  <li className={`flex items-start gap-2 ${te ? "font-telugu" : ""}`}>
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden />
                    {te ? ev.venue.te : ev.venue.en}
                  </li>
                  <li className={`flex items-start gap-2 ${te ? "font-telugu" : ""}`}>
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C2410C]" aria-hidden />
                    {ev.phone}
                  </li>
                </ul>
                <p
                  className={`mt-4 inline-flex rounded-full border border-[#EBE8E0] bg-[#FFF7ED] px-3 py-1 text-xs font-medium text-[#C2410C] ${te ? "font-telugu" : ""}`}
                >
                  {te ? ev.deadline.te : ev.deadline.en}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
