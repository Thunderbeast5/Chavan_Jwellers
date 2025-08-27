export type CompletedOrder = {
  id: number
  customer: string
  product: string
  image: string
  review: string
  rating: number
  date?: string
}

export const completedOrders: CompletedOrder[] = [
  {
    id: 1,
    customer: "Priya S.",
    product: "Silver Anklet Set",
    image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3b?q=80&w=800&auto=format&fit=crop",
    review: "Beautiful craftsmanship! Delivered on time and exactly as shown.",
    rating: 5,
    date: "2024-12-15"
  },
  {
    id: 2,
    customer: "Rajesh K.",
    product: "Traditional Payal",
    image: "https://images.unsplash.com/photo-1603575449291-12f67df06430?q=80&w=800&auto=format&fit=crop",
    review: "Perfect for my daughter's wedding. Excellent quality silver.",
    rating: 5,
    date: "2024-12-12"
  },
  {
    id: 3,
    customer: "Meera P.",
    product: "Silver Ring Collection",
    image: "https://images.unsplash.com/photo-1520962922220-c0d44e5f0a52?q=80&w=800&auto=format&fit=crop",
    review: "Love the designs! Great value for money and fast delivery.",
    rating: 5,
    date: "2024-12-10"
  },
  {
    id: 4,
    customer: "Anjali M.",
    product: "Silver Necklace",
    image: "https://images.unsplash.com/photo-1599643478377-6d2b539eb853?q=80&w=800&auto=format&fit=crop",
    review: "Stunning piece! The silver quality is exceptional and the design is timeless.",
    rating: 5,
    date: "2024-12-08"
  },
  {
    id: 5,
    customer: "Vikram S.",
    product: "Silver Bracelet",
    image: "https://images.unsplash.com/photo-1603575449291-12f67df06430?q=80&w=800&auto=format&fit=crop",
    review: "Perfect gift for my wife. She absolutely loves it!",
    rating: 5,
    date: "2024-12-05"
  },
  {
    id: 6,
    customer: "Sunita R.",
    product: "Silver Earrings",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop",
    review: "Elegant and lightweight. Perfect for daily wear.",
    rating: 5,
    date: "2024-12-03"
  }
]
