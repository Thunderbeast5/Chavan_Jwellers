import { useMemo, useEffect, useState } from 'react'
import { Link,  useSearchParams } from 'react-router-dom'
import { fetchProducts, fetchCategories } from '../lib/catalog'
import type { Product } from '../data/types'

function useQueryParams() {
	const [params, setParams] = useSearchParams()
	const q = params.get('q') ?? ''
	const cat = params.get('cat') ?? 'all'
	const set = (next: { q?: string; cat?: string }) => {
		if (next.q !== undefined) params.set('q', next.q)
		if (next.cat !== undefined) params.set('cat', next.cat)
		setParams(params)
	}
	return { q, cat, set }
}

function normalize(text: string) {
	return text.toLowerCase().replace(/\s+/g, ' ').trim()
}

function matchProduct(p: Product, q: string) {
	const n = normalize(q)
	if (!n) return true
	return normalize(p.name).includes(n) || normalize(p.description).includes(n)
}

export function SearchPage() {
	const { q, cat, set } = useQueryParams()
	const [products, setProducts] = useState<Product[]>([])
	const [categories, setCategories] = useState<{ name: string; slug: string }[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadData() {
			try {
				const [prods, cats] = await Promise.all([
					fetchProducts(),
					fetchCategories()
				])
				setProducts(prods)
				setCategories(cats.map(c => ({ name: c.name, slug: c.slug })))
			} catch (error) {
				console.error('Failed to load search data:', error)
			} finally {
				setLoading(false)
			}
		}
		loadData()
	}, [])

	const filtered: Product[] = useMemo(() => {
		let list = products
		if (cat !== 'all') list = list.filter((p) => p.category === cat)
		return list.filter((p) => matchProduct(p, q))
	}, [q, cat, products])

	const related: Product[] = useMemo(() => {
		if (filtered.length > 0) return []
		let list = products
		if (cat !== 'all') list = list.filter((p) => p.category === cat)
		// show popular (bestsellers) in selected category if query misses
		const best = list.filter((p) => p.tags?.includes('bestseller'))
		return best.length > 0 ? best.slice(0, 8) : list.slice(0, 8)
	}, [filtered, cat, products])

	if (loading) {
		return (
			<div className="container-px max-w-7xl mx-auto py-8">
				<h1 className="section-title mb-6">Search</h1>
				<div className="text-center text-gray-600">Loading...</div>
			</div>
		)
	}

	return (
		<div className="container-px max-w-7xl mx-auto py-8">
			<h1 className="section-title mb-6">Search</h1>
			<div className="grid gap-3 md:grid-cols-[1fr,200px] md:items-end mb-6">
				<input
					value={q}
					onChange={(e) => set({ q: e.target.value })}
					placeholder="Search products..."
					className="w-full border border-gray-300 rounded-md px-3 py-2"
				/>
				<select
					value={cat}
					onChange={(e) => set({ cat: e.target.value })}
					className="border border-gray-300 rounded-md px-3 py-2"
				>
					<option value="all">All Categories</option>
					{categories.map((c) => (
						<option key={c.slug} value={c.slug}>{c.name}</option>
					))}
				</select>
			</div>

			{filtered.length > 0 ? (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filtered.map((p) => (
						<Link key={p.id} to={`/product/${p.id}`} className="product-card">
							<div className="aspect-square bg-muted overflow-hidden">
								<img src={p.images?.[0]} alt={p.name} />
							</div>
							<div className="p-3">
								<div className="text-sm text-gray-700">{p.name}</div>
								<div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
							</div>
						</Link>
					))}
				</div>
			) : (
				<div>
					<p className="text-gray-600 mb-4">No exact matches. You may like these:</p>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{related.map((p) => (
							<Link key={p.id} to={`/product/${p.id}`} className="product-card">
								<div className="aspect-square bg-muted overflow-hidden">
									<img src={p.images?.[0]} alt={p.name} />
								</div>
								<div className="p-3">
									<div className="text-sm text-gray-700">{p.name}</div>
									<div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
