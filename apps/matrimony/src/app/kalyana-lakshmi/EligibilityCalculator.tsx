'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function EligibilityCalculator() {
  const [area, setArea] = useState<'rural' | 'urban'>('rural');
  const [annualIncome, setAnnualIncome] = useState<string>('120000');
  const [brideAge, setBrideAge] = useState<string>('21');
  const [groomAge, setGroomAge] = useState<string>('24');
  const [casteCategory, setCasteCategory] = useState<string>('bc');
  const [residenceTelangana, setResidenceTelangana] = useState<boolean>(true);
  const [firstMarriage, setFirstMarriage] = useState<boolean>(true);

  // Criteria validation
  const incomeVal = Number(annualIncome) || 0;
  const brideAgeVal = Number(brideAge) || 0;
  const groomAgeVal = Number(groomAge) || 0;

  const maxIncome = area === 'rural' ? 150000 : 200000;
  const isIncomeEligible = incomeVal <= maxIncome && incomeVal > 0;
  const isBrideAgeEligible = brideAgeVal >= 18;
  const isGroomAgeEligible = groomAgeVal >= 21;
  const isCommunityEligible = ['bc', 'ebc', 'sc', 'st', 'minority'].includes(casteCategory);
  const isStateEligible = residenceTelangana;
  const isMarriageEligible = firstMarriage;

  const isFullyEligible =
    isIncomeEligible &&
    isBrideAgeEligible &&
    isGroomAgeEligible &&
    isCommunityEligible &&
    isStateEligible &&
    isMarriageEligible;

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '2px solid rgba(212, 175, 55, 0.4)',
        boxShadow: '0 12px 36px rgba(128, 20, 38, 0.08)',
        padding: '2rem',
        maxWidth: '820px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 14px',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid #D4AF37',
            borderRadius: '999px',
            color: '#801426',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '0.5rem',
          }}
        >
          ⚡ తక్షణ అర్హత తనిఖీ సాధనం · Instant Eligibility Check
        </span>
        <h3
          style={{
            margin: '0.25rem 0',
            fontSize: '1.45rem',
            color: '#801426',
            fontWeight: 800,
            lineHeight: 1.3,
          }}
        >
          మీరు కళ్యాణ లక్ష్మి ఆర్థిక సహాయం (₹1,00,116) కి అర్హులా?
        </h3>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#64748B' }}>
          Check in 15 seconds based on official Telangana ePASS Government norms
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.5rem',
        }}
      >
        {/* 1. Residence Area */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '0.4rem',
            }}
          >
            నివాస ప్రాంతం (Area of Residence)
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => setArea('rural')}
              style={{
                padding: '0.65rem 0.75rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: area === 'rural' ? '2px solid #801426' : '1.5px solid #CBD5E1',
                background: area === 'rural' ? '#FFF1F2' : '#F8FAFC',
                color: area === 'rural' ? '#801426' : '#475569',
                cursor: 'pointer',
              }}
            >
              గ్రామీణ (Rural)
            </button>
            <button
              type="button"
              onClick={() => setArea('urban')}
              style={{
                padding: '0.65rem 0.75rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: area === 'urban' ? '2px solid #801426' : '1.5px solid #CBD5E1',
                background: area === 'urban' ? '#FFF1F2' : '#F8FAFC',
                color: area === 'urban' ? '#801426' : '#475569',
                cursor: 'pointer',
              }}
            >
              పట్టణ (Urban)
            </button>
          </div>
          <small style={{ display: 'block', marginTop: '4px', fontSize: '0.76rem', color: '#64748B' }}>
            గరిష్ట పరిమితి: గ్రామీణ ₹1.5L / పట్టణ ₹2.0L
          </small>
        </div>

        {/* 2. Annual Income */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '0.4rem',
            }}
          >
            కుటుంబ వార్షిక ఆదాయం (Annual Income in ₹)
          </label>
          <input
            type="number"
            min="0"
            max="1000000"
            step="10000"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              border: '1.5px solid #CBD5E1',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#1E293B',
              boxSizing: 'border-box',
            }}
            placeholder="e.g. 120000"
          />
          <small style={{ display: 'block', marginTop: '4px', fontSize: '0.76rem', color: '#64748B' }}>
            మీసేవ (MeeSeva) ఆదాయ ధృవీకరణ పత్రం ప్రకారం
          </small>
        </div>

        {/* 3. Bride Age */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '0.4rem',
            }}
          >
            వధువు వయస్సు (Bride Age in Years)
          </label>
          <input
            type="number"
            min="14"
            max="60"
            value={brideAge}
            onChange={(e) => setBrideAge(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              border: isBrideAgeEligible ? '1.5px solid #CBD5E1' : '1.5px solid #EF4444',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#1E293B',
              boxSizing: 'border-box',
            }}
            placeholder="e.g. 21"
          />
          <small style={{ display: 'block', marginTop: '4px', fontSize: '0.76rem', color: '#64748B' }}>
            కనీసం 18 సం|| పూర్తి అయి ఉండాలి (18+ Mandatory)
          </small>
        </div>

        {/* 4. Groom Age */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#334155',
              marginBottom: '0.4rem',
            }}
          >
            వరుని వయస్సు (Groom Age in Years)
          </label>
          <input
            type="number"
            min="16"
            max="70"
            value={groomAge}
            onChange={(e) => setGroomAge(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.85rem',
              borderRadius: '10px',
              border: isGroomAgeEligible ? '1.5px solid #CBD5E1' : '1.5px solid #EF4444',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#1E293B',
              boxSizing: 'border-box',
            }}
            placeholder="e.g. 24"
          />
          <small style={{ display: 'block', marginTop: '4px', fontSize: '0.76rem', color: '#64748B' }}>
            కనీసం 21 సం|| పూర్తి అయి ఉండాలి (21+ Mandatory)
          </small>
        </div>
      </div>

      {/* Additional check checkboxes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.85rem',
          background: '#F8FAFC',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          marginBottom: '1.5rem',
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={residenceTelangana}
            onChange={(e) => setResidenceTelangana(e.target.checked)}
            style={{ width: '17px', height: '17px', accentColor: '#801426' }}
          />
          <span>తెలంగాణ శాశ్వత నివాసి (Telangana Resident)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={firstMarriage}
            onChange={(e) => setFirstMarriage(e.target.checked)}
            style={{ width: '17px', height: '17px', accentColor: '#801426' }}
          />
          <span>వధువుకు ఇది మొదటి వివాహం (First Marriage of Bride)</span>
        </label>
      </div>

      {/* Result Card */}
      {isFullyEligible ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            border: '2px solid #10B981',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>🎉</div>
          <h4 style={{ margin: '0 0 0.4rem', color: '#065F46', fontSize: '1.3rem', fontWeight: 800 }}>
            అభినందనలు! మీరు కళ్యాణ లక్ష్మి పథకానికి పూర్తిగా అర్హులు!
          </h4>
          <p style={{ margin: '0 0 1rem', color: '#047857', fontSize: '0.95rem', fontWeight: 600 }}>
            You qualify for the government financial grant of <strong>₹1,00,116</strong> transferred directly to the bride&apos;s mother&apos;s bank account.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href="https://telanganaepass.cgg.gov.in/KalyanLakshmi.do"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#047857',
                color: '#FFFFFF',
                padding: '0.75rem 1.6rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(4, 120, 87, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>🏛️</span> అధికారిక ePASS దరఖాస్తు ఓపెన్ చేయండి →
            </a>
            <a
              href="https://wa.me/919032654111?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82!%20%E0%B0%A8%E0%B1%87%E0%B0%A8%E0%B1%81%20%E0%B0%95%E0%B0%B3%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A3%20%E0%B0%B2%E0%B0%95%E0%B1%8D%E0%B0%B7%E0%B1%8D%E0%B0%AE%E0%B0%BF%20%E0%B0%AA%E0%B0%A5%E0%B0%95%E0%B0%82%20%E0%B0%A6%E0%B0%B0%E0%B0%96%E0%B0%BE%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B1%81%20%E0%B0%B8%E0%B0%BE%E0%B0%AF%E0%B0%82%20%E0%B0%95%E0%B1%8A%E0%B0%B0%E0%B0%95%E0%B1%81%20%E0%B0%B8%E0%B0%82%E0%B0%AA%E0%B1%8D%E0%B0%B0%E0%B0%A6%E0%B0%BF%E0%B0%B8%E0%B1%8D%E0%B0%A4%E0%B1%81%E0%B0%A8%E0%B1%8D%E0%B0%A8%E0%B0%BE%E0%B0%A8%E0%B1%81."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#FFFFFF',
                padding: '0.75rem 1.4rem',
                borderRadius: '12px',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>💬</span> వాట్సాప్ సహాయం పొందండి
            </a>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
            border: '2px solid #F59E0B',
            borderRadius: '16px',
            padding: '1.4rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>⚠️</span>
            <h4 style={{ margin: 0, color: '#B45309', fontSize: '1.15rem', fontWeight: 800 }}>
              పరిశీలన అవసరం · Criteria Check Notice
            </h4>
          </div>
          <ul style={{ margin: '0 0 1rem', paddingLeft: '1.4rem', color: '#92400E', fontSize: '0.88rem', lineHeight: '1.6' }}>
            {!isIncomeEligible && (
              <li>
                <strong>ఆదాయ పరిమితి:</strong> {area === 'rural' ? 'గ్రామీణ ప్రాంతంలో గరిష్ట వార్షిక ఆదాయం ₹1,50,000' : 'పట్టణ ప్రాంతంలో గరిష్ట వార్షిక ఆదాయం ₹2,00,000'} లోపు ఉండాలి.
              </li>
            )}
            {!isBrideAgeEligible && (
              <li>
                <strong>వధువు వయస్సు:</strong> వివాహ సమయానికి వధువు వయస్సు కనీసం 18 సంవత్సరాలు నిండి ఉండాలి.
              </li>
            )}
            {!isGroomAgeEligible && (
              <li>
                <strong>వరుని వయస్సు:</strong> వివాహ సమయానికి వరుని వయస్సు కనీసం 21 సంవత్సరాలు నిండి ఉండాలి.
              </li>
            )}
            {!isStateEligible && (
              <li>
                <strong>స్థానిక నివాసం:</strong> తెలంగాణ రాష్ట్ర శాశ్వత నివాసితులై ఉండాలి.
              </li>
            )}
            {!isMarriageEligible && (
              <li>
                <strong>మొదటి వివాహం:</strong> కళ్యాణ లక్ష్మి పథకం కేవలం మొదటి వివాహానికి మాత్రమే వర్తిస్తుంది (వికలాంగుల మినహాయింపులు చట్టప్రకారం ఉంటాయి).
              </li>
            )}
          </ul>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link
              href="/help-centers"
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#801426',
                textDecoration: 'underline',
              }}
            >
              సమీప నాయీ సమాఖ్య కల్యాణ సహాయ కేంద్రాన్ని సంప్రదించండి →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
