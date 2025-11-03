"use client";
import Image from 'next/image'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

const pests = [
  { id: 1, name: 'Sigatoka Leaf Spot', severity: 'medium', image: '/disease/Sigatoka Leaf Spot.png' },
  { id: 2, name: 'Bunchy Top Virus', severity: 'high', image: '/disease/Bunchy Top Virus.png' },
  // { id: 3, name: 'Panama Disease', severity: 'high' },
  { id: 3, name: 'Panama Disease', severity: 'high', image: '/disease/Panama Disease.png' },
  { id: 4, name: 'Banana Weevil', severity: 'medium', image: '/disease/Banana Weevil.png' },
  { id: 5, name: 'Aphids', severity: 'low',  image: '/disease/Aphids.png'},
  // { id: 6, name: 'Leaf Blight', severity: 'medium', icon: '🍂' },
]

const severityColors = {
  high: 'bg-red-500',
  medium: 'bg-yellow-400 text-black',
  low: 'bg-green-500',
}

export default function PestDiseases() {
  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 border-b-4 border-yellow-400 pb-3 inline-block">
          Pest & Diseases
        </h2>
        <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 hover:-translate-y-1 transition-all shadow-lg">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pests.map((pest) => (
          <div
            key={pest.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer relative"
          >
            <div className="h-36 relative overflow-hidden">
              {pest.image ? (
                <Image
                  src={withBase(pest.image)}
                  alt={pest.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className={pest.id === 2 || pest.id === 3  ||pest.id==4 ||pest.id==5 ? "object-cover" : "object-contain p-2"}
                  priority={pest.id === 1}
                />
              )  : (
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100" />
              )}
            </div>
            {/* <span
              className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold uppercase text-white ${
                severityColors[pest.severity as keyof typeof severityColors]
              }`}
            >
              {pest.severity}
            </span> */}
            <div className="p-3 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <div className="text-xs font-semibold text-white">{pest.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}