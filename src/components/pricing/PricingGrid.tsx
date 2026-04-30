'use client';

import { useState } from 'react';
import PricingCard from "./PricingCard";

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

export default function PricingGrid() {
  const [isYearly, setIsYearly] = useState(false);

  const plans: Plan[] = [
    {
      title: "Free",
      tagline: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "Basic Application Tracker" },
        { text: "500MB Document Vault" },
        { text: "Core Eligibility Analysis" },
        { text: "Standard Email Support" },
        { text: "Access to Community" },
      ],
      cta: "Get Started Free",
    },
    {
      title: "Pro",
      tagline: "Best for serious scholars",
      monthlyPrice: 1299,
      yearlyPrice: 13990,
      features: [
        { text: "Advanced Application Pipeline" },
        { text: "10GB Encrypted Document Vault" },
        { text: "Unlimited Eligibility Checks" },
        { text: "Priority Chat Support" },
        { text: "Professor & Mentor Tracker" },
        { text: "AI-Powered Essay Feedback" },
        { text: "University Comparison Tools" },
        { text: "Monthly Success Reports" },
      ],
      cta: "Start Pro Plan",
      badge: "MOST POPULAR",
      highlight: true,
    },
    {
      title: "Premium",
      tagline: "For institutions & teams",
      monthlyPrice: 4999,
      yearlyPrice: 53990,
      features: [
        { text: "Institutional Dashboard" },
        { text: "Unlimited Document Vault" },
        { text: "Custom API Access" },
        { text: "Dedicated Account Manager" },
        { text: "Priority Phone Support" },
        { text: "Advanced Analytics & Reporting" },
        { text: "Custom Integrations" },
        { text: "SSO & Advanced Security" },
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section
      style={{
        background: 'var(--color-surface)',
        paddingTop: 'clamp(60px, 10vw, 96px)',
        paddingBottom: 'clamp(60px, 10vw, 96px)',
      }}
    >
      <div className="container-max">
        {/* Section Header */}
        <div style={{ marginBottom: '64px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--color-primary-light)',
              border: '1px solid rgba(15,92,78,0.2)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 16px',
              marginBottom: '20px',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-primary)',
            }}
          >
            ✦ Plans
          </div>

          <h2 className="display-heading" style={{ marginBottom: '20px' }}>
            Simple, Transparent <span style={{ fontStyle: 'italic' }}>Pricing</span>
          </h2>

          <p
            style={{
              fontSize: '0.9375rem',
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
              margin: '0 auto 32px',
              lineHeight: 1.65,
            }}
          >
            No hidden fees. No credit card required. Scale your plan as your ambitions grow.
          </p>

          {/* Billing Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              background: 'var(--color-bg)',
              padding: '8px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
            }}
          >
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: !isYearly ? 'var(--color-primary)' : 'var(--color-text-muted)',
              }}
            >
              Monthly
            </span>

            {/* Toggle Switch */}
            <button
              onClick={() => setIsYearly(!isYearly)}
              style={{
                position: 'relative',
                width: '48px',
                height: '28px',
                background: isYearly ? 'var(--color-primary)' : 'var(--color-border)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: isYearly ? '24px' : '3px',
                  width: '22px',
                  height: '22px',
                  background: 'white',
                  borderRadius: '50%',
                  transition: 'left 0.3s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}
              />
            </button>

            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isYearly ? 'var(--color-primary)' : 'var(--color-text-muted)',
              }}
            >
              Yearly
            </span>

            {isYearly && (
              <span
                style={{
                  background: 'rgba(217,119,6,0.15)',
                  color: 'var(--color-accent)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginLeft: '8px',
                }}
              >
                Save 10%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {plans.map((plan, i) => (
            <PricingCard
              key={i}
              plan={plan}
              isYearly={isYearly}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
