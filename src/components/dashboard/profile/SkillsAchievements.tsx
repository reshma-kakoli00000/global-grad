'use client';

import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

interface SkillsAchievementsProps {
  isEditing: boolean;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function SkillsAchievements({ isEditing }: SkillsAchievementsProps) {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([
    {
      name: 'Technical Skills',
      skills: ['Python & PyTorch', 'C++ Systems Dev', 'AWS/Cloud Infra'],
    },
    {
      name: 'Academic Honors',
      skills: [
        "Dean's List (All Semesters)",
        'National Undergraduate Research Award',
        'Tau Beta Pi Honor Society Member',
      ],
    },
  ]);

  const [newCategory, setNewCategory] = useState('');
  const [newSkill, setNewSkill] = useState({ category: '', skill: '' });

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setSkillCategories([
        ...skillCategories,
        { name: newCategory, skills: [] },
      ]);
      setNewCategory('');
    }
  };

  const handleAddSkill = () => {
    if (newSkill.category && newSkill.skill.trim()) {
      setSkillCategories(
        skillCategories.map(cat =>
          cat.name === newSkill.category
            ? { ...cat, skills: [...cat.skills, newSkill.skill] }
            : cat
        )
      );
      setNewSkill({ category: '', skill: '' });
    }
  };

  const handleRemoveSkill = (categoryName: string, skill: string) => {
    setSkillCategories(
      skillCategories.map(cat =>
        cat.name === categoryName
          ? { ...cat, skills: cat.skills.filter(s => s !== skill) }
          : cat
      )
    );
  };

  const handleRemoveCategory = (categoryName: string) => {
    setSkillCategories(skillCategories.filter(cat => cat.name !== categoryName));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Star size={24} style={{ color: 'var(--color-primary)' }} />
        <h2 className="text-xl font-bold text-gray-900">Skills & Achievements</h2>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="pb-6 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              {isEditing && (
                <button
                  onClick={() => handleRemoveCategory(category.name)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                  }}
                >
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveSkill(category.name, skill)}
                      className="hover:opacity-75"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="flex gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Add new skill"
                  value={newSkill.category === category.name ? newSkill.skill : ''}
                  onChange={(e) =>
                    setNewSkill({ category: category.name, skill: e.target.value })
                  }
                  className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddSkill();
                    }
                  }}
                />
                <button
                  onClick={handleAddSkill}
                  className="px-3 py-1 rounded text-white font-medium text-sm hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Add New Category</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Category name (e.g., Languages, Certifications)"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': 'var(--color-primary)' } as any}
            />
            <button
              onClick={handleAddCategory}
              className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
