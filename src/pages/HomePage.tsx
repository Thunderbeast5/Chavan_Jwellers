import { Link } from 'react-router-dom'
import { categories } from '../store/data'
import { HeroCarousel } from '../components/HeroCarousel'
import { heroSlides, bestsellers as allBestsellers, newArrivals as allNewArrivals } from '../data/collections'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { completedOrders } from '../data/completedOrders' // 1. Import the completed orders data

export function HomePage() {
  const bestsellers = allBestsellers.slice(0, 12)

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <HeroCarousel images={heroSlides} />
      </section>

      {/* Promo */}
      <div className="bg-ink text-white text-sm text-center py-2">Extra 10% off on prepaid orders</div>

      {/* Featured Categories */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <h3 className="section-title mb-6">Shop By Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.slice(0, 10).map(c => (
            <RevealOnScroll key={c.slug}>
              <Link to={`/category/${c.slug}`} className="block">
                <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover transition" />
                </div>
                <div className="mt-3 text-center">{c.name}</div>
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
            <RevealOnScroll key={p.id}>
              <Link to={`/product/${p.id}`} className="block">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition" />
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
          {allNewArrivals.slice(0, 12).map(p => (
            <RevealOnScroll key={p.id}>
              <Link to={`/product/${p.id}`} className="block">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition" />
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

      {/* 2. Add the new Customer Reviews section */}
      <section className="container-px max-w-7xl mx-auto py-8">
        <h3 className="section-title mb-6">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedOrders.map(order => (
            <RevealOnScroll key={order.id}>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col h-full">
                <div className="text-amber-500 mb-2" aria-label={`Rating: ${order.rating} out of 5 stars`}>
                  {'★'.repeat(order.rating)}
                  {'☆'.repeat(5 - order.rating)}
                </div>
                <blockquote className="text-gray-700 italic flex-grow">
                  "{order.review}"
                </blockquote>
                <footer className="mt-4">
                  <p className="font-semibold text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-500">on {order.product}</p>
                </footer>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* For Her / For Him */}
      
    </div>
  )
}