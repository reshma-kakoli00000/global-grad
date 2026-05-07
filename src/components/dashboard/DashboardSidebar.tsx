'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      name: 'Programs',
      icon: BookOpen,
      href: '/dashboard/programs',
    },
    {
      name: 'Applications',
      icon: FileText,
      href: '/dashboard/applications',
    },
    {
      name: 'Documents',
      icon: Library,
      href: '/dashboard/documents',
    },
    {
      name: 'Professors',
      icon: Users,
      href: '/dashboard/professors',
    },
    {
      name: 'Scholarships',
      icon: Award,
      href: '/dashboard/scholarships',
    },
  ];

  const bottomItems = [
    {
      name: 'Help Center',
      icon: HelpCircle,
      href: '/dashboard/help',
    },
    {
      name: 'Logout',
      icon: LogOut,
      href: '/login',
    },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-40
          h-screen w-64 bg-white border-r border-gray-200
          flex flex-col
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link
            href="/"
            className="flex items-center gap-4 group"
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md"
              style={{
                background:
                  'linear-gradient(to bottom right, var(--color-primary-mid), var(--color-primary))',
              }}
            >
              <span className="text-white text-lg">🎓</span>
            </div>

            <div>
              <h1
                className="text-xl font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                GlobalGrad
              </h1>

              <p className="text-xs text-gray-500">
                Academic Concierge
              </p>
            </div>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3
                    px-4 py-3 rounded-2xl
                    transition-all duration-200
                    font-medium
                    ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  style={
                    isActive
                      ? {
                          backgroundColor: 'var(--color-primary)',
                        }
                      : {}
                  }
                >
                  <Icon size={20} />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom Links */}
        <div className="border-t border-gray-200 p-4 space-y-2">
          {bottomItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 hover:bg-gray-100 transition-all duration-200 font-medium"
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}