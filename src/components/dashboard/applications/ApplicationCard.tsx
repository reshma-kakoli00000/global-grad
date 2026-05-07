import {
  Calendar,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface Props {
  title: string;
  university: string;
  intake: string;
  status?: string;
  progress?: number;
  documents?: string;
  type: string;
}

export default function ApplicationCard({
  title,
  university,
  intake,
  status,
  progress,
  documents,
  type,
}: Props) {
  return (
    <div className="group bg-white border border-gray-100 rounded-[30px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Top */}
      <div className="flex items-start justify-between mb-6">
        
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B7A4B] to-[#095C39] flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">
            U
          </span>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold tracking-wide">
          {intake}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-lg mb-6">
        {university}
      </p>

      {/* Status */}
      {type === 'deadline' && (
        <div className="flex items-center gap-2 text-red-500 font-medium">
          <Calendar size={18} />

          <span>{status}</span>
        </div>
      )}

      {type === 'success' && (
        <div className="flex items-center gap-2 text-[#0B7A4B] font-medium">
          <CheckCircle2 size={18} />

          <span>{status}</span>
        </div>
      )}

      {type === 'warning' && (
        <div className="flex items-center gap-2 text-yellow-600 font-medium">
          <AlertCircle size={18} />

          <span>{status}</span>
        </div>
      )}

      {type === 'progress' && (
        <div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full bg-[#0B7A4B]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-sm font-semibold">
            <span className="text-[#0B7A4B]">
              {documents}
            </span>

            <span className="text-gray-500">
              {progress}% Done
            </span>
          </div>
        </div>
      )}
    </div>
  );
}