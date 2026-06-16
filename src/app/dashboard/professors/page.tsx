'use client';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

import ProfessorsSearch from '@/components/dashboard/professors/ProfessorsSearch';
import ProfessorsList from '@/components/dashboard/professors/ProfessorsList';
import ProfessorProfile from '@/components/dashboard/professors/ProfessorProfile';
import ResearchAreaCard from '@/components/dashboard/professors/ResearchAreaCard';
import FitScoreCard from '@/components/dashboard/professors/FitScoreCard';
import CommunicationTimeline from '@/components/dashboard/professors/CommunicationTimeline';
import InternalNotes from '@/components/dashboard/professors/InternalNotes';

export default function ProfessorsPage() {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Existing Header */}
        <DashboardHeader />

        {/* Page Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full grid grid-cols-1 xl:grid-cols-[420px_1fr]">

            {/* LEFT PANEL */}
            <div className="border-r border-gray-200 bg-white/40 backdrop-blur-sm overflow-hidden flex flex-col">
              
              <div className="p-8 pb-6">
                <ProfessorsSearch />
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-8">
                <ProfessorsList />
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="overflow-y-auto">
              <div className="p-8">

                {/* Profile */}
                <ProfessorProfile />

                {/* Research + Fit */}
                <div className="grid grid-cols-1 2xl:grid-cols-[1fr_260px] gap-8 mt-10">
                  <ResearchAreaCard />
                  <FitScoreCard />
                </div>

                {/* Bottom Area */}
                <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 mt-10">
                  <CommunicationTimeline />
                  <InternalNotes />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}