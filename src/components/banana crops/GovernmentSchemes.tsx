"use client";
const schemes = [
  {
    id: 1,
    icon: '💰',
    title: 'PM-KISAN Scheme',
    description: 'Direct income support to all land-holding farmers families with ₹6000 per year in three equal installments.',
    benefits: ['₹6000 annual direct transfer', 'No paperwork required', 'Direct bank transfer'],
  },
  {
    id: 2,
    icon: '🌱',
    title: 'National Horticulture Mission',
    description: 'Comprehensive support for horticulture development with subsidies on planting material, irrigation, and infrastructure.',
    benefits: ['50% subsidy on planting material', 'Drip irrigation support', 'Post-harvest infrastructure aid'],
  },
  {
    id: 3,
    icon: '🛡️',
    title: 'Crop Insurance (PMFBY)',
    description: 'Comprehensive crop insurance with premium subsidy covering yield losses due to natural calamities, pests, and diseases.',
    benefits: ['Low premium rates (2% for Kharif)', 'Full yield loss coverage', 'Quick claim settlement'],
  },
]

export default function GovernmentSchemes() {
  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 border-b-4 border-yellow-400 pb-3 inline-block">
          Government Schemes
        </h2>
        <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 hover:-translate-y-1 transition-all shadow-lg">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-yellow-400 hover:shadow-2xl hover:border-green-800 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{scheme.icon}</span>
              <h3 className="text-lg font-semibold text-green-800">{scheme.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{scheme.description}</p>
            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <ul className="space-y-1">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-green-800 flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-green-800 text-white py-2 rounded-lg hover:bg-green-900 transition-all font-medium">
                Apply Now
              </button>
              <button className="flex-1 bg-green-50 text-green-800 py-2 rounded-lg hover:bg-green-100 transition-all font-medium">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}