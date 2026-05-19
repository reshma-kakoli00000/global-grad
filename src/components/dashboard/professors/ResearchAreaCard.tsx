import { Microscope } from 'lucide-react';

export default function ResearchAreaCard() {
  const tags = [
    'Neural Networks',
    'AI Ethics',
    'Cognitive Science',
    'HCI',
  ];

  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
      
      <div className="flex items-center gap-4 mb-8">
        
        <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] flex items-center justify-center">
          <Microscope size={26} className="text-[#0B4EA2]" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          Research Area & Interests
        </h2>
      </div>

      <p className="text-gray-600 leading-10 text-lg mb-8">
        Investigating the intersection of neural plasticity and synthetic intelligence.
        Current focus includes building ethical frameworks for brain-computer interfaces
        and large-scale neural simulations.
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="px-5 py-3 rounded-2xl bg-[#F3F6FB] text-[#0B4EA2] font-semibold"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}