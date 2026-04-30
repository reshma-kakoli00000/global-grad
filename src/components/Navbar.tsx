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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-green-200/50'
          : 'bg-white/30 backdrop-blur-lg border-b border-green-100/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
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
            <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5">
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
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`block px-4 py-2 font-medium transition-colors ${
                currentPath === '/pricing'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-2 font-medium transition-colors ${
                currentPath === '/about'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <div className="flex gap-3 px-4 pt-3 border-t border-slate-200/50">
              <Link href="/login" className="flex-1 px-4 py-2 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors text-center">
                Login
              </Link>
              <Link href="/signup" className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium text-center">
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
        color: isActive ? 'rgb(22, 163, 74)' : 'rgb(71, 85, 105)',
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