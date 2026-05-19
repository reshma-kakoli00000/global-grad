import ScholarshipCard from './ScholarshipCard';
import { scholarshipMatches } from './data';

export default function ScholarshipMatches() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        
        <h2 className="text-5xl font-bold text-gray-900">
          Curated Matches
        </h2>

        <button className="text-[#0B4EA2] font-bold hover:underline">
          View All Matches
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {scholarshipMatches.map((item) => (
          <ScholarshipCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}