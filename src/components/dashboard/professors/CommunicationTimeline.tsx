import TimelineItem from './TimelineItem';
import { timeline } from './data';

export default function CommunicationTimeline() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        
        <h2 className="text-4xl font-bold text-[#173D8F]">
          Communication Log
        </h2>

        <button className="text-[#0B4EA2] font-bold hover:underline">
          View All
        </button>
      </div>

      <div className="relative pl-10">
        
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}