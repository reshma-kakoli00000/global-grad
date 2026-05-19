import { CheckCircle2, Circle } from 'lucide-react';
import { notes } from './data';

export default function InternalNotes() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        
        <h2 className="text-4xl font-bold text-[#173D8F]">
          Internal Notes
        </h2>

        <button className="text-[#0B4EA2] font-bold hover:underline">
          Edit Notes
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8">
        
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            {index < 2 ? (
              <CheckCircle2
                size={22}
                className="text-[#0B7A4B] mt-1"
              />
            ) : (
              <Circle
                size={22}
                className="text-gray-400 mt-1"
              />
            )}

            <p className="text-gray-700 leading-8">
              {note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}