import {
  CalendarDays,
  MoreVertical,
} from 'lucide-react';

interface Props {
  name: string;
  university: string;
  amount: string;
  deadline: string;
  status: string;
  progress: number;
  mobile?: boolean;
}

export default function TrackerRow({
  name,
  university,
  amount,
  deadline,
  status,
  progress,
  mobile,
}: Props) {
  const statusStyles = {
    Applied: 'bg-green-100 text-green-700',
    'In Review': 'bg-blue-100 text-blue-700',
    'In Progress': 'bg-gray-100 text-gray-600',
  };

  if (mobile) {
    return (
      <div className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm">
        
        <div className="flex items-start justify-between mb-5">
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {name}
            </h3>

            <p className="text-gray-500">
              {university}
            </p>
          </div>

          <button>
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="space-y-5">
          
          <div>
            <p className="text-xs uppercase font-bold text-gray-400 mb-2">
              Award
            </p>

            <h4 className="text-3xl font-bold text-[#0B4EA2]">
              {amount}
            </h4>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <CalendarDays size={18} />

            {deadline}
          </div>

          <div
            className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${
              statusStyles[status as keyof typeof statusStyles]
            }`}
          >
            {status}
          </div>

          <div>
            <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0B4EA2] to-[#72E3B1]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[2fr_1.2fr_1.2fr_1.2fr_1.5fr_60px] items-center px-8 py-8 border-b border-gray-100 last:border-b-0 hover:bg-[#FAFBFD] transition">
      
      {/* Name */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
          {name}
        </h3>

        <p className="text-gray-500">
          {university}
        </p>
      </div>

      {/* Amount */}
      <div>
        <h4 className="text-3xl font-bold text-gray-900">
          {amount}
        </h4>
      </div>

      {/* Deadline */}
      <div className="flex items-center gap-3 text-gray-700">
        <CalendarDays size={18} />

        <span>{deadline}</span>
      </div>

      {/* Status */}
      <div>
        <div
          className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${
            statusStyles[status as keyof typeof statusStyles]
          }`}
        >
          {status}
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="h-3 rounded-full bg-[#DCE6F7] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0B4EA2] to-[#72E3B1]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Action */}
      <button className="flex justify-end text-gray-500 hover:text-gray-900 transition">
        <MoreVertical size={22} />
      </button>
    </div>
  );
}