'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Library,
  Users,
  Award,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Programs', icon: BookOpen, href: '#programs' },
    { name: 'Applications', icon: FileText, href: '#applications' },
    { name: 'Documents', icon: Library, href: '#documents' },
    { name: 'Professors', icon: Users, href: '#professors' },
    { name: 'Scholarships', icon: Award, href: '#scholarships' },
  ];

  const bottomItems = [
    { name: 'Help Center', icon: HelpCircle, href: '#help' },
    { name: 'Logout', icon: LogOut, href: '/login' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <span className="text-white font-bold text-lg">🎓</span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
                GlobalGrad
              </h1>
              <p className="text-xs text-gray-500 leading-tight">Academic Concierge</p>
            </div>
          </Link>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    item.name === 'Dashboard'
                      ? 'text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={item.name === 'Dashboard' ? { backgroundColor: 'var(--color-primary)' } : {}}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="border-t border-gray-200 p-4 space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
