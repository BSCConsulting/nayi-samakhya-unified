import React from 'react';
import Link from 'next/link';
import { Nav } from '../Nav.tsx';
import { Bi } from '../onboarding/Wizard.tsx';
import { EligibilityCalculator } from './EligibilityCalculator.tsx';

export const metadata = {
  title: 'కళ్యాణ లక్ష్మి పథకం మార్గదర్శి (₹1,00,116) | నాయీ సమాఖ్య కల్యాణ వేదిక',
  description: 'తెలంగాణ ప్రభుత్వం కళ్యాణ లక్ష్మి పథకం ద్వారా పేద వధువులకు అందించే ₹1,00,116 ఆర్థిక సహాయం కొరకు అర్హతలు, అవసరమైన పత్రాలు, దరఖాస్తు విధానం మరియు సహాయ వేదిక.',
  alternates: {
    canonical: 'https://www.nayisamakhya.org/matrimony/kalyana-lakshmi',
  },
  openGraph: {
    title: 'కళ్యాణ లక్ష్మి పథకం (₹1,00,116) సమగ్ర సమాచారం & సహాయం | నాయీ సమాఖ్య',
    description: 'బీసీ, ఎస్సీ, ఎస్టీ మరియు ఈబీసీ వధువులకు తెలంగాణ ప్రభుత్వం అందించే కళ్యాణ లక్ష్మి పథకం అర్హతలు & దరఖాస్తు గైడ్.',
    url: 'https://www.nayisamakhya.org/matrimony/kalyana-lakshmi',
    siteName: 'నాయీ సమాఖ్య కల్యాణ వేదిక',
    locale: 'te_IN',
    type: 'website',
  },
};

export default function KalyanaLakshmiPage() {
  const waHelpUrl = 'https://wa.me/919032654111?text=' + encodeURIComponent('నమస్కారం! కళ్యాణ లక్ష్మి పథకం (₹1,00,116) దరఖాస్తు ప్రక్రియలో నాయీ సమాఖ్య మండల సమన్వయకర్త సహాయం కోరుతున్నాను.');

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 3rem' }}>
      <Nav />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ margin: '0.75rem 0 1.25rem', fontSize: '0.86rem', color: '#64748B' }}>
        <Link href="/" style={{ color: '#801426', fontWeight: 600, textDecoration: 'none' }}>కల్యాణ వేదిక</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#334155', fontWeight: 700 }}>కళ్యాణ లక్ష్మి పథకం సహాయ వేదిక</span>
      </nav>

      {/* SECTION A: HERO & SCHEME OVERVIEW */}
      <header
        style={{
          background: 'radial-gradient(135deg, #FFFDF7 0%, #FFF5EB 50%, #FDF2F4 100%)',
          borderRadius: '24px',
          padding: '2.5rem 1.75rem',
          border: '2px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 12px 36px rgba(128, 20, 38, 0.06)',
          textAlign: 'center',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(128, 20, 38, 0.08)', padding: '6px 16px', borderRadius: '999px', marginBottom: '1rem', border: '1px solid rgba(128, 20, 38, 0.2)' }}>
          <span style={{ fontSize: '1.1rem' }}>🏛️</span>
          <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#801426', letterSpacing: '0.02em' }}>
            తెలంగాణ ప్రభుత్వం · ePASS సంక్షేమ పథకం (Telangana Govt ePASS Welfare Scheme)
          </span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: '#801426',
            lineHeight: 1.25,
            margin: '0 0 0.75rem',
            fontFamily: 'var(--font-telugu, inherit)',
          }}
        >
          కళ్యాణ లక్ష్మి పథకం సహాయ వేదిక
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#B45309', fontWeight: 800, margin: '0 0 1rem' }}>
          ₹1,00,116 ఒకేసారి ఆర్థిక సహాయం (One-time Financial Grant)
        </p>
        <p style={{ maxWidth: '820px', margin: '0 auto 1.75rem', fontSize: '0.98rem', lineHeight: 1.7, color: '#475569' }}>
          తెలంగాణ రాష్ట్రంలో బీసీ, ఎస్సీ, ఎస్టీ, ఈబీసీ వర్గాల ఆడబిడ్డల వివాహ సమయంలో తల్లి బ్యాంక్ ఖాతాలో నేరుగా 
          <strong> ₹1,00,116</strong> జమ చేసే ప్రతిష్టాత్మక సంక్షేమ పథకం. మన సమాజ కుటుంబాలు సులభంగా దరఖాస్తు చేసుకోవడానికి 
          నాయీ సమాఖ్య కల్యాణ వేదిక అందిస్తున్న సమగ్ర మార్గదర్శి మరియు దరఖాస్తు సహాయ కేంద్రం.
        </p>

        {/* Highlight Stats Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '16px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>💰</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#047857' }}>₹1,00,116</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>తల్లి బ్యాంక్ ఖాతాలో నేరుగా జమ (Direct Benefit Transfer)</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '16px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>👥</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#801426' }}>BC / EBC / SC / ST</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>నాయీ బ్రాహ్మణ కుటుంబాలు BC-A విభాగం క్రింద అర్హులు</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '16px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>🎂</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#B45309' }}>18+ / 21+ వయస్సు</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>వధువుకు 18 సం||, వరునికి 21 సం|| తప్పనిసరి</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '16px', border: '1.5px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>🏠</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1D4ED8' }}>గ్రామీణ / పట్టణ</div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600 }}>ఆదాయ పరిమితి: గ్రామీణ ₹1.5L / పట్టణ ₹2.0L</div>
          </div>
        </div>
      </header>

      {/* SECTION B: INTERACTIVE ELIGIBILITY CALCULATOR */}
      <section style={{ marginBottom: '3rem' }}>
        <EligibilityCalculator />
      </section>

      {/* SECTION C: DOCUMENT READINESS CHECKLIST */}
      <section
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1.5px solid #E2E8F0',
          padding: '2.25rem 1.75rem',
          boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
          marginBottom: '3rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D4AF37', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Checklist & Guidelines
          </span>
          <h2 style={{ fontSize: '1.6rem', color: '#801426', fontWeight: 800, margin: '0.25rem 0' }}>
            📋 దరఖాస్తుకు అవసరమైన ధృవీకరణ పత్రాల జాబితా (Required Documents)
          </h2>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#64748B' }}>
            దరఖాస్తు చేయడానికి ముందు ఈ క్రింది పత్రాలన్నింటినీ సిద్ధం చేసుకోండి
          </p>
        </div>

        {/* Scan size warning callout */}
        <div
          style={{
            background: '#FFFBEB',
            border: '2px dashed #F59E0B',
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>⚠️</span>
          <div>
            <h4 style={{ margin: '0 0 0.35rem', color: '#B45309', fontSize: '1.05rem', fontWeight: 800 }}>
              ముఖ్యమైన స్కానింగ్ సూచన (ePASS Portal Document Upload Size Rule)
            </h4>
            <p style={{ margin: 0, color: '#78350F', fontSize: '0.88rem', lineHeight: 1.6 }}>
              ప్రభుత్వ ePASS పోర్టల్‌లో అప్‌లోడ్ చేసే ప్రతి డాక్యుమెంట్ స్కాన్ కాపీ <strong>50 KB నుండి 150 KB లోపు మాత్రమే</strong> (JPG/JPEG ఫార్మాట్) ఉండాలి. 
              బ్యాంక్ పాస్‌బుక్ మొదటి పేజీ మరియు వివాహ ఆహ్వాన పత్రిక స్పష్టంగా చదవగలిగే విధంగా ఉండాలి.
            </p>
          </div>
        </div>

        {/* 2-Column Checklist Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Column 1: Bride's Documents */}
          <div
            style={{
              background: '#FFF8F8',
              borderRadius: '18px',
              border: '1.5px solid #FED7D7',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#801426', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '1.25rem' }}>
                👰
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#801426', fontWeight: 800 }}>
                  వధువు పత్రాలు (Bride&apos;s Documents)
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#718096' }}>తల్లి బ్యాంక్ ఖాతా వివరాలు తప్పనిసరి</span>
              </div>
            </div>

            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#2D3748', lineHeight: 1.5 }}>
              <li>
                <strong>వధువు ఆధార్ కార్డు:</strong> ఒరిజినల్ స్కాన్ కాపీ.
              </li>
              <li>
                <strong>వయస్సు ధృవీకరణ పత్రం (Age Proof):</strong> SSC మెమో / బర్త్ సర్టిఫికేట్ / బోనఫైడ్.
              </li>
              <li>
                <strong>కులం ధృవీకరణ పత్రం (Caste Certificate):</strong> మీసేవ ద్వారా జారీ చేయబడిన BC-A సర్టిఫికేట్ (C-Form).
              </li>
              <li>
                <strong>ఆదాయ ధృవీకరణ పత్రం (Income Certificate):</strong> వివాహ తేదీకి 6 నెలలలోపు మీసేవ ద్వారా పొందిన పత్రం.
              </li>
              <li>
                <strong>వధువు తల్లి బ్యాంక్ పాస్‌బుక్:</strong> తల్లి మరియు వధువు ఉమ్మడి ఖాతా లేదా తల్లి వ్యక్తిగత ఖాతా (IFSC కోడ్, ఖాతా సంఖ్య స్పష్టంగా ఉండాలి).
              </li>
              <li>
                <strong>వధువు తల్లి ఆధార్ కార్డు:</strong> ఒరిజినల్ స్కాన్ కాపీ.
              </li>
              <li>
                <strong>పాస్‌పోర్ట్ సైజ్ ఫోటో:</strong> వధువు తాజా పాస్‌పోర్ట్ సైజ్ ఫోటో.
              </li>
            </ul>
          </div>

          {/* Column 2: Groom & Marriage Documents */}
          <div
            style={{
              background: '#F0F9FF',
              borderRadius: '18px',
              border: '1.5px solid #BAE6FD',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#0284C7', color: '#FFFFFF', display: 'grid', placeItems: 'center', fontSize: '1.25rem' }}>
                🤵
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#0369A1', fontWeight: 800 }}>
                  వరుని & వివాహ పత్రాలు (Groom & Marriage Docs)
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>వివాహ ధృవీకరణ తప్పనిసరి</span>
              </div>
            </div>

            <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: '#1E293B', lineHeight: 1.5 }}>
              <li>
                <strong>వరుని ఆధార్ కార్డు:</strong> ఒరిజినల్ స్కాన్ కాపీ.
              </li>
              <li>
                <strong>వరుని వయస్సు ధృవీకరణ (Age Proof):</strong> SSC మెమో / బర్త్ సర్టిఫికేట్ (కనీసం 21 సం|| నిండి ఉండాలి).
              </li>
              <li>
                <strong>వివాహ ఆహ్వాన పత్రిక (Lagna Patrika / Wedding Card):</strong> ముద్రించిన శుభలేఖ ఒరిజినల్ కాపీ.
              </li>
              <li>
                <strong>వివాహ ధృవీకరణ పత్రం (Marriage Certificate):</strong> గ్రామ పంచాయతీ / మున్సిపాలిటీ లేదా మీసేవ మ్యారేజ్ రిజిస్ట్రేషన్ సర్టిఫికేట్.
              </li>
              <li>
                <strong>తల్లిదండ్రుల సమ్మతి పత్రం / వివాహ ఫోటో:</strong> దండలు మార్చుకున్న వివాహ ఫోటో.
              </li>
              <li>
                <strong>వరుని పాస్‌పోర్ట్ సైజ్ ఫోటో:</strong> వరుని తాజా పాస్‌పోర్ట్ సైజ్ కలర్ ఫోటో.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION D: OFFICIAL EPASS ACTION GATEWAYS */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          borderRadius: '24px',
          padding: '2.5rem 1.75rem',
          color: '#FFFFFF',
          boxShadow: '0 12px 36px rgba(0,0,0,0.2)',
          marginBottom: '3rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FCD34D', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Official Telangana Government Portals
          </span>
          <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800, margin: '0.25rem 0' }}>
            🏛️ తెలంగాణ ePASS అధికారిక దరఖాస్తు గేట్‌వేలు
          </h2>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#94A3B8' }}>
            క్రింది అధికారిక లింకుల ద్వారా ఆన్‌లైన్‌లో నేరుగా దరఖాస్తు చేసుకోవచ్చు లేదా మీ దరఖాస్తు స్థితిని తనిఖీ చేయవచ్చు
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {/* Card 1: New Application */}
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>📝</div>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem', color: '#FDE68A', fontWeight: 800 }}>
                నూతన దరఖాస్తు (New Registration)
              </h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                తెలంగాణ ePASS పోర్టల్‌లో కళ్యాణ లక్ష్మి పథకం కోసం సరికొత్త ఆన్‌లైన్ దరఖాస్తు సమర్పించండి.
              </p>
            </div>
            <a
              href="https://telanganaepass.cgg.gov.in/KalyanLakshmi.do"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1.25rem',
                background: '#D4AF37',
                color: '#5B0C1A',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              ఇప్పుడే దరఖాస్తు చేయండి (Apply Online) →
            </a>
          </div>

          {/* Card 2: Application Status Tracking */}
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>🔍</div>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem', color: '#93C5FD', fontWeight: 800 }}>
                దరఖాస్తు స్థితి తనిఖీ (Track Status)
              </h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                మీ ఆధార్ లేదా దరఖాస్తు నంబర్ ద్వారా అప్లికేషన్ ఆమోదం మరియు నిధుల విడుదల స్థితిని తెలుసుకోండి.
              </p>
            </div>
            <a
              href="https://telanganaepass.cgg.gov.in/KalyanaLakshmiLinks.jsp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '1.25rem',
                background: '#38BDF8',
                color: '#0F172A',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              స్టేటస్ చెక్ చేయండి (Check Status) →
            </a>
          </div>

          {/* Card 3: Govt Helpline */}
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>📞</div>
              <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem', color: '#86EFAC', fontWeight: 800 }}>
                ప్రభుత్వ అధికారిక హెల్ప్‌లైన్
              </h3>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                ePASS అధికారిక కాల్ సెంటర్ (పనిదినాల్లో ఉదయం 10:30 నుండి సాయంత్రం 5:00 వరకు):
              </p>
              <div style={{ marginTop: '0.5rem', fontSize: '0.95rem', fontWeight: 800, color: '#F1F5F9' }}>
                040-23120311, 23120312
              </div>
            </div>
            <a
              href="tel:04023120311"
              style={{
                marginTop: '1.25rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'block',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              హెల్ప్‌లైన్‌కు కాల్ చేయండి →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION E: GRASSROOTS ASSISTANCE & MANDAL NODAL OFFICERS */}
      <section
        style={{
          background: 'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)',
          borderRadius: '24px',
          border: '2px solid #FDA4AF',
          padding: '2.5rem 1.75rem',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(128, 20, 38, 0.06)',
          marginBottom: '3rem',
        }}
      >
        <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '0.5rem' }}>🤝</span>
        <h2 style={{ fontSize: '1.65rem', color: '#801426', fontWeight: 800, margin: '0 0 0.5rem' }}>
          నాయీ సమాఖ్య మండల సమన్వయకర్తల ప్రత్యక్ష సహాయం
        </h2>
        <p style={{ maxWidth: '750px', margin: '0 auto 1.5rem', fontSize: '0.95rem', color: '#4C0519', lineHeight: 1.6 }}>
          ఆన్‌లైన్ దరఖాస్తులో ఏమైనా సందేహాలు ఉన్నా, మీసేవలో పత్రాలు పొందడంలో ఆలస్యమైనా, లేదా తహసీల్దార్ ఆఫీస్ వెరిఫికేషన్‌లో 
          మార్గదర్శనం అవసరమైనా మన నాయీ సమాఖ్య మండల ప్రతినిధులు మరియు కల్యాణ సహాయ కేంద్రాలు మీకు పూర్తి ఉచిత సహాయం అందిస్తాయి.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={waHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#FFFFFF',
              padding: '0.85rem 1.75rem',
              borderRadius: '14px',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>💬</span> మండల సమన్వయకర్తతో వాట్సాప్‌లో మాట్లాడండి (+91 9032654111)
          </a>

          <Link
            href="/help-centers"
            style={{
              background: '#801426',
              color: '#FFFFFF',
              padding: '0.85rem 1.75rem',
              borderRadius: '14px',
              fontWeight: 800,
              fontSize: '0.95rem',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(128, 20, 38, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>📍</span> జిల్లా & మండల సహాయ కేంద్రాల చిరునామాలు →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem 1rem 1rem', borderTop: '1.5px solid #E7DCD0', color: '#64748B', fontSize: '0.88rem' }}>
        <p style={{ margin: '0 0 0.5rem', color: '#801426', fontWeight: 800 }}>
          నాయీ సమాఖ్య కల్యాణ వేదిక · తెలంగాణ రాష్ట్ర సంక్షేమ మార్గదర్శక కేంద్రం
        </p>
        <p style={{ margin: 0 }}>
          గమనిక: ఈ పేజీ సమాజ సభ్యుల అవగాహన మరియు సౌలభ్యం కొరకు రూపొందించబడింది. తుది నిబంధనలు తెలంగాణ ప్రభుత్వ ePASS నిబంధనలకు లోబడి ఉంటాయి.
        </p>
      </footer>
    </main>
  );
}
