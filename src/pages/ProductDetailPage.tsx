import { useParams } from 'react-router-dom'
import { products, type Product } from '../store/data.ts'

export function ProductDetailPage() {
  const { id } = useParams()
  const product: Product | undefined = products.find((p: Product) => String(p.id) === id)

  if (!product) return <div className="container-px max-w-7xl mx-auto py-10">Product not found</div>

  function waLink(name: string, price: number) {
    const text = encodeURIComponent(`Hi, I'm interested in buying "${name}" priced at ₹${price}.`)
    return `https://wa.me/919876543210?text=${text}`
  }

  return (
    <div className="container-px max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-4">
        {product.images.map(src => (
          <img key={src} src={src} alt={product.name} className="w-full rounded-md" />
        ))}
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="mt-2 text-lg"><span className="text-gray-400 line-through mr-2">₹{product.mrp}</span><span className="text-gray-900 font-semibold">₹{product.price}</span></div>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <a className="btn-primary mt-6" href={waLink(product.name, product.price)} target="_blank" rel="noreferrer">Buy Now on WhatsApp</a>
      </div>
    </div>
  )
}


