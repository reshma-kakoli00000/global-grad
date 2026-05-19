export default function FitScoreCard() {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
      
      <div>
        <p className="uppercase tracking-wide text-sm font-bold text-[#9AA8C7] mb-8">
          Application Fit
        </p>

        <div className="text-7xl font-bold text-[#0B4EA2] mb-4">
          94%
        </div>

        <p className="text-gray-600 leading-8">
          Matches your research background in ethical machine learning.
        </p>
      </div>

      <div className="mt-10">
        
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0B4EA2] to-[#52D6A2]"
            style={{ width: '94%' }}
          />
        </div>

        <div className="flex items-center justify-between text-sm font-bold text-[#0B4EA2] uppercase">
          <span>Match Score</span>
          <span>High Quality</span>
        </div>
      </div>
    </div>
  );
}