import {
  Mail,
  CornerUpLeft,
} from 'lucide-react';

interface Props {
  title: string;
  description: string;
  time: string;
  type: string;
}

export default function TimelineItem({
  title,
  description,
  time,
  type,
}: Props) {
  const config = {
    reply: {
      icon: CornerUpLeft,
      bg: 'bg-[#0B7A4B]',
      color: 'text-white',
    },

    mail: {
      icon: Mail,
      bg: 'bg-white border border-gray-200',
      color: 'text-gray-500',
    },
  };

  const current =
    config[type as keyof typeof config];

  const Icon = current.icon;

  return (
    <div className="relative flex gap-6">
      
      <div
        className={`absolute -left-10 top-2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${current.bg}`}
      >
        <Icon size={20} className={current.color} />
      </div>

      <div className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100 flex-1">
        
        <div className="flex items-start justify-between mb-4">
          
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>

          <span className="text-sm text-gray-400">
            {time}
          </span>
        </div>

        <p className="text-gray-600 leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}