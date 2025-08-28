import { RevealOnScroll } from '../components/RevealOnScroll'

export function PrivacyPolicyPage() {
  return (
    <div className="container-px max-w-4xl mx-auto py-12">
      <RevealOnScroll>
        <h1 className="section-title mb-8">Privacy Policy</h1>
      </RevealOnScroll>

      <div className="space-y-8">
        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              चव्हाण ज्वेलर्स (Chavan Jewellers) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Information We Collect</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-lg font-semibold text-amber-700">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through third-party services)</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-amber-700 mt-6">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and inquiries</li>
                <li>Provide customer support and respond to your questions</li>
                <li>Send you updates about our products and services (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Information Sharing</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist us in operating our business (shipping, payment processing)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Data Security</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure storage of personal information</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Your Rights</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Third-Party Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Our website may contain links to third-party services, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>WhatsApp for communication</li>
                <li>Payment processors</li>
                <li>Social media platforms</li>
                <li>Analytics services</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies. We encourage you to review them before providing any personal information.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p><strong>चव्हाण ज्वेलर्स</strong></p>
                <p>Saraf Bazar, 1023 Gatne Wada, Behind Laxmi Tower, Nashik</p>
                <p>Phone: +91-97301-70189</p>
                <p>Email: support@chavanjwellers.com</p>
              </div>
              <p className="mt-4">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}
