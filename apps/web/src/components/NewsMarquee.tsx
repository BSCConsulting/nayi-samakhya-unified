"use client";

import { useLanguage } from "@/context/LanguageContext";

export function NewsMarquee() {
  const { language, t } = useLanguage();
  const ticker = t("marquee");

  return (
    <div
      className="no-print overflow-hidden border-b border-amber-900/10 bg-[#0F172A] text-amber-300"
      role="region"
      aria-label="Breaking updates"
    >
      <div
        className={`marquee-track flex w-max whitespace-nowrap py-1.5 text-xs font-medium tracking-wide ${language === "te" ? "font-telugu" : ""}`}
      >
        <span className="px-4">{ticker}</span>
        <span className="px-4" aria-hidden>
          {ticker}
        </span>
      </div>
    </div>
  );
}
