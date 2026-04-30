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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <span className="font-bold text-lg text-white">GlobalGrad</span>
            </div>

            <p className="text-sm text-white leading-relaxed">
              The ultimate academic concierge for study abroad applications.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
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
          {/* Copyright */}
          <p className="text-sm text-white/80">
            © 2024 GlobalGrad Tracker. All rights reserved.
          </p>

          {/* Social Links */}
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