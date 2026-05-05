'use client';

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Globe, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [animated, setAnimated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Redirect to dashboard after signup
    router.push('/dashboard');
  };

  return (
   <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
  {/* Back Button */}
  <Link
    href="/"
    className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5 font-medium"
    style={{
      background: 'linear-gradient(to right, var(--color-primary-mid), var(--color-primary))',
      boxShadow: 'var(--shadow-md)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(23, 135, 110, 0.4)'}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
  >
    <ArrowLeft size={18} />
    <span>Back</span>
  </Link>

  {/* LEFT PANEL - VISUAL / BRANDING */}
  <div
    className="hidden md:flex flex-col justify-center items-start px-12 py-20 relative overflow-hidden"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Gradient Overlay with FeaturesCA Colors */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(135deg, rgba(13, 61, 50, 0.85) 0%, rgba(15, 45, 94, 0.85) 100%)',
        animation: animated ? 'fadeIn 0.8s ease-out' : 'none',
      }}
    />

    {/* Content */}
    <div className="relative z-10 max-w-md">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30"
        style={{
          animation: animated ? 'slideInUp 0.8s ease-out 0.1s both' : 'none',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-bold tracking-widest text-green-200 uppercase drop-shadow-sm">
          ✦ Academic Excellence
        </span>
      </div>

      {/* Main Heading */}
      <h1
        className="text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg"
        style={{
          animation: animated ? 'slideInUp 0.8s ease-out 0.2s both' : 'none',
          color: '#ffffff',
        }}
      >
        Your Global Journey Starts Here
      </h1>

      {/* Accent Line */}
      <div
        className="w-10 h-1 bg-green-400 rounded-full mb-6"
        style={{
          animation: animated ? 'slideInUp 0.8s ease-out 0.3s both' : 'none',
        }}
      />

      {/* Quote */}
      <p
        className="text-lg italic text-white/90 mb-8 max-w-md leading-relaxed drop-shadow-md"
        style={{
          animation: animated ? 'slideInUp 0.8s ease-out 0.4s both' : 'none',
          color: '#ffffff',
        }}
      >
        "Join thousands of students navigating their academic future with confidence and clarity."
      </p>

      {/* Author Block */}
      <div
        className="flex items-center gap-4"
        style={{
          animation: animated ? 'slideInUp 0.8s ease-out 0.5s both' : 'none',
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-xl font-bold text-white">GG</span>
        </div>
        <div>
          <p className="font-semibold text-white drop-shadow-md" style={{ color: '#ffffff' }}>
            GlobalGrad Community
          </p>
          <p className="text-sm text-white/80 drop-shadow-sm" style={{ color: '#ffffff' }}>
            Trusted by students worldwide
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT PANEL - FORM SECTION */}
  <div className="flex flex-col justify-center items-center px-4 sm:px-8 py-16 md:py-20 md:px-12 bg-white">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div
            className="mb-8"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.3s both' : 'none',
            }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 mb-2">
              Create Account
            </h2>
            <p className="text-slate-500 text-sm">
              Join thousands of students on their academic journey
            </p>
          </div>

          {/* Social Login Buttons */}
          <div
            className="grid grid-cols-2 gap-4 mb-6"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.4s both' : 'none',
            }}
          >
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-slate-700">
              <Globe size={18} />
              <span className="hidden sm:inline text-sm">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium text-slate-700">
              <Share2 size={18} />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </button>
          </div>

          {/* Divider */}
          <div
            className="flex items-center gap-4 mb-6"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.5s both' : 'none',
            }}
          >
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              Or register with email
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Input Fields */}
          <div
            className="space-y-4 mb-6"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.6s both' : 'none',
            }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <div
                className={`relative flex items-center transition-all duration-200 ${
                  focusedField === 'fullName'
                    ? 'ring-2 ring-green-500'
                    : 'ring-1 ring-gray-200'
                } rounded-lg overflow-hidden`}
              >
                <User
                  size={18}
                  className="absolute left-3 text-gray-400"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 text-slate-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* University Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                University Email
              </label>
              <div
                className={`relative flex items-center transition-all duration-200 ${
                  focusedField === 'email'
                    ? 'ring-2 ring-green-500'
                    : 'ring-1 ring-gray-200'
                } rounded-lg overflow-hidden`}
              >
                <Mail
                  size={18}
                  className="absolute left-3 text-gray-400"
                  strokeWidth={1.5}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 text-slate-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div
                className={`relative flex items-center transition-all duration-200 ${
                  focusedField === 'password'
                    ? 'ring-2 ring-green-500'
                    : 'ring-1 ring-gray-200'
                } rounded-lg overflow-hidden`}
              >
                <Lock
                  size={18}
                  className="absolute left-3 text-gray-400"
                  strokeWidth={1.5}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-12 py-3 bg-gray-50 text-slate-900 placeholder-gray-400 focus:outline-none focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={18} strokeWidth={1.5} />
                  ) : (
                    <Eye size={18} strokeWidth={1.5} />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                At least 8 characters with mix of letters, numbers & symbols
              </p>
            </div>
          </div>

          {/* Checkbox */}
          <div
            className="flex items-start gap-3 mb-6"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.7s both' : 'none',
            }}
          >
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
              I agree to the{' '}
              <a href="#" className="text-green-600 hover:underline font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-green-600 hover:underline font-medium">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Primary Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 mb-4"
            style={{
              background: 'linear-gradient(to right, var(--color-primary-mid), var(--color-primary))',
              boxShadow: 'var(--shadow-md)',
              animation: animated ? 'slideInUp 0.8s ease-out 0.8s both' : 'none',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(23, 135, 110, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
          >
            Create Account
          </button>

          {/* Bottom Text */}
          <p
            className="text-center text-slate-600 text-sm"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.9s both' : 'none',
            }}
          >
            Already have an account?{' '}
            <Link href="/login" className="text-green-600 hover:underline font-semibold">
              Log In
            </Link>
          </p>

          {/* Footer Note */}
          <p
            className="text-center text-gray-400 text-xs mt-6 pt-6 border-t border-gray-200"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 1s both' : 'none',
            }}
          >
            © 2024 GlobalGrad Tracker. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
