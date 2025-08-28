export type AdminProduct = {
	id?: string
	name: string
	description: string
	price: number
	mrp: number
	category: string
	tags: string[]
	images: string[]
	createdAt?: number
}

export type AdminCategory = {
	slug: string
	name: string
	image: string
}
