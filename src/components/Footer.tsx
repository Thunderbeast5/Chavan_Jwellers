import { Link } from 'react-router-dom'
// 1. Import the new icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa' 

export function Footer() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=2Q4R%2B23M%2C%20Bohorpatti%2C%20Saraf%20Bazar%2C%20Panchavati%2C%20Nashik%2C%20Maharashtra%20422001";

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
            <li className="font-gotu">चव्हाण ज्वेलर्स</li>
            <li>
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 hover:text-amber-700"
              >
                <FaMapMarkerAlt />
                <span>Saraf Bazar,1023 Gatne Wada,Behind Laxmi Tower,Nashik</span>
              </a>
            </li>
            {/* 2. Make the email address clickable */}
            <li>
              <a 
                href="mailto:support@chavanjwellers.com"
                className="inline-flex items-center gap-2 hover:text-amber-700"
              >
                <FaEnvelope />
                <span>Email: support@chavanjwellers.com</span>
              </a>
            </li>
            {/* 3. Make the phone number clickable */}
            <li>
              <a 
                href="tel:+91-97301-70189"
                className="inline-flex items-center gap-2 hover:text-amber-700"
              >
                <FaPhoneAlt />
                <span>Phone: +91-97301-70189</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="font-gotu">चव्हाण ज्वेलर्स</span>. All rights reserved.
      </div>      
    </footer>
  )
}