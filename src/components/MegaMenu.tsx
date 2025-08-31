import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { fetchCategories } from '../lib/catalog'

export function MegaMenu() {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<{ name: string; slug: string; image?: string }[]>([])
  const [loading, setLoading] = useState(true)
  const closeTimeout = useRef<number | null>(null)

  useEffect(() => {
    async function loadCategories() {
      try {
        const cats = await fetchCategories()
        setCategories([...cats])
      } catch (error) {
        console.error('Failed to load categories:', error)
        // Fallback to static categories if Firestore fails
        setCategories([
          { name: 'Anklets & Payal', slug: 'anklets-payal' },
          { name: 'Bangles & Bracelets', slug: 'bangles-bracelets' },
          { name: 'Earrings', slug: 'earrings' },
          { name: 'Neckpieces', slug: 'neckpieces' },
          { name: 'Rings', slug: 'rings' },
          { name: 'Pendants & Charms', slug: 'pendants-charms' },
          { name: 'Personalized Jewelry', slug: 'personalized' },
          { name: 'Religious & Gift Items', slug: 'religious-gifts' },
          { name: 'Kada', slug: 'kada' },
          { name: 'Aesthetic Jewellery', slug: 'aesthetic-jewellery' }
        ])
      } finally {
        setLoading(false)
      }
    }
    
    loadCategories()
  }, [])

  const handleEnter = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setOpen(true)
  }

  const handleLeave = () => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current)
    closeTimeout.current = window.setTimeout(() => setOpen(false), 200)
  }

  if (loading) {
    return (
      <div className="relative">
        <button className="hover:text-amber-200 text-white" disabled>
          Shop By Category
        </button>
      </div>
    )
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="hover:text-amber-200 transition-colors px-2 py-1 rounded text-white"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Shop By Category
      </button>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[720px] z-50 ${open ? '' : ''}`}
      >
        <div
          className={`bg-white shadow-soft border border-gray-100 rounded-md p-6 grid grid-cols-2 gap-4 transition-all duration-200 ${
            open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
          }`}
        >
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="hover:text-[#4b0e55] transition-colors py-2 px-3 rounded hover:bg-gray-50">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


