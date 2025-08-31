import { Link } from 'react-router-dom'
import { HeroCarousel } from '../components/HeroCarousel'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { useEffect, useState } from 'react'
import { fetchCategories, fetchProducts, fetchSlides, fetchCompleted } from '../lib/catalog'

export function HomePage() {
  const [cats, setCats] = useState<{ name: string; slug: string; image: string }[]>([])
  const [bestsellers, setBestsellers] = useState<any[]>([])
  const [newArrivals, setNewArrivals] = useState<any[]>([])
  const [slides, setSlides] = useState<any[]>([])
  const [completed, setCompleted] = useState<any[]>([])

  useEffect(() => {
    fetchCategories().then((v) => setCats(v as any))
    fetchProducts().then((prods) => {
      setBestsellers(prods.filter(p => p.tags?.includes('bestseller')).slice(0, 12))
      setNewArrivals(prods.filter(p => p.tags?.includes('new')).slice(0, 12))
    })
    fetchSlides().then(setSlides)
    fetchCompleted().then(setCompleted)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <HeroCarousel images={slides.map(s => ({ src: s.image, alt: s.alt, ctaHref: s.link }))} />
      </section>

      {/* Promo */}
      <div className="bg-ink text-white text-sm text-center py-2">Extra 10% off on prepaid orders</div>

      {/* Featured Categories */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <h3 className="section-title mb-6">Shop By Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cats.slice(0, 6).map(c => (
            <RevealOnScroll key={c.slug}>
              <Link to={`/category/${c.slug}`} className="block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="btn-primary w-full">Explore Category</button>
                  </div>
                  <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover transition" />
                  </div>
                  <div className="mt-3 text-center">{c.name}</div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container-px max-w-7xl mx-auto py-4">
        <h3 className="section-title mb-6">Our Bestsellers</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestsellers.map(p => (
            <RevealOnScroll key={p.name + String(p.price)}>
              <Link to={`/product/${p.id ?? ''}`} className="block">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-cover transition" />
                </div>
                <div className="mt-3">
                  <div className="text-sm text-gray-700">{p.name}</div>
                  <div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-px max-w-7xl mx-auto py-8">
        <h3 className="section-title mb-6">New Arrivals</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map(p => (
            <RevealOnScroll key={p.name + String(p.price)}>
              <Link to={`/product/${p.id ?? ''}`} className="block">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-cover transition" />
                </div>
                <div className="mt-3">
                  <div className="text-sm text-gray-700">{p.name}</div>
                  <div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Our Completed Orders */}
      <section className="container-px max-w-7xl mx-auto py-8">
        <h3 className="section-title mb-6">Our Completed Orders</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completed.slice(0, 6).map(order => (
            <RevealOnScroll key={order.customer + order.product}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <img src={order.image} alt={order.product} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-600 mb-2">{order.product}</div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(order.rating || 5)].map((_, i) => (
                        <span key={i} className="text-amber-500">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic">"{order.review}"</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">Join thousands of satisfied customers who trust Chavan Jewellers for their jewelry needs</p>
        </div>
      </section>

      {/* For Her / For Him */}
    </div>
  )
}