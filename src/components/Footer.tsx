import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Updates'],
    Resources: ['Blog', 'Guides', 'Documentation', 'Support'],
    Company: ['About Us', 'Careers', 'Contact', 'Privacy Policy'],
  };

  return (
    <footer
      style={{
        background: 'var(--color-primary)',
      }}
      className="text-white border-t border-green-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content Grid */}
        {/* ✅ FIX: 4 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    'linear-gradient(to bottom right, var(--color-primary-mid), var(--color-primary))',
                }}
              >
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <span className="font-bold text-lg text-white">GlobalGrad</span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              The ultimate academic concierge for study abroad applications.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              
              {/* ✅ Styled Heading */}
              <h3
                className="font-semibold mb-4 tracking-wide uppercase text-sm"
                style={{
                  color: 'var(--color-primary-light)',
                  letterSpacing: '0.08em',
                }}
              >
                {category}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white hover:text-green-300 transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p
            className="text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            © 2024 GlobalGrad Tracker. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-white hover:text-green-300 transition-colors text-sm font-medium"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}