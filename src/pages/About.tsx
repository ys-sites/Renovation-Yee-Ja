import { CheckCircle2 } from "lucide-react";
import { Section } from "../components/Animated";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-white">
      <div className="bg-[#2D6A4F] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Renovation Yee Ja
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-green-100">
            Building trust through quality craftsmanship in Montréal.
          </p>
        </div>
      </div>

      <Section>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded in Pierrefonds, Montréal, Renovation Yee Ja began with a simple mission: 
                to provide homeowners with reliable, high-quality renovation services they can trust.
              </p>
              <p>
                Over the years, we have grown from a small local crew into a comprehensive renovation 
                company capable of handling everything from minor updates to complete home transformations. 
                Despite our growth, we maintain the personalized approach and attention to detail of a 
                local family business.
              </p>
              <p>
                We understand that your home is your most valuable asset. That's why we treat every 
                project as if we were working on our own homes, ensuring minimal disruption to your 
                daily life while delivering exceptional results.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Core Values</h3>
            <ul className="space-y-4">
              {[
                "Quality Craftsmanship: We use premium materials and proven techniques.",
                "Attention to Detail: The little things make the biggest difference.",
                "Customer Satisfaction: We aren't finished until you are completely happy.",
                "Honest Communication: Transparent pricing and realistic timelines."
              ].map((value, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#2D6A4F] flex-shrink-0 mr-3" />
                  <span className="text-gray-700">{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-12 lg:mt-0 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="/media/2.jpeg" 
                alt="Renovation Yee Ja Team" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Area</h3>
              <p className="text-gray-600 mb-4">
                We proudly serve the Greater Montréal area, including:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                <li>• Pierrefonds</li>
                <li>• West Island</li>
                <li>• Downtown Montréal</li>
                <li>• Laval</li>
                <li>• South Shore</li>
                <li>• And surrounding areas</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
