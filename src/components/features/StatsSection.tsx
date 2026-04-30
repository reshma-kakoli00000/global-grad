'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const stats = [
    { value: 50000, label: 'Students Tracked', suffix: '+' },
    { value: 98, label: 'Success Rate', suffix: '%' },
    { value: 200, label: 'Universities', suffix: '+' },
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            background: 'var(--color-border)',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isFirst={idx === 0}
              isLast={idx === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  suffix,
  isFirst,
  isLast,
}: {
  value: number;
  label: string;
  suffix: string;
  isFirst: boolean;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  const borderRadius = `${isFirst ? 'var(--radius-lg) 0 0 var(--radius-lg)' : isLast ? '0 var(--radius-lg) var(--radius-lg) 0' : '0'}`;

  return (
    <div
      ref={ref}
      style={{
        background: 'white',
        padding: '60px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius,
      }}
      onMouseEnter={(e) => {
        const line = e.currentTarget.querySelector('[data-hover-line]') as HTMLElement;
        if (line) line.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const line = e.currentTarget.querySelector('[data-hover-line]') as HTMLElement;
        if (line) line.style.opacity = '0';
      }}
    >
      {/* Hover Line Effect */}
      <div
        data-hover-line
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '2px',
          width: '60%',
          background:
            'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Stat Number */}
      <div
        className="mono"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.8rem)',
          color: 'var(--color-primary)',
          lineHeight: 1,
          marginBottom: '12px',
        }}
      >
        {count.toLocaleString()}
        <span style={{ color: 'var(--color-primary)' }}>{suffix}</span>
      </div>

      {/* Stat Label */}
      <div
        className="caption"
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          color: 'var(--color-text-muted)',
        }}
      >
        {label}
      </div>
    </div>
  );
}
