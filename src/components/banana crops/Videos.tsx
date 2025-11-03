'use client'
import { useRef } from 'react'

const videos = [
  {
    id: 1,
    title: 'How to Grow Healthy Organic Bananas',
    duration: '15:30',
    views: '25K',
    time: '2 weeks ago',
    embedUrl: 'https://www.youtube.com/embed/bdv7b6skBzQ?si=WkaDnEq2VzQU-P7x',
  },
  { id: 2, title: 'Pest Management Techniques', duration: '8:45', views: '18K', time: '1 month ago',
    embedUrl: 'https://www.youtube.com/embed/Dn2EaFBuW1M?si=X0FeEKbhyxeQVT0L',
   },
  { id: 3, title: 'Harvesting Best Practices', duration: '12:20', views: '32K', time: '3 weeks ago',
    embedUrl:'https://www.youtube.com/embed/If9U6ME3ycQ?si=djf2kl-UnEckHQZZ'
   },
  { id: 4, title: 'Organic Fertilizer Application', duration: '10:15', views: '15K', time: '1 week ago',
     embedUrl:'https://www.youtube.com/embed/zW4w6B-rMRs?si=j5h_xZI05UCbKtBq'
   },
    { id: 5, title: 'Panama/ Fusarium Wilt Control in Banana', duration: '10:15', views: '15K', time: '1 week ago',
     embedUrl:'https://www.youtube.com/embed/5iyRef_XJXk?si=HHhDIqL_29fbu-SD'
   }, 
]

export default function Videos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 border-b-4 border-yellow-400 pb-3 inline-block">
          Videos
        </h2>
        <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 hover:-translate-y-1 transition-all shadow-lg">
          See All Videos →
        </button>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scroll-smooth">
        {videos.map((video) => (
            <div
              key={video.id}
              className="min-w-[280px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              {('embedUrl' in video) && (video as any).embedUrl ? (
                <div className="relative h-40">
                  <iframe
                    src={(video as any).embedUrl}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="h-40 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center text-2xl text-green-800">
                    ▶
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
              )}
            <div className="p-4">
              <div className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</div>
              <div className="text-xs text-gray-500">
                {video.views} views • {video.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}