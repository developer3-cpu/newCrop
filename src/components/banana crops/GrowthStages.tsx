'use client'
import { useState } from 'react'
import Image from 'next/image'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBase = (p: string) => `${BASE}${p}`;

// Stage data aligned with provided reference and images from public/growthstages
const stages = [
  { id: 1, name: 'Juvenile Phase', duration: '1-63 days', image: '/growthstages/one.png' },
  { id: 2, name: 'Critical Growth', duration: '64-118 days', image: '/growthstages/two.png' },
  { id: 3, name: 'Flower Bud Differentiation', duration: '119-173 days', image: '/growthstages/three.png' },
  { id: 4, name: 'Bunch Development', duration: '229-283 days', image: '/growthstages/four.png' },
  { id: 5, name: 'Harvesting', duration: '224-338 days', image: '/growthstages/five.png' },
]

// Connector segment colors between cards: [1→2, 2→3, 3→4, 4→5]
const connectorColors = ['bg-yellow-400', 'bg-green-700', 'bg-green-700', 'bg-yellow-400']

export default function GrowthStages() {
  const [activeStage, setActiveStage] = useState<number | null>(null)

  return (
    <section className="my-16">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-green-800 relative inline-block">
            Crop Growth Stages
            <span className="absolute -bottom-2 left-0 h-1 w-20 bg-yellow-400 rounded-full" />
          </h2>
        </div>

        <div className="relative">
          <div className="flex items-center gap-8 overflow-x-auto pb-6 px-0">
          {stages.map((stage) => (
            <div key={stage.id} className="relative">
              <div
                onClick={() => setActiveStage(stage.id)}
                className={`min-w-[230px] h-[300px] mt-2 ml-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 flex flex-col
                   ${ activeStage === stage.id ? ' ring-3 ring-yellow-400' : ''
                }`}
              >
                <div className="h-[140px] flex items-center justify-center mb-4">
                  <Image
                    src={withBase(stage.image)}
                    alt={stage.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="font-semibold text-green-800 mb-2 leading-tight">{stage.name}</div>
                  <div className="text-xs text-gray-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                    {stage.duration}
                  </div>
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black mt-auto mx-auto">
                    {stage.id}
                  </div>
                </div>
              </div>

              {stage.id < stages.length && (
                <span
                  className={`absolute top-1/2 -translate-y-1/2 right-[-45px] w-11 h-[6px] rounded-full ${
                    connectorColors[stage.id - 1]
                  }`}
                />
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}