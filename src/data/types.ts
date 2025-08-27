export type Product = {
	id: number
	name: string
	price: number
	mrp: number
	images: string[]
	description: string
	category: string
	tags: string[]
}

export type Category = {
	name: string
	slug: string
	image: string
}


