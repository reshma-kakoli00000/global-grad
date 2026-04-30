'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface PlanFeature {
  text: string;
}

interface Plan {
  title: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  cta: string;
  badge?: string;
  highlight?: boolean;
}

interface PricingCardProps {
  plan: Plan;
  isYearly?: boolean;
  highlight?: boolean;
}

export default function PricingCard({ plan, isYearly = false, highlight }: PricingCardProps) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      <div
        style={{
          background: highlight ? 'linear-gradient(135deg, var(--color-primary) 0%, #0f5c4e 100%)' : 'white',
          border: highlight ? '1px solid rgba(15,92,78,0.3)' : '1px solid var(--color-border)',
          borderRadius: '20px',
          padding: '32px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = 'var(--shadow-lg)';
          if (!highlight) {
            el.style.borderColor = 'rgba(15,92,78,0.25)';
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
          if (!highlight) {
            el.style.borderColor = 'var(--color-border)';
          }
        }}
      >
        {/* Top Glow for Highlight Card */}
        {highlight && (
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
              pointerEvents: 'none',
            }}
          />
        )}

        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {plan.badge && (
            <div style={{ marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: highlight ? 'rgba(255,255,255,0.2)' : 'var(--color-primary-light)',
                  color: highlight ? 'white' : 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                }}
              >
                ⭐ {plan.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: highlight ? 'white' : 'var(--color-text-primary)',
              marginBottom: '8px',
            }}
          >
            {plan.title}
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontSize: '0.875rem',
              color: highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
              marginBottom: '20px',
              minHeight: '20px',
            }}
          >
            {plan.tagline}
          </p>

          {/* Price */}
          <div style={{ marginBottom: '28px' }}>
            <span
              style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: highlight ? 'white' : 'var(--color-text-primary)',
              }}
            >
              ৳{isYearly ? Math.floor(plan.yearlyPrice) : Math.floor(plan.monthlyPrice)}
            </span>
            <span
              style={{
                marginLeft: '8px',
                fontSize: '0.875rem',
                color: highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)',
              }}
            >
              /{isYearly ? 'year' : 'month'}
            </span>
            {isYearly && plan.monthlyPrice > 0 && (
              <div
                style={{
                  fontSize: '0.75rem',
                  color: highlight ? 'rgba(255,255,255,0.6)' : 'var(--color-text-muted)',
                  marginTop: '4px',
                }}
              >
                ৳{Math.floor(plan.yearlyPrice / 12)}/month billed yearly
              </div>
            )}
          </div>

          {/* Features List */}
          <ul style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
            {plan.features.map((feature, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '0.875rem',
                  color: highlight ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)',
                  lineHeight: 1.5,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    fill={highlight ? 'rgba(255,255,255,0.2)' : 'rgba(15,92,78,0.1)'}
                    stroke={highlight ? 'rgba(255,255,255,0.4)' : 'rgba(15,92,78,0.3)'}
                    strokeWidth="1"
                  />
                  <path
                    d="M7 10L9 12L13 8"
                    stroke={highlight ? 'white' : 'var(--color-primary)'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/signup"
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: 'var(--radius-lg)',
              border: highlight ? 'none' : '1.5px solid var(--color-border)',
              background: highlight ? 'white' : 'transparent',
              color: highlight ? 'var(--color-primary)' : 'var(--color-text-primary)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              if (highlight) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
              } else {
                e.currentTarget.style.borderColor = 'rgba(15,92,78,0.3)';
                e.currentTarget.style.background = 'rgba(15,92,78,0.03)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              if (highlight) {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.boxShadow = 'none';
              } else {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {plan.cta} →
          </Link>

          {plan.monthlyPrice === 0 && (
            <p
              style={{
                fontSize: '0.75rem',
                color: highlight ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)',
                marginTop: '12px',
                textAlign: 'center',
              }}
            >
              ✓ No credit card required
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
