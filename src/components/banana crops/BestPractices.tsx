"use client";
import Image from 'next/image'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

const practices = [
  {
    id: 1,
    icon: '🌡️',
    title: 'Climate Requirement',
    image: '/pratices/climate req.png',
    // description: 'Optimal temperature: 25-35°C with high humidity (75-85%). Avoid frost and strong winds.',
  },
  {
    id: 2,
    icon: '🪴',
    title: 'Soil Requirement',
    image: '/pratices/soil req.png',
    // description: 'Well-drained loamy soil with pH 6.5-7.5. Rich in organic matter and good water retention.',
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Land Preparation',
    image: '/pratices/Land preparation.png',
    // description: 'Deep plowing, proper pit preparation (60x60x60cm), and organic manure application essential.',
  },
  {
    id: 4,
    icon: '🧬',
    title: 'Seed Varieties',
    image: '/pratices/seed varities.png',
    // description: 'Select certified disease-free suckers. Popular varieties: Grand Naine, Robusta, Dwarf Cavendish.',
  },
]
export default function BestPractices() {
  return (
    <section className="my-16 w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 border-b-4 border-yellow-400 pb-3 inline-block">
          Best Practices
        </h2>
        <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 hover:-translate-y-1 transition-all shadow-lg">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {practices.map((practice) => (
          <div
            key={practice.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
          >
            <div className="h-44 relative group">
              <Image
                src={withBase(practice.image)}
                alt={practice.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <div className="p-6 border-t border-gray-200">
              <div className="text-3xl mb-3">{practice.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                {practice.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {/* {practice.description} */}
              </p>
              <a href="#" className="text-green-700 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}