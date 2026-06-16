'use client';

import React, { useState } from 'react';
import { BookMarked, X } from 'lucide-react';

interface ResearchInterestsProps {
  isEditing: boolean;
}

export default function ResearchInterests({ isEditing }: ResearchInterestsProps) {
  const [researchStatement, setResearchStatement] = useState(
    'My research focuses on the intersection of AI Ethics and large-scale decentralized systems. I aim to develop frameworks that ensure algorithmic transparency without compromising privacy in multi-agent environments.'
  );

  const [specializedAreas, setSpecializedAreas] = useState([
    'AI Ethics',
    'Quantum Computing',
    'Machine Learning',
    'Distributed Systems',
    'Data Privacy',
  ]);

  const [newArea, setNewArea] = useState('');

  const handleAddArea = () => {
    if (newArea.trim() && !specializedAreas.includes(newArea)) {
      setSpecializedAreas([...specializedAreas, newArea]);
      setNewArea('');
    }
  };

  const handleRemoveArea = (area: string) => {
    setSpecializedAreas(specializedAreas.filter(a => a !== area));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <BookMarked size={24} style={{ color: 'var(--color-primary)' }} />
        <h2 className="text-xl font-bold text-gray-900">Research & Academic Interests</h2>
      </div>

      {/* Research Statement */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Research Statement</label>
        {isEditing ? (
          <textarea
            value={researchStatement}
            onChange={(e) => setResearchStatement(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 min-h-24"
            style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
          />
        ) : (
          <p className="text-gray-700 italic">{researchStatement}</p>
        )}
      </div>

      {/* Specialized Areas */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Specialized Areas</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {specializedAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {area}
              {isEditing && (
                <button
                  onClick={() => handleRemoveArea(area)}
                  className="hover:opacity-75"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        {isEditing && (
          <div className="flex gap-2">
            <input
              type="text"
              value={newArea}
              onChange={(e) => setNewArea(e.target.value)}
              placeholder="Add new area"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddArea();
                }
              }}
            />
            <button
              onClick={handleAddArea}
              className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
