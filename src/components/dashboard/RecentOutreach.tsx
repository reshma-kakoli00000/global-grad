'use client';

import React from 'react';
import { Mail, FileCheck, Calendar } from 'lucide-react';

interface Outreach {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}

export default function RecentOutreach() {
  const outreachItems: Outreach[] = [
    {
      id: 1,
      icon: <Mail size={20} />,
      title: 'Dr. Sarah Jenkins',
      description: 'Responded to your inquiry about the CS Research Lab. Scheduled a 15-min call for Thursday.',
      time: '2 hours ago',
    },
    {
      id: 2,
      icon: <FileCheck size={20} />,
      title: 'Document Verified',
      description:
        'Your academic transcript for ETH Zurich has been verified by the central admissions office.',
      time: 'Yesterday',
    },
    {
      id: 3,
      icon: <Calendar size={20} />,
      title: 'Webinar Invitation',
      description:
        'Invitation: "How to Ace Your Ivy League Statement of Purpose" - Tomorrow at 6 PM',
      time: '2 days ago',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
          Recent Outreach
        </h3>
        <a href="#" className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
          View All
        </a>
      </div>
      <div className="space-y-4">
        {outreachItems.map((item) => (
          <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
            <div
              className="flex-shrink-0 p-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-primary-light)' }}
            >
              <div style={{ color: 'var(--color-primary)' }}>{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <p className="text-xs text-gray-500 mt-2">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
