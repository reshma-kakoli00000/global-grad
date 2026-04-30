'use client';

import React from 'react';

interface Program {
  id: number;
  name: string;
  university: string;
  location: string;
  matchPercentage: number;
  tags: string[];
  image: string;
}

export default function ProgramMatches() {
  const programs: Program[] = [
    {
      id: 1,
      name: 'MSc Artificial Intelligence',
      university: 'University of Oxford',
      location: 'United Kingdom',
      matchPercentage: 94,
      tags: ['STEM', 'Fully Funded'],
      image: '/images/about.jpg',
    },
    {
      id: 2,
      name: 'Masters in Robotics',
      university: 'Carnegie Mellon University',
      location: 'USA',
      matchPercentage: 84,
      tags: ['IVY+', 'Scholarship'],
      image: '/images/mellon.png',
    },
    {
      id: 3,
      name: 'PhD Computer Science',
      university: 'MIT',
      location: 'USA',
      matchPercentage: 78,
      tags: ['Research', 'Full Scholarship'],
      image: '/images/mit.png',
    },
  ];

  return (
    <div className="mb-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
          Program Matches
        </h3>
        <a href="#" className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img src={program.image} alt={program.name} className="w-full h-full object-cover" />
              {/* Match Badge */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full font-bold text-white text-sm"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {program.matchPercentage}% MATCH
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h4 className="font-bold text-gray-800 mb-1">{program.name}</h4>
              <p className="text-sm text-gray-600 mb-3">
                {program.university} • {program.location}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {program.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
