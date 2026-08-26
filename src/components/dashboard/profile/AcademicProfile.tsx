'use client';

import React, { useState } from 'react';

export default function AcademicProfile() {
  const [profileCompletion, setProfileCompletion] = useState(85);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">ACADEMIC PROFILE</h3>
        <span
          className="text-2xl font-bold"
          style={{ color: 'var(--color-primary)' }}
        >
          {profileCompletion}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${profileCompletion}%`,
            backgroundColor: 'var(--color-primary)',
          }}
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Complete your Letters of Recommendation to reach 100%.
      </p>

      {/* Completion Tasks */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            ✓
          </div>
          <span className="text-sm text-gray-700">Academic Credentials</span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            ✓
          </div>
          <span className="text-sm text-gray-700">Test Scores</span>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            ✓
          </div>
          <span className="text-sm text-gray-700">Professional Experience</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded border-2 border-gray-300" />
          <span className="text-sm text-gray-600">Letters of Recommendation</span>
        </div>
      </div>
    </div>
  );
}
