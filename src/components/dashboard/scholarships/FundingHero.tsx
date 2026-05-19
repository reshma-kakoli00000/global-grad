import { TrendingUp } from 'lucide-react';

export default function FundingHero() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#063B88] via-[#0B4EA2] to-[#2A6FD1] shadow-xl">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-blue-100 mb-5">
            Total Potential Funding
          </p>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            $142,500
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            
            <div className="flex items-center gap-2 bg-[#7BF1B5] text-[#064B2D] px-4 py-2 rounded-full font-bold text-sm">
              <TrendingUp size={16} />

              +12% vs last month
            </div>

            <p className="text-blue-100 text-lg">
              Based on 14 matched programs
            </p>
          </div>
        </div>

        {/* Right */}
        <button className="h-16 px-10 rounded-2xl bg-white text-[#0B4EA2] text-lg font-bold shadow-lg hover:scale-[1.02] transition-all duration-300">
          New Application
        </button>
      </div>
    </div>
  );
}