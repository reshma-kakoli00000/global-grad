'use client';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

import ApplicationsPageHeader from '@/components/dashboard/applications/ApplicationsPageHeader';
import PipelineBoard from '@/components/dashboard/applications/PipelineBoard';
import ApplicationsBottomToolbar from '@/components/dashboard/applications/ApplicationsBottomToolbar';

export default function ApplicationsPage() {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Existing Dashboard Header */}
        <DashboardHeader />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col px-8 py-8">
            
            {/* Page Header */}
            <ApplicationsPageHeader />

            {/* Pipeline Board */}
            <div className="flex-1 overflow-hidden">
              <PipelineBoard />
            </div>

            {/* Floating Toolbar */}
            <ApplicationsBottomToolbar />
          </div>
        </div>
      </div>
    </div>
  );
}