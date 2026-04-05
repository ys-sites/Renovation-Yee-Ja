import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import { motion } from "motion/react";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import TestimonialsSection from "../components/TestimonialsSection";
import { Section } from "../components/Animated";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Section className="bg-white text-center">
        <h2 className="text-base text-[#2D6A4F] font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Your Trusted Local Renovation Experts
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Based in Pierrefonds, Montréal, Renovation Yee Ja is dedicated to bringing your home improvement dreams to life. With years of experience and a commitment to excellence, we handle every project with care.
        </p>
      </Section>

      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive renovation solutions for your home.
          </p>
        </div>
        
        <ServicesGrid limit={6} />
        
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#2D6A4F] bg-green-50 hover:bg-green-100 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Why Choose Renovation Yee Ja?
            </h2>
            <div className="space-y-6">
              {[
                { title: "Quality Craftsmanship", desc: "We never cut corners. Every detail is meticulously executed to ensure lasting results." },
                { title: "Local Experience", desc: "Proudly serving Montréal and surrounding areas with deep knowledge of local building standards." },
                { title: "Reliability", desc: "We show up on time, communicate clearly, and complete projects within the agreed timeframe." },
                { title: "Customer Satisfaction", desc: "Your vision is our priority. We work closely with you to ensure the final result exceeds expectations." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/media/1.jpeg" 
              alt="Contractor working on a home" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </Section>

      <TestimonialsSection />

      <Section className="bg-[#1B4332] text-center lg:text-left">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-green-200">Contact us today for a free quote.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:mt-0 lg:flex-shrink-0 gap-4">
            <a
              href="tel:+15145590268"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-[#1B4332] bg-white hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (514) 559-0268
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#2D6A4F] hover:bg-green-700 transition-all shadow-lg hover:-translate-y-1"
            >
              Message Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
