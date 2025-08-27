import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container-px max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold mb-3">Info</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-amber-700">About Us</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Brand Story</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Customer Reviews</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Blogs</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Bulk Inquiry</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Our Policy</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-amber-700">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-amber-700">FAQs</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-amber-700">Return & Refund Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li>Chavan Jwellers, Your Address Here</li>
            <li>Email: support@chavanjwellers.com</li>
            <li>Phone: +91-98765-43210</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} chavan jwellers. All rights reserved.</div>
    </footer>
  )
}


