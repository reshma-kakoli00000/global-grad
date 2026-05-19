import {
  Mail,
  Link2,
} from 'lucide-react';

export default function ProfessorProfile() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8">
      
      {/* Avatar */}
      <div className="w-32 h-32 rounded-[32px] overflow-hidden shadow-lg bg-gradient-to-br from-[#D9B88D] to-[#C59B67] flex items-center justify-center">
        <span className="text-5xl">
          👩‍🏫
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-[#173D8F] leading-tight mb-3">
          Dr. Elena Rodriguez
        </h1>

        <p className="text-3xl font-semibold text-[#0B4EA2] mb-6">
          Lead Researcher, Stanford Neural Lab
        </p>

        <div className="flex flex-wrap gap-4">
          
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3">
            <Mail size={18} className="text-gray-500" />

            <span className="text-gray-700">
              e.rodriguez@stanford.edu
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3">
            <Link2 size={18} className="text-gray-500" />

            <span className="text-gray-700">
              faculty.stanford.edu/rodriguez
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}