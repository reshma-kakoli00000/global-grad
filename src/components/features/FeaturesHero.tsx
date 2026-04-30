'use client';

import { useEffect, useState } from 'react';

export default function FeaturesHero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
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
          {/* Left Column */}
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
                ✦ Features
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                animation: animated
                  ? 'fadeUp 0.75s ease both'
                  : 'none',
                animationDelay: '0.1s',
              }}
              className="display-heading"
            >
              Master Your <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Global Education</span> Journey
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--color-text-body)',
                maxWidth: '460px',
                animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                animationDelay: '0.2s',
              }}
            >
              Everything you need to navigate applications, track progress, and connect with mentors. 
              Built for students who dream big and work smart.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                animationDelay: '0.3s',
              }}
            >
              <button
                style={{
                  background: 'var(--color-primary)',
                  color: 'white',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(15,92,78,0.28)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px rgba(15,92,78,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 24px rgba(15,92,78,0.28)';
                }}
              >
                Start Your Journey →
              </button>
              <button
                style={{
                  background: 'white',
                  color: 'var(--color-text-primary)',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1.5px solid var(--color-border-strong)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'var(--color-border-strong)';
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
              >
                ▶ View Demo
              </button>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                paddingTop: '12px',
                animation: animated ? 'fadeUp 0.75s ease both' : 'none',
                animationDelay: '0.4s',
              }}
            >
              <div>
                <div className="mono" style={{ fontSize: '1.6rem' }}>
                  50K<span style={{ color: 'var(--color-primary)' }}>+</span>
                </div>
                <div className="caption">Students Tracked</div>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: 'var(--color-border)',
                }}
              />
              <div>
                <div className="mono" style={{ fontSize: '1.6rem' }}>
                  98<span style={{ color: 'var(--color-primary)' }}>%</span>
                </div>
                <div className="caption">Success Rate</div>
              </div>
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background: 'var(--color-border)',
                }}
              />
              <div>
                <div className="mono" style={{ fontSize: '1.6rem' }}>
                  200<span style={{ color: 'var(--color-primary)' }}>+</span>
                </div>
                <div className="caption">Universities</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <DashboardPreview animated={animated} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

function DashboardPreview({ animated }: { animated: boolean }) {
  return (
    <div
      style={{
        position: 'relative',
        animation: animated ? 'fadeUp 0.75s ease both' : 'none',
        animationDelay: '0.5s',
      }}
    >
      {/* Main Mockup Container */}
      <div
        style={{
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: '20px',
          boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
        }}
      >
        {/* Top Bar with Traffic Lights */}
        <div
          style={{
            background: 'var(--color-surface-2)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff5f57',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#febc2e',
            }}
          />
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#28c940',
            }}
          />
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: '0.7rem',
              color: 'var(--color-text-muted)',
            }}
          >
            globalgrad.app
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '8px' }}>
              Application Pipeline
            </h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              3 applications in progress
            </p>
          </div>

          {/* Kanban Board */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {/* Saved Column */}
            <div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '8px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                Saved
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.65rem',
                    border: '1px solid var(--color-border)',
                    borderLeft: '2.5px solid var(--color-primary)',
                  }}
                >
                  Stanford MBA
                </div>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.65rem',
                    border: '1px solid var(--color-border)',
                    borderLeft: '2.5px solid var(--color-primary)',
                  }}
                >
                  MIT Sloan
                </div>
              </div>
            </div>

            {/* In Review Column */}
            <div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '8px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                In Review
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.65rem',
                    border: '1px solid var(--color-border)',
                    borderLeft: '2.5px solid var(--color-accent)',
                  }}
                >
                  Harvard Kennedy
                </div>
              </div>
            </div>

            {/* Applied Column */}
            <div>
              <div
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '8px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                Applied
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div
                  style={{
                    background: 'white',
                    borderRadius: '6px',
                    padding: '6px 10px',
                    fontSize: '0.65rem',
                    border: '1px solid var(--color-border)',
                    borderLeft: '2.5px solid var(--color-purple)',
                  }}
                >
                  Oxford MSc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div
        style={{
          position: 'absolute',
          top: '-12px',
          right: '-16px',
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '12px 16px',
          boxShadow: 'var(--shadow-md)',
          animation: 'float 4s ease-in-out infinite',
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          MIT Eligibility
        </div>
        <div
          className="mono"
          style={{
            fontSize: '1.4rem',
            color: 'var(--color-primary)',
            lineHeight: 1,
          }}
        >
          85%
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-8px',
          left: '-12px',
          background: 'white',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '12px 16px',
          boxShadow: 'var(--shadow-md)',
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '0.5s',
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          7 Apps In Pipeline
        </div>
        <div
          className="mono"
          style={{
            fontSize: '1.4rem',
            color: 'var(--color-accent)',
            lineHeight: 1,
          }}
        >
          On Track →
        </div>
      </div>
    </div>
  );
}
