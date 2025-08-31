import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchCategories } from '../lib/catalog'

export function MegaMenu() {
  const [open, setOpen] = useState(false)
  const [categories, setCategories] = useState<{ name: string; slug: string; image?: string }[]>([])
  const [loading, setLoading] = useState(true)

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

  const toggleMenu = () => {
    setOpen(!open)
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
    <div className="relative">
      <button
        className={`transition-colors px-3 py-2 text-white hover:text-amber-200 ${
          open ? 'text-amber-200' : ''
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        Shop By Category
      </button>
            {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-80 z-50">
          <div className="bg-gradient-to-br from-[#4b0e55] to-[#6b1f75] rounded-lg shadow-xl border border-amber-200 p-4">
            <div className="space-y-1">
              {categories.map((c) => (
                <Link 
                  key={c.slug} 
                  to={`/category/${c.slug}`}
                  className="block py-2 px-4 rounded-md transition-all duration-200 text-amber-100 hover:bg-amber-200 hover:text-[#4b0e55] hover:shadow-md"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{c.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


