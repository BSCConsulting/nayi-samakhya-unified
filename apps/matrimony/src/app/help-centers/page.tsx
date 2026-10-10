import React from 'react';
import Link from 'next/link';
import { Nav } from '../Nav.tsx';
import { Bi } from '../onboarding/Wizard.tsx';

export const metadata = {
  title: 'కల్యాణ సహాయ కేంద్రాలు · Community Help Centers',
  description: 'నాయీ సమాఖ్య అధికారిక కల్యాణ సహాయ కేంద్రాలు - తెలంగాణ మరియు ఆంధ్రప్రదేశ్ జిల్లాలలో ప్రత్యక్ష మార్గదర్శనం, రిజిస్ట్రేషన్ మరియు జాతక పరిశీలన.',
};

interface HelpCenter {
  id: string;
  regionTe: string;
  regionEn: string;
  centerNameTe: string;
  centerNameEn: string;
  addressTe: string;
  addressEn: string;
  officerTe: string;
  officerEn: string;
  phone: string;
  timingsTe: string;
  timingsEn: string;
}

const HELP_CENTERS: HelpCenter[] = [
  {
    id: 'hyd',
    regionTe: 'హైదరాబాద్ & రంగారెడ్డి కేంద్రం',
    regionEn: 'Hyderabad & Rangareddy Central Desk',
    centerNameTe: 'నాయీ సమాఖ్య రాష్ట్ర ప్రధాన కార్యాలయం',
    centerNameEn: 'Nayi Samakhya State Central Office',
    addressTe: 'ఆర్టీసీ క్రాస్ రోడ్స్, చిక్కడపల్లి, హైదరాబాద్ - 500020',
    addressEn: 'RTC X Roads, Chikkadpally, Hyderabad - 500020',
    officerTe: 'రాష్ట్ర కార్యదర్శి & కల్యాణ సమన్వయకర్త',
    officerEn: 'State Secretary & Matrimony Desk Coordinator',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:00 నుండి సాయంత్రం 6:00 వరకు',
    timingsEn: 'Mon - Sat: 10:00 AM - 6:00 PM',
  },
  {
    id: 'vja',
    regionTe: 'విజయవాడ & గుంటూరు ప్రాంతీయ కేంద్రం',
    regionEn: 'Vijayawada & Guntur Regional Center',
    centerNameTe: 'ఆంధ్రప్రదేశ్ రాష్ట్ర కల్యాణ వేదిక సమన్వయ కేంద్రం',
    centerNameEn: 'AP State Matrimonial Guidance Desk',
    addressTe: 'లెనిన్ సెంటర్, గవర్నర్‌పేట, విజయవాడ - 520002',
    addressEn: 'Lenin Center, Governorpet, Vijayawada - 520002',
    officerTe: 'కృష్ణా-గుంటూరు రీజినల్ ఇన్‌ఛార్జ్',
    officerEn: 'Krishna-Guntur Regional Nodal Officer',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:00 నుండి సాయంత్రం 5:30 వరకు',
    timingsEn: 'Mon - Sat: 10:00 AM - 5:30 PM',
  },
  {
    id: 'wgl',
    regionTe: 'వరంగల్ & ఉత్తర తెలంగాణ కేంద్రం',
    regionEn: 'Warangal & North Telangana Hub',
    centerNameTe: 'కాకతీయ రీజినల్ కమ్యూనిటీ సెంటర్',
    centerNameEn: 'Kakatiya Regional Community Center',
    addressTe: 'హన్మకొండ చౌరస్తా, వరంగల్ - 506001',
    addressEn: 'Hanamkonda Chowrasta, Warangal - 506001',
    officerTe: 'ఉమ్మడి వరంగల్ మండల సమన్వయ ప్రతినిధి',
    officerEn: 'Warangal Nodal Lineage Officer',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:30 నుండి సాయంత్రం 5:00 వరకు',
    timingsEn: 'Mon - Sat: 10:30 AM - 5:00 PM',
  },
  {
    id: 'vizag',
    regionTe: 'విశాఖపట్నం & ఉత్తరాంధ్ర కేంద్రం',
    regionEn: 'Visakhapatnam & North Coastal AP Desk',
    centerNameTe: 'ఉత్తరాంధ్ర కల్యాణ సమాచార కేంద్రం',
    centerNameEn: 'North Coastal AP Guidance Desk',
    addressTe: 'ద్వారకా నగర్ మెయిన్ రోడ్, విశాఖపట్నం - 530016',
    addressEn: 'Dwaraka Nagar, Visakhapatnam - 530016',
    officerTe: 'ఉత్తరాంధ్ర జిల్లా సమన్వయకర్త',
    officerEn: 'North Coastal District Coordinator',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:00 నుండి సాయంత్రం 5:30 వరకు',
    timingsEn: 'Mon - Sat: 10:00 AM - 5:30 PM',
  },
  {
    id: 'tpt',
    regionTe: 'తిరుపతి & రాయలసీమ కేంద్రం',
    regionEn: 'Tirupati & Rayalaseema Hub',
    centerNameTe: 'శ్రీ వెంకటేశ్వర కల్యాణ సహాయ వేదిక',
    centerNameEn: 'Sri Venkateswara Guidance Hub',
    addressTe: 'గాంధీ రోడ్, తిరుపతి - 517501',
    addressEn: 'Gandhi Road, Tirupati - 517501',
    officerTe: 'రాయలసీమ విభాగ సమన్వయకర్త',
    officerEn: 'Rayalaseema Lineage Officer',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:00 నుండి సాయంత్రం 5:30 వరకు',
    timingsEn: 'Mon - Sat: 10:00 AM - 5:30 PM',
  },
  {
    id: 'nzb',
    regionTe: 'నిజామాబాద్ & ఆదిలాబాద్ కేంద్రం',
    regionEn: 'Nizamabad & Adilabad Desk',
    centerNameTe: 'ఉత్తర సరిహద్దు మండల సహాయ కేంద్రం',
    centerNameEn: 'Northern Border Mandal Help Desk',
    addressTe: 'రైల్వే స్టేషన్ రోడ్, నిజామాబాద్ - 503001',
    addressEn: 'Railway Station Road, Nizamabad - 503001',
    officerTe: 'జిల్లా సమన్వయ ప్రతినిధి',
    officerEn: 'District Nodal Representative',
    phone: '+91 9032654111',
    timingsTe: 'సోమ - శని: ఉదయం 10:00 నుండి సాయంత్రం 5:00 వరకు',
    timingsEn: 'Mon - Sat: 10:00 AM - 5:00 PM',
  },
];

export default function HelpCentersPage() {
  const waHelpUrl = 'https://wa.me/919032654111?text=' + encodeURIComponent('నమస్కారం! నాయీ సమాఖ్య కల్యాణ సహాయ కేంద్రం సేవల కొరకు సంప్రదిస్తున్నాను.');
  const tgHelpUrl = 'https://t.me/NayiSamakhyaBroadcast';

  return (
    <main className="shell wide" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 4rem' }}>
      <Nav />

      {/* Hero Header */}
      <div
        className="card"
        style={{
          padding: '2.5rem 1.5rem',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #FFFDF9 0%, #FAF6F0 100%)',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 10px 30px rgba(128, 20, 38, 0.06)',
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '0.35rem 1rem',
            background: '#801426',
            color: '#FDE68A',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '0.8rem',
            letterSpacing: '0.04em',
          }}
        >
          🪔 <Bi en="Official Physical Assistance Network" te="అధికారిక క్షేత్రస్థాయి సహాయ కేంద్రాలు" />
        </span>

        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#801426', margin: '0.2rem 0 0.8rem', fontWeight: 800 }}>
          <Bi en="Community Matrimonial Help Centers" te="నాయీ సమాఖ్య కల్యాణ సహాయ కేంద్రాలు" />
        </h1>

        <p style={{ maxWidth: '780px', margin: '0 auto 1.5rem', fontSize: '1.05rem', color: '#475569', lineHeight: 1.6 }}>
          <Bi
            en="Official guidance desks for Telugu Nayi Brahmin families across 59 districts of Telangana & Andhra Pradesh. Visit in person for offline profile registration, Gotra verification, horoscope patrika printing, and elder assistance."
            te="తెలంగాణ మరియు ఆంధ్రప్రదేశ్‌లోని 59 జిల్లాల నాయీ బ్రాహ్మణ కుటుంబాల కోసం అధికారిక మార్గదర్శక కేంద్రాలు. ప్రత్యక్ష బయోడేటా నమోదు, పవిత్ర సగోత్ర పరిశీలన, కల్యాణ పత్రిక ముద్రణ మరియు పెద్దల సంప్రదింపుల సాయం కొరకు సంప్రదించండి."
          />
        </p>

        {/* Quick Contact Buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={waHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.6rem',
              background: '#25D366',
              color: '#FFFFFF',
              fontWeight: 800,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
            }}
          >
            <span>💬</span>
            <span><Bi en="WhatsApp Helpline (+91 9032654111)" te="వాట్సాప్ సహాయవాణి (+91 9032654111)" /></span>
          </a>

          <a
            href={tgHelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#229ED9',
              color: '#FFFFFF',
              fontWeight: 800,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(34, 158, 217, 0.3)',
            }}
          >
            <span>📢</span>
            <span><Bi en="Telegram Community Alerts" te="టెలిగ్రామ్ అలర్ట్స్" /></span>
          </a>

          <Link
            href="/offline-meets"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.4rem',
              background: '#801426',
              color: '#FFFFFF',
              fontWeight: 800,
              borderRadius: '12px',
              textDecoration: 'none',
            }}
          >
            <span>👥</span>
            <span><Bi en="Offline Meets & Forms" te="ప్రత్యక్ష సమ్మేళనాలు & ఫారాలు" /></span>
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#801426', textAlign: 'center', marginBottom: '1.25rem' }}>
          <Bi en="Services Available at Help Centers" te="సహాయ కేంద్రాలలో లభించే ఉచిత సేవలు" />
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {[
            {
              icon: '📝',
              titleTe: 'ఉచిత బయోడేటా నమోదు',
              titleEn: 'Free Profile Registration',
              descTe: 'స్మార్ట్‌ఫోన్ వాడలేని గ్రామీణ కుటుంబాల కోసం ఆఫ్-లైన్ ఫారాల ద్వారా ఉచిత నమోదు.',
              descEn: 'Assisted offline registration for families without digital smartphones.',
            },
            {
              icon: '📜',
              titleTe: 'పవిత్ర సగోత్ర & మేనరికం ధృవీకరణ',
              titleEn: 'Sagothra Lineage Check',
              descTe: 'సాంప్రదాయ 22 ఋషి గోత్రాల సరిపోలిక మరియు సగోత్ర నిషేధ మార్గదర్శకత్వం.',
              descEn: 'Traditional 22 Rishi Gothra matching and Menarikam kinship validation.',
            },
            {
              icon: '🪔',
              titleTe: 'కల్యాణ పత్రిక & జాతక చార్ట్',
              titleEn: 'Horoscope Patrika Print',
              descTe: 'దక్షిణ భారత సాంప్రదాయ వేద జాతక చార్ట్ మరియు వాట్సాప్ పత్రిక ఉచిత ప్రింటింగ్.',
              descEn: 'South Indian Vedic astrological horoscope chart & WhatsApp patrika printing.',
            },
            {
              icon: '🤝',
              titleTe: 'కల్యాణ రాయబారం & పెద్దల సమక్షం',
              titleEn: 'Elder Mediation Concierge',
              descTe: 'రెండు కుటుంబాల మధ్య చర్చలు, సమన్వయం మరియు గ్రామ పెద్దల సిఫార్సు మద్దతు.',
              descEn: 'Elder council facilitation, bilateral coordination, and grievance redressal.',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid #E2D9CC',
                boxShadow: '0 4px 12px rgba(128, 20, 38, 0.04)',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.05rem', margin: '0 0 0.4rem', color: '#801426', fontWeight: 800 }}>
                <Bi en={service.titleEn} te={service.titleTe} />
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                <Bi en={service.descEn} te={service.descTe} />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Help Centers Directory */}
      <h2 style={{ fontSize: '1.5rem', color: '#801426', marginBottom: '1.25rem' }}>
        <Bi en="State & Regional Help Desks" te="రాష్ట్ర మరియు ప్రాంతీయ సహాయ కేంద్రాల వివరాలు" />
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {HELP_CENTERS.map((c) => (
          <div
            key={c.id}
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1.5px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 6px 18px rgba(128, 20, 38, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#A16207', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                <Bi en={c.regionEn} te={c.regionTe} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#801426', margin: '0 0 0.8rem', fontWeight: 800 }}>
                <Bi en={c.centerNameEn} te={c.centerNameTe} />
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: '#334155', marginBottom: '1.2rem' }}>
                <div>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>📍 <Bi en="Address" te="చిరునామా" />: </span>
                  <Bi en={c.addressEn} te={c.addressTe} />
                </div>
                <div>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>👤 <Bi en="In-Charge" te="బాధ్యులు" />: </span>
                  <Bi en={c.officerEn} te={c.officerTe} />
                </div>
                <div>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>⏰ <Bi en="Timings" te="సమయాలు" />: </span>
                  <Bi en={c.timingsEn} te={c.timingsTe} />
                </div>
                <div>
                  <span style={{ fontWeight: 700, color: '#64748B' }}>📞 <Bi en="Direct Helpline" te="ప్రత్యక్ష సహాయవాణి" />: </span>
                  <a href={`tel:${c.phone.replace(/\s+/g, '')}`} style={{ color: '#801426', fontWeight: 800 }}>{c.phone}</a>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/919032654111?text=${encodeURIComponent(`నమస్కారం! ${c.centerNameTe} (${c.regionTe}) వివరాలు మరియు అపాయింట్‌మెంట్ కొరకు సంప్రదిస్తున్నాను.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '0.65rem 1rem',
                background: '#FAF6F0',
                color: '#801426',
                border: '1px solid #D4AF37',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.88rem',
                textDecoration: 'none',
              }}
            >
              💬 <Bi en="Connect with this Center on WhatsApp" te="ఈ కేంద్రం ప్రతినిధితో వాట్సాప్‌లో మాట్లాడండి" />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
