import {
  FileUp,
  Pencil,
  Share2,
} from 'lucide-react';

interface Props {
  title: string;
  time: string;
  action: string;
  type: string;
  isLast?: boolean;
}

export default function ActivityItem({
  title,
  time,
  action,
  type,
  isLast,
}: Props) {
  const config = {
    upload: {
      icon: FileUp,
      bg: 'bg-green-50',
      color: 'text-green-600',
    },
    edit: {
      icon: Pencil,
      bg: 'bg-blue-50',
      color: 'text-blue-600',
    },
    share: {
      icon: Share2,
      bg: 'bg-gray-100',
      color: 'text-gray-600',
    },
  };

  const current =
    config[type as keyof typeof config];

  const Icon = current.icon;

  return (
    <div
      className={`flex items-center justify-between p-6 ${
        !isLast ? 'border-b border-gray-100' : ''
      }`}
    >
      <div className="flex items-center gap-5">
        
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${current.bg}`}
        >
          <Icon size={22} className={current.color} />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">
            {title}
          </h3>

          <p className="text-gray-500">
            {time}
          </p>
        </div>
      </div>

      <button className="text-[#0B4EA2] font-bold hover:underline">
        {action}
      </button>
    </div>
  );
}