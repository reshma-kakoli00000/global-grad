import { History } from 'lucide-react';

import ActivityItem from './ActivityItem';
import { activities } from './data';

export default function RecentActivity() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        
        <History size={24} className="text-[#0B4EA2]" />

        <h2 className="text-3xl font-bold text-gray-900">
          Recent Activity
        </h2>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
        
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            {...activity}
            isLast={index === activities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}