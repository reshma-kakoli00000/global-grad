'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileHeader from '@/components/dashboard/profile/ProfileHeader';
import AcademicProfile from '@/components/dashboard/profile/AcademicProfile';
import AcademicCredentials from '@/components/dashboard/profile/AcademicCredentials';
import TestScores from '@/components/dashboard/profile/TestScores';
import ResearchInterests from '@/components/dashboard/profile/ResearchInterests';
import ProfessionalExperience from '@/components/dashboard/profile/ProfessionalExperience';
import SkillsAchievements from '@/components/dashboard/profile/SkillsAchievements';
import ConnectSection from '@/components/dashboard/profile/ConnectSection';
import { ArrowLeft } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Dashboard</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Profile Header */}
          <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Academic Credentials */}
              <AcademicCredentials isEditing={isEditing} />

              {/* Test Scores */}
              <TestScores isEditing={isEditing} />

              {/* Research & Academic Interests */}
              <ResearchInterests isEditing={isEditing} />

              {/* Professional Experience */}
              <ProfessionalExperience isEditing={isEditing} />

              {/* Skills & Achievements */}
              <SkillsAchievements isEditing={isEditing} />
            </div>

            {/* Right Column */}
            <div>
              {/* Academic Profile */}
              <AcademicProfile />

              {/* Connect Section */}
              <div className="mt-6">
                <ConnectSection isEditing={isEditing} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
