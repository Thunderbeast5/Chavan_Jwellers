import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import type { AdminCategory } from '../../lib/adminTypes'

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

export function CategoriesAdmin() {
	const [items, setItems] = useState<(AdminCategory & { id?: string })[]>([])
	const [loading, setLoading] = useState(true)
	const [form, setForm] = useState<AdminCategory>({ name: '', slug: '', image: '' })
	const [uploading, setUploading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [uploadMethod, setUploadMethod] = useState<'cloudinary' | 'url'>('cloudinary')

	async function load() {
		setLoading(true)
		const snap = await getDocs(collection(db, 'categories'))
		const data = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as (AdminCategory & { id?: string })[]
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
			if (!form.slug.match(/^[a-z0-9-]+$/)) throw new Error('Slug must be lowercase letters, numbers, and dashes')
			await addDoc(collection(db, 'categories'), form as any)
			setForm({ name: '', slug: '', image: '' })
			await load()
		} catch (err: any) {
			setError(err?.message || 'Failed to add category')
		}
	}

	async function onDelete(id?: string) {
		if (!id) return
		await deleteDoc(doc(db, 'categories', id))
		await load()
	}

	return (
		<div className="container-px max-w-7xl mx-auto py-8">
			<h2 className="section-title mb-4">Categories</h2>
			<div className="grid md:grid-cols-2 gap-6">
				<form onSubmit={onAdd} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3">
					<div>
						<label className="block text-sm text-gray-600 mb-1">Name</label>
						<input className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
					</div>
					<div>
						<label className="block text-sm text-gray-600 mb-1">Slug</label>
						<input className="w-full border border-gray-300 rounded-md px-3 py-2" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="earrings" required />
						<p className="text-xs text-gray-500 mt-1">Lowercase, numbers and dashes only.</p>
					</div>
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
					{error && <p className="text-sm text-red-600">{error}</p>}
					<button className="btn-primary" type="submit" disabled={uploading}>Add Category</button>
				</form>

				<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
					{loading ? 'Loading...' : (
						<div className="grid grid-cols-1 gap-3">
							{items.map((c) => (
								<div key={c.id} className="flex items-center gap-3 border-b pb-3">
									{c.image ? <img src={c.image} className="w-14 h-14 object-cover rounded" /> : <div className="w-14 h-14 bg-gray-100 rounded" />}
									<div className="flex-1">
										<div className="font-medium">{c.name}</div>
										<div className="text-sm text-gray-600">{c.slug}</div>
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
