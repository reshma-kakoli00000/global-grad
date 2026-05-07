export default function DestinationGuideCard() {
  return (
    <div className="bg-[#EEF2F6] rounded-[36px] p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left */}
        <div className="max-w-xl">
          <h3 className="text-4xl font-bold text-gray-900 mb-5">
            Can’t decide on a city?
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our destination concierge helps you compare cost of living,
            safety, and post-grad work permits across 50+ academic hubs.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&auto=format&fit=crop"
              className="w-24 h-24 rounded-3xl object-cover border-4 border-white"
            />

            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop"
              className="w-24 h-24 rounded-3xl object-cover border-4 border-white"
            />
          </div>

          <button className="bg-[#0B7A4B] hover:opacity-90 transition text-white px-8 py-6 rounded-[28px] text-xl font-bold shadow-lg">
            Launch Destination Guide
          </button>
        </div>
      </div>
    </div>
  );
}