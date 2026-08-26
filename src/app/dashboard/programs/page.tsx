'use client';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

import ProgramsHeader from '@/components/dashboard/programs/ProgramsHeader';
import ProgramsFilterSidebar from '@/components/dashboard/programs/ProgramsFilterSidebar';
import CompactProgramCard from '@/components/dashboard/programs/CompactProgramCard';
import FeaturedProgramCard from '@/components/dashboard/programs/FeaturedProgramCard';
import DestinationGuideCard from '@/components/dashboard/programs/DestinationGuideCard';

import {
  compactPrograms,
  featuredProgram,
} from '@/components/dashboard/programs/data';

export default function ProgramsPage() {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto px-6 py-8">
            <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8">
              
              {/* Left Filter Sidebar */}
              <ProgramsFilterSidebar />

              {/* Right Content */}
              <div>
                {/* Header */}
                <ProgramsHeader />

                {/* Top Program Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {compactPrograms.map((program, index) => (
                    <CompactProgramCard
                      key={index}
                      {...program}
                    />
                  ))}
                </div>

                {/* Featured Card */}
                <div className="mb-8">
                  <FeaturedProgramCard {...featuredProgram} />
                </div>

                {/* Bottom Destination Card */}
                <DestinationGuideCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}