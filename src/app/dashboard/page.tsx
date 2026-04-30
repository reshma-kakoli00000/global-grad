'use client';

import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsCards from '@/components/dashboard/StatsCards';
import ApplicationJourney from '@/components/dashboard/ApplicationJourney';
import RecentOutreach from '@/components/dashboard/RecentOutreach';
import ProgramMatches from '@/components/dashboard/ProgramMatches';
import CriticalDeadlines from '@/components/dashboard/CriticalDeadlines';
import { Plus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader userName="Alex" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Stats Cards */}
            <StatsCards />

            {/* New Application Button */}
            <button
              className="w-full mb-8 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Plus size={20} />
              New Application
            </button>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Left Column - Application Journey */}
              <div className="lg:col-span-1">
                <ApplicationJourney />
              </div>

              {/* Middle Column - Recent Outreach & Critical Deadlines */}
              <div className="lg:col-span-2">
                <RecentOutreach />
              </div>
            </div>

            {/* Program Matches */}
            <div className="mb-8">
              <ProgramMatches />
            </div>

            {/* Critical Deadlines */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CriticalDeadlines />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
