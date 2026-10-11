import type { Metadata } from "next";
import { Suspense } from "react";
import { RepresentationLetterPage } from "@/components/RepresentationLetterPage";
import { TELANGANA_DISTRICTS } from "@/lib/data/districts";

const heading = "\u0c05\u0c27\u0c3f\u0c15\u0c3e\u0c30\u0c3f\u0c15 \u0c35\u0c3f\u0c28\u0c24\u0c3f\u0c2a\u0c24\u0c4d\u0c30\u0c02 \u0c24\u0c2f\u0c3e\u0c30\u0c40";
const description =
  "\u0c24\u0c46\u0c32\u0c02\u0c17\u0c3e\u0c23 \u0c28\u0c3e\u0c2f\u0c3f \u0c15\u0c2e\u0c4d\u0c2f\u0c42\u0c28\u0c3f\u0c1f\u0c40 \u0c35\u0c3f\u0c28\u0c24\u0c3f\u0c2a\u0c24\u0c4d\u0c30\u0c3e\u0c32 \u0c05\u0c27\u0c3f\u0c15\u0c3e\u0c30\u0c3f\u0c15 A4 \u0c32\u0c46\u0c1f\u0c30\u0c4d \u0c1c\u0c28\u0c30\u0c47\u0c1f\u0c30\u0c4d.";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "అధికారిక వినతిపత్రం తయారీ | Nayi Samakhya",
  description: "తెలంగాణ నాయీ కమ్యూనిటీ వినతిపత్రాల అధికారిక A4 లెటర్ జనరేటర్.",
  openGraph: {
    type: "website",
    siteName: "Nayi Samakhya",
    locale: "te_IN",
    url: "/representation",
    title: "అధికారిక వినతిపత్రం తయారీ | Nayi Samakhya",
    description: "తెలంగాణ నాయీ కమ్యూనిటీ వినతిపత్రాల అధికారిక A4 లెటర్ జనరేటర్.",
    images: [
      {
        url: "https://www.nayisamakhya.org/og-banner.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "నాయీ సమాఖ్య వినతిపత్రం",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "అధికారిక వినతిపత్రం తయారీ | Nayi Samakhya",
    description: "తెలంగాణ నాయీ కమ్యూనిటీ వినతిపత్రాల అధికారిక A4 లెటర్ జనరేటర్.",
    images: ["https://www.nayisamakhya.org/og-banner.png"],
  },
};

export default function RepresentationPage() {
  // Print/PDF: desktop → window.print(); Telegram/WhatsApp/IG webviews →
  // sticky breakout banner + html2canvas/jspdf → NayiSamakhya-Vinathipathram-[DISTRICT].pdf.
  // Phase 3: official docket REF + authentic QR → /verify/[id], receiving seal block.
  // Letter locked with translate="no" lang="te"; globals.css enforces single A4.
  return (
    <Suspense
      fallback={
        <div className="no-print flex min-h-[40vh] items-center justify-center bg-civic-paper font-telugu text-sm text-slate-500 print:hidden">
          {"\u0c35\u0c3f\u0c28\u0c24\u0c3f\u0c2a\u0c24\u0c4d\u0c30\u0c02 \u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c41\u0c28\u0c4d\u0c28\u0c26\u0c3f\u2026"}
        </div>
      }
    >
      <RepresentationLetterPage />
    </Suspense>
  );
}
