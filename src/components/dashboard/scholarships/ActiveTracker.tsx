import { Download, Filter } from 'lucide-react';
import TrackerRow from './TrackerRow';
import { trackerData } from './data';

export default function ActiveTracker() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        
        <h2 className="text-5xl font-bold text-gray-900">
          Active Tracker
        </h2>

        <div className="flex items-center gap-3">
          
          <button className="h-12 px-5 rounded-2xl bg-white border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <Filter size={18} />
              Filter
            </div>
          </button>

          <button className="h-12 px-5 rounded-2xl bg-white border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition">
            <div className="flex items-center gap-2">
              <Download size={18} />
              Export
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden xl:block bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        
        {/* Head */}
        <div className="grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.5fr_60px] px-8 py-6 bg-[#F7F9FC] border-b border-gray-100">
          
          <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
            Scholarship Name
          </p>

          <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
            Award Amount
          </p>

          <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
            Deadline
          </p>

          <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
            Status
          </p>

          <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
            Progress
          </p>

          <div />
        </div>

        {/* Rows */}
        <div>
          {trackerData.map((item) => (
            <TrackerRow
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="xl:hidden space-y-5">
        {trackerData.map((item) => (
          <TrackerRow
            key={item.name}
            mobile
            {...item}
          />
        ))}
      </div>
    </div>
  );
}