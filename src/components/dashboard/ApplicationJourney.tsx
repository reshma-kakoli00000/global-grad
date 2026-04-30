'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface University {
  name: string;
  progress: number;
  status: string;
}

export default function ApplicationJourney() {
  const universities: University[] = [
    { name: 'Stanford University', progress: 85, status: 'In Review' },
    { name: 'ETH Zurich', progress: 40, status: 'Pending: IELTS Verification' },
    { name: 'Oxford Global', progress: 15, status: 'Status: Initial Draft' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
      <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Application Journey
      </h3>
      <div className="space-y-6">
        {universities.map((uni, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-gray-800">{uni.name}</p>
              <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
                {uni.progress}%
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${uni.progress}%`,
                  backgroundColor: 'var(--color-primary)',
                }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{uni.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
