import { Plus } from 'lucide-react';

export default function UploadCard() {
  return (
    <button className="rounded-[28px] border-2 border-dashed border-[#BFD4F7] bg-[#F8FBFF] p-6 hover:border-[#0B4EA2] transition-all duration-300 flex flex-col items-center justify-center min-h-[320px]">
      
      <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-6">
        <Plus size={34} className="text-[#0B4EA2]" />
      </div>

      <h3 className="text-2xl font-bold text-[#0B4EA2] mb-2">
        New Document
      </h3>

      <p className="uppercase tracking-wide text-sm text-[#7DA0D8] font-semibold">
        Drag & Drop
      </p>
    </button>
  );
}