'use client';

export default function ApplicationPipeline() {
  const institutions = [
    'Stanford',
    'MIT',
    'Oxford',
    'Harvard',
    'INSEAD',
    'ETH Zürich',
  ];

  return (
    <section
      style={{
        background: 'white',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '28px 0',
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          {/* Label */}
          <p
            className="caption"
            style={{
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
            }}
          >
            TRUSTED BY SCHOLARS FROM TOP INSTITUTIONS
          </p>

          {/* Logos */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '52px',
              flexWrap: 'wrap',
            }}
          >
            {institutions.map((inst, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'rgba(13,19,33,0.22)',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(13,19,33,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(13,19,33,0.22)';
                }}
              >
                {inst}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
