import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProfessorsSearch() {
  return (
    <div>
      <div className="relative mb-6">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search professors or universities..."
          className="w-full h-16 bg-white border border-gray-200 rounded-2xl pl-14 pr-5 outline-none focus:ring-4 focus:ring-[#0B4EA2]/10 transition-all"
        />
      </div>

      <div className="flex items-center justify-between">
        
        <h2 className="uppercase tracking-wide text-sm font-bold text-gray-500">
          All Professors (24)
        </h2>

        <button className="flex items-center gap-2 text-[#0B4EA2] font-semibold">
          <SlidersHorizontal size={16} />

          Filters
        </button>
      </div>
    </div>
  );
}