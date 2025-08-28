import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'

type CompletedOrder = {
	image: string
	customer: string
	product: string
	rating: number
	review: string
	date?: string
	id?: string
}

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

export function CompletedOrdersAdmin() {
	const [items, setItems] = useState<CompletedOrder[]>([])
	const [loading, setLoading] = useState(true)
	const [form, setForm] = useState<CompletedOrder>({ image: '', customer: '', product: '', rating: 5, review: '', date: '' })
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [uploadMethod, setUploadMethod] = useState<'cloudinary' | 'url'>('cloudinary')

	async function load() {
		setLoading(true)
		const snap = await getDocs(collection(db, 'completedOrders'))
		const data = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as CompletedOrder[]
		setItems(data)
		setLoading(false)
	}

	useEffect(() => { load() }, [])

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
		const file = e.target.files?.[0]
		if (!file) return

		setUploading(true)
		setError(null)

		try {
			const url = await uploadToCloudinary(file)
			setForm(prev => ({ ...prev, image: url }))
		} catch (err: any) {
			setError(err?.message || 'Failed to upload image')
		} finally {
			setUploading(false)
		}
	}

	async function onAdd(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		try {
			await addDoc(collection(db, 'completedOrders'), form as any)
			setForm({ image: '', customer: '', product: '', rating: 5, review: '', date: '' })
			await load()
		} catch (err: any) {
			setError(err?.message || 'Failed to add completed order')
		}
	}

	async function onDelete(id?: string) {
		if (!id) return
		await deleteDoc(doc(db, 'completedOrders', id))
		await load()
	}

	return (
		<div className="container-px max-w-7xl mx-auto py-8">
			<h2 className="section-title mb-4">Completed Orders</h2>
			<div className="grid md:grid-cols-2 gap-6">
				<form onSubmit={onAdd} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3">
					<div>
						<label className="block text-sm text-gray-600 mb-1">Image</label>
						<div className="space-y-3">
							<div className="flex gap-2">
								<button
									type="button"
									onClick={() => setUploadMethod('cloudinary')}
									className={`px-3 py-1 text-sm rounded ${uploadMethod === 'cloudinary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
								>
									Upload File
								</button>
								<button
									type="button"
									onClick={() => setUploadMethod('url')}
									className={`px-3 py-1 text-sm rounded ${uploadMethod === 'url' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
								>
									Paste URL
								</button>
							</div>
							
							{uploadMethod === 'cloudinary' ? (
								<div>
									<input 
										type="file" 
										accept="image/*"
										className="w-full border border-gray-300 rounded-md px-3 py-2" 
										onChange={handleImageUpload}
										disabled={uploading}
									/>
									{uploading && <p className="text-sm text-blue-600 mt-1">Uploading image...</p>}
								</div>
							) : (
								<input 
									className="w-full border border-gray-300 rounded-md px-3 py-2" 
									value={form.image} 
									onChange={(e) => setForm({ ...form, image: e.target.value })} 
									placeholder="https://..."
									required
								/>
							)}
						</div>
						
						{form.image && (
							<div className="mt-3">
								<label className="block text-sm text-gray-600 mb-2">Image Preview:</label>
								<img src={form.image} className="w-32 h-32 object-cover rounded" />
							</div>
						)}
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div>
							<label className="block text-sm text-gray-600 mb-1">Customer</label>
							<input className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} required />
						</div>
						<div>
							<label className="block text-sm text-gray-600 mb-1">Product</label>
							<input className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} required />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div>
							<label className="block text-sm text-gray-600 mb-1">Rating (1-5)</label>
							<input type="number" min={1} max={5} className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} />
						</div>
						<div>
							<label className="block text-sm text-gray-600 mb-1">Date (optional)</label>
							<input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.date || ''} onChange={(e) => setForm({ ...form, date: e.target.value })} />
						</div>
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Review</label>
						<textarea className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} required />
					</div>
					{error && <p className="text-sm text-red-600">{error}</p>}
					<button className="btn-primary" type="submit" disabled={uploading}>Add Completed Order</button>
				</form>

				<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
					{loading ? 'Loading...' : (
						<div className="grid grid-cols-1 gap-3">
							{items.map((c) => (
								<div key={c.id} className="flex items-center gap-3 border-b pb-3">
									{c.image ? <img src={c.image} className="w-14 h-14 object-cover rounded" /> : <div className="w-14 h-14 bg-gray-100 rounded" />}
									<div className="flex-1">
										<div className="font-medium">{c.customer}</div>
										<div className="text-sm text-gray-600">{c.product} • {c.rating}★</div>
									</div>
									<button className="text-sm text-red-600" onClick={() => onDelete(c.id)}>Delete</button>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
