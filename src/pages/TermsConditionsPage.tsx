import { RevealOnScroll } from '../components/RevealOnScroll'

export function TermsConditionsPage() {
  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Terms & Conditions</h1>
      </RevealOnScroll>

      <div className="space-y-8">
        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the Chavan Jewellers website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Product Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We strive to display our products as accurately as possible. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
              <p>
                All jewelry is crafted from genuine silver and precious stones. Product images are representative and actual items may vary slightly due to the handmade nature of our products.
              </p>
              <p>
                Prices are subject to change without notice. All prices are in Indian Rupees (₹) and include applicable taxes.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Ordering & Payment</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Orders are processed through WhatsApp communication. All orders are subject to acceptance and availability.
              </p>
              <p>
                Payment is accepted through prepaid orders only. We do not offer cash on delivery or other payment methods.
              </p>
              <p>
                Orders are confirmed only after receipt of full payment. We reserve the right to refuse any order.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Shipping & Delivery</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Delivery times vary based on location and product availability. We will provide estimated delivery dates upon order confirmation.
              </p>
              <p>
                Shipping charges are additional and will be communicated during order processing.
              </p>
              <p>
                We are not responsible for delays due to circumstances beyond our control, including but not limited to weather, transportation issues, or customs delays.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Returns & Refunds</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Due to the custom nature of our jewelry, returns are only accepted for manufacturing defects or quality issues.
              </p>
              <p>
                Returns must be initiated within 7 days of delivery. Items must be in original condition with all packaging intact.
              </p>
              <p>
                Refunds will be processed within 14 business days of receiving the returned item.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Privacy & Security</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for details.
              </p>
              <p>
                All communications through WhatsApp are subject to WhatsApp's privacy policy and terms of service.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Chavan Jewellers shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
              <p>
                Our total liability shall not exceed the amount paid for the specific product in question.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contact Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For any questions regarding these terms and conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p><strong>Chavan Jewellers</strong></p>
                <p>Saraf Bazar, 1023 Gatne Wada, Behind Laxmi Tower, Nashik</p>
                <p>Phone: +91-97301-70189</p>
                <p>Email: support@chavanjwellers.com</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
