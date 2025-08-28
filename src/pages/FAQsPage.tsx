import { useState } from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'

const faqs = [
  {
    question: "How do I place an order?",
    answer: "To place an order, simply browse our collection, find the piece you love, and click the 'Buy Now' button. This will redirect you to WhatsApp where you can complete your order with our team."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept prepaid orders only. Payment can be made through bank transfer, UPI, or other digital payment methods. We do not offer cash on delivery."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary based on your location. Local deliveries in Nashik typically take 1-2 days, while outstation deliveries may take 3-7 business days. We'll provide specific delivery estimates when you place your order."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within India only. We're working on expanding our international shipping options."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the custom nature of our jewelry, returns are only accepted for manufacturing defects or quality issues. Returns must be initiated within 7 days of delivery with items in original condition."
  },
  {
    question: "How can I verify the quality of silver?",
    answer: "All our jewelry is crafted from genuine silver and comes with quality assurance. We use hallmarked silver and can provide certification upon request. You can also visit our store to examine pieces in person."
  },
  {
    question: "Do you offer custom designs?",
    answer: "Yes! We specialize in custom jewelry designs. You can discuss your requirements with our team through WhatsApp, and we'll create a unique piece just for you."
  },
  {
    question: "What if I need to resize my jewelry?",
    answer: "We offer resizing services for rings and some other pieces. Please contact us through WhatsApp to discuss resizing options and costs."
  },
  {
    question: "How do I care for my silver jewelry?",
    answer: "Store your silver jewelry in a cool, dry place away from direct sunlight. Clean regularly with a soft cloth and avoid contact with chemicals, perfumes, and lotions. We provide detailed care instructions with each purchase."
  },
  {
    question: "Do you offer bulk/wholesale pricing?",
    answer: "Yes, we offer special pricing for bulk orders and wholesale customers. Please visit our Bulk Inquiry page or contact us directly for more information."
  },
  {
    question: "Can I visit your store?",
    answer: "Absolutely! We welcome visitors to our store in Saraf Bazar, Nashik. Our address is 1023 Gatne Wada, Behind Laxmi Tower. Please call ahead to confirm our business hours."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, we'll provide you with tracking information through WhatsApp. You can also contact us anytime for order status updates."
  }
]

export function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Frequently Asked Questions</h1>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our jewelry, ordering process, and services. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>
      </RevealOnScroll>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <RevealOnScroll key={index}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <span className={`text-amber-700 text-xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help! Contact us directly and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919876543210?text=Hi, I have a question about your jewelry!"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp Us
              </a>
              <a 
                href="tel:+91-97301-70189"
                className="px-6 py-3 bg-white border border-amber-700 text-amber-700 rounded-md hover:bg-amber-50 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  )
}
