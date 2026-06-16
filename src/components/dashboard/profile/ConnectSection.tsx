'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/providers/authContext';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface ConnectSectionProps {
  isEditing: boolean;
}

export default function ConnectSection({ isEditing }: ConnectSectionProps) {
  const { user } = useAuth();
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '+1 (650) 555-0192',
    linkedin: 'linkedin.com/in/alex-t-cs',
  });

  // Sync email from auth context
  useEffect(() => {
    if (user?.email) {
      setContactInfo((prev) => ({
        ...prev,
        email: user.email,
      }));
    }
  }, [user?.email]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6" style={{ color: 'var(--color-primary)' }}>
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
        >
          <Mail size={24} />
        </div>
        <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
          Connect
        </h3>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">EMAIL</label>
          {isEditing ? (
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
          ) : (
            <p className="text-sm text-gray-700">{contactInfo.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">PHONE</label>
          {isEditing ? (
            <input
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
          ) : (
            <p className="text-sm text-gray-700">{contactInfo.phone}</p>
          )}
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">SOCIAL</label>
          {isEditing ? (
            <input
              type="text"
              value={contactInfo.linkedin}
              onChange={(e) => setContactInfo({ ...contactInfo, linkedin: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
          ) : (
            <p className="text-sm text-gray-700">{contactInfo.linkedin}</p>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Privacy notice: We do not share or sell any information
        </p>
      </div>
    </div>
  );
}
