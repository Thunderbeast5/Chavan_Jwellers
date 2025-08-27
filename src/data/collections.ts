import type { Product } from './types'
import { products } from './products/all'

export const bestsellers: Product[] = products.filter((p) => p.tags.includes('bestseller'))
export const newArrivals: Product[] = products.filter((p) => p.tags.includes('new'))

export const heroSlides: { src: string; alt?: string; ctaHref?: string }[] = [
	{ src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000&auto=format&fit=crop', alt: 'Elegant Earrings', ctaHref: '/category/earrings' },
	{ src: 'https://images.unsplash.com/photo-1520962922220-c0d44e5f0a52?q=80&w=2000&auto=format&fit=crop', alt: 'Silver Rings', ctaHref: '/category/rings' },
	{ src: 'https://images.unsplash.com/photo-1599643478377-6d2b539eb853?q=80&w=2000&auto=format&fit=crop', alt: 'Statement Neckpieces', ctaHref: '/category/neckpieces' },
	{ src: 'https://images.unsplash.com/photo-1603575449291-12f67df06430?q=80&w=2000&auto=format&fit=crop', alt: 'Bracelets & Bangles', ctaHref: '/category/bangles-bracelets' },
]


