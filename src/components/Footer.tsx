import { Link } from 'react-router-dom'
// 1. Import the new icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUserShield } from 'react-icons/fa' 

export function Footer() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=2Q4R%2B23M%2C%20Bohorpatti%2C%20Saraf%20Bazar%2C%20Panchavati%2C%20Nashik%2C%20Maharashtra%20422001";

  return (
    <footer className="mt-16 bg-[#4b0e55] text-white rounded-t-[3rem]">
      <div className="container-px max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3 text-amber-300">Info</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
            <li><Link to="/brand-story" className="hover:text-amber-300 transition-colors">Brand Story</Link></li>
            <li><Link to="/customer-reviews" className="hover:text-amber-300 transition-colors">Customer Reviews</Link></li>
            <li><Link to="/blogs" className="hover:text-amber-300 transition-colors">Blogs</Link></li>
            <li><Link to="/bulk-inquiry" className="hover:text-amber-300 transition-colors">Bulk Inquiry</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amber-300">Our Policy</h4>
          <ul className="space-y-2">
            <li><Link to="/terms-conditions" className="hover:text-amber-300 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/faqs" className="hover:text-amber-300 transition-colors">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/return-refund-policy" className="hover:text-amber-300 transition-colors">Return & Refund Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amber-300">Contact Us</h4>
          <ul className="space-y-2">
            <li className="font-gotu text-amber-200">Chavan Jewellers</li>
            <li>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <FaMapMarkerAlt className="text-amber-300" />
                <span>Saraf Bazar,1023 Gatne Wada,Behind Laxmi Tower,Nashik</span>
              </a>
            </li>
            {/* 2. Make the email address clickable */}
            <li>
              <a 
                href="mailto:support@chavanjwellers.com"
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <FaEnvelope className="text-amber-300" />
                <span>Email: support@chavanjwellers.com</span>
              </a>
            </li>
            {/* 3. Make the phone number clickable */}
            <li>
              <a 
                href="tel:+91-97301-70189"
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <FaPhoneAlt className="text-amber-300" />
                <span>Phone: +91-97301-70189</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-amber-300">Admin Access</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin/login" 
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors text-amber-200 font-medium"
              >
                <FaUserShield />
                <span>Admin Login</span>
              </Link>
            </li>
            <li className="text-xs text-amber-100 mt-3">
              Access to manage products, categories, and content
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-300/20 py-6 text-center text-xs text-amber-100">
        © {new Date().getFullYear()} <span className="font-gotu">Chavan Jewellers</span>. All rights reserved.
      </div>      
    </footer>
  )
}