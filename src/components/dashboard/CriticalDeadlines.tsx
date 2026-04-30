'use client';

import React from 'react';
import { AlertCircle, Calendar } from 'lucide-react';

interface Deadline {
  id: number;
  title: string;
  date: string;
  time: string;
  priority: 'high' | 'medium';
  university?: string;
}

export default function CriticalDeadlines() {
  const deadlines: Deadline[] = [
    {
      id: 1,
      title: 'Stanford SOP Final Polish',
      date: 'TOMORROW',
      time: '11:59 PM',
      priority: 'high',
    },
    {
      id: 2,
      title: 'IELTS Exam Date',
      date: 'NOV 24, 2025',
      time: '',
      priority: 'high',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
        Critical Deadlines
      </h3>
      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className={`flex gap-4 p-4 rounded-lg border-l-4 ${
              deadline.priority === 'high'
                ? 'border-l-red-500 bg-red-50'
                : 'border-l-yellow-500 bg-yellow-50'
            }`}
          >
            <div className="flex-shrink-0">
              <AlertCircle
                size={24}
                className={deadline.priority === 'high' ? 'text-red-600' : 'text-yellow-600'}
              />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{deadline.title}</p>
              <div className="flex items-center gap-2 mt-2">
                <Calendar size={16} className="text-gray-500" />
                <p className="text-sm font-bold text-gray-600">
                  {deadline.date} {deadline.time && `• ${deadline.time}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
