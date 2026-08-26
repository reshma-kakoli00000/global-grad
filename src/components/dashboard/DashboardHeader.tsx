'use client';

import React, { useState } from 'react';
import { Bell, User, Search } from 'lucide-react';
import { useAuth } from '@/providers/authContext';

interface DashboardHeaderProps {
  userName?: string;
}

export default function DashboardHeader({ userName }: DashboardHeaderProps) {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const displayName = userName || user?.fullName || 'Guest';
  const displayEmail = user?.email || 'user@example.com';

  const notifications = [
    { id: 1, title: 'Application Submitted', description: 'Your Stanford application has been submitted' },
    { id: 2, title: 'Document Verified', description: 'Your transcript has been verified' },
    { id: 3, title: 'Interview Scheduled', description: 'Your interview with MIT is scheduled' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
            Welcome back, {displayName}.
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            You have 3 application deadlines approaching this week.
          </p>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-xs">
          <div className="relative w-full">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-sm"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <Bell size={24} className="text-gray-600" />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-800">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <p className="font-semibold text-sm text-gray-800">{notif.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{notif.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User size={24} className="text-gray-600" />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <p className="font-semibold text-gray-800">{displayName}</p>
                  <p className="text-xs text-gray-600">{displayEmail}</p>
                </div>
                <a
                  href="/dashboard/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  My Profile
                </a>
                <a
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Settings
                </a>
                <a
                  href="/dashboard/documents"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  My Documents
                </a>
                <div className="border-t border-gray-200" />
                <button
                  onClick={() => {
                    logout();
                    window.location.href = "/login";
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
