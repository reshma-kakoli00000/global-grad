'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeatureGrid() {
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
            ✦ Features
          </div>

          <h2 className="display-heading" style={{ marginBottom: '20px' }}>
            Engineered for Serious Scholars
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
            Our comprehensive suite of tools designed to streamline your global education journey from application to acceptance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px',
          }}
        >
          <FeatureCard
            title="Application Pipeline"
            description="Organize and track all your university applications with an intuitive Kanban board. Stay on top of deadlines and never miss an opportunity."
            iconBg="var(--color-primary-light)"
            iconBorder="rgba(15,92,78,0.2)"
            icon="📋"
          >
            <KanbanDemo />
          </FeatureCard>

          <FeatureCard
            title="Eligibility Analyzer"
            description="Get instant analysis of your profile against university requirements. Identify gaps and opportunities for improvement."
            iconBg="var(--color-info-bg)"
            iconBorder="rgba(37,99,235,0.2)"
            icon="🎯"
          >
            <EligibilityDemo />
          </FeatureCard>

          <FeatureCard
            title="Professor & Mentor Tracker"
            description="Track your communication with professors and mentors. Never lose sight of pending recommendations or responses."
            iconBg="var(--color-purple-bg)"
            iconBorder="rgba(124,58,237,0.2)"
            icon="👨‍🎓"
          >
            <ProfessorTrackerDemo />
          </FeatureCard>

          <FeatureCard
            title="Cloud Document Vault"
            description="Securely store and organize all your academic documents in one encrypted vault. Access them anytime, from anywhere."
            iconBg="var(--color-accent-light)"
            iconBorder="rgba(217,119,6,0.2)"
            icon="🔐"
          >
            <DocumentGridDemo />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  iconBg,
  iconBorder,
  icon,
  children,
}: {
  title: string;
  description: string;
  iconBg: string;
  iconBorder: string;
  icon: string;
  children: React.ReactNode;
}) {
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
      className="reveal-block"
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
            background: iconBg,
            border: `1px solid ${iconBorder}`,
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
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '10px',
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
            marginBottom: '20px',
          }}
        >
          {description}
        </p>

        {/* Mini UI Demo */}
        <div
          style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '14px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function KanbanDemo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
      <Column title="Saved" items={['Stanford MBA', 'MIT Sloan']} borderColor="var(--color-primary)" />
      <Column title="In Review" items={['Harvard Kennedy']} borderColor="var(--color-accent)" />
      <Column title="Applied" items={['Oxford MSc']} borderColor="var(--color-purple)" />
    </div>
  );
}

function Column({
  title,
  items,
  borderColor,
}: {
  title: string;
  items: string[];
  borderColor: string;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: '0.6rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          marginBottom: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: '4px',
              padding: '4px 6px',
              fontSize: '0.6rem',
              border: '1px solid var(--color-border)',
              borderLeft: `2px solid ${borderColor}`,
              color: 'var(--color-text-primary)',
              fontWeight: 500,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function EligibilityDemo() {
  const skills = [
    { name: 'GPA Score', pct: 92 },
    { name: 'Test Scores', pct: 88 },
    { name: 'Essays', pct: 75 },
    { name: 'Skill Gap', pct: 30, isWarning: true },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 500, color: 'var(--color-text-body)' }}>
              {skill.name}
            </span>
            <span
              className="mono"
              style={{
                fontSize: '0.65rem',
                color: skill.isWarning ? 'var(--color-accent)' : 'var(--color-primary)',
              }}
            >
              {skill.pct}%
            </span>
          </div>
          <div
            style={{
              height: '4px',
              background: 'var(--color-border)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${skill.pct}%`,
                background: skill.isWarning
                  ? 'linear-gradient(90deg, var(--color-accent), #f59e0b)'
                  : 'linear-gradient(90deg, var(--color-primary), #2563eb)',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfessorTrackerDemo() {
  const professors = [
    { initials: 'SC', name: 'Prof. Chen', status: 'Replied', color: 'var(--color-success)' },
    { initials: 'JW', name: 'Prof. Wilson', status: 'Pending', color: 'var(--color-warning)' },
    { initials: 'ET', name: 'Dr. Thompson', status: 'Sent', color: 'var(--color-info)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {professors.map((prof, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            background: 'white',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: prof.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.6rem',
              fontWeight: 700,
            }}
          >
            {prof.initials}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {prof.name}
            </div>
          </div>
          <span
            style={{
              fontSize: '0.5rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '2px 6px',
              borderRadius: '10px',
              background: `${prof.color}20`,
              color: prof.color,
            }}
          >
            {prof.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function DocumentGridDemo() {
  const docs = ['📄 Transcripts', '🎓 Certificates', '📝 Essays', '📖 References', '🏆 Awards', '📊 Reports'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>
      {docs.map((doc, idx) => (
        <div
          key={idx}
          style={{
            background: 'white',
            border: '1px solid var(--color-border)',
            borderRadius: '6px',
            padding: '6px',
            textAlign: 'center',
            fontSize: '0.6rem',
            color: 'var(--color-text-muted)',
            transition: 'border-color 0.2s, color 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = 'var(--color-primary)';
            el.style.color = 'var(--color-primary)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = 'var(--color-border)';
            el.style.color = 'var(--color-text-muted)';
          }}
        >
          {doc}
        </div>
      ))}
    </div>
  );
}
