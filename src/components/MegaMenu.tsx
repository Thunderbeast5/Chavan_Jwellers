import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const categories = [
	{ name: 'Anklets & Payal', slug: 'anklets-payal' },
	{ name: 'Bangles & Bracelets', slug: 'bangles-bracelets' },
	{ name: 'Earrings', slug: 'earrings' },
	{ name: 'Neckpieces', slug: 'neckpieces' },
	{ name: 'Rings', slug: 'rings' },
	{ name: 'Pendants & Charms', slug: 'pendants-charms' },
	{ name: 'Personalized Jewelry', slug: 'personalized' },
	{ name: 'Religious & Gift Items', slug: 'religious-gifts' },
]

export function MegaMenu() {
  const [open, setOpen] = useState(false)
  const closeTimeout = useRef<number | null>(null)

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

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="hover:text-amber-700"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Shop By Category
      </button>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] z-50 ${open ? '' : ''}`}
      >
        <div
          className={`bg-white shadow-soft border border-gray-100 rounded-md p-6 grid grid-cols-2 gap-4 transition ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="hover:text-amber-700">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


