import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Renovation Yee Ja</h3>
            <p className="text-green-100 mb-4 max-w-xs">
              Professional home renovation company specializing in interior and exterior 
              renovation services across Montréal and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-green-100 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-green-100">
                  18173 Rousson Rue<br />
                  Pierrefonds, Montréal<br />
                  QC, H9K 1J7
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" />
                <a href="tel:+15145590268" className="text-green-100 hover:text-white transition-colors">
                  +1 (514) 559-0268
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" />
                <a href="mailto:boyboy5212000@hotmail.com" className="text-green-100 hover:text-white transition-colors">
                  boyboy5212000@hotmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-green-100">
                  Mon–Fri: 8:00 AM – 6:00 PM<br />
                  Sat: 9:00 AM – 4:00 PM<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 pt-8 mt-8 text-center text-green-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Renovation Yee Ja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
