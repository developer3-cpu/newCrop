"use client";
const blogs = [
  { id: 1, title: '10 Common Mistakes in Banana Farming', category: 'Tips & Tricks', author: 'Expert Team', readTime: '5 min', icon: '📝' },
  { id: 2, title: 'Maximizing Yield Through Proper Spacing', category: 'Cultivation', author: 'Dr. Sharma', readTime: '7 min', icon: '📊' },
  { id: 3, title: 'Banana Price Analysis 2025', category: 'Market Intelligence', author: 'Market Team', readTime: '6 min', icon: '💹' },
]

export default function Blog() {
  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-green-800 border-b-4 border-yellow-400 pb-3 inline-block">
          Farming Blog & Resources
        </h2>
        <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 hover:-translate-y-1 transition-all shadow-lg">
          View All Articles →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            <div className="h-44 bg-gradient-to-br from-green-600 via-yellow-400 to-yellow-500 flex items-center justify-center text-6xl">
              {blog.icon}
            </div>
            <div className="p-5">
              <span className="inline-block bg-green-50 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                {blog.category}
              </span>
              <h3 className="text-lg font-semibold mb-3 leading-tight">{blog.title}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.readTime} read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
