import {
  ChevronDown,
  SlidersHorizontal,
} from 'lucide-react';

export default function ApplicationsBottomToolbar() {
  return (
    <div className="fixed bottom-6 right-8 z-30">
      <div className="bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-2xl rounded-3xl px-6 py-4 flex items-center gap-6">
        
        {/* Filter */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <SlidersHorizontal size={18} />

            <span className="uppercase tracking-wide text-xs font-bold">
              Filter
            </span>
          </div>

          <button className="flex items-center gap-2 text-[#0B7A4B] font-semibold">
            All Programs

            <ChevronDown size={16} />
          </button>
        </div>

        <div className="w-px h-6 bg-gray-200" />

        {/* Sort */}
        <div className="flex items-center gap-4">
          <span className="uppercase tracking-wide text-xs font-bold text-gray-500">
            Sort
          </span>

          <button className="flex items-center gap-2 text-[#0B7A4B] font-semibold">
            Deadline

            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}