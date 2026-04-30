'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Lock, Globe, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [animated, setAnimated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    // Redirect to dashboard after login
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white relative">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5 font-medium"
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
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-green-700/80"
          style={{ animation: animated ? 'fadeIn 0.8s ease-out' : 'none' }}
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
            <span className="text-xs font-bold tracking-widest text-green-300 uppercase">
              ✦ Academic Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl font-bold text-white mb-4 leading-tight"
            style={{
              animation: animated ? 'slideInUp 0.8s ease-out 0.2s both' : 'none',
            }}
          >
            Welcome Back
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
            className="text-lg italic text-white mb-8 max-w-md leading-relaxed"
            style={{
              animation: animated ? 'slideInUp 0.8s ease-out 0.4s both' : 'none',
            }}
          >
            "Continue your academic journey and access your personalized dashboard with all your applications and progress."
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
              <p className="font-semibold text-white">GlobalGrad Community</p>
              <p className="text-sm text-white">Welcome back, Scholar</p>
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
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm">
              Sign in to access your academic journey
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
              Or sign in with email
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
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div
                className={`relative flex items-center transition-all duration-200 rounded-lg overflow-hidden ${
                  focusedField === 'email'
                    ? 'ring-2 ring-green-500'
                    : 'ring-1 ring-gray-200'
                }`}
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
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm text-green-600 hover:underline">
                  Forgot?
                </a>
              </div>
              <div
                className={`relative flex items-center transition-all duration-200 rounded-lg overflow-hidden ${
                  focusedField === 'password'
                    ? 'ring-2 ring-green-500'
                    : 'ring-1 ring-gray-200'
                }`}
              >
                <Lock
                  size={18}
                  className="absolute left-3 text-gray-400"
                  strokeWidth={1.5}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
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
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div
            className="flex items-center gap-2 mb-6"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.7s both' : 'none',
            }}
          >
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
            <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">
              Keep me signed in
            </label>
          </div>

          {/* Primary Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/40 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5 mb-4"
            style={{
              animation: animated ? 'slideInUp 0.8s ease-out 0.8s both' : 'none',
            }}
          >
            Sign In
          </button>

          {/* Bottom Text */}
          <p
            className="text-center text-slate-600 text-sm"
            style={{
              animation: animated ? 'fadeIn 0.8s ease-out 0.9s both' : 'none',
            }}
          >
            Don't have an account?{' '}
            <Link href="/signup" className="text-green-600 hover:underline font-semibold">
              Create one
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
      `}</style>
    </div>
  );
}
