'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300`}
      style={{
        borderBottomColor: isScrolled ? 'rgba(23, 135, 110, 0.5)' : 'rgba(23, 135, 110, 0.2)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all" style={{
              background: 'linear-gradient(to bottom right, var(--color-primary-mid), var(--color-primary))',
              boxShadow: 'var(--shadow-md)'
            }}>
              <span className="text-white font-bold text-lg">🎓</span>
            </div>
            <span className="font-bold text-lg text-slate-900 hidden sm:inline">
              GlobalGrad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              href="/features" 
              label="Features"
              isActive={currentPath === '/features'}
            />
            <NavLink 
              href="/pricing" 
              label="Pricing"
              isActive={currentPath === '/pricing'}
            />
            <NavLink 
              href="/about" 
              label="About"
              isActive={currentPath === '/about'}
            />
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors">
              Login
            </Link>
            <Link href="/signup" className="px-6 py-2 text-white rounded-lg font-medium transition-all hover:-translate-y-0.5" style={{
              background: 'linear-gradient(to right, var(--color-primary-mid), var(--color-primary))',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(23, 135, 110, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-slate-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/50 py-4 space-y-3 bg-white/95 backdrop-blur-xl">
            <Link
              href="/features"
              className={`block px-4 py-2 font-medium transition-colors ${
                currentPath === '/features'
                  ? 'border-b-2'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              style={{
                color: currentPath === '/features' ? 'var(--color-primary)' : undefined,
                borderBottomColor: currentPath === '/features' ? 'var(--color-primary)' : undefined,
              }}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`block px-4 py-2 font-medium transition-colors ${
                currentPath === '/pricing'
                  ? 'border-b-2'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              style={{
                color: currentPath === '/pricing' ? 'var(--color-primary)' : undefined,
                borderBottomColor: currentPath === '/pricing' ? 'var(--color-primary)' : undefined,
              }}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 font-medium transition-colors ${
                currentPath === '/about'
                  ? 'border-b-2'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              style={{
                color: currentPath === '/about' ? 'var(--color-primary)' : undefined,
                borderBottomColor: currentPath === '/about' ? 'var(--color-primary)' : undefined,
              }}
            >
              About
            </Link>
            <div className="flex gap-3 px-4 pt-3 border-t border-slate-200/50">
              <Link href="/login" className="flex-1 px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors text-center">
                Login
              </Link>
              <Link href="/signup" className="flex-1 px-4 py-2 text-white rounded-lg font-medium text-center" style={{
                background: 'linear-gradient(to right, var(--color-primary-mid), var(--color-primary))'
              }}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        fontWeight: 500,
        color: isActive ? 'var(--color-primary)' : 'rgb(71, 85, 105)',
        transition: 'color 0.3s ease',
      }}
    >
      {label}
      {/* Bottom line indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '-8px',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary))',
          transform: isActive || isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease',
        }}
      />
    </Link>
  );
}