import {
  Search,
  ChevronDown,
} from 'lucide-react';

import MarketUpdateCard from './MarketUpdateCard';

const specializations = [
  'Computer Science',
  'Engineering',
  'MBA',
  'Arts',
];

export default function ProgramsFilterSidebar() {
  return (
    <div className="bg-[#F1F3F6] rounded-[32px] p-6 h-fit">
      <h3 className="text-xs font-bold tracking-[0.25em] text-[#0B7A4B] mb-6">
        FILTER PROGRAMS
      </h3>

      {/* Search */}
      <div className="relative mb-6">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Degree or University"
          className="w-full pl-11 pr-4 h-14 rounded-2xl bg-white border border-gray-200 outline-none"
        />
      </div>

      {/* Country */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          DESTINATION COUNTRY
        </p>

        <button className="w-full h-14 rounded-2xl bg-white border border-gray-200 px-4 flex items-center justify-between">
          <span className="text-gray-700">United States</span>

          <ChevronDown size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Budget */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4">
          TUITION BUDGET (MAX)
        </p>

        <input
          type="range"
          min={0}
          max={100}
          className="w-full accent-[#0B7A4B]"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>$10k</span>
          <span>$45k+</span>
        </div>
      </div>

      {/* Academic */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4">
          ACADEMIC PROFILE
        </p>

        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="GPA (4.0)"
            className="h-14 rounded-2xl border border-gray-200 px-4 bg-white"
          />

          <input
            placeholder="IELTS"
            className="h-14 rounded-2xl border border-gray-200 px-4 bg-white"
          />
        </div>
      </div>

      {/* Specialization */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-gray-700 mb-4">
          SPECIALIZATION
        </p>

        <div className="flex flex-wrap gap-3">
          {specializations.map((item) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                item === 'Computer Science'
                  ? 'bg-[#0B7A4B] text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <MarketUpdateCard />
    </div>
  );
}