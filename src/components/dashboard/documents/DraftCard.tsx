import { File } from 'lucide-react';

export default function DraftCard() {
  return (
    <div className="rounded-[28px] border-2 border-dashed border-gray-300 bg-[#FAFBFC] p-6 opacity-80">
      
      <div className="flex items-start justify-between mb-8">
        
        <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
          <File size={26} className="text-gray-400" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-500 mb-2">
        Scholarship_Essay_Draft
      </h3>

      <p className="text-gray-400 mb-6">
        Auto-saving...
      </p>

      <div className="pt-5 border-t border-gray-200 flex items-center justify-between">
        
        <div>
          <p className="uppercase text-xs font-bold text-gray-400 mb-1">
            Updated
          </p>

          <p className="font-semibold text-gray-500">
            Just now
          </p>
        </div>

        <p className="font-semibold text-gray-400">
          12 KB
        </p>
      </div>
    </div>
  );
}