'use client';

import React, { useState } from 'react';
import { Briefcase, X } from 'lucide-react';

interface ProfessionalExperienceProps {
  isEditing: boolean;
}

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  period: string;
  description: string[];
}

export default function ProfessionalExperience({ isEditing }: ProfessionalExperienceProps) {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      jobTitle: 'Machine Learning Research Intern',
      company: 'OpenAI Research Lab',
      period: 'JAN 2023 - PRESENT',
      description: [
        'Developed and optimized transformer-based models for ethical AI alignment using PyTorch.',
        'Collaborated with the safety team to implement transparency frameworks for large-scale decentralized systems.',
        'Authored essential documentation on multi-agent environment protocols.',
      ],
    },
  ]);

  const [newExperience, setNewExperience] = useState<Partial<Experience>>({
    jobTitle: '',
    company: '',
    period: '',
    description: [],
  });

  const [newBullet, setNewBullet] = useState('');

  const handleAddExperience = () => {
    if (newExperience.jobTitle && newExperience.company) {
      setExperiences([
        ...experiences,
        { ...newExperience as Experience, id: Date.now().toString() },
      ]);
      setNewExperience({ jobTitle: '', company: '', period: '', description: [] });
    }
  };

  const handleRemoveExperience = (id: string) => {
    setExperiences(experiences.filter(e => e.id !== id));
  };

  const handleUpdateExperience = (id: string, field: keyof Experience, value: any) => {
    setExperiences(experiences.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const handleAddBullet = () => {
    if (newBullet.trim()) {
      setNewExperience({
        ...newExperience,
        description: [...(newExperience.description || []), newBullet],
      });
      setNewBullet('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={24} style={{ color: 'var(--color-primary)' }} />
        <h2 className="text-xl font-bold text-gray-900">Professional Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="pb-6 border-b border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={exp.jobTitle}
                      onChange={(e) => handleUpdateExperience(exp.id, 'jobTitle', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded font-semibold mb-2 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                    />
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-gray-600 mb-2 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                    />
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-gray-900">{exp.jobTitle}</p>
                    <p className="text-gray-600">{exp.company}</p>
                  </>
                )}
              </div>
              {isEditing && (
                <button
                  onClick={() => handleRemoveExperience(exp.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {isEditing ? (
              <input
                type="text"
                value={exp.period}
                onChange={(e) => handleUpdateExperience(exp.id, 'period', e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-500 mb-3 focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              />
            ) : (
              <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
            )}

            <ul className="space-y-2">
              {exp.description.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-gray-400 mt-0.5">•</span>
                  {isEditing ? (
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => {
                        const updated = [...exp.description];
                        updated[idx] = e.target.value;
                        handleUpdateExperience(exp.id, 'description', updated);
                      }}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                    />
                  ) : (
                    <span>{bullet}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Experience</h3>
          <input
            type="text"
            placeholder="Job Title"
            value={newExperience.jobTitle || ''}
            onChange={(e) => setNewExperience({ ...newExperience, jobTitle: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
          />
          <input
            type="text"
            placeholder="Company"
            value={newExperience.company || ''}
            onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
          />
          <input
            type="text"
            placeholder="Period (e.g., JAN 2023 - PRESENT)"
            value={newExperience.period || ''}
            onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
          />
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Add responsibility or achievement"
              value={newBullet}
              onChange={(e) => setNewBullet(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddBullet();
                }
              }}
            />
            <button
              onClick={handleAddBullet}
              className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Add
            </button>
          </div>
          <button
            onClick={handleAddExperience}
            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Add Experience
          </button>
        </div>
      )}
    </div>
  );
}
