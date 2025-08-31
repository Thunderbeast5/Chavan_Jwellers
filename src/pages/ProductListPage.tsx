import { Link, useParams, useSearchParams } from 'react-router-dom'
import type { Product } from '../store/data.ts'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/catalog'

export function ProductListPage(props: { bestseller?: boolean; newest?: boolean }) {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = (searchParams.get('sort') || 'relevance') as 'relevance' | 'price-asc' | 'price-desc' | 'latest'
  const [all, setAll] = useState<Product[]>([])

  useEffect(() => { fetchProducts().then(setAll) }, [])

  let list: Product[] = all
  if (params.slug) list = list.filter((p) => p.category === params.slug)
  if (props.bestseller) list = list.filter((p) => p.tags?.includes('bestseller'))
  if (props.newest) list = list.slice().reverse()

  if (sort === 'price-asc') list = list.slice().sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') list = list.slice().sort((a, b) => b.price - a.price)
  if (sort === 'latest') list = list.slice().reverse()

  return (
    <div className="container-px max-w-7xl mx-auto py-10">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
        <label className="text-sm text-gray-600 sm:mr-2">Sort by</label>
        <select
          value={sort}
          onChange={(e) => setSearchParams((prev) => { prev.set('sort', e.target.value); return prev })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto"
        >
          <option value="relevance">Relevance</option>
          <option value="latest">Latest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {list.map((p) => (
          <Link key={p.name + String(p.price)} to={`/product/${p.id ?? ''}`} className="block">
            <div className="bg-white rounded-lg border-2 border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="aspect-square bg-muted overflow-hidden">
                <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="text-sm text-gray-700">{p.name}</div>
                <div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


