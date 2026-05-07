import { LayoutGrid, List } from 'lucide-react';

export default function ProgramsHeader() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Found 142 Programs
        </h1>

        <p className="text-gray-500 text-lg">
          Curated matches based on your academic profile and budget.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#0B7A4B] shadow-sm">
          <LayoutGrid size={20} />
        </button>

        <button className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
          <List size={20} />
        </button>
      </div>
    </div>
  );
}