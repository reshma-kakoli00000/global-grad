import { MoreHorizontal } from 'lucide-react';
import ApplicationCard from './ApplicationCard';

interface Props {
  title: string;
  count: number;
  color: string;
  applications: any[];
}

export default function PipelineColumn({
  title,
  count,
  color,
  applications,
}: Props) {
  return (
    <div className="w-[360px] flex-shrink-0 flex flex-col">
      
      {/* Column Header */}
      <div className="sticky top-0 z-10 mb-5 bg-[#F5F7FA]/80 backdrop-blur-xl rounded-2xl px-2 py-2">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${color}`} />

            <h3 className="uppercase tracking-wide text-sm font-bold text-gray-700">
              {title} ({count})
            </h3>
          </div>

          <button className="w-8 h-8 rounded-xl hover:bg-white transition flex items-center justify-center">
            <MoreHorizontal size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-5 overflow-y-auto pr-1">
        {applications.map((app, index) => (
          <ApplicationCard
            key={index}
            {...app}
          />
        ))}
      </div>
    </div>
  );
}