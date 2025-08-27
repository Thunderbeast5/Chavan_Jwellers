import { create } from 'zustand'
import type { Product } from './data'

type CartItem = { product: Product; quantity: number }

type CartState = {
  items: CartItem[]
  add: (product: Product) => void
  remove: (id: number) => void
  clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (product) => set((state) => {
    const existing = state.items.find(i => i.product.id === product.id)
    if (existing) {
      return { items: state.items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) }
    }
    return { items: [...state.items, { product, quantity: 1 }] }
  }),
  remove: (id) => set((state) => ({ items: state.items.filter(i => i.product.id !== id) })),
  clear: () => set({ items: [] }),
}))


