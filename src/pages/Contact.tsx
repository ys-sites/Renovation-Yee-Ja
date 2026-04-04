import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Section, Card } from "../components/Animated";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#2D6A4F] pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-green-100">
            Get in touch for a free quote or to discuss your next renovation project.
          </p>
        </div>
      </div>

      <Section>
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1 space-y-8 mb-12 lg:mb-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're ready to help you transform your space. Reach out via phone, email, or by filling out the form.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", content: <a href="tel:+14389905160" className="hover:text-[#2D6A4F] transition-colors">+1 (438) 990-5160</a> },
                { icon: Mail, title: "Email", content: <a href="mailto:boyboy5212000@hotmail.com" className="hover:text-[#2D6A4F] transition-colors">boyboy5212000@hotmail.com</a> },
                { icon: MapPin, title: "Office Address", content: <>18173 Rousson Rue<br />Pierrefonds, Montréal<br />QC, H9K 1J7</> },
                { icon: Clock, title: "Business Hours", content: <>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-[#2D6A4F]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="!p-6 md:!p-10 shadow-xl shadow-gray-200/50 border-none">
              <ContactForm />
            </Card>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-96"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2796.883944621021!2d-73.8821034!3d45.4922987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93c6b2b6b5b1b%3A0x1b1b1b1b1b1b1b1b!2s18173%20Rue%20Rousson%2C%20Pierrefonds%2C%20QC%20H9K%201J7!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </Section>
    </div>
  );
}
