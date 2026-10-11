import React from "react";
import type { Metadata } from "next";
import { SalonSchemesClient } from "./SalonSchemesClient";

export const metadata: Metadata = {
  title: "సెలూన్ సంక్షేమ కేంద్రం | 250 యూనిట్ల ఉచిత విద్యుత్ & PM విశ్వకర్మ యోజన | నాయీ సమాఖ్య",
  description:
    "తెలంగాణ క్షౌరశాలలకు 250 యూనిట్ల ఉచిత విద్యుత్ లెక్కించే యంత్రం మరియు కేంద్ర ప్రభుత్వ పీఎం విశ్వకర్మ పథకం రూ. 15,000 టూల్కిట్ గ్రాంట్ సమగ్ర మార్గదర్శి.",
  alternates: {
    canonical: "https://www.nayisamakhya.org/welfare/salon-schemes",
  },
  openGraph: {
    title: "సెలూన్ సంక్షేమ కేంద్రం | 250 యూనిట్ల ఉచిత విద్యుత్ & PM విశ్వకర్మ యోజన",
    description:
      "నాయీ బ్రాహ్మణ సెలూన్ యజమానులకు తెలంగాణ 250 యూనిట్ల ఉచిత విద్యుత్ & కేంద్ర ప్రభుత్వ PM విశ్వకర్మ టూల్కిట్ పథకం సమగ్ర సహాయ వేదిక.",
    url: "https://www.nayisamakhya.org/welfare/salon-schemes",
    siteName: "నాయీ సమాఖ్య",
    locale: "te_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "సెలూన్ సంక్షేమ కేంద్రం | 250 యూనిట్ల ఉచిత విద్యుత్ & PM విశ్వకర్మ",
    description:
      "తెలంగాణ క్షౌరశాలలకు 250 యూనిట్ల ఉచిత విద్యుత్ కాలిక్యులేటర్ మరియు PM విశ్వకర్మ ₹15,000 టూల్కిట్ గైడ్.",
  },
};

export default function SalonSchemesPage() {
  return <SalonSchemesClient />;
}
