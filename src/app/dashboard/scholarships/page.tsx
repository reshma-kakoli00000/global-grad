'use client';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

import FundingHero from '@/components/dashboard/scholarships/FundingHero';
import ScholarshipMatches from '@/components/dashboard/scholarships/ScholarshipMatches';
import ActiveTracker from '@/components/dashboard/scholarships/ActiveTracker';

export default function ScholarshipsPage() {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Existing Header */}
        <DashboardHeader />

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto">
          
          <div className="max-w-[1600px] mx-auto px-8 py-8">

            {/* Funding Hero */}
            <FundingHero />

            {/* Matches */}
            <div className="mt-12">
              <ScholarshipMatches />
            </div>

            {/* Tracker */}
            <div className="mt-14">
              <ActiveTracker />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}