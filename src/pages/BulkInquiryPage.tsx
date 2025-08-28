import { useState } from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'

export function BulkInquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    category: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Bulk Inquiry from ${formData.name}\n\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Category: ${formData.category}\n` +
      `Quantity: ${formData.quantity}\n\n` +
      `Message: ${formData.message}`
    )
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Bulk Inquiry</h1>
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-12">
        <RevealOnScroll>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Wholesale & Bulk Orders</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-amber-700 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium quality silver jewelry</li>
                  <li>• Competitive wholesale pricing</li>
                  <li>• Custom designs available</li>
                  <li>• Fast turnaround times</li>
                  <li>• Reliable delivery across India</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-amber-700 mb-3">Our Categories</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Anklets & Payal</li>
                  <li>• Bangles & Bracelets</li>
                  <li>• Earrings</li>
                  <li>• Neckpieces</li>
                  <li>• Rings</li>
                  <li>• Pendants & Charms</li>
                  <li>• Religious & Gift Items</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-amber-700 mb-3">Minimum Order</h3>
                <p className="text-gray-700">
                  Minimum order quantity varies by category. Contact us for specific requirements 
                  and to discuss custom designs for your business needs.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Your Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company/Business Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select a category</option>
                  <option value="anklets-payal">Anklets & Payal</option>
                  <option value="bangles-bracelets">Bangles & Bracelets</option>
                  <option value="earrings">Earrings</option>
                  <option value="neckpieces">Neckpieces</option>
                  <option value="rings">Rings</option>
                  <option value="pendants-charms">Pendants & Charms</option>
                  <option value="religious-gifts">Religious & Gift Items</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 100 pieces, 50 sets"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your specific requirements, timeline, or any other details..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
