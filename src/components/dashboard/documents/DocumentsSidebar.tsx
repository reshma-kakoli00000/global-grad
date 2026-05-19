import { Folder } from 'lucide-react';

import StorageCard from './StorageCard';
import { categories } from './data';

export default function DocumentsSidebar() {
  return (
    <>
      {/* Categories */}
      <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Categories
        </h2>

        <div className="space-y-2">
          {categories.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-200 ${
                item.active
                  ? 'bg-[#EEF4FF] text-[#0B4EA2]'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <Folder size={20} />

                <span className="font-semibold">
                  {item.name}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.active
                    ? 'bg-[#0B4EA2] text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {item.count}
              </div>
            </button>
          ))}
        </div>
      </div>

      <StorageCard />
    </>
  );
}