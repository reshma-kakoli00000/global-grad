'use client';

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface AcademicCredentialsProps {
  isEditing: boolean;
}

interface Credential {
  id: string;
  degree: string;
  university: string;
  gpa: string;
  expectedGraduation: string;
  field: string;
}

export default function AcademicCredentials({ isEditing }: AcademicCredentialsProps) {
  const [credentials, setCredentials] = useState<Credential[]>([
    {
      id: '1',
      degree: 'B.S. in Computer Science',
      university: 'Stanford University',
      gpa: '3.92',
      expectedGraduation: 'May 2025',
      field: 'Computer Science',
    },
  ]);

  const [newCredential, setNewCredential] = useState<Credential>({
    id: '',
    degree: '',
    university: '',
    gpa: '',
    expectedGraduation: '',
    field: '',
  });

  const handleAddCredential = () => {
    if (newCredential.degree && newCredential.university) {
      setCredentials([...credentials, { ...newCredential, id: Date.now().toString() }]);
      setNewCredential({ id: '', degree: '', university: '', gpa: '', expectedGraduation: '', field: '' });
    }
  };

  const handleUpdateCredential = (id: string, field: keyof Credential, value: string) => {
    setCredentials(credentials.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen size={24} style={{ color: 'var(--color-primary)' }} />
        <h2 className="text-xl font-bold text-gray-900">Academic Credentials</h2>
      </div>

      <div className="space-y-6">
        {credentials.map((cred) => (
          <div key={cred.id} className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Degree</label>
              {isEditing ? (
                <input
                  type="text"
                  value={cred.degree}
                  onChange={(e) => handleUpdateCredential(cred.id, 'degree', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                />
              ) : (
                <p className="text-gray-900 font-medium">{cred.degree}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
              {isEditing ? (
                <input
                  type="text"
                  value={cred.university}
                  onChange={(e) => handleUpdateCredential(cred.id, 'university', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                />
              ) : (
                <p className="text-gray-900 font-medium">{cred.university}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GPA (4.0 SCALE)</label>
              {isEditing ? (
                <input
                  type="text"
                  value={cred.gpa}
                  onChange={(e) => handleUpdateCredential(cred.id, 'gpa', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                />
              ) : (
                <p className="text-gray-900 font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                  {cred.gpa}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected Graduation</label>
              {isEditing ? (
                <input
                  type="text"
                  value={cred.expectedGraduation}
                  onChange={(e) => handleUpdateCredential(cred.id, 'expectedGraduation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                />
              ) : (
                <p className="text-gray-900 font-medium">{cred.expectedGraduation}</p>
              )}
            </div>
          </div>
        ))}

        {isEditing && (
          <div className="pt-4">
            <h3 className="font-semibold text-gray-900 mb-4">Add New Credential</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Degree"
                value={newCredential.degree}
                onChange={(e) => setNewCredential({ ...newCredential, degree: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              />
              <input
                type="text"
                placeholder="University"
                value={newCredential.university}
                onChange={(e) => setNewCredential({ ...newCredential, university: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              />
              <input
                type="text"
                placeholder="GPA"
                value={newCredential.gpa}
                onChange={(e) => setNewCredential({ ...newCredential, gpa: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              />
              <input
                type="text"
                placeholder="Expected Graduation"
                value={newCredential.expectedGraduation}
                onChange={(e) => setNewCredential({ ...newCredential, expectedGraduation: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              />
            </div>
            <button
              onClick={handleAddCredential}
              className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Add Credential
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
