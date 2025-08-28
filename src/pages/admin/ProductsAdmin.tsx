import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import type { AdminProduct } from '../../lib/adminTypes'

const CLOUDINARY_CLOUD_NAME = 'dh4xushgf'
const CLOUDINARY_UPLOAD_PRESET = 'Chavan Jewellers'

export function ProductsAdmin() {
	const [items, setItems] = useState<AdminProduct[]>([])
	const [loading, setLoading] = useState(true)
	const [form, setForm] = useState<AdminProduct>({ name: '', description: '', price: 0, mrp: 0, category: '', tags: [], images: [] })
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [categories, setCategories] = useState<{ name: string; slug: string }[]>([])
	const [imageUrlsInput, setImageUrlsInput] = useState('')
	const [uploadMethod, setUploadMethod] = useState<'cloudinary' | 'url'>('cloudinary')
	const tagOptions = ['bestseller', 'new']

	async function load() {
		setLoading(true)
		const snap = await getDocs(collection(db, 'products'))
		const data = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as AdminProduct[]
		setItems(data)
		setLoading(false)
	}

	async function loadCategories() {
		const snap = await getDocs(collection(db, 'categories'))
		const data = snap.docs.map(d => (d.data() as any)) as { name: string; slug: string }[]
		setCategories(data)
		if (!form.category && data[0]?.slug) setForm((f) => ({ ...f, category: data[0].slug }))
	}

	useEffect(() => { load(); loadCategories() }, [])

	async function uploadToCloudinary(file: File): Promise<string> {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

		const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
			method: 'POST',
			body: formData
		})

		if (!response.ok) {
			throw new Error('Failed to upload image')
		}

		const data = await response.json()
		return data.secure_url
	}

	async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files
		if (!files || files.length === 0) return

		setUploading(true)
		setError(null)

		try {
			const uploadPromises = Array.from(files).map(uploadToCloudinary)
			const urls = await Promise.all(uploadPromises)
			setForm(prev => ({ ...prev, images: [...prev.images, ...urls] }))
		} catch (err: any) {
			setError(err?.message || 'Failed to upload images')
		} finally {
			setUploading(false)
		}
	}

	function addImageUrls() {
		const urls = imageUrlsInput.split(',').map(s => s.trim()).filter(Boolean)
		if (urls.length > 0) {
			setForm(prev => ({ ...prev, images: [...prev.images, ...urls] }))
			setImageUrlsInput('')
		}
	}

	async function onAdd(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		try {
			const payload = { ...form, createdAt: Date.now() }
			await addDoc(collection(db, 'products'), payload as any)
			setForm({ name: '', description: '', price: 0, mrp: 0, category: categories[0]?.slug || '', tags: [], images: [] })
			setImageUrlsInput('')
			await load()
		} catch (err: any) {
			setError(err?.message || 'Failed to add product')
		}
	}

	async function onDelete(id?: string) {
		if (!id) return
		await deleteDoc(doc(db, 'products', id))
		await load()
	}

	function removeImage(index: number) {
		setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))
	}

	return (
		<div className="container-px max-w-7xl mx-auto py-8">
			<h2 className="section-title mb-4">Products</h2>
			<p className="text-sm text-gray-600 mb-6">Add, edit, or delete products. Upload images or paste URLs.</p>
			<div className="grid md:grid-cols-2 gap-6">
				<form onSubmit={onAdd} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3">
					<div>
						<label className="block text-sm text-gray-600 mb-1">Name</label>
						<input className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Description</label>
						<textarea className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div>
							<label className="block text-sm text-gray-600 mb-1">Price</label>
							<input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} required />
						</div>
						<div>
							<label className="block text-sm text-gray-600 mb-1">MRP</label>
							<input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.mrp} onChange={(e) => setForm({ ...form, mrp: Number(e.target.value) })} required />
						</div>
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Category</label>
						<select className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
							{categories.map((c) => (
								<option key={c.slug} value={c.slug}>{c.name}</option>
							))}
						</select>
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Tags</label>
						<div className="flex items-center gap-4">
							{tagOptions.map((t) => {
								const checked = form.tags.includes(t)
								return (
									<label key={t} className="inline-flex items-center gap-2 text-sm">
										<input
											type="checkbox"
											checked={checked}
											onChange={(e) => {
												const next = new Set(form.tags)
												if (e.target.checked) next.add(t); else next.delete(t)
												setForm({ ...form, tags: Array.from(next) })
											}}
										/>
										<span>{t}</span>
									</label>
								)
							})}
						</div>
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Images</label>
						<div className="space-y-3">
							<div className="flex gap-2">
								<button
									type="button"
									onClick={() => setUploadMethod('cloudinary')}
									className={`px-3 py-1 text-sm rounded ${uploadMethod === 'cloudinary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
								>
									Upload Files
								</button>
								<button
									type="button"
									onClick={() => setUploadMethod('url')}
									className={`px-3 py-1 text-sm rounded ${uploadMethod === 'url' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
								>
									Paste URLs
								</button>
							</div>
							
							{uploadMethod === 'cloudinary' ? (
								<div>
									<input 
										type="file" 
										multiple 
										accept="image/*"
										className="w-full border border-gray-300 rounded-md px-3 py-2" 
										onChange={handleImageUpload}
										disabled={uploading}
									/>
									{uploading && <p className="text-sm text-blue-600 mt-1">Uploading images...</p>}
								</div>
							) : (
								<div className="space-y-2">
									<textarea 
										className="w-full border border-gray-300 rounded-md px-3 py-2" 
										value={imageUrlsInput} 
										onChange={(e) => setImageUrlsInput(e.target.value)} 
										placeholder="https://.../1.jpg, https://.../2.jpg"
									/>
									<button 
										type="button" 
										onClick={addImageUrls}
										className="px-3 py-1 bg-green-500 text-white text-sm rounded"
									>
										Add URLs
									</button>
								</div>
							)}
						</div>
						
						{form.images.length > 0 && (
							<div className="mt-3">
								<label className="block text-sm text-gray-600 mb-2">Images ({form.images.length}):</label>
								<div className="grid grid-cols-3 gap-2">
									{form.images.map((url, index) => (
										<div key={index} className="relative">
											<img src={url} className="w-full h-20 object-cover rounded" />
											<button
												type="button"
												onClick={() => removeImage(index)}
												className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
											>
												×
											</button>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
					{error && <p className="text-sm text-red-600">{error}</p>}
					<button className="btn-primary" type="submit" disabled={uploading}>Add Product</button>
				</form>

				<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
					{loading ? 'Loading...' : (
						<div className="grid grid-cols-1 gap-3">
							{items.map((p) => (
								<div key={p.id} className="flex items-center gap-3 border-b pb-3">
									{p.images?.[0] ? <img src={p.images[0]} className="w-14 h-14 object-cover rounded" /> : <div className="w-14 h-14 bg-gray-100 rounded" />}
									<div className="flex-1">
										<div className="font-medium">{p.name}</div>
										<div className="text-sm text-gray-600">₹{p.price} • {p.category} {p.tags?.[0] ? `• ${p.tags[0]}` : ''}</div>
									</div>
									<button className="text-sm text-red-600" onClick={() => onDelete(p.id)}>Delete</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
