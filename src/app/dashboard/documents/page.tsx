'use client';

import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

import DocumentsSidebar from '@/components/dashboard/documents/DocumentsSidebar';
import DocumentsToolbar from '@/components/dashboard/documents/DocumentsToolbar';
import DocumentGrid from '@/components/dashboard/documents/DocumentGrid';
import RecentActivity from '@/components/dashboard/documents/RecentActivity';

export default function DocumentsPage() {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Global Sidebar */}
      <DashboardSidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Existing Header */}
        <DashboardHeader />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1700px] mx-auto px-8 py-8">

            <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-8">
              
              {/* Left Panel */}
              <div className="space-y-6">
                <DocumentsSidebar />
              </div>

              {/* Right Content */}
              <div>
                <DocumentsToolbar />

                <div className="mt-8">
                  <DocumentGrid />
                </div>

                <div className="mt-10">
                  <RecentActivity />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}