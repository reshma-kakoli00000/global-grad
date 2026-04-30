'use client';

import React from 'react';
import { Clock, Award } from 'lucide-react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Tasks Pending Card */}
      <div
        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2">TASKS PENDING</p>
            <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              12
            </p>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary-light)' }}>
            <Clock size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
        </div>
      </div>

      {/* Offers Received Card */}
      <div
        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium mb-2">OFFERS RECEIVED</p>
            <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              6
            </p>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary-light)' }}>
            <Award size={24} style={{ color: 'var(--color-primary)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
