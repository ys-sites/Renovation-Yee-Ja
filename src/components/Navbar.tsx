import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50"
    >
      <nav className={cn(
        "bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full px-4 py-2 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300",
        scrolled ? "shadow-lg bg-white" : ""
      )}>
        <div className="flex items-center gap-6">
          <Link to="/" className="pl-2 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="font-bold text-xl text-[#2D6A4F] tracking-tight whitespace-nowrap">
              Renovation Yee Ja
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center bg-gray-100/50 rounded-full p-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  location.pathname === link.path
                    ? "bg-green-50 text-[#2D6A4F] shadow-sm font-bold"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+15145590268"
            className="hidden sm:flex bg-[#2D6A4F] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#1B4332] transition-all text-sm items-center gap-2 shadow-lg shadow-green-900/20"
          >
            <Phone className="w-4 h-4" />
            (514) 559-0268
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-green-50 text-[#2D6A4F]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+15145590268"
                className="w-full flex items-center justify-center px-4 py-3 mt-4 rounded-xl text-white bg-[#2D6A4F] font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
