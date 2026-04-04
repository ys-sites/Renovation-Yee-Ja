import ServicesGrid from "../components/ServicesGrid";
import { Link } from "react-router-dom";
import { Section } from "../components/Animated";

export default function Services() {
  return (
    <div className="bg-white">
      <div className="bg-[#2D6A4F] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-green-100">
            Comprehensive interior and exterior renovation solutions tailored to your needs.
          </p>
        </div>
      </div>

      <Section>
        <ServicesGrid />
        
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer a wide range of general interior and exterior renovation services. 
            Contact us to discuss your specific project requirements and we'll let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-all shadow-lg hover:-translate-y-1"
          >
            Discuss Your Project
          </Link>
        </div>
      </Section>
    </div>
  );
}
