'use client';

import { useEffect, useRef, useState } from 'react';

export default function DocumentVault() {
  return (
    <section
      style={{
        background: 'var(--color-surface)',
        paddingTop: 'clamp(60px, 10vw, 96px)',
        paddingBottom: 'clamp(60px, 10vw, 96px)',
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'clamp(40px, 10vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left - Visual Panel */}
          <OrbitalAnimation />

          {/* Right - Text Content */}
          <ConciergeContent />
        </div>
      </div>
    </section>
  );
}

function OrbitalAnimation() {
  return (
    <div
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        background: 'linear-gradient(135deg, var(--color-primary-light) 0%, #f0f7ff 100%)',
        padding: '60px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Outer Ring */}
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(15,92,78,0.2)',
          position: 'relative',
          animation: 'spin 14s linear infinite',
        }}
      >
        {/* Floating Emojis */}
        <FloatingEmoji emoji="🏛️" delay="0s" />
        <FloatingEmoji emoji="🔬" delay="3.5s" />
        <FloatingEmoji emoji="📊" delay="7s" />
        <FloatingEmoji emoji="✈️" delay="10.5s" />
      </div>

      {/* Dashed Rings (pseudo-elements simulated with divs) */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: '1px dashed rgba(15,92,78,0.12)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px dashed rgba(15,92,78,0.12)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Orb */}
      <div
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), #2563eb)',
          boxShadow: '0 0 40px rgba(15,92,78,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          animation: 'spin-reverse 14s linear infinite',
        }}
      >
        🎓
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(0, -8px);
          }
        }
      `}</style>
    </div>
  );
}

function FloatingEmoji({ emoji, delay }: { emoji: string; delay: string }) {
  const angle = parseFloat(delay) / 14 * 360;
  const x = Math.cos((angle * Math.PI) / 180) * 100;
  const y = Math.sin((angle * Math.PI) / 180) * 100;

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        fontSize: '1.5rem',
        animation: `float 5s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      {emoji}
    </div>
  );
}

function ConciergeContent() {
  const checklistItems = [
    'Personal guidance at every milestone',
    'AI-powered recommendations & insights',
    'Community of 50K+ ambitious scholars',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Section Tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          width: 'fit-content',
          background: 'var(--color-primary-light)',
          border: '1px solid rgba(15,92,78,0.2)',
          borderRadius: 'var(--radius-full)',
          padding: '8px 16px',
          fontSize: '0.72rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--color-primary)',
        }}
      >
        ✦ Mentorship
      </div>

      {/* Title */}
      <h2 className="display-heading">
        Elevating Every Single Milestone.
      </h2>

      {/* Blockquote */}
      <blockquote
        style={{
          borderLeft: '3px solid var(--color-primary)',
          paddingLeft: '20px',
          margin: '0',
          fontFamily: "'Instrument Serif', serif",
          fontStyle: 'italic',
          fontSize: '1.1rem',
          color: 'var(--color-text-muted)',
          lineHeight: 1.65,
        }}
      >
        "Your journey to global education doesn't have to be lonely. We connect you with 
        advisors who've walked the path you're on."
      </blockquote>

      {/* Checklist */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {checklistItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '22px',
                height: '22px',
                minWidth: '22px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--color-primary-light)',
                border: '1px solid rgba(15,92,78,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              ✓
            </div>
            <span
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-body)',
                lineHeight: 1.55,
                paddingTop: '1px',
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
