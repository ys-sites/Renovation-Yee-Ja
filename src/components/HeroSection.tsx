import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{
            backgroundImage: `url('/media/hero.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="sm:text-center lg:text-left max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-2xl"
          >
            <span className="block xl:inline">Transforming Spaces</span>{" "}
            <span className="block text-green-400 xl:inline">Across Montréal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 drop-shadow-lg"
          >
            Professional home renovation services specializing in interior and exterior 
            transformations. We bring quality craftsmanship and attention to detail to 
            every project.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2D6A4F] hover:bg-[#1B4332] md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-[#2D6A4F] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:-translate-y-1"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
