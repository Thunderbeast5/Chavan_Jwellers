import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import type { Product } from '../store/data'
import { products as localProducts, categories as localCategories } from '../store/data'

export async function fetchProducts(): Promise<Product[]> {
	try {
		const snap = await getDocs(collection(db, 'products'))
		if (snap.empty) return localProducts
		return snap.docs.map((d) => ({ id: d.id as unknown as any, ...(d.data() as any) })) as Product[]
	} catch {
		return localProducts
	}
}

export async function fetchCategories(): Promise<readonly { name: string; slug: string; image: string }[]> {
	try {
		const snap = await getDocs(collection(db, 'categories'))
		if (snap.empty) return localCategories
		return snap.docs.map((d) => (d.data() as any)) as any
	} catch {
		return localCategories
	}
}

export type Slide = { image: string; alt?: string; link?: string }
export async function fetchSlides(): Promise<Slide[]> {
	try {
		const snap = await getDocs(collection(db, 'slides'))
		if (snap.empty) return []
		return snap.docs.map((d) => (d.data() as any)) as Slide[]
	} catch {
		return []
	}
}

export type Completed = { image: string; customer: string; product: string; rating: number; review: string; date?: string }
export async function fetchCompleted(): Promise<Completed[]> {
	try {
		const snap = await getDocs(collection(db, 'completedOrders'))
		if (snap.empty) return []
		return snap.docs.map((d) => (d.data() as any)) as Completed[]
	} catch {
		return []
	}
}
