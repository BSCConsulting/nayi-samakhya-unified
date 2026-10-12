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
          Interactive Eligibility Checker
        </span>
        <h2 style={{ fontSize: '1.5rem', color: '#801426', fontWeight: 800, margin: '0.25rem 0' }}>
          ✨ కళ్యాణ లక్ష్మి అర్హత తనిఖీ యంత్రం (₹1,00,116)
        </h2>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#64748B' }}>
          మీ వివరాలను ఎంచుకుని మీరు ప్రభుత్వ ఆర్థిక సహాయానికి అర్హులా కాదా వెంటనే తెలుసుకోండి
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        {/* Area Selection */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            ప్రాంతం (Residence Area):
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => setArea('rural')}
              style={{
                flex: 1,
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: area === 'rural' ? '2px solid #801426' : '1.5px solid #CBD5E1',
                background: area === 'rural' ? '#FFF5F6' : '#FFFFFF',
                color: area === 'rural' ? '#801426' : '#475569',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              గ్రామీణ (Rural - Max ₹1.5L)
            </button>
            <button
              type="button"
              onClick={() => setArea('urban')}
              style={{
                flex: 1,
                padding: '0.6rem 0.8rem',
                borderRadius: '12px',
                border: area === 'urban' ? '2px solid #801426' : '1.5px solid #CBD5E1',
                background: area === 'urban' ? '#FFF5F6' : '#FFFFFF',
                color: area === 'urban' ? '#801426' : '#475569',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              పట్టణ (Urban - Max ₹2.0L)
            </button>
          </div>
        </div>

        {/* Caste Category */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            సామాజిక వర్గం (Community):
          </label>
          <select
            value={casteCategory}
            onChange={(e) => setCasteCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 0.8rem',
              borderRadius: '12px',
              border: '1.5px solid #CBD5E1',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#1E293B',
              background: '#FFFFFF',
            }}
          >
            <option value="bc">BC-A (నాయీ బ్రాహ్మణ / క్షౌరక - పూర్తి అర్హులు)</option>
            <option value="ebc">EBC (ఆర్థికంగా వెనుకబడిన వర్గాలు)</option>
            <option value="sc">SC (షెడ్యూల్డ్ కులాలు)</option>
            <option value="st">ST (షెడ్యూల్డ్ తెగలు)</option>
            <option value="minority">మైనారిటీ (షాదీ ముబారక్ పథకం క్రింద)</option>
            <option value="oc">ఇతర వర్గాలు (OC / General)</option>
          </select>
        </div>

        {/* Annual Income */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            కుటుంబ వార్షిక ఆదాయం (Annual Income in ₹):
          </label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            placeholder="ఉదా: 120000"
            style={{
              width: '100%',
              padding: '0.65rem 0.8rem',
              borderRadius: '12px',
              border: isIncomeEligible ? '1.5px solid #CBD5E1' : '1.5px solid #DC2626',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxSizing: 'border-box',
            }}
          />
          <span style={{ fontSize: '0.76rem', color: isIncomeEligible ? '#64748B' : '#DC2626', marginTop: '0.2rem', display: 'block' }}>
            {area === 'rural' ? 'గ్రామీణ ప్రాంతం: ₹1,50,000 లోపు ఉండాలి' : 'పట్టణ ప్రాంతం: ₹2,00,000 లోపు ఉండాలి'}
          </span>
        </div>

        {/* Bride Age */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            వధువు వయస్సు (Bride Age in Years):
          </label>
          <input
            type="number"
            value={brideAge}
            onChange={(e) => setBrideAge(e.target.value)}
            placeholder="కనీసం 18 సం||"
            style={{
              width: '100%',
              padding: '0.65rem 0.8rem',
              borderRadius: '12px',
              border: isBrideAgeEligible ? '1.5px solid #CBD5E1' : '1.5px solid #DC2626',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxSizing: 'border-box',
            }}
          />
          <span style={{ fontSize: '0.76rem', color: isBrideAgeEligible ? '#64748B' : '#DC2626', marginTop: '0.2rem', display: 'block' }}>
            కనీసం 18 సంవత్సరాలు నిండి ఉండాలి
          </span>
        </div>

        {/* Groom Age */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            వరుని వయస్సు (Groom Age in Years):
          </label>
          <input
            type="number"
            value={groomAge}
            onChange={(e) => setGroomAge(e.target.value)}
            placeholder="కనీసం 21 సం||"
            style={{
              width: '100%',
              padding: '0.65rem 0.8rem',
              borderRadius: '12px',
              border: isGroomAgeEligible ? '1.5px solid #CBD5E1' : '1.5px solid #DC2626',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxSizing: 'border-box',
            }}
          />
          <span style={{ fontSize: '0.76rem', color: isGroomAgeEligible ? '#64748B' : '#DC2626', marginTop: '0.2rem', display: 'block' }}>
            కనీసం 21 సంవత్సరాలు నిండి ఉండాలి
          </span>
        </div>

        {/* State Residence Check */}
        <div>
          <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
            నివాస స్థితి & వివాహ క్రమం:
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={residenceTelangana}
                onChange={(e) => setResidenceTelangana(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#801426' }}
              />
              తెలంగాణ శాశ్వత నివాసి (Permanent Resident)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={firstMarriage}
                onChange={(e) => setFirstMarriage(e.target.checked)}
                style={{ width: '16px', height: '16px', accentColor: '#801426' }}
              />
              వధువు మొదటి వివాహం (First Marriage)
            </label>
          </div>
        </div>
      </div>

      {/* Result Display Banner */}
      {isFullyEligible ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
            border: '2px solid #059669',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2.2rem', marginBottom: '0.25rem' }}>🎉</div>
          <h3 style={{ margin: '0 0 0.4rem', color: '#065F46', fontSize: '1.3rem', fontWeight: 800 }}>
            అభినందనలు! మీరు కళ్యాణ లక్ష్మి పథకానికి అర్హులు!
          </h3>
          <p style={{ margin: '0 0 1rem', color: '#047857', fontSize: '0.92rem', lineHeight: 1.6 }}>
            తెలంగాణ ప్రభుత్వం ద్వారా వధువు తల్లి బ్యాంక్ ఖాతాలో <strong>₹1,00,116</strong> జమ చేయడానికి మీరు పూర్తి అర్హత కలిగి ఉన్నారు.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://telanganaepass.cgg.gov.in/KalyanLakshmi.do"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#059669',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.9rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
              }}
            >
              అధికారిక ePASS పోర్టల్‌లో దరఖాస్తు చేయండి →
            </a>
            <a
              href="https://wa.me/919032654111?text=%E0%B0%A8%E0%B0%AE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B0%BE%E0%B0%B0%E0%B0%82%2C%20%E0%B0%95%E0%B0%B3%E0%B1%8D%E0%B0%AF%E0%B0%BE%E0%B0%A3%20%E0%B0%B2%E0%B0%95%E0%B1%8D%E0%B0%97%E0%B1%8D%E0%B0%AE%E0%B0%BF%20%E0%B0%A6%E0%B0%B0%E0%B0%96%E0%B0%BE%E0%B0%B8%E0%B1%81%E0%B0%A4%E0%B1%81%20%E0%B0%B8%E0%B0%B9%E0%B0%BE%E0%B0%AF%E0%B0%82%20%E0%B0%95%E0%B0%BE%E0%B0%B5%E0%B0%BE%E0%B0%B2%E0%B0%BF"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFFFFF',
                color: '#065F46',
                border: '1.5px solid #059669',
                fontWeight: 800,
                fontSize: '0.9rem',
                padding: '0.65rem 1.4rem',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              సమన్వయకర్త సహాయం కోరండి (WhatsApp)
            </a>
          </div>
        </div>
      ) : (
        <div
          style={{
            background: '#FFFBEB',
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
              href="/matrimony"
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
