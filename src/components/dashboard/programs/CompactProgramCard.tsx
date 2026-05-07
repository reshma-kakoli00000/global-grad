import { CheckCircle2 } from 'lucide-react';

interface Props {
  title: string;
  university: string;
  tuition: string;
  rank: string;
  deadline: string;
  duration: string;
  badge?: string;
  students: string;
}

export default function CompactProgramCard({
  title,
  university,
  tuition,
  rank,
  deadline,
  duration,
  badge,
  students,
}: Props) {
  return (
    <div className="bg-white rounded-[32px] p-7 border border-gray-100 shadow-sm">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>

          <p className="text-gray-500">
            {university}
          </p>
        </div>

        {badge && (
          <div className="bg-[#0B7A4B] text-white text-xs font-bold px-4 py-2 rounded-2xl">
            {badge}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-y-6 mb-8">
        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Tuition / Year
          </p>

          <h4 className="text-2xl font-bold text-[#0B7A4B]">
            {tuition}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Global Rank
          </p>

          <h4 className="text-2xl font-bold">
            {rank}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Next Deadline
          </p>

          <h4 className="font-semibold text-gray-900">
            {deadline}
          </h4>
        </div>

        <div>
          <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
            Duration
          </p>

          <h4 className="font-semibold text-gray-900">
            {duration}
          </h4>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-[#0B7A4B] font-medium">
          <CheckCircle2 size={18} />

          {students}
        </div>

        <button className="px-6 h-12 rounded-2xl bg-[#111827] text-white font-semibold hover:opacity-90 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}