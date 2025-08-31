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
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {cats.slice(0, 6).map(c => (
            <RevealOnScroll key={c.slug}>
              <Link to={`/category/${c.slug}`} className="block flex-shrink-0 w-64 h-80">
                <div className="relative group w-full h-full">
                  {/* Flip container - only for the image area */}
                  <div className="relative w-full h-64 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of image */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="w-full h-full bg-muted rounded-lg overflow-hidden">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    {/* Back of image */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-lg border-2 border-amber-200 flex items-center justify-center">
                      <div className="text-center text-[#4b0e55]">
                        <div className="text-xl font-semibold mb-2">Explore Category</div>
                        <div className="text-sm opacity-90">{c.name}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category name - stays fixed below */}
                  <div className="mt-3 text-center text-base font-medium">{c.name}</div>
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
              <div className="bg-white rounded-xl border-2 border-amber-400 shadow-sm p-6 hover:shadow-md transition-all duration-300">
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

      {/* About Us */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <div className="max-w-4xl mx-auto bg-white border-2 border-amber-400 rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-3xl font-gotu mb-6 text-[#4b0e55]">About Us</h3>
            <div>
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                Chavan Jewellers has been crafting exquisite jewelry pieces for generations, 
                bringing you the finest collection of traditional and contemporary designs. 
                Our commitment to quality, craftsmanship, and customer satisfaction has made us 
                a trusted name in the jewelry industry.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-gray-700">
                From stunning necklaces and elegant earrings to beautiful rings and traditional 
                pieces, we offer a wide range of jewelry that celebrates every occasion. 
                Each piece is carefully crafted with attention to detail, ensuring you receive 
                jewelry that's not just beautiful, but also meaningful.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* For Her / For Him */}
    </div>
  )
}