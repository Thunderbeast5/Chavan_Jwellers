import { RevealOnScroll } from '../components/RevealOnScroll'

const blogPosts = [
  {
    id: 1,
    title: "How to Care for Your Silver Jewelry",
    excerpt: "Learn the best practices for maintaining the shine and beauty of your silver jewelry pieces.",
    image: "https://picsum.photos/seed/blog1/400/250",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The History of Traditional Indian Jewelry",
    excerpt: "Discover the rich cultural heritage and significance behind traditional Indian jewelry designs.",
    image: "https://picsum.photos/seed/blog2/400/250",
    date: "2024-01-10",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Choosing the Perfect Jewelry for Different Occasions",
    excerpt: "A comprehensive guide to selecting the right jewelry for weddings, parties, and everyday wear.",
    image: "https://picsum.photos/seed/blog3/400/250",
    date: "2024-01-05",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Understanding Silver Purity and Quality",
    excerpt: "Everything you need to know about silver purity marks and how to identify quality silver jewelry.",
    image: "https://picsum.photos/seed/blog4/400/250",
    date: "2023-12-28",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Jewelry Trends for 2024",
    excerpt: "Stay ahead of the fashion curve with our predictions for the hottest jewelry trends this year.",
    image: "https://picsum.photos/seed/blog5/400/250",
    date: "2023-12-20",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "The Art of Jewelry Gifting",
    excerpt: "Tips and ideas for choosing the perfect jewelry gift for your loved ones on special occasions.",
    image: "https://picsum.photos/seed/blog6/400/250",
    date: "2023-12-15",
    readTime: "5 min read"
  }
]

export function BlogsPage() {
  return (
    <div className="container-px max-w-6xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Blog</h1>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover jewelry tips, trends, and insights from our experts. Stay updated with the latest 
            in jewelry fashion and care.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <RevealOnScroll key={post.id}>
            <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-amber-700 font-medium text-sm hover:text-amber-800 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter for the latest jewelry trends, care tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}
