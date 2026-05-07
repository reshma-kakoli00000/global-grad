import { TrendingUp } from 'lucide-react';

export default function MarketUpdateCard() {
  return (
    <div className="bg-[#0B7A4B] rounded-[28px] p-6 text-white">
      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-6">
        <TrendingUp size={20} />
      </div>

      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-white/70 mb-5">
        Market Update
      </p>

      <h3 className="text-2xl font-bold mb-4">
        USA Tech Hubs
      </h3>

      <p className="text-white/80 leading-relaxed mb-6">
        Demand for AI graduates has increased by 24% in the California region.
      </p>

      <button className="w-full h-12 rounded-xl bg-white/15 hover:bg-white/20 transition font-semibold">
        View Destination Guide
      </button>
    </div>
  );
}