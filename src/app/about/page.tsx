'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function About() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          background: 'var(--color-bg)',
          paddingTop: 'clamp(80px, 10vw, 120px)',
          paddingBottom: 'clamp(60px, 10vw, 96px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Teal Glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '0%',
            width: '600px',
            height: '500px',
            background:
              'radial-gradient(ellipse 600px 500px at 85% 10%, rgba(15,92,78,0.07), transparent)',
            pointerEvents: 'none',
          }}
        />

        <div className="container-max relative z-10">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 'clamp(40px, 10vw, 80px)',
              alignItems: 'center',
            }}
          >
            {/* Left Column - Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Badge */}
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
                  animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-success)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-primary)',
                  }}
                >
                  ✦ About Us
                </span>
              </div>

              {/* Title */}
              <h1
                className="display-heading"
                style={{
                  color: 'var(--color-text-primary)',
                  animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                  animationDelay: '0.1s',
                }}
              >
                Transforming Global <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Education</span>
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.65,
                  animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                  animationDelay: '0.2s',
                }}
              >
                We're empowering global students to navigate their academic journey with confidence, clarity, and community support at every milestone.
              </p>
            </div>

            {/* Right Column - Image */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                animationDelay: '0.3s',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  maxHeight: '400px',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.15)',
                }}
              >
                {/* Background Image */}
                <img
                  src="/images/about.jpg"
                  alt="About Hero"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transform: 'scale(1.05)',
                    animation: 'slowZoom 12s ease-in-out infinite alternate',
                  }}
                />

                {/* Soft Gradient Overlay (for readability + style) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)',
                  }}
                />

                {/* Bottom Text Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    color: 'white',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.85)',
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    Empowering students worldwide to achieve their global academic dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              ✦ Foundation
            </div>

            <h2 className="display-heading" style={{ marginBottom: '20px' }}>
              Mission & <span style={{ fontStyle: 'italic' }}>Vision</span>
            </h2>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-muted)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              Guiding principles that drive our commitment to global education excellence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Mission Card */}
            <MissionVisionCard
              icon="🎯"
              title="Our Mission"
              description="At GlobalGrad, we believe education transcends borders. We empower graduates worldwide by providing a unified platform where they can showcase achievements, connect with peers, and discover career opportunities without geographical limitations."
            />

            {/* Vision Card */}
            <MissionVisionCard
              icon="🌍"
              title="Our Vision"
              description="We envision a world where every graduate, regardless of location or background, has equal access to meaningful career paths and professional networks. Through technology and innovation, we're building the bridge between academic achievement and real-world success."
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        style={{
          background: 'var(--color-bg)',
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
              ✦ Values
            </div>

            <h2 className="display-heading" style={{ marginBottom: '20px' }}>
              Core <span style={{ fontStyle: 'italic' }}>Values</span>
            </h2>

            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--color-text-muted)',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              The principles that guide everything we do and shape our community culture.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px',
            }}
          >
            <CoreValueCard
              icon="🤝"
              title="Inclusivity"
              description="We celebrate diversity and ensure everyone has a voice in our community, regardless of background or experience."
            />
            <CoreValueCard
              icon="⚡"
              title="Excellence"
              description="We strive for the highest standards in everything we do, from product quality to customer support."
            />
            <CoreValueCard
              icon="💡"
              title="Innovation"
              description="We continuously evolve to meet the changing needs of our community with cutting-edge technology."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #0f5c4e 100%)',
          paddingTop: 'clamp(60px, 10vw, 96px)',
          paddingBottom: 'clamp(60px, 10vw, 96px)',
        }}
      >
        <div className="container-max">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
            }}
          >
            <StatCard number="150+" label="Countries" />
            <StatCard number="250k" label="Graduates" />
            <StatCard number="1.2k" label="Universities" />
            <StatCard number="98%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Start Your Journey?
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
                Join thousands of ambitious scholars and unlock your global potential with expert guidance, comprehensive tools, and community support.
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
    </Layout>
  );
}

/* Helper Components */
function MissionVisionCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const ref = React.useRef(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
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
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          padding: '32px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = 'var(--shadow-lg)';
          el.style.borderColor = 'rgba(15,92,78,0.25)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
          el.style.borderColor = 'var(--color-border)';
        }}
      >
        {/* Icon Box */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-primary-light)',
            border: '1px solid rgba(15,92,78,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: '20px',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function CoreValueCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const ref = React.useRef(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
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
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          padding: '32px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-4px)';
          el.style.boxShadow = 'var(--shadow-lg)';
          el.style.borderColor = 'rgba(15,92,78,0.25)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = 'none';
          el.style.borderColor = 'var(--color-border)';
        }}
      >
        {/* Icon Box */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-primary-light)',
            border: '1px solid rgba(15,92,78,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: '20px',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.3rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: 'white',
          marginBottom: '8px',
        }}
      >
        {number}
      </p>
      <p
        style={{
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.7)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </p>
    </div>
  );
}
