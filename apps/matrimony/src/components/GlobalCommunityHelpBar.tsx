'use client';

import React from 'react';
import Link from 'next/link';

export function GlobalCommunityHelpBar() {
  const waUrl = 'https://wa.me/919032654111?text=' + encodeURIComponent('నమస్కారం! నాయీ సమాఖ్య కల్యాణ వేదిక అధికారిక సహాయవాణి కొరకు సంప్రదిస్తున్నాను.');
  const tgUrl = 'https://t.me/NayiSamakhyaBroadcast';

  return (
    <aside
      aria-label="Community Matrimony Helpline"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        background: 'linear-gradient(90deg, #5B0C1A 0%, #801426 50%, #5B0C1A 100%)',
        borderBottom: '1.5px solid #D4AF37',
        color: '#FFFFFF',
        fontSize: '0.82rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '6px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        {/* Left: Official Helpline & Working Hours */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: '#FCD34D', fontSize: '1rem', lineHeight: 1 }}>🪔</span>
          <span style={{ fontWeight: 800, color: '#FDE68A', letterSpacing: '0.02em' }}>
            కల్యాణ సహాయవాణి (Helpline):
          </span>
          <a
            href="tel:+919032654111"
            style={{
              color: '#FFFFFF',
              fontWeight: 800,
              textDecoration: 'none',
              background: 'rgba(255, 255, 255, 0.12)',
              padding: '2px 8px',
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>📞</span> +91 9032654111
          </a>
          <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem', display: 'none' }} className="helpbar-timing">
            (ఉదయం 10:00 - సాయంత్రం 6:00)
          </span>
        </div>

        {/* Right: Direct Actions & Help Centers Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#FFFFFF',
              background: '#25D366',
              padding: '3px 10px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.78rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            <span>💬</span> WhatsApp
          </a>

          <a
            href={tgUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#FFFFFF',
              background: '#229ED9',
              padding: '3px 10px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.78rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
          >
            <span>📢</span> Telegram
          </a>

          <Link
            href="/help-centers"
            style={{
              color: '#FDE68A',
              fontWeight: 800,
              textDecoration: 'none',
              borderBottom: '1px dotted #FDE68A',
              fontSize: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>📍</span> సహాయ కేంద్రాలు (Centers)
          </Link>
        </div>
      </div>
    </aside>
  );
}
