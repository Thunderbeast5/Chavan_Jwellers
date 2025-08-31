import { useEffect, useState } from 'react'
import { fetchCompleted } from '../lib/catalog'
import { RevealOnScroll } from '../components/RevealOnScroll'

export function CustomerReviewsPage() {
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReviews() {
      try {
        const completedOrders = await fetchCompleted()
        setReviews(completedOrders)
      } catch (error) {
        console.error('Failed to load reviews:', error)
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [])

  if (loading) {
    return (
      <div className="container-px max-w-6xl mx-auto py-12">
        <h1 className="section-title mb-8">Customer Reviews</h1>
        <div className="text-center text-gray-600">Loading reviews...</div>
      </div>
    )
  }

  return (
    <div className="container-px max-w-6xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Customer Reviews</h1>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Read what our valued customers have to say about their experience with Chavan Jewellers. 
            We're proud to share their stories and feedback.
          </p>
        </div>
      </RevealOnScroll>

      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <RevealOnScroll key={index}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.product} 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{review.customer}</h3>
                    <p className="text-sm text-gray-600">{review.product}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
                {review.date && (
                  <p className="text-xs text-gray-500 mt-3">{new Date(review.date).toLocaleDateString()}</p>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <RevealOnScroll>
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">💎</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reviews Yet</h3>
            <p className="text-gray-600">
              Be the first to share your experience with our jewelry!
            </p>
          </div>
        </RevealOnScroll>
      )}

      <RevealOnScroll>
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear about your experience with our jewelry. Your feedback helps us improve 
            and helps other customers make informed decisions.
          </p>
          <a 
            href="https://wa.me/919876543210?text=Hi, I'd like to share my experience with Chavan Jewellers!"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Share Your Review
          </a>
        </div>
      </RevealOnScroll>
    </div>
  )
}
