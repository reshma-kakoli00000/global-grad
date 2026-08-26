'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/providers/authContext';
import { Edit2, Share2, Plus } from 'lucide-react';

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export default function ProfileHeader({ isEditing, setIsEditing }: ProfileHeaderProps) {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    photo: 'https://via.placeholder.com/120?text=Profile',
    fullName: '',
    title: 'Aspiring Ph.D. Candidate in Computer Science',
  });

  // Sync user data from auth context
  useEffect(() => {
    if (user?.fullName) {
      setProfileData((prev) => ({
        ...prev,
        fullName: user.fullName,
      }));
    }
  }, [user?.fullName]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData({ ...profileData, photo: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-6">
          {/* Profile Photo */}
          <div className="relative">
            <img
              src={profileData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-lg object-cover border-4"
              style={{ borderColor: 'var(--color-primary)' }}
            />
            {isEditing && (
              <label className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <Edit2 size={16} />
              </label>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {profileData.fullName || 'User Profile'}
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={profileData.title}
                    onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                    placeholder="Your professional title"
                    className="mt-2 px-3 py-1 border border-gray-300 rounded text-gray-600"
                  />
                ) : (
                  <p className="text-gray-600 text-lg mt-2">{profileData.title}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap justify-end">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            style={{ borderColor: 'var(--color-primary)' }}
          >
            <Edit2 size={18} style={{ color: 'var(--color-primary)' }} />
            <span style={{ color: 'var(--color-primary)' }} className="font-medium">
              {isEditing ? 'Save' : 'Edit Profile'}
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 size={18} className="text-gray-600" />
            <span className="text-gray-700 font-medium">Share Profile</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus size={18} className="text-gray-600" />
            <span className="text-gray-700 font-medium">Add Section</span>
          </button>
        </div>
      </div>
    </div>
  );
}
