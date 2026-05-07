import {
  Euro,
  MapPin,
  Timer,
} from 'lucide-react';

interface Props {
  title: string;
  university: string;
  tuition: string;
  location: string;
  admission: string;
  image: string;
}

export default function FeaturedProgramCard({
  title,
  university,
  tuition,
  location,
  admission,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-[36px] p-8 border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-center">
        
        {/* Left */}
        <div>
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold">
              HIGH ROI
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-[#0B7A4B] text-xs font-semibold">
              FAST TRACK
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
            {university}
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F7FA] flex items-center justify-center">
                <Euro size={20} className="text-[#0B7A4B]" />
              </div>

              <div>
                <p className="text-xs uppercase text-gray-400 font-semibold">
                  Tuition
                </p>

                <p className="font-bold text-lg">
                  {tuition}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F7FA] flex items-center justify-center">
                <MapPin size={20} className="text-[#0B7A4B]" />
              </div>

              <div>
                <p className="text-xs uppercase text-gray-400 font-semibold">
                  Location
                </p>

                <p className="font-bold text-lg">
                  {location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F7FA] flex items-center justify-center">
                <Timer size={20} className="text-[#0B7A4B]" />
              </div>

              <div>
                <p className="text-xs uppercase text-gray-400 font-semibold">
                  Avg. Admission
                </p>

                <p className="font-bold text-lg">
                  {admission}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[420px] object-cover rounded-[32px]"
          />

          <div className="absolute inset-x-6 bottom-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                Destination Focus
              </p>

              <h4 className="text-2xl font-bold mb-4">
                Living in Munich
              </h4>

              <button className="w-full h-12 rounded-xl bg-[#111827] text-white font-semibold">
                Explore Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}