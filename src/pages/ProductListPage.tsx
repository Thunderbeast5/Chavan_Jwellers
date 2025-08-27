import { Link, useParams, useSearchParams } from 'react-router-dom'
import { products, type Product } from '../store/data.ts'

export function ProductListPage(props: { bestseller?: boolean; newest?: boolean }) {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = (searchParams.get('sort') || 'relevance') as 'relevance' | 'price-asc' | 'price-desc'

  let list: Product[] = products
  if (params.slug) list = list.filter((p) => p.category === params.slug)
  if (props.bestseller) list = list.filter((p) => p.tags.includes('bestseller'))
  if (props.newest) list = list.slice().reverse()

  if (sort === 'price-asc') list = list.slice().sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') list = list.slice().sort((a, b) => b.price - a.price)

  return (
    <div className="container-px max-w-7xl mx-auto py-10">
      <div className="mb-4 flex items-center justify-end">
        <label className="mr-2 text-sm text-gray-600">Sort by</label>
        <select
          value={sort}
          onChange={(e) => setSearchParams((prev) => { prev.set('sort', e.target.value); return prev })}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="relevance">Relevance</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="block">
            <div className="aspect-square bg-muted rounded-md overflow-hidden">
              <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition" />
            </div>
            <div className="mt-3">
              <div className="text-sm text-gray-700">{p.name}</div>
              <div className="mt-1 text-sm"><span className="text-gray-400 line-through mr-2">₹{p.mrp}</span><span className="text-gray-900 font-medium">₹{p.price}</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


