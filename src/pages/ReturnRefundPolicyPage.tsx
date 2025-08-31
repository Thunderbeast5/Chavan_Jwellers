import { RevealOnScroll } from '../components/RevealOnScroll'

export function ReturnRefundPolicyPage() {
  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Return & Refund Policy</h1>
      </RevealOnScroll>

      <div className="space-y-8">
        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Chavan Jewellers, we are committed to ensuring your complete satisfaction with every purchase. 
              This policy outlines our return and refund procedures for all jewelry items.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Due to the custom and handmade nature of our jewelry, we have specific guidelines to ensure fair treatment 
              for both our customers and our artisans.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Return Eligibility</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-amber-700 mb-2">Acceptable Returns</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Manufacturing defects or quality issues</li>
                  <li>Items damaged during shipping</li>
                  <li>Incorrect items received</li>
                  <li>Size issues (for resizable items like rings)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">Non-Returnable Items</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Custom-designed jewelry</li>
                  <li>Personalized items</li>
                  <li>Items showing signs of wear or damage</li>
                  <li>Items without original packaging</li>
                  <li>Sale or clearance items (unless defective)</li>
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Return Process</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-700 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Contact Us</h4>
                  <p className="text-sm">Reach out within 7 days of delivery via WhatsApp or phone</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-700 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Get Approval</h4>
                  <p className="text-sm">We'll review your request and provide return authorization</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-700 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Ship Back</h4>
                  <p className="text-sm">Return the item in original condition with all packaging</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Return Requirements</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Return request must be initiated within 7 days of delivery</li>
                <li>Item must be in original, unworn condition</li>
                <li>All original packaging, tags, and certificates must be included</li>
                <li>Item must be securely packaged to prevent damage during return shipping</li>
                <li>Return shipping costs are the responsibility of the customer (unless defective)</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Refund Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-amber-700 mb-2">Refund Timeline</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Returns are processed within 3-5 business days of receipt</li>
                  <li>Refunds are issued within 14 business days</li>
                  <li>Refund method will match the original payment method</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-amber-700 mb-2">Refund Amount</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Full refund for defective or incorrect items</li>
                  <li>Original shipping costs refunded for defective items</li>
                  <li>Return shipping costs not refunded (unless item is defective)</li>
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Exchange Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We offer exchanges for eligible items within 7 days of delivery. Exchanges are subject to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Item availability</li>
                <li>Price difference (additional payment or refund as applicable)</li>
                <li>Same return requirements as refunds</li>
                <li>One exchange per item</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Size Adjustments</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For rings and other resizable items, we offer size adjustments:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free size adjustment within 30 days of purchase</li>
                <li>Customer responsible for shipping costs</li>
                <li>Adjustment time: 5-7 business days</li>
                <li>Available for most ring styles (some designs may have limitations)</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>To initiate a return or exchange, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p><strong>Chavan Jewellers</strong></p>
                <p>Saraf Bazar, 1023 Gatne Wada, Behind Laxmi Tower, Nashik</p>
                <p>Phone: +91-97301-70189</p>
                <p>Email: support@chavanjwellers.com</p>
              </div>
              <p className="mt-4">
                <strong>Business Hours:</strong> Monday - Saturday, 10:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-6">
              Our customer service team is here to help with any questions about returns or refunds.
            </p>
            <a 
              href="https://wa.me/919876543210?text=Hi, I need help with a return or refund!"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
