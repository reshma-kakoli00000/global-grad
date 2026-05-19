import {
  Grid2X2,
  List,
  Search,
  Upload,
} from 'lucide-react';

export default function DocumentsToolbar() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
      
      {/* Search */}
      <div className="flex items-center gap-4 flex-1">
        
        <div className="flex-1 relative">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your vault..."
            className="w-full h-16 bg-white border border-gray-200 rounded-2xl pl-14 pr-5 outline-none focus:ring-4 focus:ring-[#0B4EA2]/10 transition"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1">
          
          <button className="w-12 h-12 rounded-xl bg-[#F3F6FB] flex items-center justify-center">
            <Grid2X2 size={20} className="text-[#0B4EA2]" />
          </button>

          <button className="w-12 h-12 rounded-xl flex items-center justify-center">
            <List size={20} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Upload */}
      <button className="h-16 px-8 rounded-2xl bg-[#0B4EA2] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3">
        <Upload size={20} />

        Upload File
      </button>
    </div>
  );
}