import { Clock } from 'lucide-react';

interface Props {
  name: string;
  university: string;
  field: string;
  status: string;
  last: string;
  active?: boolean;
}

export default function ProfessorListItem({
  name,
  university,
  field,
  status,
  last,
  active,
}: Props) {
  const badgeStyles = {
    Replied: 'bg-green-100 text-green-700',
    'Follow-up': 'bg-blue-100 text-blue-700',
    Sent: 'bg-gray-100 text-gray-600',
  };

  return (
    <button
      className={`w-full text-left rounded-[28px] p-6 transition-all duration-300 border ${
        active
          ? 'bg-white border-[#0B4EA2] shadow-lg'
          : 'bg-transparent border-transparent hover:bg-white hover:shadow-md'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h3>

          <p className="text-gray-700 mb-2">
            {university}
          </p>

          <p className="text-[#8A9AB8]">
            {field}
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-full text-sm font-bold ${
            badgeStyles[status as keyof typeof badgeStyles]
          }`}
        >
          {status}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Clock size={15} />

        <span>{last}</span>
      </div>
    </button>
  );
}