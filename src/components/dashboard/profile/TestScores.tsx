'use client';

import React, { useState } from 'react';
import { Award } from 'lucide-react';

interface TestScoresProps {
  isEditing: boolean;
}

interface TestScore {
  id: string;
  name: string;
  score: string;
  dateAttempted: string;
  maxScore: string;
  status: 'current' | 'attempt' | 'pending';
}

export default function TestScores({ isEditing }: TestScoresProps) {
  const [testScores, setTestScores] = useState<TestScore[]>([
    {
      id: '1',
      name: 'GRE General',
      score: '2027',
      dateAttempted: '2024',
      maxScore: '340',
      status: 'current',
    },
    {
      id: '2',
      name: 'TOEFL IBT',
      score: '114 / 120',
      dateAttempted: '2023',
      maxScore: '120',
      status: 'current',
    },
    {
      id: '3',
      name: 'Duolingo English',
      score: 'Pending',
      dateAttempted: '',
      maxScore: '160',
      status: 'pending',
    },
  ]);

  const [newTest, setNewTest] = useState<Partial<TestScore>>({
    name: '',
    score: '',
    dateAttempted: '',
    maxScore: '',
  });

  const handleAddTest = () => {
    if (newTest.name && newTest.score) {
      setTestScores([...testScores, { ...newTest as TestScore, id: Date.now().toString(), status: 'current' }]);
      setNewTest({ name: '', score: '', dateAttempted: '', maxScore: '' });
    }
  };

  const handleUpdateTest = (id: string, field: keyof TestScore, value: string) => {
    setTestScores(testScores.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Award size={24} style={{ color: 'var(--color-primary)' }} />
        <h2 className="text-xl font-bold text-gray-900">Test Scores</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testScores.map((test) => (
          <div key={test.id} className="border border-gray-200 rounded-lg p-4">
            <div className="mb-3">
              {isEditing ? (
                <input
                  type="text"
                  value={test.name}
                  onChange={(e) => handleUpdateTest(test.id, 'name', e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm font-semibold focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                />
              ) : (
                <p className="font-semibold text-gray-900">{test.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <div>
                <label className="text-xs font-medium text-gray-600">Score</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={test.score}
                    onChange={(e) => handleUpdateTest(test.id, 'score', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                  />
                ) : (
                  <p className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                    {test.score}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-medium text-gray-600">Date/Attempt</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={test.dateAttempted}
                    onChange={(e) => handleUpdateTest(test.id, 'dateAttempted', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                  />
                ) : (
                  <p className="text-sm text-gray-700">{test.dateAttempted}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Test Score</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Test Name"
              value={newTest.name || ''}
              onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
            <input
              type="text"
              placeholder="Score"
              value={newTest.score || ''}
              onChange={(e) => setNewTest({ ...newTest, score: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
            <input
              type="text"
              placeholder="Date/Attempt"
              value={newTest.dateAttempted || ''}
              onChange={(e) => setNewTest({ ...newTest, dateAttempted: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
            <input
              type="text"
              placeholder="Max Score"
              value={newTest.maxScore || ''}
              onChange={(e) => setNewTest({ ...newTest, maxScore: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
          </div>
          <button
            onClick={handleAddTest}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Add Test Score
          </button>
        </div>
      )}
    </div>
  );
}
