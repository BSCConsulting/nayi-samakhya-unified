"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  MessageCircle,
  Mic,
  Minus,
  Send,
  X,
  ArrowLeft,
  Heart,
  HelpCircle,
  Search,
  Sparkles,
  CheckCircle2,
  Volume2,
} from "lucide-react";
import { useLanguageStore } from "@/lib/store/preferences";
import type { Lang } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BOT_FAQS, type BotFaqItem } from "@/lib/bot-faq-data";

type Msg = {
  id: string;
  role: "bot" | "user";
  text: string;
  linkHref?: string;
  linkLabel?: string;
  isFaqList?: boolean;
  audioUrl?: string;
};

type Flow = "none" | "power" | "grievance-mandal" | "grievance-name" | "grievance-text" | "matrimony-faq";

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function CulturalEmblemArt() {
  return (
    <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-100 p-2 shadow-md">
      <Image
        src="/matrimony/matrimony-emblem.png"
        alt="నాయీ సమాఖ్య అధికారిక చిహ్నం"
        width={64}
        height={64}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

function SealWatermark() {
  return (
    <div
      className="pointer-events-none absolute inset-0 m-auto h-64 w-64 opacity-[0.04]"
      aria-hidden
    >
      <div className="flex h-full w-full items-center justify-center rounded-full border-[10px] border-[#D94F2B]">
        <Landmark className="h-28 w-28 text-[#D94F2B]" />
      </div>
    </div>
  );
}

export function CivicChatbot() {
  const siteLang = useLanguageStore((s) => s.lang);
  const setSiteLang = useLanguageStore((s) => s.setLang);
  const surveyHref = "/survey";
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [botLang, setBotLang] = useState<Lang | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [flow, setFlow] = useState<Flow>("none");
  const [draft, setDraft] = useState({ mandal: "", name: "" });
  const [showActions, setShowActions] = useState(true);
  const [listening, setListening] = useState(false);
  const [faqCategory, setFaqCategory] = useState<string>("ALL");
  const [faqSearch, setFaqSearch] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !scrollerRef.current) return;
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, open, botLang, showActions, flow]);

  function pickLanguage(next: Lang) {
    setBotLang(next);
    setSiteLang(next);
    resetToMainMenu(next);
  }

  function resetToMainMenu(langOverride?: Lang) {
    const lang = langOverride ?? botLang ?? "te";
    setFlow("none");
    setShowActions(true);
    setFaqCategory("ALL");
    setFaqSearch("");
    setMessages([
      {
        id: uid(),
        role: "bot",
        text:
          lang === "te"
            ? "నమస్కారం! నేను సమాఖ్య మిత్రను. ప్రజా సేవలు, ఉచిత విద్యుత్, వివాహ వేదిక లేదా సర్వే కొరకు క్రింది విభాగాన్ని ఎంచుకోండి:"
            : "Welcome to Samakhya Seva Mitra! Please choose a service, check power status, explore matrimony FAQs, or start the survey:",
      },
    ]);
  }

  function push(userText: string, bot: Omit<Msg, "id" | "role">) {
    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", text: userText },
      { id: uid(), role: "bot", ...bot },
    ]);
  }

  function startPower() {
    const label =
      botLang === "te"
        ? "🔍 250 యూనిట్ల ఉచిత విద్యుత్ స్టేటస్"
        : "🔍 250 Units Free Power Status";
    setShowActions(false);
    setFlow("power");
    push(label, {
      text:
        botLang === "te"
          ? "దయచేసి మీ 9 అంకెల USC / మీటర్ నంబర్ నమోదు చేయండి. (నమూనా: 123456789)"
          : "Please enter your 9-digit USC / Meter number. (Sample demo: 123456789)",
    });
  }

  function startGrievance() {
    const label =
      botLang === "te"
        ? "📝 నూతన వినతి / సమస్య నమోదు"
        : "📝 Register Grievance";
    setShowActions(false);
    setFlow("grievance-mandal");
    setDraft({ mandal: "", name: "" });
    push(label, {
      text:
        botLang === "te"
          ? "మీ మండలం పేరు రాయండి (ఉదా: కోదాడ, హనుమకొండ)."
          : "Enter your mandal name (e.g. Kodad, Hanumakonda).",
    });
  }

  function startSurvey() {
    const label =
      botLang === "te" ? "📋 కుటుంబ సర్వే నమోదు" : "📋 Family Survey Entry";
    setShowActions(false);
    setFlow("none");
    push(label, {
      text:
        botLang === "te"
          ? "రాష్ట్రవ్యాప్త కుటుంబ, జీవనోపాధి & వివాహ సర్వే ప్రారంభించడానికి క్రింది బటన్ నొక్కండి."
          : "Tap below to begin the official Statewide Family, Livelihood & Matrimonial Survey.",
      linkHref: surveyHref,
      linkLabel: botLang === "te" ? "సర్వే ప్రారంభించండి (Start Survey) →" : "Start Survey →",
    });
  }

  function startMatrimonyFaq() {
    const label =
      botLang === "te"
        ? "💍 వివాహ వేదిక సహాయం (31+ FAQs)"
        : "💍 Matrimony Helpdesk (31+ FAQs)";
    setShowActions(false);
    setFlow("matrimony-faq");
    push(label, {
      text:
        botLang === "te"
          ? "నాయీ - భజంత్రి సమాఖ్య వివాహ వేదిక 31+ తరచూ అడిగే ప్రశ్నలు (నమోదు, గోప్యత, ప్రొఫైల్స్, కల్యాణ లక్ష్మి). క్రింది వర్గాల నుండి మీ ప్రశ్నకు సమాధానం ఎంచుకోండి:"
          : "Nayi-Bajantri Matrimonial Portal 31+ FAQs (Registration, Privacy, Verification, Kalyan Lakshmi). Select a category or ask directly:",
    });
  }

  function selectFaqItem(faq: BotFaqItem) {
    const lang = botLang ?? "te";
    push(lang === "te" ? faq.questionTe : faq.questionEn, {
      text: lang === "te" ? faq.answerTe : faq.answerEn,
      audioUrl: `/matrimony/audio/bot/faq-${faq.id}.mp3`,
    });
  }

  function handleSend(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text || !botLang) return;

    if (flow === "power") {
      const cleaned = text.replace(/\s/g, "");
      const ok = /^\d{9}$/.test(cleaned);
      push(text, {
        text: ok
          ? botLang === "te"
            ? `USC ${text}: డెమో స్థితి — పరిశీలనలో (mock). రిఫరెన్స్ #NS-PWR-${text.slice(-4)}. విద్యుత్ శాఖ అధికారిక వెరిఫికేషన్ పూర్తయ్యేవరకు మీ జీవో 23 దరఖాస్తు సురక్షితం.`
            : `USC ${text}: Demo status — Under Verification (mock). Reference #NS-PWR-${text.slice(-4)}. Your G.O. 23 power benefit status is securely tracked.`
          : botLang === "te"
            ? "దయచేసి సరిగ్గా 9 అంకెల USC/మీటర్ నంబర్ ఇవ్వండి (ఉదా: 123456789). నమూనా బటన్ కింద చూడండి."
            : "Please enter a valid 9-digit USC/Meter number (e.g., 123456789). You can also click the sample button below.",
      });
      if (ok) {
        setFlow("none");
        setShowActions(true);
      }
      setInput("");
      return;
    }

    if (flow === "grievance-mandal") {
      setDraft((d) => ({ ...d, mandal: text }));
      setFlow("grievance-name");
      push(text, {
        text:
          botLang === "te"
            ? "మీ పూర్తి పేరు రాయండి."
            : "Please enter your full name.",
      });
      setInput("");
      return;
    }

    if (flow === "grievance-name") {
      setDraft((d) => ({ ...d, name: text }));
      setFlow("grievance-text");
      push(text, {
        text:
          botLang === "te"
            ? "మీ సమస్య / వినతిని సంక్షిప్తంగా వివరించండి."
            : "Briefly describe your grievance or request.",
      });
      setInput("");
      return;
    }

    if (flow === "grievance-text") {
      const ref = `#NS-GR-${Date.now().toString(36).toUpperCase().slice(-6)}`;
      push(text, {
        text:
          botLang === "te"
            ? `ధన్యవాదాలు ${draft.name || ""}. ${draft.mandal || "మీ"} మండలం వినతి డెమోగా నమోదైంది. ట్రాకింగ్ ID: ${ref}.`
            : `Thank you ${draft.name || ""}. Demo grievance logged for ${draft.mandal || "your"} mandal. Tracking ID: ${ref}.`,
      });
      setFlow("none");
      setShowActions(true);
      setInput("");
      return;
    }

    // Default matching across BOT_FAQS
    const matchedFaq = BOT_FAQS.find(
      (f) =>
        f.questionTe.toLowerCase().includes(text.toLowerCase()) ||
        f.questionEn.toLowerCase().includes(text.toLowerCase()) ||
        f.answerTe.toLowerCase().includes(text.toLowerCase()) ||
        f.answerEn.toLowerCase().includes(text.toLowerCase()),
    );

    if (matchedFaq) {
      push(text, {
        text: botLang === "te" ? matchedFaq.answerTe : matchedFaq.answerEn,
      });
    } else {
      push(text, {
        text:
          botLang === "te"
            ? "మీ సందేశం అందింది. దయచేసి క్రింది సేవా బటన్లు ఉపయోగించండి లేదా అధికారిక హెల్ప్‌లైన్ +91 9032654111 కు సంప్రదించండి."
            : "Message received. Please use the menu buttons or call +91 9032654111 for direct assistance.",
      });
    }
    setShowActions(true);
    setInput("");
  }

  function onMic() {
    setListening(true);
    window.setTimeout(() => {
      setListening(false);
      const sample =
        botLang === "en"
          ? "Check my free power status"
          : "250 యూనిట్ల స్టేటస్ చెప్పండి";
      setInput(sample);
    }, 900);
  }

  const filteredFaqs = BOT_FAQS.filter((f) => {
    const matchesCat = faqCategory === "ALL" || f.category === faqCategory;
    if (!matchesCat) return false;
    if (!faqSearch) return true;
    const q = faqSearch.toLowerCase();
    return (
      f.questionTe.toLowerCase().includes(q) ||
      f.questionEn.toLowerCase().includes(q)
    );
  });

  const panelMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.98 },
        transition: { duration: 0.22 },
      };

  return (
    <div className="no-print fixed bottom-20 right-4 z-[70] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <AnimatePresence>
        {open && !minimized ? (
          <motion.div
            key="panel"
            role="dialog"
            aria-label={
              botLang === "en"
                ? "Samakhya Seva Mitra helpdesk"
                : "సమాఖ్య సేవ మిత్ర"
            }
            className="flex h-[620px] max-h-[85vh] w-[390px] max-w-[95vw] flex-col overflow-hidden rounded-3xl border border-amber-200/80 bg-[#FAF8F2] shadow-2xl"
            {...panelMotion}
          >
            {/* Header with Back button and controls */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#C2410C] via-[#D94F2B] to-amber-700 p-3.5 text-white shadow-md">
              <div className="flex min-w-0 items-center gap-2.5">
                {flow !== "none" ? (
                  <button
                    type="button"
                    onClick={() => resetToMainMenu()}
                    className="tap inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
                    aria-label="Back to main menu"
                    title="ముఖ్య మెనుకు తిరిగి వెళ్ళండి"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                ) : (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 p-1 text-amber-200 shadow-inner">
                    <Landmark className="h-4 w-4" aria-hidden />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block font-telugu text-sm font-bold leading-tight truncate">
                    {botLang === "en"
                      ? "Samakhya Seva Mitra"
                      : "సమాఖ్య సేవ మిత్ర"}
                  </span>
                  <span className="block text-[10px] text-amber-100 truncate">
                    {flow === "matrimony-faq"
                      ? "వివాహ వేదిక సహాయ వేదిక · 31+ FAQs"
                      : botLang === "en"
                        ? "Nayi–Bajantri Civic Helpdesk"
                        : "నాయీ - భజంత్రి సమాఖ్య ప్రజా వేదిక"}
                  </span>
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  className="tap inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:bg-white/15"
                  onClick={() => setMinimized(true)}
                  aria-label="Minimize"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="tap inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 hover:bg-white/15"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {!botLang ? (
                <motion.div
                  key="welcome"
                  className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-6"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: 12 }}
                  transition={{ duration: 0.25 }}
                >
                  <CulturalEmblemArt />
                  <h2 className="mt-3 font-telugu text-2xl font-extrabold tracking-wide text-[#781B0E]">
                    నమస్కారం!
                  </h2>
                  <p className="mt-1 text-center font-telugu text-sm font-bold text-[#8C2A1E]">
                    నాయీ సమాఖ్య ప్రజా సహాయ వ్యవస్థకు స్వాగతం.
                  </p>
                  <p className="mt-0.5 text-center text-xs font-semibold text-[#8C2A1E]/80">
                    Welcome to Nayi Samakhya Helpdesk
                  </p>
                  <p className="mt-3 px-4 text-center font-telugu text-xs text-[#71717A]">
                    సేవలు, వివాహ వేదిక, ఉచిత విద్యుత్ & సర్వే కొరకు భాషను ఎంచుకోండి / Select language:
                  </p>
                  <div className="mt-5 flex w-full flex-col items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => pickLanguage("te")}
                      className="w-3/4 rounded-xl border-2 border-amber-500/50 bg-white py-2.5 text-center font-telugu text-base font-bold text-[#781B0E] shadow-xs transition-all hover:bg-amber-50"
                    >
                      తెలుగు (Telugu)
                    </button>
                    <button
                      type="button"
                      onClick={() => pickLanguage("en")}
                      className="w-3/4 rounded-xl border-2 border-amber-500/50 bg-white py-2.5 text-center text-base font-bold text-[#781B0E] shadow-xs transition-all hover:bg-amber-50"
                    >
                      English
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  className="flex min-h-0 flex-1 flex-col"
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    ref={scrollerRef}
                    className="relative flex-1 space-y-3.5 overflow-y-auto bg-[#FAF8F2] p-4"
                  >
                    <SealWatermark />
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={cn(
                          "relative z-[1] max-w-[92%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-xs",
                          m.role === "bot"
                            ? cn(
                                "border border-[#EBE8E0] bg-white text-[#18181B]",
                                botLang === "te" && "font-telugu",
                              )
                            : "ml-auto bg-gradient-to-r from-[#C2410C] to-amber-700 text-white font-medium",
                        )}
                      >
                        {m.text}
                        {m.audioUrl ? (
                          <div className="mt-2">
                            <button
                              type="button"
                              onClick={() => {
                                const audio = new Audio(m.audioUrl);
                                audio.play().catch(() => {});
                              }}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-900 transition hover:bg-amber-100 active:scale-95"
                            >
                              <Volume2 className="h-3.5 w-3.5 text-[#C2410C]" />
                              <span>{botLang === "te" ? "🔊 సమాధానం వినండి (Audio)" : "🔊 Listen (Audio)"}</span>
                            </button>
                          </div>
                        ) : null}
                        {m.linkHref ? (
                          <Link
                            href={m.linkHref}
                            className="mt-2.5 block rounded-xl bg-gradient-to-r from-[#C2410C] to-amber-700 px-3 py-2 text-center text-xs font-bold text-white shadow-xs hover:from-[#9A3412] hover:to-amber-800"
                          >
                            {m.linkLabel}
                          </Link>
                        ) : null}
                      </div>
                    ))}

                    {/* Interactive Help for Power Flow */}
                    {flow === "power" && (
                      <div className="relative z-[1] rounded-2xl border border-amber-200 bg-amber-50/80 p-3 text-xs">
                        <p className="font-semibold text-slate-800">
                          {botLang === "te" ? "💡 నమూనా పరీక్ష (Sample Demo):" : "💡 Sample Demo Assistance:"}
                        </p>
                        <p className="mt-1 text-slate-600">
                          {botLang === "te"
                            ? "మీ వద్ద మీటర్ నంబర్ లేకుంటే క్రింది బటన్ నొక్కి నమూనా స్టేటస్ చూడవచ్చు:"
                            : "If you don't have a meter number handy, test with this sample:"}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleSend("123456789")}
                          className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 font-mono text-xs font-bold text-[#C2410C] border border-amber-200 shadow-2xs hover:bg-amber-100"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          నమూనా USC: 123456789 ఎంటర్ చేయండి
                        </button>
                      </div>
                    )}

                    {/* Matrimony 31+ FAQ Explorer Section */}
                    {flow === "matrimony-faq" && (
                      <div className="relative z-[1] space-y-2 rounded-2xl border border-amber-200 bg-white p-3 shadow-xs">
                        <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                          <span className="flex items-center gap-1 font-bold text-xs text-[#C2410C]">
                            <Sparkles className="h-3.5 w-3.5" />
                            31+ తరచూ అడిగే ప్రశ్నలు
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">
                            {filteredFaqs.length} ప్రశ్నలు
                          </span>
                        </div>

                        {/* Search input for FAQs */}
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            placeholder="శోధించండి / Search FAQs..."
                            value={faqSearch}
                            onChange={(e) => setFaqSearch(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs focus:border-[#C2410C] focus:outline-none"
                          />
                        </div>

                        {/* Category filter pills */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {[
                            { key: "ALL", te: "అన్నీ", en: "All" },
                            { key: "REGISTRATION", te: "నమోదు", en: "Registration" },
                            { key: "PRIVACY", te: "గోప్యత", en: "Privacy" },
                            { key: "HOROSCOPE", te: "జాతకం", en: "Horoscope" },
                            { key: "SECURITY", te: "సహాయం", en: "Security" },
                          ].map((cat) => (
                            <button
                              key={cat.key}
                              type="button"
                              onClick={() => setFaqCategory(cat.key)}
                              className={cn(
                                "rounded-full px-2 py-0.5 text-[10px] font-bold transition",
                                faqCategory === cat.key
                                  ? "bg-[#C2410C] text-white"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                              )}
                            >
                              {botLang === "te" ? cat.te : cat.en}
                            </button>
                          ))}
                        </div>

                        {/* FAQ Question list */}
                        <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1 pt-1">
                          {filteredFaqs.map((faq) => (
                            <button
                              key={faq.id}
                              type="button"
                              onClick={() => selectFaqItem(faq)}
                              className="w-full text-left rounded-xl border border-amber-100/80 bg-amber-50/40 p-2 text-xs font-semibold text-slate-800 transition hover:border-[#C2410C] hover:bg-amber-100/60"
                            >
                              <span className="block text-[10px] text-[#C2410C] font-bold">
                                #{faq.id} · {faq.categoryTe}
                              </span>
                              <span className="mt-0.5 block leading-snug">
                                {botLang === "te" ? faq.questionTe : faq.questionEn}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {showActions && flow === "none" ? (
                      <div className="relative z-[1] space-y-2 pt-1">
                        {/* Primary Action 1: Matrimonial 31+ FAQ Desk */}
                        <button
                          type="button"
                          onClick={startMatrimonyFaq}
                          className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-[#C2410C] py-2.5 px-3 text-center text-xs font-bold text-white shadow-xs transition hover:opacity-95"
                        >
                          <span className="flex items-center justify-center gap-1.5">
                            <Heart className="h-4 w-4" />
                            {botLang === "te"
                              ? "💍 వివాహ వేదిక సమగ్ర సమాచారం (31+ FAQs)"
                              : "💍 Matrimonial 31+ FAQs & Guide"}
                          </span>
                        </button>

                        {/* Primary Action 2: Survey with direct routing */}
                        <button
                          type="button"
                          onClick={startSurvey}
                          className="w-full rounded-xl bg-white border-2 border-[#C2410C]/40 py-2.5 px-3 text-center text-xs font-bold text-[#C2410C] shadow-2xs transition hover:bg-orange-50"
                        >
                          <span className="flex items-center justify-center gap-1.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                            {botLang === "te"
                              ? "📋 రాష్ట్రవ్యాప్త కుటుంబ సర్వే నమోదు (Survey)"
                              : "📋 Statewide Family Survey Entry"}
                          </span>
                        </button>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={startPower}
                            className="rounded-xl border border-amber-300 bg-amber-50/90 px-2 py-2 text-center text-[11px] font-bold text-amber-900 transition hover:bg-amber-100"
                          >
                            {botLang === "te"
                              ? "⚡ 250 యూనిట్ల స్టేటస్"
                              : "⚡ 250U Free Power"}
                          </button>
                          <button
                            type="button"
                            onClick={startGrievance}
                            className="rounded-xl border border-amber-300 bg-amber-50/90 px-2 py-2 text-center text-[11px] font-bold text-amber-900 transition hover:bg-amber-100"
                          >
                            {botLang === "te"
                              ? "📝 జీవో 23 వినతి నమోదు"
                              : "📝 Log Grievance"}
                          </button>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                          <button
                            type="button"
                            onClick={() => {
                              setBotLang(null);
                              setMessages([]);
                              setFlow("none");
                            }}
                            className="text-[10px] font-semibold text-slate-500 hover:text-[#C2410C] underline"
                          >
                            {botLang === "te" ? "భాష మార్చండి (Change Language)" : "Change Language"}
                          </button>
                          <a
                            href="https://wa.me/919032654111"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] font-bold text-[#C2410C] hover:underline"
                          >
                            హెల్ప్‌లైన్: 9032654111
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="border-t border-[#EBE8E0] bg-white p-2.5">
                    <form
                      className="flex items-center gap-1.5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                      }}
                    >
                      <button
                        type="button"
                        onClick={onMic}
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[#C2410C] transition hover:bg-amber-200",
                          listening && "ring-2 ring-[#C2410C]/40",
                        )}
                        aria-label="Voice input"
                      >
                        <Mic className="h-4 w-4" />
                      </button>
                      <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={
                          botLang === "en"
                            ? "Type question, USC, or use buttons above…"
                            : "ప్రశ్న లేదా 9 అంకెల USC ఇక్కడ రాయండి…"
                        }
                        className={cn(
                          "flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-[#18181B] focus:border-[#C2410C] focus:bg-white focus:outline-none",
                          botLang === "te" && "font-telugu",
                        )}
                      />
                      <button
                        type="submit"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C2410C] text-white transition hover:bg-[#9A3412]"
                        aria-label="Send"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          if (minimized) {
            setMinimized(false);
            setOpen(true);
            return;
          }
          setOpen((v) => !v);
        }}
        className="tap inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C2410C] via-[#D94F2B] to-amber-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:shadow-xl transition-all"
        aria-expanded={open && !minimized}
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        <span className={siteLang === "te" ? "font-telugu" : ""}>
          {siteLang === "en" ? "Seva Mitra · FAQ & Help" : "సేవ మిత్ర · సహాయం"}
        </span>
      </button>
    </div>
  );
}

