'use client';

import Link from 'next/link';

export default function FeaturesCTA() {
  return (
    <section
      style={{
        background: 'var(--color-bg)',
        paddingTop: 'clamp(60px, 10vw, 96px)',
        paddingBottom: 'clamp(60px, 10vw, 96px)',
      }}
    >
      <div className="container-max">
        <div
          style={{
            borderRadius: '28px',
            padding: 'clamp(48px, 10vw, 88px) clamp(48px, 10vw, 80px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #0d3d32 0%, #0f2d5e 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Top Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '400px',
              background:
                'radial-gradient(ellipse 600px 400px at 50% 0%, rgba(0,201,167,0.15), transparent)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Title */}
            <h2
              className="display-heading"
              style={{
                color: 'white',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '24px',
              }}
            >
              Ready to Master Your Journey?
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '480px',
                margin: '0 auto 36px',
                lineHeight: 1.65,
              }}
            >
              Join thousands of ambitious scholars already using GlobalGrad to navigate their global education journey with confidence and clarity.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '36px',
              }}
            >
              <Link
                href="/signup"
                style={{
                  background: 'white',
                  color: '#0d3d32',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Get Started Free →
              </Link>
              <button
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
              >
                Schedule Demo
              </button>
            </div>

            {/* Small Note */}
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                marginTop: '24px',
                letterSpacing: '0.06em',
              }}
            >
              ✓ NO CREDIT CARD REQUIRED &nbsp; • &nbsp; START IN MINUTES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
