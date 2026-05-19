import { ArrowRight } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  award: string;
  badge: string;
  icon: string;
}

export default function ScholarshipCard({
  title,
  description,
  award,
  badge,
  icon,
}: Props) {
  return (
    <div className="group bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Top */}
      <div className="flex items-start justify-between mb-8">
        
        <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-3xl">
          {icon}
        </div>

        <div className="bg-[#0B7A4B] text-white text-xs font-bold px-4 py-2 rounded-full tracking-wide">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        
        <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h3>

        <p className="text-gray-600 leading-8 text-lg">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
        
        <div>
          <p className="uppercase text-xs tracking-wide font-bold text-gray-400 mb-2">
            Award
          </p>

          <h4 className="text-3xl font-bold text-[#0B4EA2]">
            {award}
          </h4>
        </div>

        <button className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-[#0B4EA2] transition-all duration-300 flex items-center justify-center">
          <ArrowRight
            size={24}
            className="text-gray-700 group-hover:text-white transition-all"
          />
        </button>
      </div>
    </div>
  );
}