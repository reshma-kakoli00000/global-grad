import {
  FileText,
  MoreVertical,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  title: string;
  version: string;
  type: string;
  updated: string;
  size: string;
  icon: string;
}

export default function DocumentCard({
  title,
  version,
  type,
  updated,
  size,
  icon,
}: Props) {
  const iconStyles = {
    pdf: 'bg-red-50 text-red-500',
    doc: 'bg-blue-50 text-blue-500',
    secure: 'bg-green-50 text-green-500',
    orange: 'bg-orange-50 text-orange-500',
  };

  return (
    <div className="bg-white rounded-[28px] border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      <div className="flex items-start justify-between mb-8">
        
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
            iconStyles[icon as keyof typeof iconStyles]
          }`}
        >
          {icon === 'secure' ? (
            <ShieldCheck size={26} />
          ) : (
            <FileText size={26} />
          )}
        </div>

        <button>
          <MoreVertical size={20} className="text-gray-400" />
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-2">
        {title}
      </h3>

      <p className="text-gray-500 mb-6">
        {version} • {type}
      </p>

      <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
        
        <div>
          <p className="uppercase text-xs font-bold text-gray-400 mb-1">
            Updated
          </p>

          <p className="font-semibold text-gray-800">
            {updated}
          </p>
        </div>

        <p className="font-semibold text-gray-500">
          {size}
        </p>
      </div>
    </div>
  );
}